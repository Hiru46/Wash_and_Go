// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const User = require('../models/Register'); // Assuming you have a User model

// Define routes and link to controller methods
router.get("/", UserController.getAllUsers);
router.post("/", UserController.addUsers);
router.get("/:id", UserController.getById);
router.put("/:id", UserController.UpdateUser);
router.delete("/:id", UserController.DeleteUser);



module.exports = router;
