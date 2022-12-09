import { Request, Response } from "express";

import { createError, hotelValidate } from "../utils";

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
  const hotelId = req.params.id;

  const hotel = await Hotel.findById(hotelId);

  if (!hotel) {
    return next(createError(400, "Invalid hotel"));
  }

  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      hotelId,
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

  const validation = hotelValidate(newHotel);

  if (validation) {
    return next(createError(400, validation));
  }

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
