const mongoose = require('mongoose'); //connect mongoose
const Schema = mongoose.Schema; // assign mongoose to the Schema

const offerSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  discountPercentage: {
    type: Number,
    required: [true, 'Discount Percentage is required'],
    min: [0, 'Discount must be a positive number'],
  },
  expirationDate: {
    type: Date,
    required: [true, 'Expiration date is required'],
  },
  startDate: {
    type: Date,
    required: [true, 'Start date is required'],
    validate: {
      validator: function (value) {
        // Ensure startDate is greater than current date
        return value > Date.now();
      },
      message: 'Start date must be after the current date',
    },
  },
  imageUrl: {
    type: String,
  },
});

module.exports = mongoose.model('Offer', offerSchema);
