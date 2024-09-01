import React from 'react'
import Header from '../../../components/Dashboards/Header';
import SideNavBar from '../../../components/Dashboards/SideNavBar';


function OffersDashboard() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <SideNavBar/>

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        <Header />

        <div className='p-3 mt-10 text-2xl font-bold bg-white ms-10'>
          <h1>ADMIN DASHBOARD</h1>
        </div>
      </div>
    </div>
  );
}

export default OffersDashboard
