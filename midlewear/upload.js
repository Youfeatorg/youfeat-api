/** @format */

const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "videos");
  },
  filename: (req, file, cb) => {
    const genName = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + genName + file.originalname);
  },
});

const upload = multer({ storage: storage }).single("video");

module.exports = upload;
