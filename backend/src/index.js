import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

app.use(cors());
mongoose
  .connect(process.env.MONGO_DB)
  .then(() => {
    console.log("DB connected");
  })
  .catch(() => {
    console.log("DB connection failed");
  });
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

//  routes import
import movieRouter from "../routes/movie.route.js";

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
app.use("/api/users", movieRouter);
