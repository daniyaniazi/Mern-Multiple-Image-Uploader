"use strict";

const express = require("express");
const { upload } = require("../helper/fileHelper");
const {
  singleFileUpload,
  MultipleFileUpload,
  getAllSingelFiles,
  getAllMultipleFiles,
} = require("../controllers/fileUploaderController");
const router = express.Router();

router.post("/singleFile", upload.single("file"), singleFileUpload);
router.post("/MultipleFile", upload.array("files"), MultipleFileUpload);

router.get("/allSingleFiles", getAllSingelFiles);
router.get("/allMultipleFiles", getAllMultipleFiles);

module.exports = {
  routes: router,
};
