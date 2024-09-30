import React, { useState } from "react";
import logo from "../../../assets/Recovery/Rform.png";
import Header from "../../../components/NavBar/HomeNavbar.jsx";
import Footer from "../../../components/Footer/Footer.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function RecoveryForm() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    Name: "",
    EmailAddress: "",
    Address: "",
    ContactNo: "",
    DestinationLocation: "",
    VehicleType: "",
    NICNumber: "",
    VehicleRegistrationNumber: "",
    Description: "",
  });

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(input);
    await sendRequest();
    navigate("/");
  };

  const sendRequest = async () => {
    await axios.post("http://localhost:5000/RecoveryForm", {
      Name: String(input.Name),
      EmailAddress: String(input.EmailAddress),
      Address: String(input.Address),
      ContactNo: String(input.ContactNo),
      DestinationLocation: String(input.DestinationLocation),
      VehicleType: String(input.VehicleType),
      PickUpLocation: String(input.PickUpLocation), // Add this line
      NICNumber: String(input.NICNumber),
      VehicleRegistrationNumber: String(input.VehicleRegistrationNumber),
      Description: String(input.Description),
    });
  };

  return (
    <div>
      <Header />
      <main className="mt-[0vh] flex items-center">
        <section id="home" className="h-fit w-full">
          <div className="bg-gradient-to-r from-blue-500 to-white p-10">
            <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
              <div className="flex flex-col md:flex-row">
                <div className="w-1/2 flex items-start">
                  <img src={logo} alt="Car Recovery" className="rounded-lg" />
                </div>
                <div className="md:w-1/2 md:pl-8">
                  <h2 className="text-2xl font-bold text-gray-700 mb-6">
                    User Details
                  </h2>
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Name
                      </label>
                      <input
                        type="text"
                        name="Name"
                        value={input.Name}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="EmailAddress"
                        value={input.EmailAddress}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Address
                      </label>
                      <input
                        type="text"
                        name="Address"
                        value={input.Address}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        placeholder="Enter your address"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Contact No
                      </label>
                      <input
                        type="text"
                        name="ContactNo"
                        value={input.ContactNo}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        placeholder="+94xxxxxxxxx"
                      />
                    </div>

                    <h2 className="text-2xl font-bold text-gray-700 mt-8 mb-6">
                      Recovery Details
                    </h2>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Destination Location
                      </label>
                      <input
                        type="text"
                        name="DestinationLocation"
                        value={input.DestinationLocation}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        placeholder="Enter Destination Location"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Vehicle Type
                      </label>
                      <input
                        type="text"
                        name="VehicleType"
                        value={input.VehicleType}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        placeholder="Enter Vehicle Type"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Pick Up Location
                      </label>
                      <input
                        type="text"
                        name="PickUpLocation"
                        value={input.PickUpLocation}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        placeholder="Enter Pick Up Location"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        NIC Number
                      </label>
                      <input
                        type="text"
                        name="NICNumber"
                        value={input.NICNumber}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        placeholder="Enter NIC Number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Vehicle Registration Number
                      </label>
                      <input
                        type="text"
                        name="VehicleRegistrationNumber"
                        value={input.VehicleRegistrationNumber}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        placeholder="Enter Vehicle Registration Number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Description
                      </label>
                      <textarea
                        name="Description"
                        value={input.Description}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        placeholder="Enter Description"
                      />
                    </div>
                    <button
                      type="submit"
                      className="mt-6 w-full bg-blue-600 text-white p-3 rounded-md"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default RecoveryForm;
