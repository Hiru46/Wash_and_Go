import React from 'react';
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='w-full mx-auto py-8 px-4 md:py-16 md:px-8 bg-black text-gray-300'>
            <div className='grid gap-8 md:grid-cols-3'>
                <div>
                    <h1 className='text-4xl  font-bold text-[#c42703]'>Wash And Go.</h1>
                    <p className='py-4 text-sm md:text-base'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
                    <div className='flex flex-wrap justify-start md:justify-between space-x-4 md:space-x-6 my-6'>
                        <FaFacebookSquare size={30} />
                        <FaInstagram size={30} />
                        <FaTwitterSquare size={30} />
                        <FaGithubSquare size={30} />
                        <FaDribbbleSquare size={30} />
                    </div>
                </div>
                <div className='ml-[10%]  grid grid-cols-2 gap-8 md:grid-cols-4 md:col-span-2'>
                    <div>
                        <h6 className='font-medium text-[#c42703] mb-2 text-2xl'>Solutions</h6>
                        <ul className='space-y-4'>
                            <li className='text-sm'>Analytics</li>
                            <li className='text-sm'>Marketing</li>
                            <li className='text-sm'>Commerce</li>
                            <li className='text-sm'>Insights</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-medium text-[#c42703] mb-2 text-2xl'>Support</h6>
                        <ul className='space-y-4'>
                            <li className='text-sm'>Pricing</li>
                            <li className='text-sm'>Documentation</li>
                            <li className='text-sm'>Guides</li>
                            <li className='text-sm'>API Status</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-medium text-[#c42703] mb-2 text-2xl'>Company</h6>
                        <ul className='space-y-4'>
                            <li className='text-sm'>About</li>
                            <li className='text-sm'>Blog</li>
                            <li className='text-sm'>Jobs</li>
                            <li className='text-sm'>Press</li>

                        </ul>
                    </div>
                    <div>
                        <h6 className='font-medium text-[#c42703] mb-2 text-2xl'>Legal</h6>
                        <ul className='space-y-4'>
                            <li className='text-sm'>Claim</li>
                            <li className='text-sm'>Policy</li>
                            <li className='text-sm'>Terms</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
