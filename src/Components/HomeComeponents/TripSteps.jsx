import { CiLocationOn } from "react-icons/ci";
import { FaHeart, FaPlaneDeparture } from "react-icons/fa";
import { GoCheckCircleFill } from "react-icons/go";
import { MdLocationPin } from "react-icons/md";
import woman from '../../assets/Steps/woman.png'
import help from '../../assets/Steps/help.jpg'
import { AiOutlineLike } from "react-icons/ai";


const TripSteps = () => {
    return (
        <div className="max-w-7xl mb-20 mx-auto grid grid-cols-1 md:grid-cols-2 h-[400px]">

            {/* text section */}
            <div className="space-y-10">
                <h3 className="text-3xl font-bold">Start your dream trip in just 3 steps</h3>

                <div className="flex gap-3">
                    <div className="h-[50px] rounded-md w-[60px] bg-yellow-400 text-white text-4xl flex justify-center items-center">
                    <MdLocationPin />
                    </div>
                    <div>
                        <h2 className="font-bold">Choose Your Destination</h2>
                        <p className="text-sm w-[350px]">Browse and select your dream location from our curated tour packages.</p>
                    </div>
                </div>

                <div className="flex gap-3">
                    <div className="h-[50px] rounded-md w-[60px] bg-orange-500 text-white text-4xl flex justify-center items-center">
                    <GoCheckCircleFill />
                    </div>
                    <div>
                        <h2 className="font-bold">Fill in Details</h2>
                        <p className="text-sm w-[350px]">Provide your travel dates, number of travelers, and any special requests.</p>
                    </div>
                </div>

                <div className="flex gap-3">
                    <div className="h-[50px] rounded-md w-[60px] bg-teal-600 text-white text-4xl flex justify-center items-center">
                    <FaPlaneDeparture />
                    </div>
                    <div>
                        <h2 className="font-bold">Confirm & Enjoy</h2>
                        <p className="text-sm w-[350px]">Make your payment securely and get ready for an unforgettable journey!</p>
                    </div>
                </div>
            </div>

            {/* image section */}
            <div className="relative">
                <img src={woman} alt="" className="h-[400px]"/>
                <div className="flex gap-1 items-center bg-yellow-400 p-2 w-[220px] rounded-md absolute bottom-10 -left-15">
                    <img src={help} alt="" className="w-10 h-10 object-cover rounded-full"/>
                    <p className="text-white text-sm">We are here to help you</p>
                </div>
                <div className="w-7 h-7 flex items-center justify-center bg-red-400 text-white text-2xl absolute top-[100px] -rotate-45">
                <FaHeart />
                </div>

                <div className="w-7 h-7 rounded-full flex items-center justify-center bg-blue-400 text-white text-2xl absolute right-15 bottom-20">
                <AiOutlineLike />
                </div>

                <div className="absolute top-0 right-10">
                    <div className="h-[90px] w-[150px] bg-gradient-to-b from-yellow-300 to-yellow-100 rounded-2xl rotate-6">

                    </div>
                    <div className="h-[75px] w-[150px] bg-white rounded-2xl flex flex-col justify-center items-center absolute top-2 left-2 ">
                        <h3 className="text-xl font-bold">2K +</h3>
                        <p className="text-sm">Tour plan</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TripSteps;