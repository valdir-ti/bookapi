import { Request, Response } from "express";

import Room from "../models/Room";

export const getRooms = async (req: Request, res: Response, next: any) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (err) {
    next(err);
  }
};

export const getRoom = async (req: Request, res: Response, next: any) => {
  try {
    const room = await Room.findById(req.params.id);
    res.status(200).json(room);
  } catch (err) {
    next(err);
  }
};

export const updateRoom = async (req: Request, res: Response, next: any) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedRoom);
  } catch (err) {
    next(err);
  }
};

export const createRoom = async (req: Request, res: Response, next: any) => {
  const newRoom = new Room(req.body);

  try {
    const savedRoom = await newRoom.save();
    res.status(200).json(savedRoom);
  } catch (err) {
    next(err);
  }
};

export const deleteRoom = async (req: Request, res: Response, next: any) => {
  try {
    await Room.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Room has been deleted" });
  } catch (err) {
    next(err);
  }
};
