import express from "express";

import { verifyToken, verifyUser } from "../utils/verifyToken";

import { getUser, getUsers, deleteUser, updateUser } from "../controllers/User";

const usersRouter = express.Router();

usersRouter.get("/checkauth", verifyToken, (req, res, next) => {
  res.send("You are authenticated");
});

usersRouter.get("/checkuserauth/:id", verifyUser, (req, res, next) => {
  res.send("You can delete your account");
});

usersRouter.get("/", getUsers);

usersRouter.get("/:id", getUser);

usersRouter.put("/:id", updateUser);

usersRouter.delete("/:id", deleteUser);

export { usersRouter };
