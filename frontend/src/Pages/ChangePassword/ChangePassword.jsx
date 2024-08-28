import React, { useState } from 'react';

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
        <div className="flex flex-col items-center justify-center w-full h-screen bg-gradient-to-r from-[#f1f1f1] via-[#e0e0e0] to-[#c8c8c8] p-4 lg:p-8">
            <div className="w-full max-w-lg bg-white rounded-lg shadow-xl p-6 lg:p-8">
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
                            className="shadow-sm appearance-none border border-gray-300 rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:border-[#c42703]"
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
                            className="shadow-sm appearance-none border border-gray-300 rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:border-[#c42703]"
                            placeholder="Confirm your new password"
                        />
                    </div>

                    <div className="flex items-center justify-center">
                        <button
                            type="submit"
                            className="bg-[#c42703] text-white font-semibold py-2 px-4 rounded-md shadow-lg w-full hover:bg-[#a11e01] transition duration-300"
                        >
                            Change Password
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ChangePassword;
