const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
    service_ID: { 
        type: String, 
        required: true 
    },
    name: { 
        type: String, 
        required: true 
    },
    price: { 
        type: Number, 
        required: true 
    },
    estimated_time: { 
        type: Number, 
        required: true 
    }
});

const serviceModel = mongoose.model('Service', serviceSchema);

module.exports = serviceModel;
