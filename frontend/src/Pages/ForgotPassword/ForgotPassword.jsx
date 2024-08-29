import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ForgotPassword() {
    const [otpSent, setOtpSent] = useState(false);
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [otp, setOtp] = useState('');

    const handleSendOtp = (e) => {
        e.preventDefault();
        // Logic to send OTP to the email and mobile number goes here
        setOtpSent(true); // Simulate OTP being sent
    };

    const handleVerifyOtp = (e) => {
        e.preventDefault();
        // Logic to verify the OTP goes here
        console.log('OTP Verified:', otp);
    };

    return (
        <div className="flex flex-col items-center justify-center w-full h-screen bg-gradient-to-r from-[#f1f1f1] via-[#e0e0e0] to-[#c8c8c8] p-4 lg:p-8">
            <div className="w-full max-w-lg bg-white rounded-lg shadow-xl p-6 lg:p-8">
                <h1 className="text-2xl lg:text-3xl font-bold mb-4 text-center text-gray-800">Forgot Your Password?</h1>
                <p className="text-lg font-semibold mb-6 text-center text-gray-600">
                    Enter your email and mobile number below to receive an OTP to reset your password.
                </p>
                <form onSubmit={otpSent ? handleVerifyOtp : handleSendOtp}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 mb-2 font-semibold">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="shadow-sm appearance-none border border-gray-300 rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:border-[#006AFF]"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="mobile" className="block text-gray-700 mb-2 font-semibold">Mobile Number</label>
                        <input
                            type="tel"
                            id="mobile"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            className="shadow-sm appearance-none border border-gray-300 rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:border-[#006AFF]"
                            placeholder="Enter your mobile number"
                        />
                    </div>

                    {otpSent && (
                        <div className="mb-4">
                            <label htmlFor="otp" className="block text-gray-700 mb-2 font-semibold">OTP</label>
                            <input
                                type="text"
                                id="otp"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                className="shadow-sm appearance-none border border-gray-300 rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:border-[#006AFF]"
                                placeholder="Enter the OTP"
                            />
                        </div>
                    )}

                    <div className="flex items-center justify-center">
                        <button
                            type="submit"
                            className="bg-[#006AFF] text-white font-semibold py-2 px-4 rounded-md shadow-lg w-full hover:bg-[#004a99] transition duration-300"
                        >
                            {otpSent ? 'Verify OTP' : 'Send OTP'}
                        </button>
                    </div>
                </form>
                <div className="mt-4   flex  justify-center font-semibold">
                    <div>Remembered your password?  </div>
                    <Link to="/Login"> <div className="text-[#006AFF] font-semibold hover:underline">
                        Log in
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
