"use strict";

const express = require("express");
const { upload } = require("../helper/fileHelper");
const {
  singleFileUpload,
  MultipleFileUpload,
} = require("../controllers/fileUploaderController");
const router = express.Router();

router.post("/singleFile", upload.single("file"), singleFileUpload);
router.post("/MultipleFile", upload.array("files"), MultipleFileUpload);
module.exports = {
  routes: router,
};
