import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import SideNavBar from '../../../components/Dashboards/SideNavBar';
import Header from '../../../components/Dashboards/Header';
import SideNavLinks from '../../../components/Dashboards/SideNavLinks/SideNavLinks';

function UpdateCustomers() {
    const [imagePreview, setImagePreview] = useState(null);
    const [input, setInput] = useState({
        FirstName: "",
        LastName: "",
        Address: "",
        MobileNumber: "",
        NIC: "",

    });
    const [error, setError] = useState(null); // Added error state

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const fetchUser = async () => {
            if (!id) {
                setError('No ID found');
                return;
            }
            try {
                const response = await axios.get(`http://localhost:5000/AdminCustomers/${id}`);
                setInput(response.data.user);
                console.log(response.data.user)
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        };

        fetchUser();
    }, [id]);



    const sendRequest = async () => {
        try {
            await axios.put(`http://localhost:5000/AdminCustomers/${id}`, {
                FirstName: String(input.FirstName),
                LastName: String(input.LastName),
                Address: String(input.Address),
                MobileNumber: Number(input.MobileNumber),
                NIC: String(input.NIC),
            });
            // console.log(FirstName)
        } catch (error) {
            console.error("Error updating user:", error);
        }
    };

    const handleChange = (e) => {
        setInput((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await sendRequest();
        navigate("/cus_details");
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="flex h-screen overflow-hidden">
            <SideNavBar />
            <div className="flex-1 flex flex-col">
                <Header />
                <main className="flex-1 flex flex-col overflow-auto bg-gray-100">
                    <div className="mt-10 bg-slate-500 text-center p-3 text-2xl font-bold text-black">
                        <h1>CUSTOMER DETAILS</h1>
                    </div>
                    <div className="m-5 p-6 bg-gray-50 border-4 border-gray-300 rounded-lg shadow-lg flex flex-col gap-6">
                        <div className="flex flex-col sm:flex-row justify-center mb-5">
                            <button className="w-full sm:w-1/2 px-4 py-2 bg-gray-500 text-white font-semibold shadow-md hover:bg-gray-600 transition duration-300">
                                <SideNavLinks linkName="Registered Customers" url="/cus_details" />
                            </button>
                            <button className="w-full sm:w-1/2 px-4 py-2 bg-gray-700 text-white font-semibold shadow-md hover:bg-gray-600 transition duration-300">
                                <SideNavLinks linkName="Add Customers" url="/cus_Add" />
                            </button>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="relative w-32 h-32 mb-4">
                                <input
                                    type="file"
                                    id="file-upload"
                                    className="absolute inset-0 opacity-0 cursor-pointer"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                />
                                <label
                                    htmlFor="file-upload"
                                    className="flex items-center justify-center w-full h-full bg-gray-200 border-2 border-gray-300 rounded-full cursor-pointer hover:bg-gray-300 transition duration-300"
                                >
                                    {imagePreview ? (
                                        <img
                                            src={imagePreview}
                                            alt="Uploaded Preview"
                                            className="w-full h-full object-cover rounded-full"
                                        />
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-12 h-12 text-gray-500"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 15l7-7 7 7M12 4v16"
                                            />
                                        </svg>
                                    )}
                                </label>
                            </div>
                            <label className="block text-gray-700 text-lg mb-2">
                                Upload Image
                            </label>
                        </div>
                        <div className="flex-1 overflow-auto">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                <div>
                                    <label className="block text-gray-700">First Name</label>
                                    <input
                                        type="text"
                                        name="FirstName"
                                        value={input.FirstName}
                                        onChange={handleChange}
                                        className="w-full border rounded p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter first name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Last Name</label>
                                    <input
                                        type="text"
                                        name="LastName"
                                        value={input.LastName}
                                        onChange={handleChange}
                                        className="w-full border rounded p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter last name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700">NIC</label>
                                    <input
                                        type="text"
                                        name="NIC"
                                        value={input.NIC}
                                        onChange={handleChange}
                                        className="w-full border rounded p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter NIC"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700">Mobile Number</label>
                                    <input
                                        type="text"
                                        name="MobileNumber"
                                        value={input.MobileNumber}
                                        onChange={handleChange}
                                        className="w-full border rounded p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter mobile number"
                                    />
                                </div>
                                <div className="col-span-1 sm:col-span-2">
                                    <label className="block text-gray-700">Address</label>
                                    <textarea
                                        name="Address"
                                        value={input.Address}
                                        onChange={handleChange}
                                        className="w-full border rounded p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter address"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center mb-3">
                            <button
                                onClick={handleSubmit}
                                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                            >
                                Save Changes
                            </button>
                        </div>

                    </div>
                </main>
            </div>
        </div>
    );
}

export default UpdateCustomers;
