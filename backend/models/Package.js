const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const packageSchema = new Schema({
  id: {
    type: Number,
    maxLength: 5,
  },
  name: {
    type: String,
    maxLength: 30,
  },
  estimated_time: {
    type: Number,
    maxLength: 2,
  },
  price: {
    type: Number,
    maxLength: 10,
  },
});

const packageModel = mongoose.model("Package", packageSchema);

module.exports = packageModel;
