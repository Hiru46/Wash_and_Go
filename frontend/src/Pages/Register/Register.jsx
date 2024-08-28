import React from 'react';
import { Link } from 'react-router-dom';


function Register() {
    return (
        <div className="flex flex-col lg:flex-row w-full h-screen">
            {/* Left side with image */}
            <div className="relative w-full lg:w-1/2 h-1/2 lg:h-full bg-gradient-to-r from-[#464545] via-[#e0e0e0] to-[#c8c8c8]">
                <img
                    src="Logo1.jpg"
                    alt="Login Concept"
                    className="absolute inset-0 w-full h-full object-cover bg-cover bg-center bg-no-repeat"
                />
                {/* Overlay for better text visibility */}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center text-white p-6 lg:p-12">
                </div>
            </div>

            {/* Right side with registration form */}
            <div className="flex items-center justify-center w-full lg:w-1/2 bg-gradient-to-r from-[#f1f1f1] via-[#e0e0e0] to-[#c8c8c8]">
                <div className="w-full max-w-lg bg-white rounded-lg shadow-xl p-5">
                    <h1 className="text-2xl lg:text-3xl font-bold mb-4 text-center text-gray-800">REGISTER</h1>
                    <p className="text-xl font-semibold mb-5 text-center text-gray-600 uppercase">It's Completely Free</p>
                    <form>
                        <div className='flex flex-col lg:flex-row gap-4'>
                            <div className="mb-3 w-full">
                                <label htmlFor="firstName" className="block text-gray-700 mb-2 font-semibold">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    aria-label="First Name"
                                    className="shadow-sm appearance-none border border-gray-300 rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:border-[#c42703]"
                                    placeholder="Enter your First name"
                                    required
                                />
                            </div>
                            <div className="mb-3 w-full">
                                <label htmlFor="lastName" className="block text-gray-700 mb-2 font-semibold">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    aria-label="Last Name"
                                    className="shadow-sm appearance-none border border-gray-300 rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:border-[#c42703]"
                                    placeholder="Enter your Last name"
                                    required
                                />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="block text-gray-700 mb-2 font-semibold">Address</label>
                            <input
                                type="text"
                                id="address"
                                aria-label="Address"
                                className="shadow-sm appearance-none border border-gray-300 rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:border-[#c42703]"
                                placeholder="Enter your Address"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="number" className="block text-gray-700 mb-2 font-semibold">Mobile Number</label>
                            <input
                                type="number"
                                id="number"
                                aria-label="Mobile Number"
                                className="shadow-sm appearance-none border border-gray-300 rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:border-[#c42703]"
                                placeholder="Enter your Mobile number"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="nic" className="block text-gray-700 mb-2 font-semibold">NIC Number</label>
                            <input
                                type="text"
                                id="nic"
                                aria-label="NIC Number"
                                className="shadow-sm appearance-none border border-gray-300 rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:border-[#c42703]"
                                placeholder="Enter your NIC number"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="block text-gray-700 mb-2 font-semibold">Email</label>
                            <input
                                type="email"
                                id="email"
                                aria-label="Email"
                                className="shadow-sm appearance-none border border-gray-300 rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:border-[#c42703]"
                                placeholder="Enter your Email"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="block text-gray-700 mb-2 font-semibold">Password</label>
                            <input
                                type="password"
                                id="password"
                                aria-label="Password"
                                className="shadow-sm appearance-none border border-gray-300 rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:border-[#c42703]"
                                placeholder="Enter your Password"
                                required
                            />
                        </div>

                        <div className="flex items-center justify-center">
                            <button
                                type="submit"
                                className="bg-[#c42703] text-white font-semibold py-2 px-4 rounded-md shadow-lg w-full hover:bg-[#a11e01] "
                            >
                                CREATE ACCOUNT
                            </button>
                        </div>
                        <div className="mt-3 text-center">
                            <p className="text-gray-600">Already a member? <a href="/login" className="text-[#c42703] font-semibold">Login here</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
