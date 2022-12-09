import express from "express";

import { verifyAdmin, verifyToken, verifyUser } from "../utils";

import { getUser, getUsers, deleteUser, updateUser } from "../controllers/User";

const usersRouter = express.Router();

usersRouter.get("/", verifyToken, verifyAdmin, getUsers);

usersRouter.get("/:id", getUser);

usersRouter.put("/:id", verifyToken, verifyUser, updateUser);

usersRouter.delete("/:id", verifyToken, verifyUser, deleteUser);

export { usersRouter };
