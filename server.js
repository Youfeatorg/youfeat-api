/** @format */

import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import route from "./router/allRouts.js";
import cloudinary from "cloudinary";
import env from "dotenv";
const port = process.env.PORT || 3500;
const app = express();
env.config();

const db = "mongodb://127.0.0.1:27017/youfeat";
//const db = process.env.DB_URL;
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log("listening !!!");
    });
  })
  .catch((err) => console.log(err));

cloudinary.v2.config({
  cloud_name: "dl9dxseum",
  api_key: "282535896357334",
  api_secret: "R6I7fKAgdiC_dEbhXmqskdbv6lU",
});
app.use(express.json());

// Define an array of allowed origins
const allowedOrigins = [
  "https://youfeat.com.ng",
  "https://youfeat.com.ng/*",
  "https://www.youfeat.com.ng/*",
  "https://www.youfeat.com.ng",
  "http://localhost:3000",
];

const corsOptions = {
  origin: function (origin, callback) {
    // Check if the request origin is in the allowedOrigins array
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send({ youfeat: "welcome" });
});

app.use(route);
