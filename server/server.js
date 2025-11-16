import express from "express";
import cors from "cors";
import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app=express();
app.use(cors());
app.use(express.json());

mongoose.connet(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Routes
app.get("/", (req, res) => {
  res.send("Server running...");
});

// Start server
app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);