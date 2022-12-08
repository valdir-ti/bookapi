import express from "express";

const roomsRouter = express.Router();

roomsRouter.get("/", (req, res) => {
  res.json({ message: "this is the rooms endpoint" });
});

export { roomsRouter };
