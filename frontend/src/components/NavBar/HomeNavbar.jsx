import React from "react";
import { IoIosMail } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

function HomeNavbar() {
    return (
        <div className=" h-fit mb-14">
            {/* Header Section */}
            <div className="z-40 absolute w-[280px] h-[132px] bg-[#006AFF] angled-rectangle1">
                <img src="Logo3.png" alt="" className="bg-cover bg-center " />
            </div>



            <div className="absolute w-[330px] h-[132px] bg-[#111827] angled-rectangle2 z-20"></div>

            <div className="absolute left-[280px] h-[55px] bg-white angled-rectangle3 right-0 flex justify-between items-center ">


                <div className="font-bold  text-xl  ml-5  ">
                    Welcome to Wash & Go Automobile  Service Company
                </div>

                <div className="flex items-center gap-3 mr-5" >
                    <h1 className=" w-[85px] font-bold ">Follow Us : </h1>
                    <FaFacebookF />
                    <FaTwitter />
                    <FaLinkedinIn />
                    <FaGoogle />

                </div>




            </div>

            <div className="text-white z-30 relative  top-[55px]   h-[77px] bg-[#161920] angled-rectangle4 ">
                <div className="flex gap-16 ml-[250px]">
                    <div className="flex items-center gap-2 ml-10 mt-4">
                        <div>
                            <IoIosMail size={40} />
                        </div>
                        <div>
                            <h5>Make An Email</h5>
                            <h5 className="font-bold">WashAndGo.assistance@gmail.com
                            </h5>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 ml-10 mt-4">
                        <div>
                            <IoCallSharp size={40} />
                        </div>
                        <div>
                            <h5>Call Us 24/7</h5>
                            <h5 className="font-bold">+94 91 550 3671</h5>
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

            <div className="bg-[#111827]   h-[55px] relative top-[55px] right-0 left-0 flex items-center border-b-white border-t-2">
                <ul className="text-white font-semibold gap-14 relative left-[110px] flex items-center">
                    <li className="hover:text-[#006AFF] transition duration-200 cursor-pointer">HOME</li>
                    <li className="hover:text-[#006AFF] transition duration-200 cursor-pointer">ABOUT US</li>
                    <li className="hover:text-[#006AFF] transition duration-200 cursor-pointer">SERVICES</li>
                    <li className="hover:text-[#006AFF] transition duration-200 cursor-pointer">OFFER</li>
                    <li className="hover:text-[#006AFF] transition duration-200 cursor-pointer">RECOVERY</li>
                    <li className="hover:text-[#006AFF] transition duration-200 cursor-pointer">CONTACT US</li>

                    {/* Buttons with original positions */}

                    <li className="">
                        <Link to="/Login">
                            <button className="ml-[500px] bg-transparent border border-[#006AFF] text-[#006AFF] w-[100px] px-4 py-2 shadow-md hover:bg-[#006AFF] hover:text-white transition duration-200">
                                Sign In
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>





        </div>
    )
}

export default HomeNavbar