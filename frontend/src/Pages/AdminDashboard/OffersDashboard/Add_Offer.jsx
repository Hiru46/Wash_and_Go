import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import offerDash from "../../../assets/Offers/offerDash.jpeg";

function Add_Offer() {
  const [offer, setOffer] = useState({
    title: '',
    description: '',
    discountPercentage: '',
    expirationDate: '',
    startDate: '',
    image: null // Changed to handle file upload
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOffer({ ...offer, [name]: value });
  };

  const handleFileChange = (e) => {
    setOffer({ ...offer, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('title', offer.title);
      formData.append('description', offer.description);
      formData.append('discountPercentage', offer.discountPercentage);
      formData.append('expirationDate', offer.expirationDate);
      formData.append('startDate', offer.startDate);
      if (offer.image) {
        formData.append('image', offer.image); // Append image file
      }

      const response = await axios.post('http://localhost:5000/offers', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.status === 201) {
        alert('Offer published successfully!');
        navigate('/offers_dash'); // Navigate back to the OffersDashboard page
      } else {
        console.log('Failed to publish offer, response:', response);
      }
    } catch (error) {
      console.error('Error publishing offer:', error.response || error); // Improved error logging
      alert('Error publishing offer');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col w-1/3 p-8 bg-white rounded-lg shadow-lg">
        <input
          type="text"
          name="title"
          placeholder="Offer Title"
          className="p-3 mb-4 border rounded-lg"
          value={offer.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Offer Description"
          className="p-3 mb-4 border rounded-lg"
          value={offer.description}
          onChange={handleChange}
        />
        <input
          type="number"
          name="discountPercentage"
          placeholder="Discount Percentage"
          className="p-3 mb-4 border rounded-lg"
          value={offer.discountPercentage}
          onChange={handleChange}
        />
        <input
          type="date"
          name="expirationDate"
          placeholder="Expiration Date"
          className="p-3 mb-4 border rounded-lg"
          value={offer.expirationDate}
          onChange={handleChange}
        />
        <input
          type="date"
          name="startDate"
          placeholder="Start Date"
          className="p-3 mb-4 border rounded-lg"
          value={offer.startDate}
          onChange={handleChange}
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          className="p-3 mb-4 border rounded-lg"
          onChange={handleFileChange}
        />
        <button
          className="p-3 text-white bg-black rounded-lg"
          onClick={handleSubmit}
        >
          Publish &rarr;
        </button>
      </div>

      <div className="w-1/3 h-auto ml-8">
        <img src={offerDash} alt="Offer" className="object-cover w-full h-full rounded-lg" />
      </div>
    </div>
  );
}

export default Add_Offer;
