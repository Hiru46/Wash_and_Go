import React from "react";
import { Link } from "react-router-dom";
import OilChange from "../../assets/Home/OilChange.jpg"
import BatteryCheck from "../../assets/Home/BatteryCheck.jpg"
import BrakeService from "../../assets/Home/BrakeService.jpg"
import TireRotation from "../../assets/Home/TireRotation.jpg"


function Offer() {
    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen px-4 bg-white sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-5xl font-extrabold text-black sm:text-6xl lg:text-7xl">
                    Exclusive Deals for Your Vehicle
                </h2>
                <p className="max-w-3xl mx-auto mt-2 text-lg text-gray-600">
                    Take advantage of our exclusive offers to keep your vehicle running smoothly and safely. These limited-time deals won't last long!
                </p>
            </div>

            <div className="grid w-full grid-cols-1 mt-5 gap-7 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl">

                <Link to ="/Offers">
                    <div className="p-8 transition-transform duration-300 transform border border-gray-200 rounded-lg shadow-lg bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 hover:scale-105">
                        <img src={OilChange} alt="Offer 1" className="object-cover w-full h-40 mb-4 rounded-lg" />
                        <h3 className="text-xl font-semibold text-black">Oil Change Special</h3>
                        <p className="mt-4 text-5xl font-extrabold" style={{ color: '#006AFF' }}>20% Off</p>
                        <p className="mt-4 text-gray-600">Get a complete oil change and inspection at 20% off. Ensure your engine runs smoothly!</p>
                    </div>
                </Link>

                <Link to ="/Offers">
                    <div className="p-8 transition-transform duration-300 transform border border-gray-200 rounded-lg shadow-lg bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 hover:scale-105">
                        <img src={BrakeService} alt="Offer 2" className="object-cover w-full h-40 mb-4 rounded-lg" />
                        <h3 className="text-xl font-semibold text-black">Brake Service Discount</h3>
                        <p className="mt-4 text-5xl font-extrabold" style={{ color: '#006AFF' }}>15% Off</p>
                        <p className="mt-4 text-gray-600">Save 15% on all brake services to ensure your safety on the road.</p>
                    </div>
                </Link>

                <Link to ="/Offers">
                    <div className="p-8 transition-transform duration-300 transform border border-gray-200 rounded-lg shadow-lg bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 hover:scale-105">
                        <img src={TireRotation} alt="Offer 3" className="object-cover w-full h-40 mb-4 rounded-lg" />
                        <h3 className="text-xl font-semibold text-black">Free Tire Rotation</h3>
                        <p className="mt-4 text-5xl font-extrabold" style={{ color: '#006AFF' }}>Free</p>
                        <p className="mt-4 text-gray-600">Get a free tire rotation with any full-service maintenance package.</p>
                    </div>
                </Link>
                
                <Link to ="/Offers">    
                    <div className="p-8 transition-transform duration-300 transform border border-gray-200 rounded-lg shadow-lg bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 hover:scale-105">
                        <img src={BatteryCheck} alt="Offer 4" className="object-cover w-full h-40 mb-4 rounded-lg" />
                        <h3 className="text-xl font-semibold text-black">Battery Check & Discount</h3>
                        <p className="mt-4 text-5xl font-extrabold" style={{ color: '#006AFF' }}>10% Off</p>
                        <p className="mt-4 text-gray-600">Get 10% off on battery replacement and a free battery check-up.</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Offer
