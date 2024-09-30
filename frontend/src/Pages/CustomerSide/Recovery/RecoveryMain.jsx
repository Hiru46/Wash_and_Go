import React from "react";
import logo from "../../../assets/Recovery/hero.png";
const HeroSection = () => {
  return (
    <section
      id="home"
      className="h-screen w-screen bg-gray-100 relative flex items-center justify-end"
      style={{
        backgroundImage: `url(${logo})`, // Using the same image for background
        backgroundSize: "cover", // Ensures the image covers the entire section
        backgroundPosition: "center", // Centers the background image
      }}
    >
        <div className="lg:w-1/2 text-black container mx-right px-4 lg:flex-row items-center">
          {" "}
          {/* Added text-white for better contrast */}
          <h2 className="text-6xl font-bold mb-4">
            Best Breakdown Service in Sri Lanka
          </h2>
          <p className="mb-6">
            We are always near you. Our 24/7 island-wide roadside help service
            in Sri Lanka.
          </p>
          < button className="text-2xl bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
            Make an Appointment
          </button>
        </div>
    </section>
  );
};

export default HeroSection;
