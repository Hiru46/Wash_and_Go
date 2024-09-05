import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddReferral() {
  const [referral, setReferral] = useState({
    referralCode: '',
    isActive: true // Default to active
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setReferral({
      ...referral,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/referrals', referral);
      if (response.status === 201) {
        alert('Referral created successfully!');
        navigate('/referrals_dash'); // Navigate back to the ReferralDashboard page
      } else {
        console.log('Failed to create referral, response:', response);
      }
    } catch (error) {
      console.error('Error creating referral:', error.response || error);
      alert('Error creating referral');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col w-1/3 p-8 bg-white rounded-lg shadow-lg">
        <input
          type="text"
          name="referralCode"
          placeholder="Referral Code"
          className="p-3 mb-4 border rounded-lg"
          value={referral.referralCode}
          onChange={handleChange}
        />
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            name="isActive"
            className="w-4 h-4 mr-2"
            checked={referral.isActive}
            onChange={handleChange}
          />
          <label htmlFor="isActive">Active</label>
        </div>
        <button
          className="p-3 text-white bg-black rounded-lg"
          onClick={handleSubmit}
        >
          Add Referral &rarr;
        </button>
      </div>
    </div>
  );
}

export default AddReferral;
