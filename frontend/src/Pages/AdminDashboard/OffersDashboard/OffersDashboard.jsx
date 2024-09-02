import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../../../components/Dashboards/Header';
import SideNavBar from '../../../components/Dashboards/SideNavBar';

function OffersDashboard() {
  const [offers, setOffers] = useState([]);


  // Fetch Offers
  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/offers');
        setOffers(response.data.offers); // Update state with the fetched offers
      } catch (error) {
        console.error('Error fetching offers:', error);
      }
    };

    fetchOffers();
  }, []);


  //Delete Offers
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/offers/${id}`);
      if (response.status === 200) {
        alert('Offer deleted successfully!');
        fetchOffers(); // Refresh the list after deletion
      } else {
        alert('Failed to delete offer');
      }
    } catch (error) {
      console.error('Error deleting offer:', error);
      alert('Error deleting offer');
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
          <h1 className="text-2xl font-bold text-gray-900">Welcome back, Ravindu</h1>
          <Link to="/add_offer">
            <button className="flex items-center px-4 py-2 font-medium text-white uppercase bg-purple-500 rounded-lg hover:bg-purple-600">
              <span className="mr-2">+</span> Add
            </button>
          </Link>
        </div>

        <div className="flex-1 p-8 overflow-y-auto bg-gray-100">
          {/* Top Stats Section */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold">Total customers</h3>
              <p className="mt-4 text-3xl font-bold">2,420</p>
              <p className="mt-2 text-green-600">↑ 40% vs last month</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold">Members</h3>
              <p className="mt-4 text-3xl font-bold">1,210</p>
              <p className="mt-2 text-red-600">↓ 10% vs last month</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold">Active now</h3>
              <p className="mt-4 text-3xl font-bold">316</p>
              <p className="mt-2 text-green-600">↑ 20% vs last month</p>
            </div>
          </div>

          {/* Offers Table */}
          <div className="p-6 bg-white rounded-lg shadow">
            <table className="w-full table-auto">
              <thead>
                <tr className="text-left border-b">
                  <th className="px-2 py-4">Advertisement</th>
                  <th className="px-2 py-4">Status</th>
                  <th className="px-2 py-4">About</th>
                  <th className="px-2 py-4">Exp: Date</th>
                  <th className="px-2 py-4">Start Date</th>
                  <th className="px-2 py-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {offers.length > 0 ? (
                  offers.map((offer, index) => (
                    <tr key={index} className="border-b">
                      <td className="px-2 py-4">{offer.title}</td>
                      <td className="px-2 py-4">
                        <span
                          className={`px-3 py-1 rounded-full ${
                            (offer.status || 'Published') === 'Published'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {offer.status || 'Published'}
                        </span>
                      </td>
                      <td className="px-2 py-4">{offer.description}</td>
                      <td className="px-2 py-4">{new Date(offer.expirationDate).toLocaleDateString()}</td>
                      <td className="px-2 py-4">{new Date(offer.startDate).toLocaleDateString()}</td>
                      <td className="flex items-center px-2 py-4 space-x-2">
                        <button className="text-blue-600 hover:underline">Edit</button>
                        <button
                          className="text-red-600 hover:underline"
                          onClick={() => handleDelete(offer._id)}
                        >
                          Delete
                        </button>             
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="px-2 py-4 text-center">
                      No offers found.
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

export default OffersDashboard;
