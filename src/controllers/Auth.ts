import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/User";
import { createError } from "../utils/error";

type UserDoc = {
  _doc: any;
  password?: string;
  isAdmin?: boolean;
  _id?: string;
};

type User = {
  username?: string;
  email?: string;
  password?: string;
  isAdmin?: boolean;
  save: () => void;
};

export const register = async (req: Request, res: Response, next: any) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser: User | null = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });

    await newUser.save();

    res.status(200).send("User has been created");
  } catch (err) {
    next(err);
  }
};

export const login = async (req: Request, res: Response, next: any) => {
  try {
    const user: UserDoc | null = await User.findOne({
      username: req.body.username,
    });

    if (!user) return next(createError(400, "User or Password are incorrect"));

    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      user.password || ""
    );

    if (!isPasswordCorrect)
      return next(createError(400, "User or Password are incorrect"));

    const userDoc = user._doc;
    const secret = process.env.JWT_SECRET || "secretkey";

    const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, secret);

    const { isAdmin, password, __v, updatedAt, createdAt, ...others } = userDoc;

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  } catch (err) {
    next(err);
  }
};
