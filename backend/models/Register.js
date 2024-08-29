const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const regiSchema = new Schema({
    FirstName: {
        type: String, // Data type
        required: true, // validate
    },
    LastName: {
        type: String, // Data type
        required: true, // validate
    },
    Address: {
        type: String, // Data type
        required: true, // validate
    },
    MobileNumber: {
        type: Number, // Data type
        required: true, // validate
    },
    NIC: {
        type: String, // Data type
        required: true, // validate
    },

    Email: {
        type: String, // Data type
        required: true, // validate
    },

    Password: {
        type: String, // Data type
        required: true, // validate
    },
});

module.exports = mongoose.model(
    "Register", //file name
    regiSchema // function name
);
