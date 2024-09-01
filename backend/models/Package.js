const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const packageSchema = new Schema({
    package_ID: { 
        type: String, 
        required: true 
    },
    name: { 
        type: String, 
        required: true 
    },
    description1: { 
        type: String, 
        required: true 
    },
    description2: { 
        type: String, 
        required: true 
    },
    services: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Service' 
    }],
    estimated_time: { 
        type: Number, 
        required: true 
    },
    price: { 
        type: Number, 
        required: true 
    },
    status: { 
        type: String, 
        required: true 
    }
});

const packageModel = mongoose.model('Package', packageSchema);

module.exports = packageModel;
