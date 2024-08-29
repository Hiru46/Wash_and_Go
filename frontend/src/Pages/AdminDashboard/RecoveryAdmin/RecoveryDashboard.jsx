import React from 'react';
import Header from './../../../components/Dashboards/Header';
import RecoverySideNavBar from './../../../components/NavBar/RecoverySideNavBar';  
export default function DashboardContent() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <RecoverySideNavBar/>
      <div className="flex-1 flex flex-col">
        <Header />
    <div className="p-6 bg-gray-100 h-screen overflow-y-auto flex-1">
      <div className="bg-white p-4 shadow rounded-md grid-rows-2 h-full ">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

        {/* Top Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-6 bg-white shadow rounded-md">
            <h2 className="text-lg font-semibold text-gray-700">Total Pending</h2>
            <div className="flex items-center mt-2">
              <div className="text-4xl font-bold text-blue-500">26%</div>
            </div>
          </div>

          <div className="p-6 bg-white shadow rounded-md">
            <h2 className="text-lg font-semibold text-gray-700">Available Drivers</h2>
            <div className="flex items-center mt-2">
              <div className="text-4xl font-bold text-blue-500">8</div>
              <span className="text-gray-500 ml-2">of 10</span>
            </div>
          </div>
        </div>

        {/* Today Tasks */}
        <div>
          <h2 className="text-xl font-bold mb-4">Today Tasks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-red-100 text-red-500 shadow rounded-md">
              <h3 className="text-lg font-semibold">Pending Request</h3>
              <div className="text-4xl font-bold">03</div>
            </div>

            <div className="p-6 bg-blue-100 text-blue-500 shadow rounded-md">
              <h3 className="text-lg font-semibold">Ongoing Task</h3>
              <div className="text-4xl font-bold">05</div>
            </div>

            <div className="p-6 bg-green-100 text-green-500 shadow rounded-md">
              <h3 className="text-lg font-semibold">Completed Request</h3>
              <div className="text-4xl font-bold">23</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}
