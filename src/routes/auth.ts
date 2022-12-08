import express from "express";

const authRouter = express.Router();

authRouter.get("/", (req, res) => {
  res.json({ message: "this is the auth endpoint" });
});

export { authRouter };
