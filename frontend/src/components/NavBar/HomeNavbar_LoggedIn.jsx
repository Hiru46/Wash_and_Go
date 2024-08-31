import React from "react";
import { IoIosMail } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { Link } from "react-router-dom";

function HomeNavbar() {
    return (
        <div className=" h-fit w-full">
            {/* Header Section */}

            <img className="z-40 absolute w-[150px] h-[77px] angled-rectangle1" src="/Logo.png" alt="" />

            <div className="text-white relative h-[77px] bg-[#161920]">
                <div className="flex gap-16 ml-[250px]">
                    <div className="flex items-center gap-2 ml-10 mt-4">
                        <div>
                            <IoIosMail size={40} />
                        </div>
                        <div>
                            <h5>Make An Email</h5>
                            <h5 className="font-bold">Kavigayashan149@gmail.com</h5>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 ml-10 mt-4">
                        <div>
                            <IoCallSharp size={40} />
                        </div>
                        <div>
                            <h5>Call Us 24/7</h5>
                            <h5 className="font-bold">+94 71 550 3670</h5>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 ml-10 mt-4">
                        <div>
                            <FaRegClock size={40} />
                        </div>
                        <div>
                            <h5>Office Hours</h5>
                            <h5 className="font-bold">Mon-Sat 8am-6pm</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-black h-[55px] relative right-0 left-0 flex items-center  border-b-white">
                <ul className="text-white font-semibold  gap-14 relative  left-[110px]   flex items-center ">
                    <li className="hover:text-[#006AFF] transition duration-200 cursor-pointer">HOME</li>
                    <li className="hover:text-[#006AFF] transition duration-200 cursor-pointer">ABOUT US</li>
                    <li className="hover:text-[#006AFF] transition duration-200 cursor-pointer">SERVICES</li>
                    <li className="hover:text-[#006AFF] transition duration-200 cursor-pointer">OFFER</li>
                    <li className="hover:text-[#006AFF] transition duration-200 cursor-pointer">RECOVERY</li>
                    <li className="hover:text-[#006AFF] transition duration-200 cursor-pointer">CONTACT US</li>
                </ul>
            </div>




        </div>
    )
}

export default HomeNavbar