import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateReferral() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const referral = state.referral;

  const [referralCode, setReferralCode] = useState(referral.referralCode);
  const [isActive, setIsActive] = useState(referral.isActive);
  const [discount, setDiscount] = useState(referral.discount);
  const [dateOfReferral, setDateOfReferral] = useState(referral.date_of_referral);
  const [rewardType, setRewardType] = useState(referral.reward_type);
  const [expiryDate, setExpiryDate] = useState(referral.expiry_date);

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/referrals/${referral._id}`, {
        referralCode,
        isActive,
        discount,
        date_of_referral: dateOfReferral,
        reward_type: rewardType,
        expiry_date: expiryDate,
      });

      if (response.status === 200) {
        alert('Referral updated successfully!');
        navigate('/referrals_dash');
      } else {
        alert('Failed to update referral');
      }
    } catch (error) {
      console.error('Error updating referral:', error);
      alert('Error updating referral');
    }
  };

  return (
    <div className="container p-8 mx-auto">
      <h1 className="mb-4 text-2xl font-bold">Update Referral</h1>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700">Referral Code</label>
        <input
          type="text"
          value={referralCode}
          onChange={(e) => setReferralCode(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700">Is Active</label>
        <select
          value={isActive}
          onChange={(e) => setIsActive(e.target.value === 'true')}
          className="w-full p-2 border rounded-lg"
        >
          <option value="true">Active</option>
          <option value="false">Inactive</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700">Discount</label>
        <input
          type="number"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700">Date of Referral</label>
        <input
          type="date"
          value={new Date(dateOfReferral).toISOString().split('T')[0]}
          onChange={(e) => setDateOfReferral(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700">Reward Type</label>
        <input
          type="text"
          value={rewardType}
          onChange={(e) => setRewardType(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700">Expiry Date</label>
        <input
          type="date"
          value={new Date(expiryDate).toISOString().split('T')[0]}
          onChange={(e) => setExpiryDate(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
      </div>
      
      <button
        onClick={handleUpdate}
        className="px-4 py-2 font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600"
      >
        Update Referral
      </button>
    </div>
  );
}

export default UpdateReferral;
