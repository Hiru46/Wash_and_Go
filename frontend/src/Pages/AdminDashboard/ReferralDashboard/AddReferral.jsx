import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddReferral() {
  const [referral, setReferral] = useState({
    referralCode: '',
    discount: 0,
    isActive: true, 
    date_of_referral: '', 
    reward_type: '', 
    expiry_date: '' 
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setReferral({
      ...referral,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const validateForm = () => {
    // Validate referral code starts with "RC"
    if (!referral.referralCode.startsWith('RC')) {
      alert('Referral code must start with "RC".');
      return false;
    }

    // Validate date of referral is after current date
    const currentDate = new Date();
    const dateOfReferral = new Date(referral.date_of_referral);
    if (dateOfReferral <= currentDate) {
      alert('Date of referral must be after today\'s date.');
      return false;
    }

    // Validate expiry date is after the referral date
    const expiryDate = new Date(referral.expiry_date);
    if (expiryDate <= dateOfReferral) {
      alert('Expiry date must be after the referral date.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

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
        
        {/* Referral Code */}
        <label className="mb-2 font-medium" htmlFor="referralCode">
          Referral Code
        </label>
        <input
          type="text"
          name="referralCode"
          id="referralCode"
          placeholder="Referral Code"
          className="p-3 mb-4 border rounded-lg"
          value={referral.referralCode}
          onChange={handleChange}
        />

        {/* Discount Amount */}
        <label className="mb-2 font-medium" htmlFor="discount">
          Discount Amount
        </label>
        <input
          type="number"
          name="discount"
          id="discount"
          placeholder="Discount Amount"
          className="p-3 mb-4 border rounded-lg"
          value={referral.discount}
          onChange={handleChange}
        />

        {/* Active Checkbox */}
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            name="isActive"
            id="isActive"
            className="w-4 h-4 mr-2"
            checked={referral.isActive}
            onChange={handleChange}
          />
          <label htmlFor="isActive">Active</label>
        </div>

        {/* Date of Referral */}
        <label className="mb-2 font-medium" htmlFor="date_of_referral">
          Date of Referral
        </label>
        <input
          type="date"
          name="date_of_referral"
          id="date_of_referral"
          className="p-3 mb-4 border rounded-lg"
          value={referral.date_of_referral}
          onChange={handleChange}
        />

        {/* Reward Type */}
        <label className="mb-2 font-medium" htmlFor="reward_type">
          Reward Type
        </label>
        <select
          name="reward_type"
          id="reward_type"
          className="p-3 mb-4 border rounded-lg"
          value={referral.reward_type}
          onChange={handleChange}
        >
          <option value="">Select Reward Type</option>
          <option value="discount">Discount</option>
          <option value="cashback">Cashback</option>
          <option value="gift">Gift</option>
        </select>

        {/* Expiry Date */}
        <label className="mb-2 font-medium" htmlFor="expiry_date">
          Expiry Date
        </label>
        <input
          type="date"
          name="expiry_date"
          id="expiry_date"
          className="p-3 mb-4 border rounded-lg"
          value={referral.expiry_date}
          onChange={handleChange}
        />

        {/* Submit Button */}
        <button className="p-3 text-white bg-black rounded-lg" onClick={handleSubmit}>
          Add Referral &rarr;
        </button>
      </div>
    </div>
  );
}

export default AddReferral;
