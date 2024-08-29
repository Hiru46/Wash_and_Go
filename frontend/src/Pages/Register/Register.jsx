import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
                setMessage('An error occurred while registering. Please try again later.');
            }
        } else {
            setMessage('Please fix the errors before submitting the form.');
        }
    };

    return (
        <div className="flex flex-col lg:flex-row w-full h-screen">
            <div className="relative w-full lg:w-1/2 h-1/2 lg:h-full bg-gradient-to-r from-[#464545] via-[#e0e0e0] to-[#c8c8c8]">
                <img
                    src="Logo1.jpg"
                    alt="Login Concept"
                    className="absolute inset-0 w-full h-full object-cover bg-cover bg-center bg-no-repeat"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center text-white lg:p-12">
                    {/* Overlay content */}
                </div>
            </div>

            <div className="flex items-center justify-center w-full lg:w-1/2 bg-gradient-to-r from-[#f1f1f1] via-[#e0e0e0] to-[#c8c8c8]">
                <div className="w-full max-w-lg bg-white rounded-lg shadow-xl p-4 relative">
                    <h1 className="text-2xl lg:text-3xl font-bold text-center text-gray-800">REGISTER</h1>

                    {message && <p className="text-red-500 text-center mb-4">{message}</p>}
                    <form onSubmit={handleSubmit}>
                        <div className='flex flex-col lg:flex-row gap-4'>
                            <div className="mb-3 w-full">
                                <label htmlFor="FirstName" className="block text-gray-700 mb-2 font-semibold">First Name</label>
                                <input
                                    type="text"
                                    id="FirstName"
                                    aria-label="First Name"
                                    className={`shadow-sm appearance-none border border-gray-300 rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:border-[#006AFF] ${errors.FirstName ? 'border-red-500' : ''}`}
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
                                    className={`shadow-sm appearance-none border border-gray-300 rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:border-[#006AFF] ${errors.LastName ? 'border-red-500' : ''}`}
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
                                className={`shadow-sm appearance-none border border-gray-300 rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:border-[#006AFF] ${errors.Address ? 'border-red-500' : ''}`}
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
                                className={`shadow-sm appearance-none border border-gray-300 rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:border-[#006AFF] ${errors.MobileNumber ? 'border-red-500' : ''}`}
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
                                className={`shadow-sm appearance-none border border-gray-300 rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:border-[#006AFF] ${errors.NIC ? 'border-red-500' : ''}`}
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
                                className={`shadow-sm appearance-none border border-gray-300 rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:border-[#006AFF] ${errors.Email ? 'border-red-500' : ''}`}
                                placeholder="Enter your email"
                                value={formData.Email}
                                onChange={handleChange}
                                required
                            />
                            {errors.Email && <p className="text-red-500 text-xs italic">{errors.Email}</p>}
                        </div>
                        <div className="mb-3 relative">
                            <label htmlFor="Password" className="block text-gray-700 mb-2 font-semibold">Password</label>
                            <input
                                type={passwordVisible ? 'text' : 'password'}
                                id="Password"
                                aria-label="Password"
                                className={`shadow-sm appearance-none border border-gray-300 rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:border-[#006AFF] ${errors.Password ? 'border-red-500' : ''}`}
                                placeholder="Enter your password"
                                value={formData.Password}
                                onChange={handleChange}
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setPasswordVisible(!passwordVisible)}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`mt-9 h-5 w-5 ${passwordVisible ? 'text-blue-500' : 'text-gray-500'}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d={passwordVisible ? 'M12 4.5C6.75 4.5 2.07 8.9 1 12c1.07 3.1 5.75 7.5 11 7.5s9.93-4.4 11-7.5c-1.07-3.1-5.75-7.5-11-7.5zM12 17a5 5 0 1 1 0-10 5 5 0 0 1 0 10z' : 'M12 19.5c-4.35 0-8.12-3.51-9.6-6.88 1.48-3.37 5.25-6.88 9.6-6.88 4.35 0 8.12 3.51 9.6 6.88-1.48 3.37-5.25 6.88-9.6 6.88z'}
                                    />
                                </svg>
                            </button>
                            {errors.Password && <p className="text-red-500 text-xs italic">{errors.Password}</p>}
                        </div>
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="w-full mt-5 bg-gradient-to-r from-[#0162c8] to-[#55e7fc] text-white font-semibold py-2 px-4 rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                            >
                                Sign Up
                            </button>
                        </div>
                        <div className="mt-4 text-center">
                            <p className="text-gray-600">Already registered user?
                                <Link to="/Login">
                                    <span className="text-[#006AFF] font-semibold"> Sign in</span>
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
