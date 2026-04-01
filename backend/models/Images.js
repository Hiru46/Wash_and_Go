const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    customerId: {
        type: String, // You can use ObjectId if you have a customers collection
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    }
});

const Image = mongoose.model('Image', imageSchema);
module.exports = Image;
