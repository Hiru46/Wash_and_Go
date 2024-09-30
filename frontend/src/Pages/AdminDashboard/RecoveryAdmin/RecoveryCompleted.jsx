import React from "react";
import { useNavigate } from "react-router-dom";
import RecoverySideNavBar from "./../../../components/NavBar/RecoverySideNavBar";
import Header from "./../../../components/Dashboards/Header";

const PendingRequests = () => {
  const navigate = useNavigate();

  const requests = [
    {
      id: 1,
      userId: 6465,
      userName: "Savindu Dilaksha",
      userImg: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      userId: 6465,
      userName: "Sonal Dilmith",
      userImg: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      userId: 5665,
      userName: "Hiran Thathsara",
      userImg: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      userId: 1755,
      userName: "Kavindu Gayashan",
      userImg: "https://via.placeholder.com/150",
    },
  ];

  const handleDetailsClick = (userId) => {
    // Navigate to the details page for the specific user
    navigate(`/user-details/${userId}`);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <RecoverySideNavBar />
      <div className="flex-1 flex flex-col">
        <Header />
        {/* Main Content */}
        <div className="flex-1 p-10">
          <div className="bg-green-100 p-8 rounded-lg h-screen">
            <h1 className="text-3xl font-bold mb-6">Completed Request</h1>
            <table className="min-w-full bg-green-100 text-gray-700 rounded-lg">
              <thead>
                <tr>
                  <th className="py-3 px-4 text-left">No.</th>
                  <th className="py-3 px-4 text-left">User ID</th>
                  <th className="py-3 px-4 text-left">User</th>
                  <th className="py-3 px-4 text-center">Status</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((request, index) => (
                  <tr key={request.id} className="border-t border-gray-300">
                    <td className="py-3 px-4">
                      {String(index + 1).padStart(2, "0")}
                    </td>
                    <td className="py-3 px-4">{request.userId}</td>
                    <td className="py-3 px-4 flex items-center">
                      <img
                        src={request.userImg}
                        alt={request.userName}
                        className="h-8 w-8 rounded-full mr-3"
                      />
                      {request.userName}
                    </td>
                    <td className="py-3 px-4">
                      <button
                        className="bg-green-500 flex m-auto text-white px-4 py-1 rounded-md hover:bg-green-600"
                        onClick={() => handleDetailsClick(request.userId)}
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
