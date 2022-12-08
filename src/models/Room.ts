import mongoose from "mongoose";
const { Schema, model } = mongoose;

const roomSchema = new Schema(
  {
    number: {
      type: Number,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    isEmpty: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Room", roomSchema);
