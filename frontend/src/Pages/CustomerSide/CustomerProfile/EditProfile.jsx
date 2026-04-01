import React, { useState } from 'react';
import CustomerHeader from '../../../components/CustomerDashboard/CustomerHeader';
import CustomerSideBar from '../../../components/CustomerDashboard/CustomerSideBar';

function Profile() {
    // State to hold form values
    const [profileImage, setProfileImage] = useState('https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contactNo, setContactNo] = useState('');

    // State to manage validation errors
    const [errors, setErrors] = useState({});

    // Handle image upload
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setProfileImage(imageUrl);
        }
    };

    // Handle form validation
    const validateForm = () => {
        let formErrors = {};
        if (!name) formErrors.name = 'Name is required';
        if (!email) {
            formErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            formErrors.email = 'Email is invalid';
        }
        if (!contactNo) formErrors.contactNo = 'Contact number is required';
        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    // Handle form submission
    const handleSaveChanges = (event) => {
        event.preventDefault();
        if (validateForm()) {
            // Proceed with form submission (e.g., API call)
            console.log("Form is valid, submitting data...");
        } else {
            console.log("Form validation failed.");
        }
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <CustomerSideBar />

            {/* Main Content */}
            <div className="flex flex-col flex-grow">
                {/* Header */}
                <CustomerHeader />

                {/* Profile Content */}
                <div className="p-8 flex-grow">
                    <h1 className="text-3xl font-bold mb-6">Edit Profile</h1>

                    <div className="bg-white shadow-md rounded-lg p-6">
                        <div className="flex items-center mb-6">
                            {/* Profile Image and Upload Button */}
                            <div className="flex items-center space-x-6">
                                <img
                                    src={profileImage}
                                    alt="Profile"
                                    className="w-20 h-20 rounded-full object-cover"
                                />
                                <div>
                                    <button
                                        type="button"
                                        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                                        onClick={() => document.getElementById('imageUpload').click()}
                                    >
                                        Upload Image
                                    </button>
                                    <input
                                        id="imageUpload"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="hidden"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Form Fields */}
                        <form onSubmit={handleSaveChanges} className="grid grid-cols-2 gap-6">
                            <div className="col-span-1">
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                    placeholder='Enter Name here'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
                            </div>

                            <div className="col-span-1">
                                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                                <input
                                    type="email"
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                            </div>

                            <div className="col-span-1">
                                <label className="block text-sm font-medium text-gray-700">Contact No</label>
                                <input
                                    type="text"
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                    value={contactNo}
                                    onChange={(e) => setContactNo(e.target.value)}
                                />
                                {errors.contactNo && <span className="text-red-500 text-sm">{errors.contactNo}</span>}
                            </div>

                            <div className="col-span-1">
                                <label className="block text-sm font-medium text-gray-700">NIC-Number</label>
                                <input
                                    type="text"
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                    value="200031243665"
                                    disabled
                                />
                            </div>

                            <div className="col-span-2">
                                <label className="block text-sm font-medium text-gray-700">Address</label>
                                <textarea
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                    rows="3"
                                    disabled
                                >
                                    KuruduWatta, Colombo 3
                                </textarea>
                            </div>

                            {/* Save Changes Button */}
                            <div className="col-span-2 flex justify-center">
                                <button
                                    type="submit"
                                    className="bg-green-500 text-white px-4 py-2 rounded-lg"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
