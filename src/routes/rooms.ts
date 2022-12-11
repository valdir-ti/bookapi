import express from "express";
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
} from "../controllers/Room";
import { verifyAdmin, verifyToken } from "../utils";

const roomsRouter = express.Router();

roomsRouter.get("/", getRooms);

roomsRouter.get("/:id", getRoom);

roomsRouter.post("/:hotelId", verifyToken, verifyAdmin, createRoom);

roomsRouter.put("/:id", verifyToken, verifyAdmin, updateRoom);

roomsRouter.delete("/:id/:hotelId", verifyToken, verifyAdmin, deleteRoom);

export { roomsRouter };
