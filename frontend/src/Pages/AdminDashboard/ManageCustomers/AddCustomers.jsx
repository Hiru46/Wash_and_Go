import React, { useState } from 'react';
import SideNavBar from '../../../components/Dashboards/SideNavBar';
import Header from '../../../components/Dashboards/Header';
import SideNavLinks from '../../../components/Dashboards/SideNavLinks/SideNavLinks';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddCustomers() {
    const [imagePreview, setImagePreview] = useState(null);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const [input, setInput] = useState({
        FirstName: "",
        LastName: "",
        Address: "",
        MobileNumber: "",
        NIC: "",
        Email: "",
        Password: "",
    });

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

    const handleChange = (e) => {
        setInput((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [e.target.name]: "",
        }));
    };

    const validate = () => {
        let validationErrors = {};
        if (!input.FirstName) validationErrors.FirstName = "First name is required";
        if (!input.LastName) validationErrors.LastName = "Last name is required";
        if (!input.NIC) validationErrors.NIC = "NIC is required";
        if (!input.Email) {
            validationErrors.Email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(input.Email)) {
            validationErrors.Email = "Email is invalid";
        }
        if (!input.MobileNumber) {
            validationErrors.MobileNumber = "Mobile number is required";
        } else if (input.MobileNumber.length !== 10) {
            validationErrors.MobileNumber = "Mobile number should be 10 digits long";
        }
        if (!input.Address) validationErrors.Address = "Address is required";
        if (!input.Password) {
            validationErrors.Password = "Password is required";
        } else if (input.Password.length < 6) {
            validationErrors.Password = "Password should be at least 6 characters long";
        }

        return validationErrors;
    };

    const checkEmailExists = async (email) => {
        try {
            const response = await axios.get(`http://localhost:5000/AdminCustomers/check-email?email=${email}`);
            return response.data.exists;
        } catch (error) {
            console.error("Error checking email:", error);
            return false; // assume email doesn't exist if there's an error
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form inputs
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // Check if email already exists
        const emailExists = await checkEmailExists(input.Email);
        if (emailExists) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                Email: "This email is already registered",
            }));
            return;
        }

        // If all validations pass, proceed with form submission
        await sendRequest();
        navigate("/cus_details");
    };

    const sendRequest = async () => {
        await axios.post("http://localhost:5000/AdminCustomers", {
            FirstName: String(input.FirstName),
            LastName: String(input.LastName),
            Address: String(input.Address),
            MobileNumber: Number(input.MobileNumber),
            NIC: String(input.NIC),
            Email: String(input.Email),
            Password: String(input.Password),
        });
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

                    <div className="m-5 p-6 bg-gray-50 border border-gray-300 shadow-lg flex flex-col gap-6">
                        <div className="flex flex-col sm:flex-row justify-center mb-5">
                            <button className="w-full sm:w-1/2 px-4 py-2 bg-gray-500 text-white font-semibold shadow-md hover:bg-gray-600 transition duration-300">
                                <SideNavLinks linkName="Registered Customers" url="/cus_details" />
                            </button>
                            <button className="w-full sm:w-1/2 px-4 py-2 bg-gray-700 text-white font-semibold shadow-md hover:bg-gray-600 transition duration-300">
                                <SideNavLinks linkName="Add Customers" url="/cus_Add" />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit}>
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

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                <div>
                                    <label className="block text-gray-700">First Name</label>
                                    <input
                                        type="text"
                                        name="FirstName"
                                        value={input.FirstName}
                                        onChange={handleChange}
                                        className="w-full border p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter first name"
                                    />
                                    {errors.FirstName && <p className="text-red-500 text-sm">{errors.FirstName}</p>}
                                </div>
                                <div>
                                    <label className="block text-gray-700">Last Name</label>
                                    <input
                                        type="text"
                                        name="LastName"
                                        value={input.LastName}
                                        onChange={handleChange}
                                        className="w-full border p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter last name"
                                    />
                                    {errors.LastName && <p className="text-red-500 text-sm">{errors.LastName}</p>}
                                </div>
                                <div>
                                    <label className="block text-gray-700">NIC</label>
                                    <input
                                        type="text"
                                        name="NIC"
                                        value={input.NIC}
                                        onChange={handleChange}
                                        className="w-full border p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter NIC"
                                    />
                                    {errors.NIC && <p className="text-red-500 text-sm">{errors.NIC}</p>}
                                </div>
                                <div>
                                    <label className="block text-gray-700">Email Address</label>
                                    <input
                                        type="email"
                                        name="Email"
                                        value={input.Email}
                                        onChange={handleChange}
                                        className="w-full border p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter email address"
                                    />
                                    {errors.Email && <p className="text-red-500 text-sm">{errors.Email}</p>}
                                </div>
                                <div>
                                    <label className="block text-gray-700">Mobile Number</label>
                                    <input
                                        type="text"
                                        name="MobileNumber"
                                        value={input.MobileNumber}
                                        onChange={handleChange}
                                        className="w-full border p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter mobile number"
                                    />
                                    {errors.MobileNumber && <p className="text-red-500 text-sm">{errors.MobileNumber}</p>}
                                </div>
                                <div className="col-span-1 sm:col-span-2">
                                    <label className="block text-gray-700">Address</label>
                                    <input
                                        type="text"
                                        name="Address"
                                        value={input.Address}
                                        onChange={handleChange}
                                        className="w-full border p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter address"
                                    />
                                    {errors.Address && <p className="text-red-500 text-sm">{errors.Address}</p>}
                                </div>
                                <div className="col-span-1 sm:col-span-2">
                                    <label className="block text-gray-700">Password</label>
                                    <input
                                        type="password"
                                        name="Password"
                                        value={input.Password}
                                        onChange={handleChange}
                                        className="w-full border p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter password"
                                    />
                                    {errors.Password && <p className="text-red-500 text-sm">{errors.Password}</p>}
                                </div>
                            </div>

                            <div className="flex justify-center mb-4">
                                <button
                                    type="submit"
                                    className="px-8 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
                                >
                                    Add Customer
                                </button>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default AddCustomers;
