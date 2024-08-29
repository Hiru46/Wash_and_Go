import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // State to store error messages
    const [passwordVisible, setPasswordVisible] = useState(false); // State for password visibility
    const navigate = useNavigate(); // Hook for navigation

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (data.status === "ok") {
                if (data.role === "admin") {
                    navigate("/Dashboard"); // Navigate to admin dashboard
                } else if (data.role === "customer") {
                    navigate("/Dashboard"); // Navigate to customer profile
                }
            } else {
                // Handle errors by setting error message
                setErrorMessage(data.error || data.status || "An error occurred. Please try again.");
            }
        } catch (err) {
            console.error("Error during login:", err);
            setErrorMessage("A server error occurred. Please try again later.");
        }
    };

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
                    {/* Overlay content */}
                </div>
            </div>

            {/* Right side with login form */}
            <div className="flex items-center justify-center w-full lg:w-1/2 bg-gradient-to-r from-[#f1f1f1] via-[#e0e0e0] to-[#c8c8c8] p-4 lg:p-8">
                <div className="w-full max-w-lg bg-white rounded-lg shadow-xl p-6 lg:p-8 relative">
                    <h1 className="text-2xl lg:text-3xl font-bold mb-4 text-center text-gray-800">LOGIN</h1>
                    <p className="text-xl font-semibold mb-6 text-center text-gray-600 uppercase">Welcome Back</p>

                    {/* Display error message */}
                    {errorMessage && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert">
                            <span className="block sm:inline">{errorMessage}</span>
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 mb-2 font-semibold">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="shadow-sm appearance-none border border-gray-300 rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:border-[#006AFF]"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="mb-4 relative">
                            <label htmlFor="password" className="block text-gray-700 mb-2 font-semibold">Password</label>
                            <div className='flex items-center'>
                                <input
                                    type={passwordVisible ? 'text' : 'password'}
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="shadow-sm appearance-none border border-gray-300 rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:border-[#006AFF]"
                                    placeholder="Enter your password"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setPasswordVisible(!passwordVisible)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={` mt-9 h-5 w-5 ${passwordVisible ? 'text-blue-500' : 'text-gray-500'}`}
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
                            </div>
                        </div>

                        <div className="mb-4 text-right">
                            <Link to="/ForgotPassword">
                                <div className="text-[#006AFF] font-semibold hover:underline">
                                    Forgotten Password?
                                </div>
                            </Link>
                        </div>

                        <div className="flex items-center justify-center">
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-[#0162c8] to-[#55e7fc] text-white font-semibold py-2 px-4 rounded-md shadow-lg w-full hover:bg-[#004a99] transition duration-300"
                            >
                                LOGIN
                            </button>
                        </div>
                        <div className="mt-4 text-center">
                            <p className="text-gray-600">Don't have an account?
                                <Link to="/Register">
                                    <span className="text-[#006AFF] font-semibold"> Register here</span>
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
