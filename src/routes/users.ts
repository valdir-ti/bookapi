import express from "express";

const usersRouter = express.Router();

usersRouter.get("/", (req, res) => {
  res.json({ message: "this is the users endpoint" });
});

export { usersRouter };
