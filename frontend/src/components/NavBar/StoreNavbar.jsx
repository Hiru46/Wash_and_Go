import React from "react";
import { IoIosMail } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";


function StoreNavbar() {
    return (
        <div className=" h-[25vh] ">
            {/* Header Section */}
            <div className="z-40 absolute w-[280px] h-[132px] bg-[#006AFF] angled-rectangle1">
                <h1 className="text-white font-bold text-6xl absolute top-[48px] left-[38px]">
                    LOGO
                </h1>
            </div>

            <div className="absolute w-[330px] h-[132px] bg-[#386097] angled-rectangle2 z-20"></div>

            <div className="absolute left-[280px] h-[55px] bg-white angled-rectangle3 right-0 flex justify-between items-center ">
                <div className="font-bold text-xl ml-5">
                    Welcome to LOGO Store
                </div>

                <div className="flex items-center gap-3 mr-5">
                    <h1 className="w-[85px] font-bold">Follow Us:</h1>
                    <FaFacebookF />
                    <FaTwitter />
                    <FaLinkedinIn />
                    <FaGoogle />
                </div>
            </div>

            <div className="text-white z-30 relative top-[55px] h-[77px] bg-[#161920] angled-rectangle4">
                <div className="flex gap-16 ml-[250px]">
                    <div className="flex items-center gap-2 ml-10 mt-4">
                        <div>
                            <IoIosMail size={40} />
                        </div>
                        <div>
                            <h5>Email Us</h5>
                            <h5 className="font-bold">info@store.com</h5>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 ml-10 mt-4">
                        <div>
                            <IoCallSharp size={40} />
                        </div>
                        <div>
                            <h5>Call Us 24/7</h5>
                            <h5 className="font-bold">+1 234 567 890</h5>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 ml-10 mt-4">
                        <div>
                            <FaRegClock size={40} />
                        </div>
                        <div>
                            <h5>Store Hours</h5>
                            <h5 className="font-bold">Mon-Sat 9am-9pm</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-black h-[55px] relative top-[55px] right-0 left-0 flex items-center border-b-white">
                <ul className="text-white font-semibold gap-14 relative left-[110px] flex items-center  ">
                    <li className="hover:text-[#006AFF] transition duration-200 cursor-pointer">HOME</li>
                    <li className="hover:text-[#006AFF] transition duration-200 cursor-pointer">SHOP</li>
                    <li className="hover:text-[#006AFF] transition duration-200 cursor-pointer">CATEGORIES</li>
                    <li className="hover:text-[#006AFF] transition duration-200 cursor-pointer">OFFERS</li>
                    <li className="hover:text-[#006AFF] transition duration-200 cursor-pointer">ABOUT US</li>
                    <li className="hover:text-[#006AFF] transition duration-200 cursor-pointer">CONTACT US</li>

                    <li className="ml-[400px]"> {/* This will push the button to the right */}
                        <button className="bg-transparent border border-[#006AFF] text-[#006AFF] w-[100px] px-4 py-2 shadow-md hover:bg-[#006AFF] hover:text-white transition duration-200">
                            Sign In
                        </button>
                    </li>

                    <li>
                        <div className="bg-[#006AFF] border border-[#006AFF] text-white w-[70px] h-[45px]   flex items-center justify-center rounded-lg shadow-md  transition duration-200">
                            <div className="flex items-center gap-2">
                                <IoCartOutline size={25} />
                                <div className="text-lg text-white font-bold">02</div>
                            </div>
                        </div>

                    </li>




                </ul>
            </div>

        </div>
    )
}

export default StoreNavbar;
