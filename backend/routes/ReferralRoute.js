const express = require('express');
const router = express.Router();
const ReferralController = require('../controllers/ReferralController');

// Define routes and link to controller methods
router.get('/', ReferralController.getAllReferrals);
router.post('/', ReferralController.addReferral);
router.get('/:id', ReferralController.getReferralById);
router.put('/:id', ReferralController.updateReferral);
router.delete('/:id', ReferralController.deleteReferral);

module.exports = router;
