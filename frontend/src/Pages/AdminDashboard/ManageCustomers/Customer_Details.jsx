import React, { useState, useEffect } from 'react';
import SideNavBar from '../../../components/Dashboards/SideNavBar';
import Header from '../../../components/Dashboards/Header';
import SideNavLinks from '../../../components/Dashboards/SideNavLinks/SideNavLinks';
import axios from 'axios';
import DisplayCustomer_Details from '../ManageCustomers/DisplayCustomer_Details';

function Customer_Details() {
  const [users, setUsers] = useState([]);

  const URL = "http://localhost:5000/AdminCustomers";

  const fetchHandler = async () => {
    try {
      const response = await axios.get(URL);
      console.log(response.data); // Log the response data to check its structure
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      return { users: [] }; // Return an empty array on error
    }
  };

  useEffect(() => {
    fetchHandler().then((data) => {
      console.log("Fetched data:", data); // Log the full data object
      if (data && data.users) {
        setUsers(data.users);
      } else {
        console.warn("Users field is missing in the response:", data);
      }
    });
  }, []);

  const handleDelete = () => {
    // Refetch the users after deletion to ensure the list is updated
    fetchHandler().then((data) => {
      if (data && data.users) {
        setUsers(data.users);
      } else {
        console.warn("Users field is missing in the response after deletion:", data);
      }
    });
  };

  return (
    <div className="flex max-h-screen">
      <SideNavBar />

      <div className="h-screen flex-1 flex flex-col">
        <Header />

        <main className="h-screen flex-1 bg-gray-100">
          <div className="mt-10 bg-slate-500 text-center p-3 text-2xl font-bold">
            <h1>CUSTOMER DETAILS</h1>
          </div>
          <div className="h-5/6 m-5 px-6 pt-6 bg-gray-50 border-2 border-solid border-gray-300">
            <div>
              <button className="w-1/2 px-4 py-2 bg-gray-700 text-white font-semibold shadow-md">
                <SideNavLinks linkName="Registered Customers" url="/cus_details" />


              </button>
              <button className="w-1/2 px-4 py-2 bg-gray-500 text-white font-semibold shadow-md hover:bg-gray-600 hover:duration-300">
                <SideNavLinks linkName="Add Customers" url="/cus_Add" />
              </button>
            </div>
            <div className="mt-5 h-[470px] overflow-y-scroll bg-gray-100 border-2 border-solid border-gray-300">
              <table className="min-w-full bg-white border-2 border-gray-300 rounded-lg">
                <thead className="bg-gray-400">
                  <tr>
                    <th className="px-2 py-3 text-center font-bold text-black">Customer ID</th>
                    <th className="px-2 py-3 text-center font-bold text-black">Name</th>
                    <th className="px-2 py-3 text-center font-bold text-black">Address</th>
                    <th className="px-2 py-3 text-center font-bold text-black">Mobile Number</th>
                    <th className="px-2 py-3 text-center font-bold text-black">NIC</th>
                    <th className="px-2 py-3 text-center font-bold text-black">Email</th>
                    <th className="py-3 text-center font-bold text-black">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users &&
                    users.map((user, i) => (
                      <DisplayCustomer_Details key={user._id} user={user} onDelete={handleDelete} />
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Customer_Details;
