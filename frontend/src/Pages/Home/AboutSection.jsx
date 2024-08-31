import React from "react";
import { GiAutoRepair } from "react-icons/gi";
import { IoCheckmarkSharp } from "react-icons/io5";
import CountUp from 'react-countup';
import AboutSection_Img1 from "../../assets/Home/Img4.jpg";
import AboutSection_Img2 from "../../assets/Home/Img1.jpg";
import AboutSection_Img3 from "../../assets/Home/service1.jpg";
import AboutSection_Img4 from "../../assets/Home/24Offer.png";
import About5 from "../../assets/Home/About5.jpg"
import About6 from "../../assets/Home/About6.jpg"
import About8 from "../../assets/Home/About8.jpg"
import About7 from "../../assets/Home/About7.jpg"


function AboutSection() {
    return (
        <div className="h-[97vh] w-full">
            <div className="h-[80vh] w-[91%] flex mx-auto mt-[3vh]">
                <div className="h-[80vh] w-1/2 flex justify-center items-center">
                    <div
                        style={{ backgroundImage: `url(${About6})` }}
                        className="bg-cover bg-center w-full h-full "
                    >

                    </div>
                </div>

                <div className="h-[80vh] w-1/2">
                    <div className="ml-[13%]">
                        <div className="w-[32%] text-xl font-bold flex items-center mt-5">
                            <GiAutoRepair className="mx-1" /> <h1>OUR ABOUT</h1>
                            <GiAutoRepair className="mx-1" />
                        </div>

                        <div className="text-4xl font-bold w-[95%] my-5">
                            Myths About Car Repair Keeps You From Growing.
                        </div>

                        <div className="w-[80%] font-semibold">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptatibus odio voluptates temporibus adipisci autem. Ipsam
                            nemo libero eius? Adipisicing elit. Itaque neque, ex fugit quae
                            nobis qui laborum, harum cupiditate beatae est magni volu
                        </div>

                        <div className="grid grid-cols-2 gap-4 font-bold">
                            <div className="flex items-center mt-5 text-xl">
                                <IoCheckmarkSharp className="text-[#006AFF]" />
                                <div>Great Depression.</div>
                            </div>

                            <div className="flex items-center mt-5 text-xl">
                                <IoCheckmarkSharp className="text-[#006AFF]" />
                                <div>Repair Domination.</div>
                            </div>

                            <div className="flex items-center mt-5 text-xl">
                                <IoCheckmarkSharp className="text-[#006AFF]" />
                                <div>Expertise & Innovation.</div>
                            </div>

                            <div className="flex items-center mt-5 text-xl">
                                <IoCheckmarkSharp className="text-[#006AFF]" />
                                <div>Great Innovation.</div>
                            </div>

                            <div className="flex items-center mt-5 text-xl">
                                <IoCheckmarkSharp className="text-[#006AFF]" />
                                <div>Leading Industrial.</div>
                            </div>

                            <div className="flex items-center mt-5 text-xl">
                                <IoCheckmarkSharp className="text-[#006AFF]" />
                                <div>From Unlikely Sources.</div>
                            </div>

                            <div className="flex items-center mt-5 text-xl">
                                <IoCheckmarkSharp className="text-[#006AFF]" />
                                <div>Quality Immediately.</div>
                            </div>

                            <div className="flex items-center mt-5 text-xl">
                                <IoCheckmarkSharp className="text-[#006AFF]" />
                                <div>Blah Into Fantastic.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-[14.9vh] mt-[2vh] w-full bg-black flex items-center justify-center gap-[9%] text-white">
                <div className="w-[210px] text-center">
                    <div className="text-5xl font-bold text-[#54E2EB]">
                        <CountUp end={725} duration={2} suffix="+" />
                    </div>
                    <div className="text-xl font-semibold">PIONEER THROUGHS</div>
                </div>

                <div className="w-[210px] text-center">
                    <div className="text-5xl font-bold text-[#54E2EB]">
                        <CountUp end={129} duration={2} suffix="+" />
                    </div>
                    <div className="text-xl font-semibold">CLIENT EXPECTATIONS</div>
                </div>

                <div className="w-[210px] text-center">
                    <div className="text-5xl font-bold text-[#54E2EB]">
                        <CountUp end={66000} duration={2} separator="," />
                    </div>
                    <div className="text-xl font-semibold">DELIVERED PROMISES</div>
                </div>

                <div className="w-[210px] text-center">
                    <div className="text-5xl font-bold text-[#54E2EB]">
                        <CountUp end={63000} duration={2} separator="," />
                    </div>
                    <div className="text-xl font-semibold">COMPANY AWARDS</div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;
