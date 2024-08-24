import React, { useState } from 'react';
import SideNavBar from '../../../components/Dashboards/SideNavBar';
import Header from '../../../components/Dashboards/Header';
import ConfirmationPopup from "../../../components/Confirmations/PKGDeleteConfirm";
import SideNavLinks from "../../../components/Dashboards/SideNavLinks/SideNavLinks";

export default function PackagesDashboard() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");

  const packages = [
    { id: 1, name: "Basic Service" },
    { id: 2, name: "Full Service" },
    { id: 3, name: "Premium Service" },
    { id: 4, name: "Deluxe Service" },
    { id: 5, name: "Platinum Service" },
    // Add more packages as needed
  ];

  const handleDeleteClick = (packageName) => {
    setSelectedPackage(packageName);
    setIsPopupOpen(true);
  };

  const handleConfirmDelete = () => {
    // Logic to delete the package goes here
    console.log(`Deleted: ${selectedPackage}`);
    setIsPopupOpen(false);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="flex max-h-screen">
      <SideNavBar />

      <div className="h-screen flex-1 flex flex-col">
        <Header />

        {/* Main Content Area */}
        <main className="h-screen flex-1 bg-gray-100">
          <div className='mt-10 bg-slate-500 text-center p-3 text-2xl font-bold'>
            <h1>SERVICE PACKAGES</h1>
          </div>
          <div className="h-5/6 m-5 px-6 pt-6 bg-gray-50 border-2 border-solid border-gray-300">
            <div>
              <button className="w-1/2 px-4 py-2 bg-gray-700 text-white font-semibold shadow-md">Package Details</button>
              <button className="w-1/2 px-4 py-2 bg-gray-500 text-white font-semibold shadow-md hover:bg-gray-600 hover:duration-300">
                <SideNavLinks linkName="Add Package" url="addpckg" />
              </button>
            </div>
            <div className='mt-5 h-[470px] overflow-y-scroll bg-gray-100 border-2 border-solid border-gray-300'>
              <table className="min-w-full bg-white border-2 border-gray-300 rounded-lg">
                <thead className="bg-gray-400">
                  <tr>
                    <th className="px-2 py-3 text-center font-bold text-black">Package ID</th>
                    <th className="px-2 py-3 text-center font-bold text-black">Package Name</th>
                    <th className="px-2 py-3 text-center font-bold text-black">Estimated Time</th>
                    <th className="px-2 py-3 text-center font-bold text-black">Price</th>
                    <th className="px-2 py-3 text-center font-bold text-black">Package Status</th>
                    <th className="py-3 text-center font-bold text-black">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {packages.map((pkg, index) => (
                    <tr key={pkg.id} className={`border-t border-gray-300 ${index % 2 === 1 ? 'bg-gray-100' : ''}`}>
                      <td className="px-2 py-4 text-center text-black">ID {pkg.id}</td>
                      <td className="px-2 py-4 text-center text-black">{pkg.name}</td>
                      <td className="px-2 py-4 text-center text-black">2 hrs</td>
                      <td className="px-2 py-4 text-center text-black">$100</td>
                      <td className="px-2 py-4 text-center text-black">Active</td>
                      <td className="text-center py-4 text-sm">
                        <button className="px-3 py-2 mr-2 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-700 hover:shadow-gray-700 hover:duration-300">
                          <SideNavLinks linkName="Update" url={`/packages/update`} />
                        </button>
                        <button
                          className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md shadow-md hover:bg-red-700 hover:shadow-gray-700 hover:duration-300"
                          onClick={() => handleDeleteClick(pkg.name)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>

      {/* Confirmation Popup */}
      <ConfirmationPopup
        isOpen={isPopupOpen}
        packageName={selectedPackage}
        onClose={handleClosePopup}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
}
