import React from "react";
import logo from '../../assets/Dashboard/Logo.jpg';
import SideNavLinks from "./SideNavLinks/SideNavLinks";

export default function SideNavBar() {
  return (
    <aside>
      <aside className="hidden w-64 h-full text-white bg-gray-900 md:block">
        <div className="flex items-center p-4">
          <img src={logo} alt="Logo" className="w-auto h-32 mx-auto mt-5 rounded-full" />
        </div>
        <nav className="mt-8">
          <ul className="space-y-5 text-xl font-bold text-center">

            <li className="px-4 py-3 hover:bg-gray-700 hover:duration-300">
              <SideNavLinks linkName="DASHBOARD" url="/dashboard" className="" />
            </li>
            <li className="px-4 py-3 hover:bg-gray-700 hover:duration-300">
              <SideNavLinks linkName="CUSTOMER DETAILS" url="/cus_details" />
            </li>
            <li className="px-4 py-3 hover:bg-gray-700 hover:duration-300">
              <SideNavLinks linkName="PACKAGES" url="/Homepackages" />
            </li>
            <li className="px-4 py-3 hover:bg-gray-700 hover:duration-300">
              <SideNavLinks linkName="INVENTORY" url="/inventory" />
            </li>
            <li className="px-4 py-3 hover:bg-gray-700 hover:duration-300">
              <SideNavLinks linkName="RECOVERY" url="/recovery" />
            </li>
            <li className="px-4 py-3 hover:bg-gray-700 hover:duration-300">
              <SideNavLinks linkName="RESERVATIONS" url="/reservations" />
            </li>
            <li className="px-4 py-3 hover:bg-gray-700 hover:duration-300">
              <SideNavLinks linkName="OFFERS" url="/offers_dash" />
            </li>
          </ul>
        </nav>
      </aside>
    </aside>
  );
}
