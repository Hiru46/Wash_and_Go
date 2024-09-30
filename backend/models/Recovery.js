const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecoveryFormSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  EmailAddress: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  ContactNo: {
    type: String, // Kept as String for flexibility
    required: true,
  },
  DestinationLocation: {
    type: String,
    required: true,
  },
  VehicleType: {
    type: String,
    required: true,
  },
  PickUpLocation: {
    type: String,
    required: true,
  },
  NICNumber: {
    type: String,
    required: true,
  },
  VehicleRegistrationNumber: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  States: {
    type: String, // Fixed typo: Sataes -> States
    required: false,
  },
  Date: {
    type: Date, // Use 'Date' for date and time
    required: false,
  },
  Time: {
    type: String, // Use String for Time in 'HH:mm' format
    required: false,
  },
  DistanceTraveled: {
    type: Number, // Fixed typo: DistenceTraveld -> DistanceTraveled
    required: false,
  },
  TimeDuration: {
    type: String, // Use String for time durations like '2 hours', etc.
    required: false,
  },
  ServiceCharges: {
    type: Number, // Fixed typo: SeviceChagers -> ServiceCharges
    required: false,
  },
  TotalAmount: {
    type: Number,
    required: false,
  },
});

module.exports = mongoose.model("Recovery", RecoveryFormSchema);
