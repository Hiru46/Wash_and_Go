import React, { useState } from "react";
import profile from '../../assets/Dashboard/Profile.png';
import { FaBell } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import SideNavLinks from "./SideNavLinks/SideNavLinks";
import logoname from '../../assets/Dashboard/LogoName.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [toggle, setToggle] = useState(false);

  return (
    <header className="bg-white shadow px-4 py-3 flex items-center justify-between">
      <aside 
        className="h-fit w-fit text-black block md:hidden cursor-pointer" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
        </svg>
      </aside>
      <img src={logoname} alt="Logo" className="h-12 md:ms-10"/>
      <div className="flex items-center space-x-2 md:space-x-4 h-full bg-white relative z-10">
        <span className="h-10 w-10 rounded-full hover:shadow-md hover:shadow-black hover:duration-500">
          <FaBell className="ms-2.5 mt-2.5 h-5 w-5"/>
        </span>
        <span className="h-10 w-10 rounded-full hover:shadow-md hover:shadow-black hover:duration-500">
          <IoMdMail className="ms-2 mt-2 h-6 w-6"/>
        </span>
        <img src={profile} alt="Logo" onClick={() => setToggle(!toggle)} className="h-10 w-10 rounded-full hover:shadow-md hover:shadow-black hover:duration-500" />
        <span className="text-gray-700">Hiran Thathsara</span>
      </div>
      <div className={`fixed right-[9%] bg-black hover:shadow-sm hover:shadow-black text-white duration-300 ${toggle ? 'mt-24 z-[0]' : 'z-[0]'}`}>
        <a href=""><h1 className="border py-1 px-3 font-bold hover:bg-red-600 duration-200">Log Out</h1></a>
      </div>
      {menuOpen && (
        <div className="absolute top-20 left-0 bg-gray-900 shadow-lg rounded-b-lg py-4 text-white font-bold text-center">
          <ul>
            <li className="py-2 px-4 hover:bg-gray-700 hover:duration-300">
              <SideNavLinks linkName="DASHBOARD" url="/"/>
            </li>
            <li className="py-2 px-4 hover:bg-gray-700 hover:duration-300">
              <SideNavLinks linkName="CUSTOMER DETAILS" url="/cus_details"/>
            </li>
            <li className="py-2 px-4 hover:bg-gray-700 hover:duration-300">
              <SideNavLinks linkName="PACKAGES" url="/packages"/>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700 hover:duration-300">
            <SideNavLinks linkName="INVENTORY" url="/inventory"/>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700 hover:duration-300">
            <SideNavLinks linkName="RECOVERY" url="/recovery"/>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700 hover:duration-300">
            <SideNavLinks linkName="RESERVATIONS" url="/reservations"/>
          </li>
          </ul>
        </div>
      )}
    </header>
  );
}
