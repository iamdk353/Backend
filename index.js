import express from "express";
import AuthRouter from "./Routers/authRoutes.js";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const app = express();
const port = process.env.PORT || 5000;
const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017";
app.use(express.json());
app.use("/api/auth", AuthRouter);

mongoose
  .connect(mongoUri)
  .then(() => {
    app.listen(port, () => {
      console.log("connected to DB");
      console.log("connected to server");
    });
  })
  .catch((err) => {
    console.log("error in connecting to db");
  });
