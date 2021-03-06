"use strict";
const multipleFilesModal = require("../modals/multipleFiles");
const SingleFileModal = require("../modals/singleFile");

// POST REQUEST HANDLERS
//Single File
const singleFileUpload = async (req, res, next) => {
  try {
    const file = new SingleFileModal({
      fileName: req.file.originalname,
      filePath: req.file.path,
      fileType: req.file.mimetype,

      fileSize: fileSizeFormatter(req.file.size, 2),
    });
    await file.save(); //save the file in database
    // console.log("file in controller", file);
    res.status(201).send("file uploaded successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
// Multiple Files
const MultipleFileUpload = async (req, res, next) => {
  try {
    let filesArray = [];
    req.files.forEach((element) => {
      const file = {
        fileName: element.originalname,
        filePath: element.path,
        fileType: element.mimetype,

        fileSize: fileSizeFormatter(element.size, 2),
      };
      filesArray.push(file);
    });
    const multipleFiles = new multipleFilesModal({
      title: req.body.title,
      files: filesArray,
    });
    await multipleFiles.save(); //save the file in database
    res.status(201).send("files uploaded successfully");
  } catch {
    res.status(400).send(error.message);
  }
};

// size formatter
const fileSizeFormatter = (bytes, decimal) => {
  if (bytes == 0) {
    return "0 Bytes";
  }
  const dm = decimal || 2;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "YB", "ZB"];
  const index = Math.floor(Math.log(bytes) / Math.log(1000));
  return (
    parseFloat((bytes / Math.pow(100, index)).toFixed(dm)) + " " + sizes[index]
  );
};

//GET REQUEST HANDLER
const getAllSingelFiles = async (req, res, next) => {
  try {
    const files = await SingleFileModal.find(); // get all files
    res.status(200).send(files);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const getAllMultipleFiles = async (req, res, next) => {
  try {
    const files = await multipleFilesModal.find(); // get all files
    res.status(200).send(files);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  singleFileUpload,
  MultipleFileUpload,
  getAllSingelFiles,
  getAllMultipleFiles,
};
