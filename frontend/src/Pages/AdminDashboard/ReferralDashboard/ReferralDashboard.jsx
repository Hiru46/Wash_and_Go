import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import Header from "../../../components/Dashboards/Header";
import SideNavBar from "../../../components/Dashboards/SideNavBar";

function ReferralDashboard() {
  const [referrals, setReferrals] = useState([]);
  const navigate = useNavigate();

  // Fetch Referrals
  useEffect(() => {
    const fetchReferrals = async () => {
      try {
        const response = await axios.get("http://localhost:5000/referrals");
        setReferrals(response.data.referrals);
      } catch (error) {
        console.error("Error fetching referrals:", error);
      }
    };

    fetchReferrals();
  }, []);

  // Delete Referral
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/referrals/${id}`);
      if (response.status === 200) {
        alert("Referral deleted successfully!");
        setReferrals(referrals.filter((referral) => referral._id !== id));
      } else {
        alert("Failed to delete referral");
      }
    } catch (error) {
      console.error("Error deleting referral:", error);
      alert("Error deleting referral");
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <SideNavBar />

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        <Header />

        <div className="flex items-center justify-between p-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome back, Ravindu
          </h1>
          <Link to="/add_referral">
            <button className="flex items-center px-4 py-2 font-medium text-white uppercase bg-purple-500 rounded-lg hover:bg-purple-600">
              <span className="mr-2">+</span> Add Referral
            </button>
          </Link>
        </div>

        <div className="flex-1 p-8 overflow-y-auto bg-gray-100">
          <div className="p-6 bg-white rounded-lg shadow">
            <table className="w-full table-auto">
              <thead>
                <tr className="text-left border-b">
                  <th className="px-2 py-4">Referral ID</th>
                  <th className="px-2 py-4">Referral Code</th>
                  <th className="px-2 py-4">Active</th>
                  <th className="px-2 py-4">Discount</th>
                  <th className="px-2 py-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {referrals.length > 0 ? (
                  referrals.map((referral, index) => (
                    <tr key={index} className="border-b">
                      <td className="px-2 py-4">{referral._id}</td>
                      <td className="px-2 py-4">{referral.referralCode}</td>
                      <td className="px-2 py-4">
                        <span
                          className={`px-3 py-1 rounded-full ${
                            referral.isActive
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {referral.isActive ? "Active" : "Inactive"}
                        </span>
                      </td>
                      <td claaName="px-2 py-4">{referral.discount}</td>
                      <td className="flex items-center px-2 py-4 space-x-2">
                        
                        {/* Update Button */}
                        <button
                          className="text-blue-600 hover:underline"
                          onClick={() => {
                            console.log(`Navigating to /update_referral/${referral._id}`);
                            navigate(`/update_referral/${referral._id}`, {
                              state: { referral },
                            });
                          }}
                        >
                          Edit
                        </button>

                        {/* Delete Button */}
                        <button
                          className="text-red-600 hover:underline"
                          onClick={() => handleDelete(referral._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="px-2 py-4 text-center">
                      No referrals found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReferralDashboard;
