const { request } = require('express');
const Offer = require('../models/Offer');
const multer = require('multer');
const path = require('path');


// Get all offers
const getAllOffers = async (req, res) => {
  try {
    const offers = await Offer.find();
    if (!offers || offers.length === 0) {
      return res.status(404).json({ message: 'No offers found' });
    }
    return res.status(200).json({ offers });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Server Error' });
  }
};

// Create a new offer
const addOffer = async (req, res) => {
  const { title, description, discountPercentage, expirationDate, startDate} = req.body;
  const imageUrl = req.file = req.file ? req.file.path : '';

  try {
    console.log("Received offer data:", req.body);
    const newOffer = new Offer({ 
      title, 
      description, 
      discountPercentage, 
      expirationDate, 
      startDate, 
      imageUrl 
    });
    await newOffer.save();
    console.log("Offer saved:", newOffer);
    return res.status(201).json({ offer: newOffer });
  } catch (err) {
    console.error('Error creating offer:',err);
    return res.status(500).json({ message: 'Error creating offer' });
  }
};

// Get offer by ID
const getOfferById = async (req, res) => {
  const id = req.params.id;

  try {
    const offer = await Offer.findById(id);
    if (!offer) {
      return res.status(404).json({ message: 'Offer not found' });
    }
    return res.status(200).json({ offer });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Server Error' });
  }
};

// Update an offer
const updateOffer = async (req, res) => {
  const id = req.params.id;
  const { title, description, discountPercentage, expirationDate, startDate } = req.body;

  // Check if a new file is uploaded, otherwise keep the existing imageUrl
  const imageUrl = req.file ? req.file.path : req.body.imageUrl;

  try {
    const updatedOffer = await Offer.findByIdAndUpdate(
      id,
      { title, description, discountPercentage, expirationDate, startDate, imageUrl },
      { new: true }
    );
    if (!updatedOffer) {
      return res.status(404).json({ message: 'Offer not found' });
    }
    return res.status(200).json({ offer: updatedOffer });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Error updating offer' });
  }
};



// Delete an offer
const deleteOffer = async (req, res) => {
  const id = req.params.id;

  try {
    const deletedOffer = await Offer.findByIdAndDelete(id);
    if (!deletedOffer) {
      return res.status(404).json({ message: 'Offer not found' });
    }
    return res.status(200).json({ message: 'Offer deleted successfully' });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Error deleting offer' });
  }
};

module.exports = {
  getAllOffers,
  addOffer,
  getOfferById,
  updateOffer,
  deleteOffer
};
