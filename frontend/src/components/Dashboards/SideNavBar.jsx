import React from "react";
import logo from '../../assets/Dashboard/Logo.png';
import SideNavLinks from "./SideNavLinks/SideNavLinks";

export default function SideNavBar() {
  return (
    <aside className="w-64 bg-gray-900 text-white">
      <div className="p-4 flex items-center">
        <img src={logo} alt="Logo" className="h-15 w-auto mt-5" />
      </div>
      <nav className="mt-16">
        <ul className="space-y-5 font-bold text-xl text-center">
          <li className="px-4 py-3 hover:bg-gray-700 hover:duration-300">
            <SideNavLinks linkName="DASHBOARD" url="/"/>
          </li>
          <li className="px-4 py-3 hover:bg-gray-700 hover:duration-300">
            <SideNavLinks linkName="CUSTOMER DETAILS" url="/cus_details"/>
          </li>
          <li className="px-4 py-3 hover:bg-gray-700 hover:duration-300">
            <SideNavLinks linkName="PACKAGES" url="/packages"/>
          </li>
          <li className="px-4 py-3 hover:bg-gray-700 hover:duration-300">
            <SideNavLinks linkName="INVENTORY" url="/inventory"/>
          </li>
          <li className="px-4 py-3 hover:bg-gray-700 hover:duration-300">
            <SideNavLinks linkName="RECOVERY" url="/recovery"/>
          </li>
          <li className="px-4 py-3 hover:bg-gray-700 hover:duration-300">
            <SideNavLinks linkName="RESERVATIONS" url="/reservations"/>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
