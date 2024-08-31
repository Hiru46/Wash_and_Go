import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Register4 from "../../assets/Register/Register4.jpg";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

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
                setErrorMessage(data.error || "An error occurred. Please try again.");
            }
        } catch (err) {
            console.error("Error during login:", err);
            setErrorMessage("A server error occurred. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col lg:flex-row w-full h-screen bg-gradient-to-br from-[#f0f4ff] to-[#d0eaff] ">
            {/* Left side with image */}
            <div className="relative w-full lg:w-1/2 h-1/2 lg:h-full">
                <img
                    src={Register4}
                    alt="Login Concept"
                    className="absolute inset-0 w-full h-full object-cover bg-cover bg-center bg-no-repeat"
                />


            </div>

            {/* Right side with login form */}
            <div className="flex items-center justify-center w-full lg:w-1/2 p-6 lg:p-12  ">
                <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-2xl border border-gray-200 bg-opacity-80">
                    <h1 className="text-3xl font-bold mb-6 text-center text-gray-800   py-2 ">LOGIN</h1>

                    {/* Display error message */}
                    {errorMessage && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert">
                            <span className="block sm:inline">{errorMessage}</span>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#006AFF] focus:border-transparent transition"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="mb-4 relative">
                            <label htmlFor="password" className="block text-gray-700 font-semibold">Password</label>
                            <div className="relative">
                                <input
                                    type={passwordVisible ? 'text' : 'password'}
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#006AFF] focus:border-transparent transition"
                                    placeholder="Enter your password"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setPasswordVisible(!passwordVisible)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                                    aria-label={passwordVisible ? "Hide password" : "Show password"}
                                >
                                    {passwordVisible ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-blue-500"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 4.5C6.75 4.5 2.07 8.9 1 12c1.07 3.1 5.75 7.5 11 7.5s9.93-4.4 11-7.5c-1.07-3.1-5.75-7.5-11-7.5zM12 17a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-gray-500"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 19.5c-4.35 0-8.12-3.51-9.6-6.88 1.48-3.37 5.25-6.88 9.6-6.88 4.35 0 8.12 3.51 9.6 6.88-1.48 3.37-5.25 6.88-9.6 6.88z"
                                            />
                                        </svg>
                                    )}
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
                                className={`bg-gradient-to-r from-[#0162c8] to-[#55e7fc] text-white font-semibold py-2 px-4 rounded-md shadow-lg w-full transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#004a99]'} focus:outline-none focus:ring-2 focus:ring-blue-300`}
                                disabled={loading}
                            >
                                {loading ? 'Logging in...' : 'LOGIN'}
                            </button>
                        </div>
                        <div className="mt-4 flex justify-center">
                            <p className="text-gray-600">Don't have an account?
                                <Link to="/Register">
                                    <span className="text-[#006AFF] font-semibold hover:underline"> Register here</span>
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
