import dotenv from "dotenv";
import express, { Request, Response } from "express";
import mongoose from "mongoose";

dotenv.config();

const app = express();
app.use(express.json());

const port = 8800;

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

app.get("/", (req: Request, res: Response) => {
  res.status(200).send({ message: "Initial Route" });
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
