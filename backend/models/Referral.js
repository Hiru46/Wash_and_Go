const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const referralSchema = new Schema({
  referralCode: {
    type: String,
    required: true,
    unique: true // Ensure the referral code is unique
  },
  isActive: {
    type: Boolean,
    default: true // Default to true when a new referral is created
  },
  discount:{
    type:Number,
    default:true
  }

});

module.exports = mongoose.model('Referral', referralSchema);
