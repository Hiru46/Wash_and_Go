const express = require("express");
const router = express.Router();

// insert Model

const User = require("../models/UserModel");

// Insert User Controller

const UserController = require("../controllers/UserControllers");

router.get("/", UserController.getAllUsers);



// export

module.exports = router;
