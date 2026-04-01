import React, { useState } from "react";
import profile from '../../assets/Dashboard/Profile.png';
import { FaBell } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

function CustomerHeader() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [toggle, setToggle] = useState(false);

    return (
        <header className="bg-white shadow px-4 py-3 flex items-center justify-between">
            <input
                type="text"
                placeholder="Search..."
                className="w-full max-w-sm bg-gray-200 rounded-lg p-2" />
            <div className="flex items-center space-x-4 h-full bg-white relative z-10">
                <span className="h-10 w-10 rounded-full hover:shadow-md hover:shadow-black hover:duration-500">
                    <FaBell className="ms-2.5 mt-2.5 h-5 w-5" />
                </span>
                <span className="h-10 w-10 rounded-full hover:shadow-md hover:shadow-black hover:duration-500">
                    <IoMdMail className="ms-2 mt-2 h-6 w-6" />
                </span>
                <img src={profile} alt="Logo" onClick={() => setToggle(!toggle)} className="h-10 w-10 rounded-full hover:shadow-md hover:shadow-black hover:duration-500" />

                <span className="text-gray-700">Hiran Thathsara</span>
            </div>
            <div className={`fixed right-[9%] bg-black hover:shadow-sm hover:shadow-black text-white duration-300 ${toggle ? 'mt-24 z-[0]' : 'z-[0]'}`}>
                <a href=""><h1 className="border py-1 px-3 font-bold hover:bg-red-600 duration-200">Log Out</h1></a>
            </div>
        </header>
    )
}

export default CustomerHeader