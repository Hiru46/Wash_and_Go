const mongoose = require('mongoose'); //connect mongoose
const Schema = mongoose.Schema; // assign mongoose to the Schema

const offerSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  discountPercentage: {
    type: Number,
    required: true
  },
  expirationDate: {
    type: Date,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  imageUrl: {
    type: String
  }
});

module.exports = mongoose.model('Offer', offerSchema);
