import React from 'react';
import { useParams } from 'react-router-dom';
import HomeNavbar from '../../../components/NavBar/HomeNavbar_LoggedIn';
import Footer from '../../../components/Footer/Footer';
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
        images: [pkg1, pkg1_1, pkg1_2, pkg1_3],
        title: 'Basic Service Package',
        description: 'A comprehensive package for basic vehicle maintenance, designed to keep your car in top condition.',
        services: ['Oil Change', 'Tire Rotation', 'Brake Inspection'],
        estimatedTime: '2 Hours',
        price: 'RS 16000',
    },
    {
        id: 2,
        images: [pkg2, pkg1_1, pkg1_2, pkg1_3],
        title: 'Premium Service Package',
        description: 'Enhanced package with additional services for your vehicle.',
        services: ['Oil Change', 'Tire Rotation', 'Brake Inspection', 'Battery Check'],
        estimatedTime: '3 Hours',
        price: 'RS 25000'
    },
    {
        id: 3,
        images: [pkg3, pkg1_1, pkg1_2, pkg1_3],
        title: 'Ultimate Service Package',
        description: 'The ultimate package for complete vehicle care.',
        services: ['Oil Change', 'Tire Rotation', 'Brake Inspection', 'Battery Check', 'Engine Tune-Up'],
        estimatedTime: '4 Hours',
        price: 'RS 35000'
    },
    {
        id: 4,
        images: [pkg4, pkg1_1, pkg1_2, pkg1_3],
        title: 'Express Service Package',
        description: 'Quick and efficient service for busy schedules.',
        services: ['Oil Change', 'Tire Rotation'],
        estimatedTime: '1 Hour',
        price: 'RS 10000'
    },
    {
        id: 5,
        images: [pkg5, pkg1_1, pkg1_2, pkg1_3],
        title: 'Winter Service Package',
        description: 'Prepare your vehicle for winter conditions.',
        services: ['Oil Change', 'Tire Rotation', 'Brake Inspection', 'Antifreeze Check'],
        estimatedTime: '3 Hours',
        price: 'RS 28000'
    },
    {
        id: 6,
        images: [pkg6, pkg1_1, pkg1_2, pkg1_3],
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

    if (!pkg) {
        return <div>Package not found</div>;
    }

    return (
        <div className="bg-gray-100">
            <HomeNavbar />
            <div className="container mx-auto py-16 px-4">
                {/* Hero Section */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
                    <div className="relative">
                        <img src={pkg.images[0]} alt={pkg.title} className="w-full h-96 object-cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <h1 className="text-5xl font-bold text-blue-50">{pkg.title}</h1>
                        </div>
                    </div>
                </div>

                {/* Service Details */}
                <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                    <h2 className="text-3xl font-semibold mb-4">Service Details</h2>
                    <p className="text-gray-700 mb-8">{pkg.description}</p>
                    <h3 className="text-xl font-semibold mb-2">What's Included:</h3>
                    <ul className="list-disc list-inside mb-8">
                        {pkg.services.map((service, idx) => (
                            <li key={idx} className="text-gray-700 mb-2">{service}</li>
                        ))}
                    </ul>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <h4 className="font-semibold">Estimated Time:</h4>
                            <p>{pkg.estimatedTime}</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <h4 className="font-semibold">Price:</h4>
                            <p>{pkg.price}</p>
                        </div>
                    </div>
                    <div className="text-center mt-8">
                        <button className="bg-blue-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
                            Make an Appointment
                        </button>
                    </div>
                </div>

                {/* Images */}
                <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {pkg.images.slice(1).map((image, idx) => (
                            <img key={idx} src={image} alt={`Service Image ${idx + 1}`} className="w-full h-64 object-cover rounded-lg shadow-lg" />
                        ))}
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}

export default PackageDetails;
