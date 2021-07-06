//multer configuration
"use strict";
//Strict Mode is a feature that allows you to place a program, or a function, in a "strict" operating context. In strict operating context, the method form binds this to the objects as before. The function form binds this to undefined, not the global set objects

const multer = require("multer");
const path = require("path");

// The disk storage engine gives you full control on storing files to disk.
// destination and filename : functions that determine where the file should be stored.
// destination: which folder the uploaded files should be stored
// filename what the file should be named inside the folder
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
    );
  },
});

const filefilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: filefilter,
});
module.exports = { upload };
