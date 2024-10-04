const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the referral schema
const referralSchema = new Schema({
  referralId: {
    type: Schema.Types.ObjectId, // Auto-generated unique ID
    auto: true
  },
  referralCode: {
    type: String,
    required: true,
    unique: true // Ensure the referral code is unique
  },
  isActive: {
    type: Boolean,
    default: true // Default to true when a new referral is created
  },
  discount: {
    type: Number,
    default: 0 // Ensure it's a number, default value 0
  },
  date_of_referral: {
    type: Date,
    default: Date.now // Automatically set to the current date
  },
  reward_type: {
    type: String,
    required: true // Required field for specifying the reward type
  },
  expiry_date: {
    type: Date,
    required: false // Optional, can be left empty or set later
  }
});

// Export the model
module.exports = mongoose.model('Referral', referralSchema);
