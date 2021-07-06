const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const MultipleFileSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    files: [Object],
  },
  { timestamps: true } //created , updated
);

module.exports = mongoose.model("MultipleFile", MultipleFileSchema);
