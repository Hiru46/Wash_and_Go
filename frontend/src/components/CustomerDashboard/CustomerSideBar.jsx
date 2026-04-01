import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';



function CustomerSideBar() {
    const [activeTab, setActiveTab] = useState('PROFILE');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };


    //=================== Session =============================


    const [userData, setUserData] = useState(null);
    const [customerDetails, setCustomerDetails] = useState({
        user: {
            FirstName: '',
            LastName: '',
            Address: '',
            MobileNumber: '',
            NIC: '',
            Email: '',
            Password: '',
        }
    });

    const [password, setPassword] = useState(''); // State for password

    // Fetch session data
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/Session');
                setUserData(response.data);
                console.log('User data fetched:', response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    // Fetch customer details when userData is available
    useEffect(() => {
        const fetchCustomerDetails = async () => {
            if (userData) {
                const URL = `http://localhost:5000/AdminCustomers/${userData.userId}`;
                try {
                    const response = await axios.get(URL);
                    setCustomerDetails(response.data); // Store the data directly
                    console.log('Customer details fetched:', response.data);
                } catch (error) {
                    console.error('Error fetching customer details:', error);
                }
            }
        };

        fetchCustomerDetails();
    }, [userData]); // Run when userData changes






    return (
        <div className="w-1/5 h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col items-center pt-8 shadow-lg">
            <img
                src="https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg"
                alt="Profile"
                className="w-28 h-28 rounded-full border-4 border-blue-500 mb-4 shadow-lg "
            />
            <h2 className="text-xl font-semibold uppercase mb-1">{customerDetails.user.LastName}</h2>
            <span className="text-sm text-gray-400 mb-6">User</span>

            <nav className="w-full flex flex-col items-center">
                {['PROFILE', 'RECOVERY', 'RESERVATIONS'].map((tab) => (
                    <div key={tab} className="w-full mb-2">
                        <button
                            className={`w-full text-2xl py-4 relative transition-colors duration-200 ${activeTab === tab ? 'bg-blue-500' : 'hover:bg-gray-700'}`}
                            onClick={() => handleTabClick(tab)}
                        >
                            {tab}
                            {activeTab === tab && (
                                <div className="absolute top-0 left-0 right-0 h-1 bg-blue-400" />
                            )}
                        </button>
                    </div>
                ))}
            </nav>
        </div>
    );
}

export default CustomerSideBar;
