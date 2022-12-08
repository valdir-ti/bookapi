import express from "express";

import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from "../controllers/Hotel";

// import { createError } from "../utils/error";

const hotelsRouter = express.Router();

hotelsRouter.get("/", getHotels);

hotelsRouter.get("/:id", getHotel);

hotelsRouter.post("/", createHotel);

hotelsRouter.put("/:id", updateHotel);

hotelsRouter.delete("/:id", deleteHotel);

export { hotelsRouter };
