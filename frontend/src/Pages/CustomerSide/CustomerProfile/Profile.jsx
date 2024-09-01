import React from 'react'

function Profile() {
    return (
        <div className="flex flex-col md:flex-row w-full min-h-screen">
            {/* Sidebar */}
            <div className="w-full md:w-1/4 bg-gray-900 text-white p-4 flex flex-col items-center">
                <img
                    src="/path-to-image"
                    alt="User"
                    className="rounded-full w-32 h-32 object-cover"
                />
                <h2 className="mt-4 text-xl font-semibold">MHiRAJ</h2>
                <p className="text-gray-400">User</p>
                <nav className="mt-8 space-y-4">
                    <a href="#" className="block py-2 px-4 bg-gray-800 rounded">
                        PROFILE
                    </a>
                    <a href="#" className="block py-2 px-4 hover:bg-gray-800 rounded">
                        RECOVERY
                    </a>
                    <a href="#" className="block py-2 px-4 hover:bg-gray-800 rounded">
                        RESERVATIONS
                    </a>
                </nav>
            </div>

            {/* Profile Details */}
            <div className="w-full md:w-3/4 p-8">
                <h1 className="text-3xl font-bold mb-6">Profile</h1>
                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                            <img
                                src="/path-to-image"
                                alt="User"
                                className="rounded-full w-16 h-16 object-cover"
                            />
                            <div>
                                <h2 className="text-2xl font-semibold">MHiRAJ</h2>
                                <p>User</p>
                            </div>
                        </div>
                        <div className="space-x-4">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded">Edit</button>
                            <button className="bg-red-500 text-white px-4 py-2 rounded">Delete Profile</button>
                        </div>
                    </div>
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block font-semibold mb-1">Name</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border border-gray-300 rounded"
                                    value="Yasas Mihiraj"
                                    readOnly
                                />
                            </div>
                            <div>
                                <label className="block font-semibold mb-1">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full p-2 border border-gray-300 rounded"
                                    value="Mihiraj69Yasas149@gmail.com"
                                    readOnly
                                />
                            </div>
                            <div>
                                <label className="block font-semibold mb-1">Contact No</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border border-gray-300 rounded"
                                    value="0772807725"
                                    readOnly
                                />
                            </div>
                            <div>
                                <label className="block font-semibold mb-1">NIC Number</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border border-gray-300 rounded"
                                    value="200031243665"
                                    readOnly
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block font-semibold mb-1">Address</label>
                            <textarea
                                className="w-full p-2 border border-gray-300 rounded"
                                rows="3"
                                readOnly
                            >
                                KuruduWatta, Colombo 3
                            </textarea>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Profile