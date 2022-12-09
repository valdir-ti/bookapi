import mongoose from "mongoose";
import { IUser } from "../interfaces/IUser";

const { Schema, model } = mongoose;

const userSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default model<IUser>("User", userSchema);
