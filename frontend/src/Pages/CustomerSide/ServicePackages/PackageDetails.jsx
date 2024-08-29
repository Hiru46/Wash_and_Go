import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import HomeNavbar from '../../../components/NavBar/HomeNavbar';
import Footer from '../../../components/Footer/Footer';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import pkg1 from '../../../assets/Packages/pkg1.jpeg';
import pkg1_1 from '../../../assets/Packages/Pkg1/pkg1_1.jpeg';
import pkg1_2 from '../../../assets/Packages/Pkg1/pkg1_2.jpeg';
import pkg1_3 from '../../../assets/Packages/Pkg1/pkg1_3.jpeg';
import pkg2 from '../../../assets/Packages/pkg2.jpeg';
import pkg3 from '../../../assets/Packages/pkg3.jpeg';
import pkg4 from '../../../assets/Packages/pkg4.jpeg';
import pkg5 from '../../../assets/Packages/pkg5.jpeg';
import pkg6 from '../../../assets/Packages/pkg6.jpeg';

const packages = [
    {
        id: 1,
        image1: pkg1,
        image2: pkg1_2,
        image3: pkg1_3,
        title: 'Basic Service Package',
        description: 'A comprehensive package for basic vehicle maintenance.',
        services: ['Oil Change', 'Tire Rotation', 'Brake Inspection'],
        estimatedTime: '2 Hours',
        price: 'RS 16000'
    },
    {
        id: 2,
        image1: pkg2,
        title: 'Premium Service Package',
        description: 'Enhanced package with additional services for your vehicle.',
        services: ['Oil Change', 'Tire Rotation', 'Brake Inspection', 'Battery Check'],
        estimatedTime: '3 Hours',
        price: 'RS 25000'
    },
    {
        id: 3,
        image1: pkg3,
        title: 'Ultimate Service Package',
        description: 'The ultimate package for complete vehicle care.',
        services: ['Oil Change', 'Tire Rotation', 'Brake Inspection', 'Battery Check', 'Engine Tune-Up'],
        estimatedTime: '4 Hours',
        price: 'RS 35000'
    },
    {
        id: 4,
        image1: pkg4,
        title: 'Express Service Package',
        description: 'Quick and efficient service for busy schedules.',
        services: ['Oil Change', 'Tire Rotation'],
        estimatedTime: '1 Hour',
        price: 'RS 10000'
    },
    {
        id: 5,
        image1: pkg5,
        title: 'Winter Service Package',
        description: 'Prepare your vehicle for winter conditions.',
        services: ['Oil Change', 'Tire Rotation', 'Brake Inspection', 'Antifreeze Check'],
        estimatedTime: '3 Hours',
        price: 'RS 28000'
    },
    {
        id: 6,
        image1: pkg6,
        title: 'Summer Service Package',
        description: 'Get your vehicle ready for summer travels.',
        services: ['Oil Change', 'Tire Rotation', 'Brake Inspection', 'Air Conditioning Check'],
        estimatedTime: '3 Hours',
        price: 'RS 27000'
    }
];

function PackageDetails() {
    const { id } = useParams();
    const pkg = packages.find(p => p.id === parseInt(id));

    const [open, setOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    if (!pkg) {
        return <div>Package not found</div>;
    }

    const images = [
        { src: pkg.image1 },
        { src: pkg.image2 },
        { src: pkg.image3 },
    ];

    const handleImageClick = (index) => {
        setCurrentImage(index);
        setOpen(true);
    };

    return (
        <div className="bg-gray-50">
            <HomeNavbar />
            <div className="container mx-auto p-6">
                <h1 className="text-5xl font-extrabold text-center my-8 text-blue-800">{pkg.title}</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <img
                        src={pkg.image1}
                        alt={pkg.title}
                        className="w-full h-auto object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                        onClick={() => handleImageClick(0)}
                    />
                    <div className="flex flex-col justify-center">
                        <p className="text-lg text-gray-700 mb-4">{pkg.description}</p>
                        <ul className="list-disc list-inside space-y-3 mb-6">
                            {pkg.services.map((service, idx) => (
                                <li key={idx} className="bg-gray-100 p-2 rounded">{service}</li>
                            ))}
                        </ul>
                        <p className="text-lg text-gray-700 mb-2"><strong>Estimated Time:</strong> {pkg.estimatedTime}</p>
                        <p className="text-lg text-gray-700 mb-6"><strong>Full Price:</strong> {pkg.price}</p>
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300">
                            Make an Appointment
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
                    <div className="order-last lg:order-first flex flex-col justify-center">
                        <p className="text-lg text-gray-700 mb-4">{pkg.description}</p>
                        <ul className="list-disc list-inside space-y-3 mb-6">
                            {pkg.services.map((service, idx) => (
                                <li key={idx} className="bg-gray-100 p-2 rounded">{service}</li>
                            ))}
                        </ul>
                        <p className="text-lg text-gray-700 mb-2"><strong>Estimated Time:</strong> {pkg.estimatedTime}</p>
                        <p className="text-lg text-gray-700 mb-6"><strong>Full Price:</strong> {pkg.price}</p>
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300">
                            Make an Appointment
                        </button>
                    </div>
                    <img
                        src={pkg.image2}
                        alt={pkg.title}
                        className="w-full h-auto object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                        onClick={() => handleImageClick(1)}
                    />
                </div>

                <div className="mt-10">
                    <img
                        src={pkg.image3}
                        alt={pkg.title}
                        className="w-full h-auto object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                        onClick={() => handleImageClick(2)}
                    />
                </div>
            </div>
            <Footer />

            {/* Lightbox Component */}
            {open && (
                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    slides={images}
                    index={currentImage}
                />
            )}
        </div>
    );
}

export default PackageDetails;
