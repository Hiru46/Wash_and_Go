import React from 'react';
import HomeNavbar from '../../../components/NavBar/HomeNavbar';
import Footer from '../../../components/Footer/Footer';

function AppointmentPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
     
     <HomeNavbar />

      {/* Progress Bar */}
      <div className="flex justify-center mt-10">
        <div className="w-1/2 flex items-center justify-between">
          <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">1</div>
          <div className="w-full border-t border-gray-300"></div>
          <div className="w-8 h-8 bg-white text-black border border-black rounded-full flex items-center justify-center">2</div>
          <div className="w-full border-t border-gray-300"></div>
          <div className="w-8 h-8 bg-white text-black border border-black rounded-full flex items-center justify-center">3</div>
          <div className="w-full border-t border-gray-300"></div>
          <div className="w-8 h-8 bg-white text-black border border-black rounded-full flex items-center justify-center">4</div>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex flex-col items-center mt-10 mb-20">
        <h2 className="text-2xl font-bold mb-2">Let’s start with your Personal Details</h2>
        <p className="text-gray-500 mb-8">Fill the following text fields with your personal details</p>
        
        <form className="w-1/2 bg-blue-100 p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Enter your name*</label>
            <input type="text" className="w-full p-3 border border-blue-500 rounded" placeholder="Your Name" />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Your email</label>
            <input
              type="email"
              className="w-full p-3 border border-blue-500 rounded bg-gray-300 cursor-not-allowed"
              placeholder="mihirajyasas@gmail.com"
              disabled
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Your Address</label>
            <div className="relative">
              <input type="text" className="w-full p-3 border border-blue-500 rounded bg-gray-300 cursor-not-allowed" 
              placeholder="62/3/1, Kalidasa rd, Matara"
              disabled />
              <div className="absolute left-2 top-2">
              </div>
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-sm font-bold mb-2">Enter Your Phone Number</label>
            <div className="relative">
              <input type="text" className="w-full p-3 border border-blue-500 rounded " placeholder="+947-XXXXXXXX"/>
              <div className="absolute left-2 top-2">
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button className="w-1/4 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Next</button>
          </div>
        </form>
      </div>

      <Footer />

    </div>
    
  );
}

export default AppointmentPage;
