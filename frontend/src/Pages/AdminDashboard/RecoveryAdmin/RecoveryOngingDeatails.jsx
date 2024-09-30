import React from 'react';

const OngoingRequest = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-1/5 bg-gray-800 text-white p-5">
        <h1 className="text-2xl font-bold mb-10">WASH & GO</h1>
        <ul className="space-y-4">
          <li className="text-lg font-medium">Dashboard</li>
          <li className="text-lg font-medium">Pending</li>
          <li className="text-lg font-medium text-blue-500">On Going</li>
          <li className="text-lg font-medium">Completed</li>
          <li className="text-lg font-medium">Drivers</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 bg-gray-100">
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">On Going Request</h2>
          <div className="relative">
            <input
              type="text"
              className="border rounded-lg py-2 px-4 w-64"
              placeholder="Search"
            />
          </div>
        </header>

        <section className="bg-white shadow rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-5">Recovery Report</h3>

          {/* Recovery Details */}
          <div className="mb-5">
            <div className="flex justify-between mb-3">
              <label className="text-sm font-medium text-gray-700">Date:</label>
              <p>8.22.2024</p>
            </div>
            <div className="flex justify-between mb-3">
              <label className="text-sm font-medium text-gray-700">Time:</label>
              <p>8:55 AM</p>
            </div>
            <div className="flex justify-between mb-3">
              <label className="text-sm font-medium text-gray-700">Recovery No.:</label>
              <p>468487</p>
            </div>
            <div className="flex justify-between mb-3">
              <label className="text-sm font-medium text-gray-700">User Name:</label>
              <p>Savindu Dilaksha</p>
            </div>
            <div className="flex justify-between mb-3">
              <label className="text-sm font-medium text-gray-700">Phone No.:</label>
              <p>0777280175</p>
            </div>
            <div className="flex justify-between mb-3">
              <label className="text-sm font-medium text-gray-700">NIC:</label>
              <p>200015200976</p>
            </div>
            <div className="flex justify-between mb-3">
              <label className="text-sm font-medium text-gray-700">Address:</label>
              <p>121/7b, Maddawatta, Matara</p>
            </div>
          </div>

          {/* Divider */}
          <hr className="my-8 border-gray-300" />

          {/* Vehicle and Driver Details */}
          <div className="mb-5">
            <div className="flex justify-between mb-3">
              <label className="text-sm font-medium text-gray-700">Vehicle Type:</label>
              <p>Car</p>
            </div>
            <div className="flex justify-between mb-3">
              <label className="text-sm font-medium text-gray-700">Vehicle Registration Number:</label>
              <p>CAA-2345</p>
            </div>
            <div className="flex justify-between mb-3">
              <label className="text-sm font-medium text-gray-700">Pick Up Location:</label>
              <p>105B, Weraduwa, Matara</p>
            </div>
            <div className="flex justify-between mb-3">
              <label className="text-sm font-medium text-gray-700">Destination Location:</label>
              <p>105B, Weraduwa, Matara</p>
            </div>
            <div className="flex justify-between mb-3">
              <label className="text-sm font-medium text-gray-700">Driver ID:</label>
              <p>1232</p>
            </div>
            <div className="flex justify-between mb-3">
              <label className="text-sm font-medium text-gray-700">Driver Name:</label>
              <p>Mihrij</p>
            </div>
            <div className="flex justify-between mb-3">
              <label className="text-sm font-medium text-gray-700">Recovery Vehicle No.:</label>
              <p>05</p>
            </div>
          </div>

          <div className="flex justify-end">
            <button className="bg-red-500 text-white py-2 px-4 rounded-lg">Download</button>
          </div>
        </section>

        {/* Summary Section */}
        <section className="mt-10 bg-white shadow rounded-lg p-6">
          <div className="mb-5">
            <div className="flex justify-between mb-3">
              <label className="text-sm font-medium text-gray-700">Distance Traveled (km):</label>
              <input
                type="text"
                value="45"
                className="border rounded-lg py-2 px-4"
                readOnly
              />
            </div>
            <div className="flex justify-between mb-3">
              <label className="text-sm font-medium text-gray-700">Time Duration (hours):</label>
              <input
                type="text"
                value="4.30 hours"
                className="border rounded-lg py-2 px-4"
                readOnly
              />
            </div>
            <div className="flex justify-between mb-3">
              <label className="text-sm font-medium text-gray-700">Service Charges:</label>
              <input
                type="text"
                value="5000"
                className="border rounded-lg py-2 px-4"
                readOnly
              />
            </div>
            <div className="flex justify-between mb-3">
              <label className="text-sm font-medium text-gray-700">Total Amount (Rs):</label>
              <input
                type="text"
                value="35000"
                className="border rounded-lg py-2 px-4"
                readOnly
              />
            </div>
          </div>

          <div className="flex justify-end mt-5">
            <button className="bg-green-500 text-white py-2 px-4 rounded-lg">Complete</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default OngoingRequest;
