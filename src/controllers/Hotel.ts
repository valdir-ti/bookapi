import { Request, Response } from "express";

import Hotel from "../models/Hotel";

export const getHotels = async (req: Request, res: Response, next: any) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
};

export const getHotel = async (req: Request, res: Response, next: any) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
};

export const updateHotel = async (req: Request, res: Response, next: any) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
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
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};

export const deleteHotel = async (req: Request, res: Response, next: any) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Hotel has been deleted" });
  } catch (err) {
    next(err);
  }
};
