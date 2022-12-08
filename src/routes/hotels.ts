import express from "express";
import Hotels from "../models/Hotels";

const hotelsRouter = express.Router();

hotelsRouter.get("/", (req, res) => {
  res.json({ message: "this is the hotels endpoint" });
});

hotelsRouter.post("/", async (req, res) => {
  const newHotel = new Hotels(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    res.status(500).json(err);
  }
});

export { hotelsRouter };
