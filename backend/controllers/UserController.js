const User = require("../models/Register");

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        if (!users || users.length === 0) {
            return res.status(404).json({ message: "No users found" });
        }
        return res.status(200).json({ users });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Server Error" });
    }
};

//-----------------------------------Data Insert----------------------------------------------------------------------------------------------

const addUsers = async (req, res, next) => {
    const { FirstName, LastName, Address, MobileNumber, NIC, Email, Password } = req.body;

    let users;

    try {
        users = new User({ FirstName, LastName, Address, MobileNumber, NIC, Email, Password });
        await users.save();
    } catch (err) {
        console.log(err);
    }

    // not insert users

    if (!users) {
        return res.status(404).send({ message: "Unable to add users" });
    }

    return res.status(200).json({ users });
};

//-----------------------------------------------Get by Id----------------------------------------------------------------------------------

const getById = async (req, res, next) => {
    const id = req.params.id;

    let user;

    try {
        user = await User.findById(id);
    } catch (err) {
        console.log(err);
    }

    if (!user) {
        return res.status(400).json({ message: "User not found" });
    }

    // Display all users

    return res.status(200).json({ user });
};



//----------------------Update User Details -----------------------------------------------------------------------------------------------------------

const UpdateUser = async (req, res, next) => {
    const id = req.params.id;
    const { FirstName, LastName, Address, MobileNumber, NIC } = req.body;

    let user;

    try {
        user = await User.findByIdAndUpdate(id, {
            FirstName: FirstName,
            LastName: LastName,
            Address: Address,
            MobileNumber: MobileNumber,
            NIC: NIC,    // Admin is not be able to edit customer Credentials .

        });
        await user.save();
    } catch (err) {
        console.log(err);
    }

    if (!user) {
        return res.status(400).json({ message: "Unable to Update User Details" });
    }

    // Display all users

    return res.status(200).json({ user });
};

//----------------------Delete  User Details -----------------------------------------------------------------------------------------------------------

const DeleteUser = async (req, res, next) => {
    const id = req.params.id;

    let user;

    try {
        user = await User.findByIdAndDelete(id);
    } catch (err) {
        console.log(err);
    }

    if (!user) {
        return res.status(400).json({ message: "Unable to delete User Details" });
    }

    // Display all users

    return res.status(200).json({ user });
};

exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;
exports.getById = getById;
exports.UpdateUser = UpdateUser;
exports.DeleteUser = DeleteUser;
