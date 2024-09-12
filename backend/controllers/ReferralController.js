const Referral = require('../models/Referral');

// Get all referrals
const getAllReferrals = async (req, res) => {
  try {
    const referrals = await Referral.find();
    if (!referrals || referrals.length === 0) {
      return res.status(404).json({ message: 'No referrals found' });
    }
    return res.status(200).json({ referrals });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Server Error' });
  }
};

// Create a new referral
const addReferral = async (req, res) => {
  const { referralCode, isActive } = req.body;

  try {
    const newReferral = new Referral({
      referralCode,
      discount,
      isActive
    });
    await newReferral.save();
    return res.status(201).json({ referral: newReferral });
  } catch (err) {
    console.error('Error creating referral:', err);
    return res.status(500).json({ message: 'Error creating referral' });
  }
};

// Get referral by ID
const getReferralById = async (req, res) => {
  const id = req.params.id;

  try {
    const referral = await Referral.findById(id);
    if (!referral) {
      return res.status(404).json({ message: 'Referral not found' });
    }
    return res.status(200).json({ referral });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Server Error' });
  }
};

// Update a referral
const updateReferral = async (req, res) => {
  const id = req.params.id;
  const { referralCode, isActive } = req.body;

  try {
    const updatedReferral = await Referral.findByIdAndUpdate(
      id,
      { referralCode,discount, isActive },
      { new: true }
    );
    if (!updatedReferral) {
      return res.status(404).json({ message: 'Referral not found' });
    }
    return res.status(200).json({ referral: updatedReferral });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Error updating referral' });
  }
};

// Delete a referral
const deleteReferral = async (req, res) => {
  const id = req.params.id;

  try {
    const deletedReferral = await Referral.findByIdAndDelete(id);
    if (!deletedReferral) {
      return res.status(404).json({ message: 'Referral not found' });
    }
    return res.status(200).json({ message: 'Referral deleted successfully' });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Error deleting referral' });
  }
};

module.exports = {
  getAllReferrals,
  addReferral,
  getReferralById,
  updateReferral,
  deleteReferral
};
