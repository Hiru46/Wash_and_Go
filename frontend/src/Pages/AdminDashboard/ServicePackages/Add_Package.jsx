import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SideNavBar from '../../../components/Dashboards/SideNavBar';
import Header from '../../../components/Dashboards/Header';

export default function AddPackage() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    descript1: '',
    descript2: '',
    services: [{ id: 1, service: '' }],
    eTime: '',
    price: '',
    images: []
  });

  // Array of refs for each file input
  const fileInputRefs = useRef([React.createRef(), React.createRef(), React.createRef(), React.createRef()]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleServiceChange = (index, event) => {
    const { name, value } = event.target;
    const services = [...formData.services];
    services[index][name] = value;
    setFormData({ ...formData, services });
  };

  const addService = () => {
    setFormData({
      ...formData,
      services: [...formData.services, { id: formData.services.length + 1, service: '' }]
    });
  };

  const deleteService = (index) => {
    const services = [...formData.services];
    services.splice(index, 1);
    setFormData({ ...formData, services });
  };

  const handleFileChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const newImages = [...formData.images];
      newImages[index] = { file, preview: URL.createObjectURL(file) }; // Store file and preview URL
      setFormData({ ...formData, images: newImages });
    }
  };

  const handleImageButtonClick = (index) => {
    fileInputRefs.current[index].current.click(); // Trigger click on the hidden file input
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('name', formData.name);
    data.append('descript1', formData.descript1);
    data.append('descript2', formData.descript2);
    data.append('eTime', formData.eTime);
    data.append('price', formData.price);

    formData.services.forEach((service, index) => {
      data.append(`services[${index}][service]`, service.service);
    });

    formData.images.forEach((image) => {
      if (image && image.file) {
        data.append('images', image.file); // Append each image file to the FormData
      }
    });

    try {
      await axios.post('/api/packages', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      navigate('/packages'); // Navigate back to packages list after successful submission
    } catch (error) {
      console.error('Error adding package:', error);
    }
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
            <div className='h-full bg-white px-32 p-5 w-4/5 overflow-y-auto mx-auto rounded-xl'>
              {/* Form Section */}
              <div className="w-full bg-white p-6 rounded-lg shadow-md mb-6 mx-auto">
                <h1 className='text-center font-bold text-2xl bg-gray-700 text-white rounded-lg p-2 mb-5'>ADD NEW PACKAGE</h1>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block font-semibold mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter package name"
                      id="name"
                      className="border border-black rounded-md w-full p-1 hover:shadow-md hover:duration-300"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="descript1" className="block font-semibold mb-2">Package Description 1</label>
                    <textarea
                      type="text"
                      name="descript1"
                      placeholder="Enter first description"
                      id="descript1"
                      className="border border-black rounded-md w-full p-1 min-h-20 hover:shadow-md hover:duration-300"
                      value={formData.descript1}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="descript2" className="block font-semibold mb-2">Package Description 2</label>
                    <textarea
                      type="text"
                      name="descript2"
                      placeholder="Enter second description"
                      id="descript2"
                      className="border border-black rounded-md w-full p-1 min-h-20 hover:shadow-md hover:duration-300"
                      value={formData.descript2}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="services" className="block font-semibold mb-2">Services</label>
                    {formData.services.map((service, index) => (
                      <div key={index} className="mb-2 flex gap-3 items-center">
                        <input
                          type="text"
                          name="service"
                          placeholder={`Service ${index + 1}`}
                          className="border border-black rounded-md w-full p-2 hover:shadow-md hover:duration-300"
                          value={service.service}
                          onChange={(event) => handleServiceChange(index, event)}
                          required
                        />
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
                      className="text-blue-500 hover:underline hover:duration-300"
                    >
                      + Add a Service
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-10 my-6">
                    {[0, 1, 2, 3].map((index) => (
                      <div
                        key={index}
                        className="relative w-auto mx-5 h-32 bg-gray-300 rounded-lg shadow-md flex items-center justify-center hover:shadow-xl hover:duration-300"
                      >
                        {formData.images[index]?.preview ? (
                          <img
                            src={formData.images[index].preview}
                            alt={`Preview ${index + 1}`}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        ) : (
                          <span className="text-gray-500">No Image</span>
                        )}
                        <input
                          type="file"
                          ref={fileInputRefs.current[index]} // Assign the ref
                          className="absolute opacity-0 w-full h-full cursor-pointer"
                          onChange={(e) => handleFileChange(e, index)}
                          style={{ display: 'none' }} // Hide the file input
                        />
                        <button
                          type="button"
                          className="px-2 py-2 bg-black text-white font-semibold rounded-md text-xs shadow-md hover:bg-gray-700 hover:shadow-gray-700 hover:duration-300 absolute bottom-0 right-0 m-3"
                          onClick={() => handleImageButtonClick(index)}
                        >
                          Add Image
                        </button>
                      </div>
                    ))}
                  </div>

                  <button
                    type="submit"
                    className="px-3 py-2 bg-black text-white font-semibold rounded-md shadow-md mt-5 flex mx-auto hover:bg-gray-700 hover:shadow-gray-700 hover:duration-300"
                  >
                    Add Package
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
