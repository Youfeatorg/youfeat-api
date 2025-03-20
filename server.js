
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import route from "./router/allRouts.js";
import cloudinary from "cloudinary";
import env from "dotenv";
import User from "./schema/userSchema.js";
import Video from "./schema/videoSchema.js";
const port = process.env.PORT || 8000;
const app = express();
env.config();

//const db = "mongodb://127.0.0.1:27017/youfeat";
const db = process.env.DB_URL;

app.get("/", async (req, res) => {
  res.send({ url: "Welcome to youfeat" });
});

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

app.use(route);
/*
const del = async () => {
  const users = await Video.find();

console.log(users)
/*
  users.forEach(async (value) => {
    const payload = {
      ...value.video,
      userId: value._id,
      category: value.catigory,
    };
    if (value.video) {
      const video = await Video.create(payload);
      console.log(video);
    }
  });

};
del();

*/
