const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    name: {
        type: String, // Data type
        required: true, // validate
    },

    email: {
        type: String, // Data type
        required: true, // validate
    },

    Password: {
        type: String, // Data type
        required: true, // validate
    },
});

module.exports = mongoose.model(
    "Admin", //file name
    AdminSchema // function name
);
