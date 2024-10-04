import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateOffers() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const offer = state.offer;

  const [title, setTitle] = useState(offer.title);
  const [description, setDescription] = useState(offer.description);
  const [discountPercentage, setDiscountPercentage] = useState(offer.discountPercentage);
  const [expirationDate, setExpirationDate] = useState(offer.expirationDate);
  const [startDate, setStartDate] = useState(offer.startDate);
  const [newImage, setNewImage] = useState(null); // State for new image

  // Handle image file change
  const handleImageChange = (e) => {
    setNewImage(e.target.files[0]);
  };

  const handleUpdate = async () => {
    try {
      const formData = new FormData(); // Use FormData for handling file upload
      formData.append('title', title);
      formData.append('description', description);
      formData.append('discountPercentage', discountPercentage);
      formData.append('expirationDate', expirationDate);
      formData.append('startDate', startDate);

      if (newImage) {
        formData.append('image', newImage); // Append the new image file
      }

      const response = await axios.put(`http://localhost:5000/offers/${offer._id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        alert('Offer updated successfully!');
        navigate('/offers_dash');
      } else {
        alert('Failed to update offer');
      }
    } catch (error) {
      console.error('Error updating offer:', error);
      alert('Error updating offer');
    }
  };

  return (
    <div className="container p-8 mx-auto">
      <h1 className="mb-4 text-2xl font-bold">Update Offer</h1>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded-lg"
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700">Discount Percentage</label>
        <input
          type="number"
          value={discountPercentage}
          onChange={(e) => setDiscountPercentage(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700">Expiration Date</label>
        <input
          type="date"
          value={new Date(expirationDate).toISOString().split('T')[0]}
          onChange={(e) => setExpirationDate(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700">Start Date</label>
        <input
          type="date"
          value={new Date(startDate).toISOString().split('T')[0]}
          onChange={(e) => setStartDate(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
      </div>
      
      {/* Image Upload */}
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700">Upload New Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full p-2 border rounded-lg"
        />
      </div>

      <button
        onClick={handleUpdate}
        className="px-4 py-2 font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600"
      >
        Update Offer
      </button>
    </div>
  );
}

export default UpdateOffers;
