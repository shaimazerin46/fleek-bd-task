import { IoIosArrowDown } from 'react-icons/io';
import bannerImg from '../../assets/banner.jpg'
import { CiCloud, CiLocationOn } from 'react-icons/ci';
import { TbChartBarPopular } from 'react-icons/tb';

const Banner = () => {
    return (
        <div style={{ 
            backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${bannerImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} className='h-[600px] flex '>

           <div className="w-7xl mx-auto space-y-5 mt-45">
           <div className='text-white space-x-5'>
                <span>Explore</span>
                <span>Adventure</span>
                <span>Journey</span>
                <span>Wanderlust</span>
            </div>
            <h5 className='font-bold text-4xl text-yellow-400'>Explore the unseen</h5>
            <h1 className='font-bold text-6xl text-white'>Discover the new way</h1>
            <p className='text-white'>Explore amazing destinations and create lasting memories with our expertly crafted tour packages today!</p>
            <button className='px-5 py-2 text-white font-bold bg-yellow-400 rounded-xl'>
                Get started now
            </button>
            <div className="w-full bg-white/50 p-5 text-gray-500 rounded-xl relative flex justify-between items-center ">
            <div className="py-3 px-5 flex justify-between w-4/5 bg-white rounded-3xl">
                    <span className='flex items-center gap-1'>Categories
                        <IoIosArrowDown />
                    </span>
                   <div className='flex gap-5'>
                   <span className='flex items-center gap-1'>Destination
                   <CiLocationOn />
                   </span>
                    <span className='flex items-center gap-1'>Popular
                    <TbChartBarPopular />
                    </span>
                    <span className='flex items-center gap-1'>Features
                    <CiCloud />

                    </span>
                    <span className='flex items-center gap-1'>Journey
                    <IoIosArrowDown />
                    </span>
                   </div>
                </div>
                <div>
                <button className='px-4 py-2 text-white bg-yellow-400 rounded-xl'>
                    Search
                </button>
                </div>
            </div>
           </div>
            </div>
    );
};

export default Banner;