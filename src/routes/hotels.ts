import express from "express";
import Hotels from "../models/Hotels";

const hotelsRouter = express.Router();

hotelsRouter.get("/", (req, res) => {
  res.json({ message: "this is the hotels endpoint" });
});

hotelsRouter.get("/:id", async (req, res) => {
  try {
    const findedHotel = await Hotels.findById(
      req.params.id
    );
    res.status(200).json(findedHotel);
  } catch (err) {
    res.status(500).json(err);
  }
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

hotelsRouter.put("/:id", async (req, res) => {
  try {
    const updatedHotel = await Hotels.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    res.status(500).json(err);
  }
});

hotelsRouter.delete("/:id", async (req, res) => {
  try {
    await Hotels.findByIdAndDelete(
      req.params.id
    );
    res.status(200).json({ message: "Hotel has been deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
});

export { hotelsRouter };
