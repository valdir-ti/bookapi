import { Request, Response } from "express";

import { createError } from "../utils/error";

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

  if (!newHotel) return next(createError(400, "No data provided"));
  if (!newHotel.name) return next(createError(400, "No hotel name provided"));
  if (!newHotel.type) return next(createError(400, "No hotel type provided"));
  if (!newHotel.city) return next(createError(400, "No hotel city provided"));
  if (!newHotel.address)
    return next(createError(400, "No hotel address provided"));
  if (!newHotel.distance)
    return next(createError(400, "No hotel distance provided"));
  if (!newHotel.title) return next(createError(400, "No hotel title provided"));
  if (!newHotel.description)
    return next(createError(400, "No hotel description provided"));
  if (!newHotel.cheapestPrice)
    return next(createError(400, "No hotel cheapestPrice provided"));

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
