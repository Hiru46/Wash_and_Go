import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SideNavBar from '../../../components/Dashboards/SideNavBar';
import Header from '../../../components/Dashboards/Header';

export default function AddPackage() {

  const navigate = useNavigate();

  const [services, setServices] = useState([{ id: 1, service: '' }]);

  // Function to handle adding a new service input field
  const addService = () => {
    setServices([...services, { id: services.length + 1, service: '' }]);
  };

  // Function to handle input change
  const handleServiceChange = (index, event) => {
    const { name, value } = event.target;
    const values = [...services];
    values[index][name] = value;
    setServices(values);
  };

  // Function to handle deleting a service input field
  const deleteService = (index) => {
    const values = [...services];
    values.splice(index, 1);
    setServices(values);
  };

  return (
    <div className="flex max-h-screen">
      <SideNavBar />

      <div className="h-screen flex-1 flex flex-col">
        <Header />

        {/* Main Content Area */}
        <main className="h-1 flex-1 bg-gray-100">
          <div className="h-[700px] m-5 p-6 bg-gray-50 border-2 border-solid border-gray-300">
            <button
              className="px-2.5 py-1.5 bg-black text-white text-sm font-semibold rounded-md shadow-md absolute hover:bg-gray-700 hover:shadow-gray-700 hover:duration-300"
              onClick={() => navigate(-1)}
            >
              Back
            </button>
            <div className='h-full bg-white px-32  p-5 w-4/5 overflow-y-auto mx-auto rounded-xl'>
                {/* Form Section */}
            <div className="w-full bg-white p-6 rounded-lg shadow-md mb-6 mx-auto">
              <h1 className='text-center font-bold text-2xl bg-gray-700 text-white rounded-lg p-2 mb-5'>ADD NEW PACKAGE</h1>
              <form action="">
                <div className="mb-4">
                  <label htmlFor="name" className="block font-semibold mb-2">Name</label>
                  <input type="text" name="name" placeholder="Enter full name" id="name" className="border border-black rounded-md w-full p-1 hover:shadow-md hover:duration-300"/>
                </div>

                <div className="mb-4">
                  <label htmlFor="descript1" className="block font-semibold mb-2">Package Description 1</label>
                  <textarea type="text" name="descript1" placeholder="Enter first description" id="descript1" className="border border-black rounded-md w-full p-1 min-h-20 hover:shadow-md hover:duration-300" />
                </div>

                <div className="mb-4">
                  <label htmlFor="descript2" className="block font-semibold mb-2">Package Description 2</label>
                  <textarea type="text" name="descript2" id="descript2" placeholder="Enter second description" className="border border-black rounded-md w-full p-1 min-h-20 hover:shadow-md hover:duration-300" />
                </div>

                <div className="mb-4">
                  <label htmlFor="services" className="block font-semibold mb-2">Services</label>
                  {services.map((service, index) => (
                    <div key={index} className="mb-2 flex gap-3 items-center">
                      <input
                        type="text"
                        name="service"
                        placeholder={`Service ${index + 1}`}
                        className="border border-black rounded-md w-full p-2 hover:shadow-md hover:duration-300"
                        value={service.service}
                        onChange={(event) => handleServiceChange(index, event)}
                      />
                      {/* X icon button */}
                      <button
                        type="button"
                        onClick={() => deleteService(index)}
                        className="text-red-500 hover:text-red-700 hover:duration-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addService}
                    className="text-blue-500 hover:underline hover:duration-300">
                    + Add a Service
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="mb-4">
                    <label htmlFor="eTime" className="block font-semibold mb-2">Estimated Time</label>
                    <input type="text" name="eTime" id="eTime" placeholder="Enter estimated time" className="border border-black rounded-md w-full p-1 hover:shadow-md hover:duration-300" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="price" className="block font-semibold mb-2">Price</label>
                    <input type="text" name="price" id="price" placeholder="Enter price" className="border border-black rounded-md w-full p-1 hover:shadow-md hover:duration-300" />
                  </div>
                </div>
              </form>
              <div className="grid grid-cols-2 gap-10 my-6">
                {[1, 2, 3, 4].map((index) => (
                  <div key={index} className="relative w-auto mx-5 h-32 bg-gray-300 rounded-lg shadow-md flex items-center justify-center  hover:shadow-xl hover:duration-300">
                    <div className="absolute bottom-0 right-0 m-3">
                      <button className="px-2 py-2 bg-black text-white font-semibold rounded-md text-xs shadow-md hover:bg-gray-700 hover:shadow-gray-700 hover:duration-300">
                        Add Image
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              {/* Add Package Button */}
              <button className="px-3 py-2 bg-black text-white font-semibold rounded-md shadow-md mt-5 flex mx-auto hover:bg-gray-700 hover:shadow-gray-700 hover:duration-300">
                Add Package
              </button>
            </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
