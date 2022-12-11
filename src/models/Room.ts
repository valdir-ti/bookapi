import mongoose from "mongoose";
import { IRooms } from "../interfaces/IRooms";

const { Schema, model } = mongoose;

const roomSchema = new Schema<IRooms>(
  {
    title: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    maxPeople: {
      type: Number,
      require: true,
    },
    desc: {
      type: String,
      require: true,
    },
    roomNumbers: [
      {
        number: Number,
        unavailableDates: { type: [Date] },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default model<IRooms>("Room", roomSchema);
