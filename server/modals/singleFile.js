const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const SingleFileSchema = new Schema(
  {
    fileName: {
      type: String,
      required: true,
    },
    filePath: {
      type: String,
      required: true,
    },
    fileType: {
      type: String,
      required: true,
    },
    fileSize: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } //created , updated
);

module.exports = mongoose.model("SingleFile", SingleFileSchema);
