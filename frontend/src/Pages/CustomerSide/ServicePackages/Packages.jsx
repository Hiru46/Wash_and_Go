import React from 'react';
import { Link } from 'react-router-dom';
import HomeNavbar from '../../../components/NavBar/HomeNavbar';
import Footer from '../../../components/Footer/Footer';
import pkg1 from '../../../assets/Packages/pkg1.jpeg';
import pkg2 from '../../../assets/Packages/pkg2.jpeg';
import pkg3 from '../../../assets/Packages/pkg3.jpeg';
import pkg4 from '../../../assets/Packages/pkg4.jpeg';
import pkg5 from '../../../assets/Packages/pkg5.jpeg';
import pkg6 from '../../../assets/Packages/pkg6.jpeg';

function Packages() {
    const packages = [
        {
            id: 1,
            image: pkg1,
            title: 'Basic Service Package',
            description: 'A comprehensive package for basic vehicle maintenance.',
            services: ['Oil Change', 'Tire Rotation', 'Brake Inspection'],
            estimatedTime: '2 Hours',
            price: 'RS 16000'
        },
        {
            id: 2,
            image: pkg2,
            title: 'Premium Service Package',
            description: 'Enhanced package with additional services for your vehicle.',
            services: ['Oil Change', 'Tire Rotation', 'Brake Inspection', 'Battery Check'],
            estimatedTime: '3 Hours',
            price: 'RS 25000'
        },
        {
            id: 3,
            image: pkg3,
            title: 'Ultimate Service Package',
            description: 'The ultimate package for complete vehicle care.',
            services: ['Oil Change', 'Tire Rotation', 'Brake Inspection', 'Battery Check', 'Engine Tune-Up'],
            estimatedTime: '4 Hours',
            price: 'RS 35000'
        },
        {
            id: 4,
            image: pkg4,
            title: 'Express Service Package',
            description: 'Quick and efficient service for busy schedules.',
            services: ['Oil Change', 'Tire Rotation'],
            estimatedTime: '1 Hour',
            price: 'RS 10000'
        },
        {
            id: 5,
            image: pkg5,
            title: 'Winter Service Package',
            description: 'Prepare your vehicle for winter conditions.',
            services: ['Oil Change', 'Tire Rotation', 'Brake Inspection', 'Antifreeze Check'],
            estimatedTime: '3 Hours',
            price: 'RS 28000'
        },
        {
            id: 6,
            image: pkg6,
            title: 'Summer Service Package',
            description: 'Get your vehicle ready for summer travels.',
            services: ['Oil Change', 'Tire Rotation', 'Brake Inspection', 'Air Conditioning Check'],
            estimatedTime: '3 Hours',
            price: 'RS 27000'
        }
    ];

    return (
        <div>
            <HomeNavbar />

            <div>
                <h1 className='w-full text-center mt-28 font-bold text-4xl'>Service Packages</h1>
            </div>
            <div className='mx-20'>
                <h1 className='w-full text-justify mt-10 text-lg'>
                    Our service packages cater to various vehicle maintenance needs, from basic routine maintenance to 
                    comprehensive inspections and diagnostics. Each package includes essential services to keep your 
                    vehicle in top condition, enhance its performance, and ensure your safety on the road. Whether you 
                    need a simple oil change and tire rotation or a detailed inspection and engine diagnostics, our 
                    packages offer the flexibility and quality you need for peace of mind.
                </h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mx-16 p-16 h-fit my-12 bg-blue-100">
                {packages.map((pkg) => (
                    <Link to={`/packages/${pkg.id}`} key={pkg.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl">
                        <img src={pkg.image} alt={pkg.title} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-2 text-gray-800">{pkg.title}</h3>
                            <p className="text-gray-600 mb-4">{pkg.description}</p>
                            <ul className="list-disc list-inside">
                                {pkg.services.map((service, idx) => (
                                    <li key={idx} className="bg-gray-100 p-2 rounded mb-2">{service}</li>
                                ))}
                            </ul>
                        </div>
                    </Link>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Packages;
