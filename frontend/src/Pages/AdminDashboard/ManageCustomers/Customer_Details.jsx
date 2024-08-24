import React, { useState } from 'react';
import SideNavBar from '../../../components/Dashboards/SideNavBar';
import Header from '../../../components/Dashboards/Header';
import ConfirmationPopup from "../../../components/Confirmations/CusDeleteConfirm";
import SideNavLinks from "../../../components/Dashboards/SideNavLinks/SideNavLinks";

export default function CustomerDetails() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedCus, setSelectedCus] = useState("");

  const customers = [
    { id: 1, name: "Gayya", address: "Main Road, Galle", mobile: "0718541234", email: "gayya@gmail.com" },
    { id: 2, name: "Gayya", address: "Main Road, Galle", mobile: "0718541234", email: "gayya@gmail.com" },
    { id: 3, name: "Gayya", address: "Main Road, Galle", mobile: "0718541234", email: "gayya@gmail.com" },
    { id: 4, name: "Gayya", address: "Main Road, Galle", mobile: "0718541234", email: "gayya@gmail.com" },
    { id: 5, name: "Gayya", address: "Main Road, Galle", mobile: "0718541234", email: "gayya@gmail.com" },
  ];

  const handleDeleteClick = (cusName) => {
    setSelectedCus(cusName);
    setIsPopupOpen(true);
  };

  const handleConfirmDelete = () => {
    console.log(`Deleted: ${selectedCus}`);
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
            <h1>CUSTOMER DETAILS</h1>
          </div>
          <div className="h-5/6 m-5 px-6 pt-6 bg-gray-50 border-2 border-solid border-gray-300">
            <div>
              <button className="w-1/2 px-4 py-2 bg-gray-700 text-white font-semibold shadow-md">Registered Customers</button>
              <button className="w-1/2 px-4 py-2 bg-gray-500 text-white font-semibold shadow-md hover:bg-gray-600 hover:duration-300">
                <SideNavLinks linkName="Add Customers" url="addcus" />
              </button>
            </div>
            <div className='mt-5 h-[470px] overflow-y-scroll bg-gray-100 border-2 border-solid border-gray-300'>
              <table className="min-w-full bg-white border-2 border-gray-300 rounded-lg">
                <thead className="bg-gray-400">
                  <tr>
                    <th className="px-2 py-3 text-center font-bold text-black">Customer ID</th>
                    <th className="px-2 py-3 text-center font-bold text-black">Name</th>
                    <th className="px-2 py-3 text-center font-bold text-black">Address</th>
                    <th className="px-2 py-3 text-center font-bold text-black">Mobile Number</th>
                    <th className="px-2 py-3 text-center font-bold text-black">Email</th>
                    <th className="py-3 text-center font-bold text-black">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((cus, index) => (
                    <tr key={cus.id} className={`border-t border-gray-300 ${index % 2 === 1 ? 'bg-gray-100' : ''}`}>
                      <td className="px-2 py-4 text-center text-black">CUS 00{cus.id}</td>
                      <td className="px-2 py-4 text-center text-black">{cus.name}</td>
                      <td className="px-2 py-4 text-center text-black">{cus.address}</td>
                      <td className="px-2 py-4 text-center text-black">{cus.mobile}</td>
                      <td className="px-2 py-4 text-center text-black">{cus.email}</td>
                      <td className="text-center py-4 text-sm">
                        <button className="px-3 py-2 mr-2 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-700 hover:shadow-gray-700 hover:duration-300">
                          <SideNavLinks linkName="Update" url={`/customers/update`} />
                        </button>
                        <button
                          className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md shadow-md hover:bg-red-700 hover:shadow-gray-700 hover:duration-300"
                          onClick={() => handleDeleteClick(cus.name)}
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
        cusName={selectedCus}
        onClose={handleClosePopup}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
}
