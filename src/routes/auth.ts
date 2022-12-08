import express from "express";

import { register } from "../controllers/Auth";

const authRouter = express.Router();

authRouter.post("/register", register);

export { authRouter };
