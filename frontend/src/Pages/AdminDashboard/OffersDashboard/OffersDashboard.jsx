import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../components/Dashboards/Header';
import SideNavBar from '../../../components/Dashboards/SideNavBar';

function OffersDashboard() {
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
                {[
                  {
                    title: 'Maintenance',
                    status: 'Published',
                    about: 'Importance of Regular Vehicle Maintenance',
                    expDate: '2024/10/1',
                    startDate: '2024/03/31',
                  },
                  {
                    title: 'Wheel Alignment',
                    status: 'Not Published',
                    about: 'Signs Your Car Needs a Wheel Alignment',
                    expDate: '2024/10/1',
                    startDate: '2024/03/31',
                  },
                  {
                    title: 'Professional Services',
                    status: 'Published',
                    about: 'DIY Car Care vs. Professional Services',
                    expDate: '2024/10/1',
                    startDate: '2024/03/31',
                  },
                  // Add other offers similarly...
                ].map((offer, index) => (
                  <tr key={index} className="border-b">
                    <td className="px-2 py-4">{offer.title}</td>
                    <td className="px-2 py-4">
                      <span className={`px-3 py-1 rounded-full ${offer.status === 'Published' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                        {offer.status}
                      </span>
                    </td>
                    <td className="px-2 py-4">{offer.about}</td>
                    <td className="px-2 py-4">{offer.expDate}</td>
                    <td className="px-2 py-4">{offer.startDate}</td>
                    <td className="flex items-center px-2 py-4 space-x-2">
                      <button className="text-blue-600 hover:underline">Edit</button>
                      <button className="text-red-600 hover:underline">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OffersDashboard;
