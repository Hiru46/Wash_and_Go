import React from 'react';
import SideNavBar from '../../components/Dashboards/SideNavBar';
import Header from '../../components/Dashboards/Header';

export default function AdminDashboard() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <SideNavBar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header />

        <div className='mt-10 bg-slate-500 text-center p-3 text-2xl font-bold'>
          <h1>ADMIN DASHBOARD</h1>
        </div>

        {/* Main Dashboard Area */}
        <main className="flex-1 p-6 bg-gray-100 overflow-y-auto pt-20">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: User Statistics */}
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-gray-700 text-xl font-semibold">User Statistics</h2>
              <p className="text-gray-500 mt-2">Active Users: 1200</p>
              <p className="text-gray-500">New Signups: 35</p>
            </div>

            {/* Card 2: Recent Activities */}
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-gray-700 text-xl font-semibold">Recent Activities</h2>
              <ul className="mt-2 space-y-2">
                <li className="text-gray-500">User John Doe updated his profile</li>
                <li className="text-gray-500">New order placed by Jane Doe</li>
              </ul>
            </div>

            {/* Card 3: System Health */}
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-gray-700 text-xl font-semibold">System Health</h2>
              <p className="text-gray-500 mt-2">Server Load: 75%</p>
              <p className="text-gray-500">Response Time: 200ms</p>
            </div>

            {/* Card 4: Quick Actions */}
            <div className="bg-white shadow rounded-lg p-6 flex flex-col">
              <h2 className="text-gray-700 text-xl font-semibold mb-4">Quick Actions</h2>
              <button className="w-full py-2 mb-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
                Add New User
              </button>
              <button className="w-full py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700">
                Generate Report
              </button>
            </div>
          </div>

          {/* Additional Widgets */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Sales Overview */}
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-gray-700 text-xl font-semibold">Sales Overview</h2>
              {/* Add a chart component here */}
              <p className="text-gray-500 mt-2">Total Sales: $50,000</p>
            </div>

            {/* Customer Feedback */}
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-gray-700 text-xl font-semibold">Customer Feedback</h2>
              <p className="text-gray-500 mt-2">Feedback Score: 4.5/5</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
