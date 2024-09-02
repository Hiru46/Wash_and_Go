// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const upload = require('../config/multerConfig');
const User = require('../models/Register'); // Assuming you have a User model

// Define routes and link to controller methods
router.get("/", UserController.getAllUsers);
router.post("/", UserController.addUsers);
router.get("/:id", UserController.getById);
router.put("/:id", UserController.UpdateUser);
router.delete("/:id", UserController.DeleteUser);

// Upload profile image route
router.post('/uploadProfileImage', upload.single('image'), async (req, res) => {
    try {
        // Find user and update profile image URL
        const user = await User.findById(req.body.userId); // Assuming userId is sent in the request body
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }

        user.profileImage = req.file.path; // Cloudinary URL of the uploaded image
        await user.save();

        res.send({ status: 'ok', imageUrl: req.file.path });
    } catch (err) {
        console.error(err);
        res.status(500).send({ status: 'error', message: 'Failed to upload image' });
    }
});

module.exports = router;
