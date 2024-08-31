import React from "react";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import About5 from "../../assets/Home/About5.jpg"
import About7 from "../../assets/Home/About7.jpg"
import About4 from "../../assets/Home/About4.jpg"

function PackageSection() {
    return (
        <div className="w-full h-[100vh] p-5 bg-gray-100 flex flex-col">
            {/* Main Content Section */}
            <div className="w-full md:w-[95%] mx-auto flex-1 flex flex-col md:flex-row justify-between   ">
                {/* Service Cards */}
                <div className="w-full md:w-[48%] mb-6 md:mb-0  rounded-lg overflow-hidden flex-grow ">
                    <div className="grid h-full grid-cols-1 gap-4 p-4 md:grid-cols-2">
                        <div className="p-4 transition-transform duration-300 ease-in-out rounded-lg shadow-md bg-gradient-to-r from-slate-200 via-gray-100 to-slate-200 hover:scale-95 ">
                            <h1 className="animated-text text-xl md:text-2xl font-bold text-center text-[#006AFF]">
                                Nano Treatments
                            </h1>
                            <div className="p-2">
                                <div className="font-semibold text-gray-700">
                                    Nanotechnology enhances surface durability by filling microscopic holes with a repelling agent, creating a waterproof barrier that resists water, UV rays, and harmful chemicals.
                                </div>
                                <ul className=" mt-2 font-bold text-gray-700">
                                    <div className="flex items-center py-2">
                                        <span className="text-[#386097] text-2xl">
                                            {/* Replace with custom SVG icon */}
                                            <AiTwotoneThunderbolt />
                                        </span>
                                        <li className="ml-2">RESISTANCE</li>
                                    </div>
                                    <div className="flex items-center py-2">
                                        <span className="text-[#386097] text-2xl">
                                            <AiTwotoneThunderbolt />
                                        </span>
                                        <li className="ml-2">DURABILITY</li>
                                    </div>
                                    <div className="flex items-center py-2">
                                        <span className="text-[#386097] text-2xl">
                                            <AiTwotoneThunderbolt />
                                        </span>
                                        <li className="ml-2">EFFECT</li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        <div className="p-4 transition-transform duration-300 ease-in-out border rounded-lg shadow-md hover:scale-95 bg-gradient-to-r from-slate-200 via-gray-100 to-slate-200 ">
                            <h1 className="animated-text text-xl md:text-2xl font-bold text-center text-[#006AFF]">
                                ENGINE TUNE-UPS
                            </h1>
                            <div className="p-2">
                                <div className="font-semibold text-gray-700">
                                    Engine tune-ups improve efficiency, reduce emissions, and extend vehicle life by inspecting components like spark plugs, oil filters, and optimizing overall engine performance.
                                </div>
                                <ul className="mt-2 font-bold text-gray-700">
                                    <div className="flex items-center py-2">
                                        <span className="text-[#386097] text-2xl">
                                            <AiTwotoneThunderbolt />
                                        </span>
                                        <li className="ml-2">Intake Manifold De-carbonizing</li>
                                    </div>
                                    <div className="flex items-center py-2">
                                        <span className="text-[#386097] text-2xl">
                                            <AiTwotoneThunderbolt />
                                        </span>
                                        <li className="ml-2">Spark Plug Check & inspection</li>
                                    </div>
                                    <div className="flex items-center py-2">
                                        <span className="text-[#386097] text-2xl">
                                            <AiTwotoneThunderbolt />
                                        </span>
                                        <li className="ml-2">
                                            Ignition Coil Inspection
                                        </li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        <div className="p-4 transition-transform duration-300 ease-in-out border rounded-lg shadow-md hover:scale-95 bg-gradient-to-r from-slate-200 via-gray-100 to-slate-200 ">
                            <h1 className="animated-text text-xl md:text-2xl font-bold text-center text-[#006AFF]">
                                LUBE SERVICES
                            </h1>
                            <div className="p-2">
                                <div className="font-semibold text-gray-700">
                                    Car lubrication services involve replacing oils, inspecting the lubrication system, and ensuring functionality to keep the engine healthy, efficient, and safe, including oil changes.
                                </div>
                                <ul className="mt-2 font-bold text-gray-700">
                                    <div className="flex items-center py-2">
                                        <span className="text-[#386097] text-2xl">
                                            <AiTwotoneThunderbolt />
                                        </span>
                                        <li className="ml-2">Inspections of the oil tank</li>
                                    </div>
                                    <div className="flex items-center py-2">
                                        <span className="text-[#386097] text-2xl">
                                            <AiTwotoneThunderbolt />
                                        </span>
                                        <li className="ml-2">Fluid change</li>
                                    </div>
                                    <div className="flex items-center py-2">
                                        <span className="text-[#386097] text-2xl">
                                            <AiTwotoneThunderbolt />
                                        </span>
                                        <li className="ml-2">New oil filter</li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        <div className="p-4 transition-transform duration-300 ease-in-out rounded-lg shadow-md bg-gradient-to-r from-slate-200 via-gray-100 to-slate-200 hover:scale-95">
                            <h1 className="animated-text text-xl md:text-2xl font-bold text-center text-[#006AFF]">
                                Wheel Alignment
                            </h1>
                            <div className="p-2">
                                <div className="font-semibold text-gray-700">

                                    Proper wheel alignment ensures even tyre wear and optimal performance.
                                    Modern four-wheel alignment is necessary for today's vehicles, including both front and rear-wheel drives.
                                </div>
                                <ul className="mt-2 font-bold text-gray-700">
                                    <div className="flex items-center py-2">
                                        <span className="text-[#386097] text-2xl">
                                            <AiTwotoneThunderbolt />
                                        </span>
                                        <li className="ml-2">
                                            Safe, predictable vehicle control
                                        </li>
                                    </div>
                                    <div className="flex items-center py-2">
                                        <span className="text-[#386097] text-2xl">
                                            <AiTwotoneThunderbolt />
                                        </span>
                                        <li className="ml-2">Improved fuel efficiency</li>
                                    </div>
                                    <div className="flex items-center py-2">
                                        <span className="text-[#386097] text-2xl">
                                            <AiTwotoneThunderbolt />
                                        </span>
                                        <li className="ml-2">Smooth and comfortable ride</li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image and CTA Section */}
                <div className=" w-[48%] h-auto   ">
                    <div
                        className="relative w-full h-[58%] bg-cover rounded-lg shadow-lg mt-4"
                        style={{ backgroundImage: `url(${About7})` }}
                    >
                        <div className="absolute inset-0 flex items-center justify-center bg-black rounded-,d bg-opacity-30">

                        </div>
                    </div>
                    <div className="w-full p-6 mt-5 bg-gradient-to-r from-white via-gray-100 to-white shadow-2xl rounded-lg h-[35%]">
                        <div className="text-2xl font-bold text-center text-gray-800 md:text-3xl">
                            We provide a comprehensive array of service packages...
                        </div>
                        <div className="mt-4 text-lg text-center text-gray-600 md:text-xl">
                            Our offerings go beyond the basics to ensure that your vehicle
                            receives the best care possible...
                        </div>
                        <div className="flex justify-center w-full mt-4">
                            <button className="view-more-btn px-6 py-3 md:px-8 md:py-4 bg-[#006AFF] text-white font-bold rounded-sm transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                                View More
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default PackageSection;
