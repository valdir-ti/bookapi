import express from "express";

import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from "../controllers/Hotel";
import { verifyAdmin, verifyToken } from "../utils/verifyToken";

const hotelsRouter = express.Router();

hotelsRouter.get("/", getHotels);

hotelsRouter.get("/:id", getHotel);

hotelsRouter.post("/", verifyToken, verifyAdmin, createHotel);

hotelsRouter.put("/:id", verifyToken, verifyAdmin, updateHotel);

hotelsRouter.delete("/:id", verifyToken, verifyAdmin, deleteHotel);

export { hotelsRouter };
