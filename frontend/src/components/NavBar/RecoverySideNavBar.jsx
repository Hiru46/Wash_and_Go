import React from "react";
import logo from "../../assets/Dashboard/Logo.jpg";
import SideNavLinks from "../Dashboards/SideNavLinks/SideNavLinks";

export default function RecoverySideNavBar() {
  return (
    <aside>
      <aside className="h-full w-64 bg-gray-900 text-white hidden md:block">
        <div className="p-4 flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-32 w-auto mt-5 mx-auto rounded-full"
          />
        </div>
        <nav className="mt-8">
          <ul className="space-y-5 font-bold text-xl text-center">
            <li className="px-4 py-3 hover:bg-gray-700 hover:duration-300">
              <SideNavLinks
                linkName="DASHBOARD"
                url="/Dashboard/recoveryDash"
                className=""
              />
            </li>
            <li className="px-4 py-3 hover:bg-gray-700 hover:duration-300">
              <SideNavLinks
                linkName="PENDING"
                url="/Dashboard/recoveryPendingDash"
              />
            </li>
            <li className="px-4 py-3 hover:bg-gray-700 hover:duration-300">
              <SideNavLinks linkName="ONGOING" url="/Dashboard/Ongoing" />
            </li>
            <li className="px-4 py-3 hover:bg-gray-700 hover:duration-300">
              <SideNavLinks linkName="COMPLETED" url="/Dashboard/Completed" />
            </li>
            <li className="px-4 py-3 hover:bg-gray-700 hover:duration-300">
              <SideNavLinks linkName="DRIVERS" url="/Drivers" />
            </li>
          </ul>
        </nav>
      </aside>
    </aside>
  );
}
