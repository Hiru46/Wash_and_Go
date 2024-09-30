const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DriversSchema = new Schema({
  id: {
    type: Number,
    maxLength: 5,
    required: true,
  },
  name: {
    type: String,
    maxLength: 30,
    required: true,
  },
  States: {
    type: String,
    required: true,
  },
  RecoveryVehicleNo: {
    type: String, // Use String for vehicle numbers
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  PhoneNo: {
    type: String, // Use String to support different phone number formats
    required: true,
  },
});

module.exports = mongoose.model("Drivers", DriversSchema);
