import { Request, Response } from "express";

import Hotels from "../models/Hotels";

export const getHotels = async (req: Request, res: Response, next: any) => {
  try {
    const hotels = await Hotels.find();
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
};

export const getHotel = async (req: Request, res: Response, next: any) => {
  try {
    const hotel = await Hotels.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
};

export const updateHotel = async (req: Request, res: Response, next: any) => {
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
    next(err);
  }
};

export const createHotel = async (req: Request, res: Response, next: any) => {
  const newHotel = new Hotels(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};

export const deleteHotel = async (req: Request, res: Response, next: any) => {
  try {
    await Hotels.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Hotel has been deleted" });
  } catch (err) {
    next(err);
  }
};
