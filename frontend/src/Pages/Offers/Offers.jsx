import { useEffect, useState } from 'react';
import axios from 'axios';
import HomeNavbar from "../../components/NavBar/HomeNavbar";
import Footer from "../../components/Footer/Footer";

function Offers() {
    const [offers, setOffers] = useState([]);
    const BASE_URL = 'http://localhost:5000'; // Base URL for images

    useEffect(() => {
        const fetchOffers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/offers');
                setOffers(response.data.offers); // Assuming response.data.offers is an array of offers
            } catch (error) {
                console.error('Failed to fetch offers:', error);
            }
        };

        fetchOffers();
    }, []);

    return (
        <>
            <HomeNavbar />

            <div className="mt-40 offer-container">
                <div className="offer-description">
                    <div className="topic">
                        <h1 className="font-sans text-5xl font-bold tracking-wide text-center uppercase">
                            Unlock Exclusive Savings: <br />Your Ultimate Guide to Our Offers Page
                        </h1>
                    </div>

                    <div className="mx-8 mt-10 description">
                        <p className="font-sans text-2xl text-justify cursor-pointer mb-52 hover:font-semibold">
                            Discover unbeatable deals and discounts on a wide range of car services at our service center! 
                            Our Offers Page is your one-stop destination for the latest promotions, 
                            designed to keep your vehicle in top condition without breaking the bank.
                            From seasonal maintenance packages to limited-time discounts on essential services like oil changes, 
                            brake repairs, and wheel alignments, we’ve got something for every car owner. 
                        </p>
                    </div>
                </div>

                {offers.map((offer, index) => (
                    <div
                        key={index}
                        className="p-10 bg-slate-200 w-[1080px] ml-[200px] mb-[100px] rounded-lg shadow-2xl cursor-pointer
                        ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 duration-300"
                    >
                        <div className="grid w-full grid-cols-2 gap-5">
                            <div className="w-full h-full">
                                
                                <img 
                                    src={`${BASE_URL}/${offer.imageUrl}`} // Construct the image URL correctly
                                    alt="Vehicle Service Offer" 
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="flex flex-col justify-center w-full h-full">
                                <h3 className="my-10 font-sans text-3xl font-bold tracking-wide text-center uppercase topic">
                                    {offer.title}
                                </h3>
                                <h1 className="p-4 text-4xl font-bold text-center text-white bg-red-600 rounded-full shadow-lg discount-percentage">
                                    {offer.discountPercentage}% OFF
                                </h1>
                                <p className="mt-5 font-sans text-xl text-justify description">
                                    {offer.description}
                                </p>
                                <p className="p-4 mt-8 font-sans text-lg font-bold text-center text-blue-600 uppercase rounded ">
                                    Valid from {new Date(offer.startDate).toLocaleDateString()} to <br /> {new Date(offer.expirationDate).toLocaleDateString()}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Footer />
        </>
    );
}

export default Offers;
