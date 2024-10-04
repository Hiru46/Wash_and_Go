const express = require('express');
const router = express.Router();
const OfferController = require('../controllers/OfferController');
const multer = require('multer');
const path = require('path');

// Set up multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    // Append timestamp and file extension to the original filename
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Define routes and link to controller methods
router.get('/', OfferController.getAllOffers);
router.post('/', upload.single('image'), OfferController.addOffer);  // <-- Use multer for file upload
router.get('/:id', OfferController.getOfferById);
router.put('/:id', upload.single('image'), OfferController.updateOffer);  // <-- Use multer for updating
router.delete('/:id', OfferController.deleteOffer);

module.exports = router;
