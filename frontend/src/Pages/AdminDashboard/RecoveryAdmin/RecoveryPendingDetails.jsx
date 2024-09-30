import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./../../../components/Dashboards/Header";
import RecoverySideNavBar from "./../../../components/NavBar/RecoverySideNavBar";

export default function RecoveryPendingDetails() {
  const { userId } = useParams();
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/RecoveryForm/${userId}`
        );
        setUserDetails(response.data.getrecovery);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load recovery details.");
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [userId]);

  const handleDelete = async () => {
    try {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this recovery request?"
      );
      if (confirmDelete) {
        await axios.delete(`http://localhost:5000/RecoveryForm/${userId}`);
        alert("Recovery request deleted successfully.");
        // Optionally, redirect to another page after deletion
        window.location.href = "/Dashboard/recoveryPendingDash";
      }
    } catch (err) {
      console.error("Error deleting recovery request:", err);
      alert("Failed to delete recovery request.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!userDetails) {
    return <div>No recovery details found</div>;
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <RecoverySideNavBar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="p-6 bg-gray-100 flex-1 flex flex-col overflow-y-auto">
          <div className="md:flex-row justify-between p-4 md:p-6 bg-white shadow">
            <h1 className="text-xl md:text-2xl font-bold mb-2 md:mb-0">
              Pending Request for User ID: {userId}
            </h1>

            <main className="flex-1 p-4 md:p-8">
              <div className="bg-white shadow rounded-lg p-4 md:p-8">
                <h2 className="text-lg md:text-xl font-bold mb-4 bg-blue-100 p-4 rounded-lg">
                  Recovery Details
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block font-bold text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      value={userDetails.Name}
                      readOnly
                      className="w-full border rounded-lg px-4 py-2"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-gray-700">
                      Contact No
                    </label>
                    <input
                      type="text"
                      value={userDetails.ContactNo}
                      readOnly
                      className="w-full border rounded-lg px-4 py-2"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="text"
                      value={userDetails.EmailAddress}
                      readOnly
                      className="w-full border rounded-lg px-4 py-2"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-gray-700">
                      Address
                    </label>
                    <input
                      type="text"
                      value={userDetails.Address}
                      readOnly
                      className="w-full border rounded-lg px-4 py-2"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-gray-700">
                      Recovery No.
                    </label>
                    <input
                      type="text"
                      value={userDetails._id} // Assuming this is the recovery number
                      readOnly
                      className="w-full border rounded-lg px-4 py-2"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-gray-700">
                      Destination Location
                    </label>
                    <input
                      type="text"
                      value={userDetails.DestinationLocation}
                      readOnly
                      className="w-full border rounded-lg px-4 py-2"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-gray-700">
                      Pick Up Location
                    </label>
                    <input
                      type="text"
                      value={userDetails.PickUpLocation}
                      readOnly
                      className="w-full border rounded-lg px-4 py-2"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-gray-700">
                      Vehicle Registration Number
                    </label>
                    <input
                      type="text"
                      value={userDetails.VehicleRegistrationNumber}
                      readOnly
                      className="w-full border rounded-lg px-4 py-2"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-gray-700">
                      Vehicle Type
                    </label>
                    <input
                      type="text"
                      value={userDetails.VehicleType}
                      readOnly
                      className="w-full border rounded-lg px-4 py-2"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-gray-700">
                      NIC Number
                    </label>
                    <input
                      type="text"
                      value={userDetails.NICNumber}
                      readOnly
                      className="w-full border rounded-lg px-4 py-2"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-gray-700">
                      Select Drivers
                    </label>
                    <select className="w-full border rounded-lg px-4 py-2">
                      <option>Select Drivers</option>
                      <option>Hiran</option>
                      <option>Mihiraj</option>
                      <option>Gayashan</option>
                    </select>
                  </div>

                  <div className="col-span-1 md:col-span-2">
                    <label className="block font-bold text-gray-700">
                      Description
                    </label>
                    <textarea
                      className="w-full border rounded-lg px-4 py-2"
                      value={userDetails.Description}
                      readOnly
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row justify-end space-y-4 md:space-y-0 md:space-x-4 mt-6">
                  <button
                    className="w-[10%] bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                  <button className="w-[10%] bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                    Approve
                  </button>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
