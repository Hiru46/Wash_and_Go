const express = require('express');
const router = express.Router();
const imageController = require('../controllers/ImageController');

// Route to handle image upload
router.post('/upload', imageController.createImage);

module.exports = router;
