import express from "express";

const hotelsRouter = express.Router();

hotelsRouter.get("/", (req, res) => {
  res.json({ message: "this is the hotels endpoint" });
});

export { hotelsRouter };
