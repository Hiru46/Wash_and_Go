const User = require("../models/UserModel");

//-----------------------------------Data Dsplay ----------------------------------------------------------------------------------------------

const getAllUsers = async (req, res, next) => {
    let Users;

    try {
        Users = await User.find();
    } catch (err) {
        console.log(err);
    }

    // not found

    if (!Users) {
        return res.status(400).json({ message: "User not found" });
    }

    // Display all users

    return res.status(200).json({ Users });
};

exports.getAllUsers = getAllUsers;
