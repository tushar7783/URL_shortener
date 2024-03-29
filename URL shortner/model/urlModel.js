const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirectURL: {
      type: String,
      required: true,
    },
    visitHistory: [{ timestamp: { type: Number } }], //array of object
  },
  { timestamps: true }
);

const URLModel = mongoose.model("url", urlSchema);

module.exports = URLModel;
