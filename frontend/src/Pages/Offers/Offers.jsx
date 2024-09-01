import HomeNavbar from "../../components/NavBar/HomeNavbar";
import Footer from "../../components/Footer/Footer"
import offer1 from "../../assets/Offers/offer1.jpeg";
import offer2 from "../../assets/Offers/offer2.jpeg";
import offer3 from "../../assets/Offers/offer3.jpeg";
import offer4 from "../../assets/Offers/offer4.jpeg";
import offer5 from "../../assets/Offers/offer5.jpeg";



function Offers(){

    return(

        <>
            <HomeNavbar/>

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
                
                {/*Box 1*/}
                <div className="
                    p-10 bg-slate-200 w-[1080px] ml-[150px] mb-[100px] rounded-lg shadow-2xl cursor-pointer	
                    ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 duration-300
                    ">
                    <div className="grid w-full grid-cols-2 gap-5">
                        <div className="w-full h-full">
                            <img 
                                src={offer1}
                                alt="offer1" 
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="w-full h-full">
                            <h3 className="my-10 font-sans text-3xl font-bold tracking-wide text-center uppercase">
                                Get 50% OFF on Oil Change Services!
                            </h3>

                            <p className="mb-20 font-sans text-xl text-justify">
                                Drive into savings with our limited-time offer! 
                                Enjoy a 50% discount on your next oil change at Wash and Go Service Center. 
                                Whether you're cruising in a luxury vehicle or an SUV, our expert technicians 
                                will ensure your car runs smoothly. 
                                Don't miss out on this incredible deal because when it comes to your car, 
                                only the best will do. Be Fit Be Quick with Wash and Go Service Center!
                            </p>
                        </div>
                    </div>
                </div>

                {/*Box 2*/}
                <div className="
                    p-10 bg-slate-200 w-[1080px] ml-[150px] mb-[100px] rounded-lg shadow-2xl cursor-pointer	
                    ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 duration-300
                    ">
                    <div className="grid w-full grid-cols-2 gap-5">
                        <div className="w-full h-full">
                            <img 
                                src={offer2}
                                alt="offer1" 
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="w-full h-full">
                            <h3 className="my-10 font-sans text-3xl font-bold tracking-wide text-center uppercase">
                                Get 50% OFF on Oil Change Services!
                            </h3>

                            <p className="mb-20 font-sans text-xl text-center">
                                Drive into savings with our limited-time offer! 
                                Enjoy a 50% discount on your next oil change at Wash and Go Service Center. 
                                Whether you're cruising in a luxury vehicle or an SUV, our expert technicians 
                                will ensure your car runs smoothly. 
                                Don't miss out on this incredible deal because when it comes to your car, 
                                only the best will do. Be Fit Be Quick with Wash and Go Service Center!
                            </p>
                        </div>
                    </div>
                </div>

                {/*Box 3*/}
                <div className="
                    p-10 bg-slate-200 w-[1080px] ml-[150px] mb-[100px] rounded-lg shadow-2xl cursor-pointer	
                    ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 duration-300
                    ">
                    <div className="grid w-full grid-cols-2 gap-5">
                        <div className="w-full h-full">
                            <img 
                                src={offer3}
                                alt="offer3" 
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="w-full h-full">
                            <h3 className="my-10 font-sans text-3xl font-bold tracking-wide text-center uppercase">
                                Get 50% OFF on Oil Change Services!
                            </h3>

                            <p className="mb-20 font-sans text-xl text-center">
                                Drive into savings with our limited-time offer! 
                                Enjoy a 50% discount on your next oil change at Wash and Go Service Center. 
                                Whether you're cruising in a luxury vehicle or an SUV, our expert technicians 
                                will ensure your car runs smoothly. 
                                Don't miss out on this incredible deal because when it comes to your car, 
                                only the best will do. Be Fit Be Quick with Wash and Go Service Center!
                            </p>
                        </div>
                    </div>
                </div>


                {/*Box 4*/}
                <div className="
                    p-10 bg-slate-200 w-[1080px] ml-[150px] mb-[100px] rounded-lg shadow-2xl cursor-pointer	
                    ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 duration-300
                    ">
                    <div className="grid w-full grid-cols-2 gap-5">
                        <div className="w-full h-full">
                            <img 
                                src={offer4}
                                alt="offer4" 
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="w-full h-full">
                            <h3 className="my-10 font-sans text-3xl font-bold tracking-wide text-center uppercase">
                                Get 50% OFF on Oil Change Services!
                            </h3>

                            <p className="mb-20 font-sans text-xl text-center">
                                Drive into savings with our limited-time offer! 
                                Enjoy a 50% discount on your next oil change at Wash and Go Service Center. 
                                Whether you're cruising in a luxury vehicle or an SUV, our expert technicians 
                                will ensure your car runs smoothly. 
                                Don't miss out on this incredible deal because when it comes to your car, 
                                only the best will do. Be Fit Be Quick with Wash and Go Service Center!
                            </p>
                        </div>
                    </div>
                </div>


                {/*Box 5*/}
                <div className="
                    p-10 bg-slate-200 w-[1080px] ml-[150px] mb-[100px] rounded-lg shadow-2xl cursor-pointer	
                    ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 duration-300
                    ">
                    <div className="grid w-full grid-cols-2 gap-5">
                        <div className="w-full h-full">
                            <img 
                                src={offer5}
                                alt="offer5" 
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="w-full h-full">
                            <h3 className="my-10 font-sans text-3xl font-bold tracking-wide text-center uppercase">
                                Get 50% OFF on Oil Change Services!
                            </h3>

                            <p className="mb-20 font-sans text-xl text-center">
                                Drive into savings with our limited-time offer! 
                                Enjoy a 50% discount on your next oil change at Wash and Go Service Center. 
                                Whether you're cruising in a luxury vehicle or an SUV, our expert technicians 
                                will ensure your car runs smoothly. 
                                Don't miss out on this incredible deal because when it comes to your car, 
                                only the best will do. Be Fit Be Quick with Wash and Go Service Center!
                            </p>
                        </div>
                    </div>
                </div>

            </div>


            <Footer/>
        
        </>

    );
}

export default Offers