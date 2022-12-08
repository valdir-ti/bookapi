import { Request, Response } from "express";

import User from "../models/User";

export const getUsers = async (req: Request, res: Response, next: any) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

export const getUser = async (req: Request, res: Response, next: any) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

export const updateUser = async (req: Request, res: Response, next: any) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req: Request, res: Response, next: any) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "User has been deleted" });
  } catch (err) {
    next(err);
  }
};
