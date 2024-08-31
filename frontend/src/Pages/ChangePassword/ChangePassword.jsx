import React, { useState } from 'react';
import ForgotPasswordImage from '../../assets/Register/Reset password1.png'; // Ensure this path is correct
import EnterOtp from '../../assets/Register/EnterOTP.png'; // Ensure this path is correct

function ChangePassword() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleChangePassword = (e) => {
        e.preventDefault();
        // Logic to handle password change goes here
        if (password === confirmPassword) {
            console.log('Password successfully changed');
            // Redirect or display success message
        } else {
            console.log('Passwords do not match');
        }
    };

    return (
        <div className="flex flex-col lg:flex-row w-full h-screen bg-gradient-to-br from-[#f0f4ff] to-[#d0eaff]">
            {/* Left side with image */}
            <div className="relative w-full lg:w-1/2 h-full">
                <img
                    src={ForgotPasswordImage}
                    alt="Change Password"
                    className="absolute inset-0 w-full h-full object-cover bg-cover bg-center"
                />

            </div>

            {/* Right side with change password form */}
            <div className="flex items-center justify-center w-full lg:w-1/2 p-4 lg:p-8">
                <div className="w-full max-w-lg bg-white bg-opacity-80 rounded-lg shadow-xl p-6 lg:p-8">
                    <h1 className="text-2xl lg:text-3xl font-bold mb-4 text-center text-gray-800">Change Your Password</h1>
                    <p className="text-lg font-semibold mb-6 text-center text-gray-600">
                        Enter your new password below.
                    </p>
                    <form onSubmit={handleChangePassword}>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 mb-2 font-semibold">New Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="shadow-sm appearance-none border border-gray-300 rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:border-[#006AFF]"
                                placeholder="Enter your new password"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="confirmPassword" className="block text-gray-700 mb-2 font-semibold">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="shadow-sm appearance-none border border-gray-300 rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:border-[#006AFF]"
                                placeholder="Confirm your new password"
                            />
                        </div>

                        <div className="flex items-center justify-center gap-1">
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-[#0162c8] to-[#55e7fc] text-white font-semibold py-2 px-4 rounded-md shadow-lg w-full  "
                            >
                                Change Password
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ChangePassword;
