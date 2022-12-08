import express from "express";

import { getUser, getUsers, deleteUser, updateUser } from "../controllers/User";

const usersRouter = express.Router();

usersRouter.get("/", getUsers);

usersRouter.get("/:id", getUser);

usersRouter.put("/:id", updateUser);

usersRouter.delete("/:id", deleteUser);

export { usersRouter };
