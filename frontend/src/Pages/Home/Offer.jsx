import React from "react";
import OilChange from "../../assets/Home/OilChange.jpg"
import BatteryCheck from "../../assets/Home/BatteryCheck.jpg"
import BrakeService from "../../assets/Home/BrakeService.jpg"
import TireRotation from "../../assets/Home/TireRotation.jpg"


function Offer() {
    return (
        <div className="bg-white min-h-screen w-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-5xl font-extrabold text-black sm:text-6xl lg:text-7xl">
                    Exclusive Deals for Your Vehicle
                </h2>
                <p className="mt-2 text-lg text-gray-600 max-w-3xl mx-auto">
                    Take advantage of our exclusive offers to keep your vehicle running smoothly and safely. These limited-time deals won't last long!
                </p>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl w-full">
                <div className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 p-8 border border-gray-200 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                    <img src={OilChange} alt="Offer 1" className="w-full h-40 object-cover rounded-lg mb-4" />
                    <h3 className="text-xl font-semibold text-black">Oil Change Special</h3>
                    <p className="mt-4 text-5xl font-extrabold" style={{ color: '#006AFF' }}>20% Off</p>
                    <p className="mt-4 text-gray-600">Get a complete oil change and inspection at 20% off. Ensure your engine runs smoothly!</p>
                </div>
                <div className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 p-8 border border-gray-200 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                    <img src={BrakeService} alt="Offer 2" className="w-full h-40 object-cover rounded-lg mb-4" />
                    <h3 className="text-xl font-semibold text-black">Brake Service Discount</h3>
                    <p className="mt-4 text-5xl font-extrabold" style={{ color: '#006AFF' }}>15% Off</p>
                    <p className="mt-4 text-gray-600">Save 15% on all brake services to ensure your safety on the road.</p>
                </div>
                <div className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 p-8 border border-gray-200 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                    <img src={TireRotation} alt="Offer 3" className="w-full h-40 object-cover rounded-lg mb-4" />
                    <h3 className="text-xl font-semibold text-black">Free Tire Rotation</h3>
                    <p className="mt-4 text-5xl font-extrabold" style={{ color: '#006AFF' }}>Free</p>
                    <p className="mt-4 text-gray-600">Get a free tire rotation with any full-service maintenance package.</p>
                </div>
                <div className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 p-8 border border-gray-200 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                    <img src={BatteryCheck} alt="Offer 4" className="w-full h-40 object-cover rounded-lg mb-4" />
                    <h3 className="text-xl font-semibold text-black">Battery Check & Discount</h3>
                    <p className="mt-4 text-5xl font-extrabold" style={{ color: '#006AFF' }}>10% Off</p>
                    <p className="mt-4 text-gray-600">Get 10% off on battery replacement and a free battery check-up.</p>
                </div>
            </div>

            <div className="mt-4">
                {/* Add any additional content or buttons like "View More" here */}
            </div>
        </div>
    )
}

export default Offer
