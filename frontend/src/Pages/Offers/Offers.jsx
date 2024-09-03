import HomeNavbar from "../../components/NavBar/HomeNavbar";
import Footer from "../../components/Footer/Footer"
import offer1 from "../../assets/Offers/offer1.jpg";
import offer2 from "../../assets/Offers/offer2.jpg";
import offer3 from "../../assets/Offers/offer3.jpg";
// import offer4 from "../../assets/Offers/offer4.jpg";
// import offer5 from "../../assets/Offers/offer5.jpg";



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
                            alt="Vehicle Service Offer" 
                            className="object-cover w-full h-full"
                        />
                        </div>
                        <div className="flex flex-col justify-center w-full h-full">
                        <h3 className="my-10 font-sans text-3xl font-bold tracking-wide text-center uppercase topic">
                            Premium Vehicle Service
                        </h3>
                        <h1 className="p-4 text-4xl font-bold text-center text-white bg-red-600 rounded-full shadow-lg discount-percentage">
                            20% OFF
                        </h1>
                        <p className="mt-5 font-sans text-xl text-justify description">
                            Get a comprehensive vehicle service with a 20% discount. Our expert technicians
                            ensure that your vehicle is in top condition. This offer includes a complete
                            engine check, oil change, and tire rotation. Hurry, the offer is valid for a limited time!
                        </p>
                        <p className="p-4 mt-8 font-sans text-lg font-bold text-center text-blue-600 uppercase rounded ">
                            Valid from September 1, 2024 to <br/> September 30, 2024
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
                            alt="Vehicle Service Offer" 
                            className="object-cover w-full h-full"
                        />
                        </div>
                        <div className="flex flex-col justify-center w-full h-full">
                        <h3 className="my-10 font-sans text-3xl font-bold tracking-wide text-center uppercase topic">
                            Wheel Alignment & Tire Balancing
                        </h3>
                        <h1 className="p-4 text-4xl font-bold text-center text-white bg-red-600 rounded-full shadow-lg discount-percentage">
                            15% OFF
                        </h1>
                        <p className="mt-5 font-sans text-xl text-justify description">
                            Ensure your vehicle’s wheels are perfectly aligned and balanced with a 15% discount on our premium service.
                            Our skilled technicians use state-of-the-art equipment to guarantee smooth driving and prolong the life of your tires.
                            Don't miss out on this exclusive offer!
                        </p>
                        <p className="p-4 mt-8 font-sans text-lg font-bold text-center text-blue-600 uppercase rounded">
                            Valid from September 1, 2024 to <br/> September 30, 2024
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
                            alt="Vehicle Service Offer" 
                            className="object-cover w-full h-full"
                        />
                        </div>
                        <div className="flex flex-col justify-center w-full h-full">
                        <h3 className="my-10 font-sans text-3xl font-bold tracking-wide text-center uppercase topic">
                            Premium Car Wash Service
                        </h3>
                        <h1 className="p-4 text-4xl font-bold text-center text-white bg-red-600 rounded-full shadow-lg discount-percentage">
                            25% OFF
                        </h1>
                        <p className="mt-5 font-sans text-xl text-justify description">
                            Treat your car to a luxurious wash and shine with our premium service. For a limited time, enjoy a 25% discount.
                            Our skilled professionals will ensure your car looks spotless inside and out. Don't miss this chance to keep your vehicle gleaming!
                        </p>
                        <p className="p-4 mt-8 font-sans text-lg font-bold text-center text-blue-600 uppercase rounded">
                            Valid from September 1, 2024 to <br/> September 30, 2024
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