const express = require('express');
const router = express.Router();
const OfferController = require('../controllers/OfferController');
const multer = require('multer');


const upload = multer({ dest: 'uploads/' });
router.post('/', upload.single('image'), OfferController.addOffer);

// Define routes and link to controller methods
router.get('/', OfferController.getAllOffers);
router.post('/', OfferController.addOffer);
//router.get('/:id', OfferController.getOfferById);
router.put('/:id', OfferController.updateOffer);
router.delete('/:id', OfferController.deleteOffer);
module.exports = router;
