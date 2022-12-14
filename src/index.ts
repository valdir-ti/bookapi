import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import express, { Request, Response } from "express";
import mongoose from "mongoose";

import {
  authRouter,
  hotelsRouter,
  roomsRouter,
  usersRouter,
  healthcheckRouter,
} from "./routes";

dotenv.config();

const app = express();

//middlewares
app.use(cookieParser());
app.use(express.json());

const port = process.env.PORT || 8800;

const connect = async () => {
  try {
    const mongo_url = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.fwkqxjm.mongodb.net/booking?retryWrites=true&w=majority`;
    mongoose.set("strictQuery", false);
    await mongoose.connect(mongo_url || "");
    console.log("Connected to mongoDB");
  } catch (error) {
    throw error;
  }
};

app.use("/healthcheck", healthcheckRouter);
app.use("/auth", authRouter);
app.use("/users", usersRouter);
app.use("/hotels", hotelsRouter);
app.use("/rooms", roomsRouter);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Initial Route" });
});

app.use((err: any, req: Request, res: Response, next: any) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected");
});

mongoose.connection.on("connected", () => {
  console.log("mongoDB connected");
});

app.listen(port, () => {
  connect();
  console.log(`App running on ${port}`);
});
