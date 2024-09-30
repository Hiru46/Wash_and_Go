import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import RecoverySideNavBar from "./../../../components/NavBar/RecoverySideNavBar";
import Header from "./../../../components/Dashboards/Header";

const PendingRequests = () => {
  const [requests, setRequests] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get("http://localhost:5000/RecoveryForm");
        setRequests(response.data.recovery);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchRequests();
  }, []);

  const handleDetailsClick = (userId) => {
    navigate(`/user-details/${userId}`);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <RecoverySideNavBar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 p-10">
          <div className="bg-red-100 p-8 rounded-lg h-screen">
            <h1 className="text-3xl font-bold mb-6">Pending Request</h1>
            <table className="min-w-full bg-red-200 text-gray-700 rounded-lg">
              <thead>
                <tr>
                  <th className="py-3 px-4 text-left">No.</th>
                  <th className="py-3 px-4 text-left">Name</th>
                  <th className="py-3 px-4 text-left">Email Address</th>
                  <th className="py-3 px-4 text-left">Vehicle Registration</th>
                  <th className="py-3 px-4 text-center">Status</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((request, index) => (
                  <tr key={request._id} className="border-t border-gray-300">
                    <td className="py-3 px-4">
                      {String(index + 1).padStart(2, "0")}
                    </td>
                    <td className="py-3 px-4">{request.Name}</td>
                    <td className="py-3 px-4">{request.EmailAddress}</td>
                    <td className="py-3 px-4">{request.VehicleRegistrationNumber}</td>
                    <td className="py-3 px-4">
                      <button
                        className="bg-red-500 flex m-auto text-white px-4 py-1 rounded-md hover:bg-red-600"
                        onClick={() => handleDetailsClick(request._id)}
                      >
                        Details
                      </button>
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
};

export default PendingRequests;
