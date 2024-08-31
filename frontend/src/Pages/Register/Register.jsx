import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Register6 from "../../assets/Register/Register6.png"; // Assuming this is the correct path for your image

function Register() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        FirstName: '',
        LastName: '',
        Address: '',
        MobileNumber: '',
        NIC: '',
        Email: '',
        Password: ''
    });

    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const validateForm = () => {
        const errors = {};
        const phoneRegex = /^[0-9]{10}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const nameRegex = /^[A-Za-z]+$/;

        if (!formData.FirstName.trim()) {
            errors.FirstName = 'First Name is required';
        } else if (!nameRegex.test(formData.FirstName)) {
            errors.FirstName = 'First Name must contain only letters';
        }
        if (!formData.LastName.trim()) {
            errors.LastName = 'Last Name is required';
        } else if (!nameRegex.test(formData.LastName)) {
            errors.LastName = 'Last Name must contain only letters';
        }
        if (!formData.Address.trim()) {
            errors.Address = 'Address is required';
        }
        if (!phoneRegex.test(formData.MobileNumber)) {
            errors.MobileNumber = 'Mobile Number must be 10 digits';
        }
        if (!formData.NIC.trim()) {
            errors.NIC = 'NIC Number is required';
        }
        if (!emailRegex.test(formData.Email)) {
            errors.Email = 'Invalid email format';
        }
        if (formData.Password.length < 6) {
            errors.Password = 'Password must be at least 6 characters long';
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsLoading(true); // Start loading
            try {
                const response = await fetch('http://localhost:5000/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                const result = await response.json();

                if (result.status === 'ok') {
                    setMessage('Registration successful! Redirecting...');
                    setFormData({
                        FirstName: '',
                        LastName: '',
                        Address: '',
                        MobileNumber: '',
                        NIC: '',
                        Email: '',
                        Password: ''
                    });

                    setTimeout(() => navigate('/Login'), 2000);
                } else if (result.status === 'error') {
                    setMessage(result.message);
                }
            } catch (error) {
                console.error('Error during registration:', error); // Log error for debugging
                setMessage('An error occurred while registering. Please try again later.');
            } finally {
                setIsLoading(false); // End loading
            }
        } else {
            setMessage('Please fix the errors before submitting the form.');
        }
    };

    return (
        <div className="flex flex-col lg:flex-row w-full h-screen bg-gradient-to-br from-[#f0f4ff] to-[#d0eaff]">
            {/* Left side with image */}
            <div className="relative w-full lg:w-1/2 h-1/2 lg:h-full">
                <img
                    src={Register6}
                    alt="Register Concept"
                    className="absolute inset-0 w-full h-full object-cover bg-cover bg-center bg-no-repeat"
                />
            </div>

            {/* Right side with registration form */}
            <div className="flex items-center justify-center w-full lg:w-1/2 p-4 lg:p-8  ">
                <div className="w-full max-w-lg relative bg-white bg-opacity-80    p-4 rounded-md shadow-2xl">
                    <h1 className="text-3xl font-bold text-center   mb-2  text-gray-800 py-2">REGISTER</h1>

                    {/* Display message */}
                    {message && <p className={`text-center mb-4 ${errors ? 'text-red-500' : 'text-green-500'}`}>{message}</p>}

                    <form onSubmit={handleSubmit}>
                        <div className='flex flex-col lg:flex-row gap-4'>
                            <div className="mb-3 w-full">
                                <label htmlFor="FirstName" className="block text-gray-700 mb-2 font-semibold">First Name</label>
                                <input
                                    type="text"
                                    id="FirstName"
                                    aria-label="First Name"
                                    className={`shadow-sm appearance-none border border-gray-300 rounded-sm w-full py-2 px-3 leading-tight focus:outline-none focus:border-[#006AFF] ${errors.FirstName ? 'border-red-500' : ''}`}
                                    placeholder="Enter your First name"
                                    value={formData.FirstName}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.FirstName && <p className="text-red-500 text-xs italic">{errors.FirstName}</p>}
                            </div>
                            <div className="mb-3 w-full">
                                <label htmlFor="LastName" className="block text-gray-700 mb-2 font-semibold">Last Name</label>
                                <input
                                    type="text"
                                    id="LastName"
                                    aria-label="Last Name"
                                    className={`shadow-sm appearance-none border border-gray-300 rounded-sm w-full py-2 px-3 leading-tight focus:outline-none focus:border-[#006AFF] ${errors.LastName ? 'border-red-500' : ''}`}
                                    placeholder="Enter your Last name"
                                    value={formData.LastName}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.LastName && <p className="text-red-500 text-xs italic">{errors.LastName}</p>}
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Address" className="block text-gray-700 mb-2 font-semibold">Address</label>
                            <input
                                type="text"
                                id="Address"
                                aria-label="Address"
                                className={`shadow-sm appearance-none border border-gray-300 rounded-sm w-full py-2 px-3 leading-tight focus:outline-none focus:border-[#006AFF] ${errors.Address ? 'border-red-500' : ''}`}
                                placeholder="Enter your Address"
                                value={formData.Address}
                                onChange={handleChange}
                                required
                            />
                            {errors.Address && <p className="text-red-500 text-xs italic">{errors.Address}</p>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="MobileNumber" className="block text-gray-700 mb-2 font-semibold">Mobile Number</label>
                            <input
                                type="text"
                                id="MobileNumber"
                                aria-label="Mobile Number"
                                className={`shadow-sm appearance-none border border-gray-300 rounded-sm w-full py-2 px-3 leading-tight focus:outline-none focus:border-[#006AFF] ${errors.MobileNumber ? 'border-red-500' : ''}`}
                                placeholder="Enter your Mobile number"
                                value={formData.MobileNumber}
                                onChange={handleChange}
                                required
                            />
                            {errors.MobileNumber && <p className="text-red-500 text-xs italic">{errors.MobileNumber}</p>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="NIC" className="block text-gray-700 mb-2 font-semibold">NIC Number</label>
                            <input
                                type="text"
                                id="NIC"
                                aria-label="NIC Number"
                                className={`shadow-sm appearance-none border border-gray-300 rounded-sm w-full py-2 px-3 leading-tight focus:outline-none focus:border-[#006AFF] ${errors.NIC ? 'border-red-500' : ''}`}
                                placeholder="Enter your NIC number"
                                value={formData.NIC}
                                onChange={handleChange}
                                required
                            />
                            {errors.NIC && <p className="text-red-500 text-xs italic">{errors.NIC}</p>}
                        </div>
                        <div className="mb-3 relative">
                            <label htmlFor="Email" className="block text-gray-700 mb-2 font-semibold">Email</label>
                            <input
                                type="email"
                                id="Email"
                                aria-label="Email"
                                className={`shadow-sm appearance-none border border-gray-300 rounded-sm w-full py-2 px-3 leading-tight focus:outline-none focus:border-[#006AFF] ${errors.Email ? 'border-red-500' : ''}`}
                                placeholder="Enter your email"
                                value={formData.Email}
                                onChange={handleChange}
                                required
                            />
                            {errors.Email && <p className="text-red-500 text-xs italic">{errors.Email}</p>}
                        </div>
                        <div className="mb-3 relative">
                            <label htmlFor="Password" className="block text-gray-700 mb-2 font-semibold">Password</label>
                            <div className="relative">
                                <input
                                    type={passwordVisible ? 'text' : 'password'}
                                    id="Password"
                                    aria-label="Password"
                                    className={`shadow-sm appearance-none border border-gray-300 rounded-sm w-full py-2 px-3 leading-tight focus:outline-none focus:border-[#006AFF] ${errors.Password ? 'border-red-500' : ''}`}
                                    placeholder="Enter your password"
                                    value={formData.Password}
                                    onChange={handleChange}
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setPasswordVisible(!passwordVisible)}
                                    className="absolute right-2 top-2 text-gray-500"
                                >
                                    {passwordVisible ? 'Hide' : 'Show'}
                                </button>
                            </div>
                            {errors.Password && <p className="text-red-500 text-xs italic">{errors.Password}</p>}
                        </div>

                        <button
                            type="submit"
                            className="w-full mt-4 bg-gradient-to-r from-[#0162c8] to-[#55e7fc] text-white font-semibold py-2 px-4 rounded-sm shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Registering...' : 'Sign Up'}
                        </button>

                        <div className="mt-3 flex items-center  gap-1  justify-center ">
                            <span className="text-gray-600" >Already have an account?</span>
                            <Link to="/Login" className="  text-[#006AFF] hover:underline font-semibold">
                                Login
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
