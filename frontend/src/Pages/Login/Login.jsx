import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
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

            {/* Right side with login form */}
            <div className="flex items-center justify-center w-full lg:w-1/2 bg-gradient-to-r from-[#f1f1f1] via-[#e0e0e0] to-[#c8c8c8] p-4 lg:p-8">
                <div className="w-full max-w-lg bg-white rounded-lg shadow-xl p-6 lg:p-8">
                    <h1 className="text-2xl lg:text-3xl font-bold mb-4 text-center text-gray-800">LOGIN</h1>
                    <p className="text-xl font-semibold mb-6 text-center text-gray-600 uppercase">Welcome Back</p>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 mb-2 font-semibold">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="shadow-sm appearance-none border border-gray-300 rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:border-[#c42703]"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 mb-2 font-semibold">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="shadow-sm appearance-none border border-gray-300 rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:border-[#c42703]"
                                placeholder="Enter your password"
                            />
                        </div>

                        <div className="mb-4 text-right">
                            <Link to="/ForgotPassword"> <div className="text-[#c42703] font-semibold hover:underline">
                                Forgotten Password?
                            </div>
                            </Link>
                        </div>

                        <div className="flex items-center justify-center">
                            <button
                                type="submit"
                                className="bg-[#c42703] text-white font-semibold py-2 px-4 rounded-md shadow-lg w-full hover:bg-[#a11e01] transition duration-300"
                            >
                                LOGIN
                            </button>
                        </div>
                        <div className="mt-4 text-center">
                            <p className="text-gray-600">Don't have an account? <Link to="/Register"><span className="text-[#c42703] font-semibold"> Register here</span> </Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
