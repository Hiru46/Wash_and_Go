import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Test() {

    const [userData, setUserData] = useState(null);
    const [customerDetails, setCustomerDetails] = useState({
        FirstName: '',
        LastName: '',
        Address: '',
        MobileNumber: '',
        NIC: '',
        Email: '',
        Password: '',
    });


    // Fetch session data
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/Session');
                setUserData(response.data);
                console.log('User data fetched:', response.data);
            } catch (error) {
                setError('Failed to load user data');
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
                    setError('Failed to load customer details');
                }
            }
        };

        fetchCustomerDetails();
    }, [userData]); // Run when userData changes




    return (
        <div>






        </div>
    )
}

export default Test