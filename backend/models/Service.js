const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
    _id: {
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

const serviceModel = mongoose.model('Service', serviceSchema);

module.exports = serviceModel;
