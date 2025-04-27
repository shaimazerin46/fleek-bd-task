import man from '../../assets/safara/man.png'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaRegStar } from 'react-icons/fa';
import { MdDownloading } from 'react-icons/md';

const WhySafara = () => {

    const percentage = 90;
    return (
        <div className="py-20 max-w-7xl mx-auto">
             <div className="text-center w-1/2 mx-auto mb-20">
                <h3 className="font-bold text-3xl mb-3">Why <span className="text-yellow-400"> SAFARA</span> Tours</h3>
                <p>Find your perfect escape among the world’s most stunning destinations. Adventure, relaxation, and unforgettable memories await you</p>
            </div>

            <div className="grid grid-cols-5 gap-10">
                <div className="col-span-2 relative">
                    <img src={man} alt="" className='w-[450px]'/>

                    <div className='h-[110px] w-[100px] flex flex-col justify-center items-center shadow-xl absolute top-0 right-5'>
                    <CircularProgressbar 
                    value={percentage} 
                    text={`${percentage}%`} 
                    styles={buildStyles({
                        pathColor: '#03fc73',     
                        textColor: 'black',    
                        trailColor: 'transparent',   
                      })}
                      className='h-15 w-15'
                    />
                       <span className='text-sm font-bold'>Success rate</span> 
                    </div>
                    <div className='h-7 w-7 rounded-full bg-blue-400 absolute top-0 right-0 text-white flex justify-center items-center'>
                    <MdDownloading />
                    </div>
                </div>


                <div className='col-span-3 space-y-10'>
                    <div className='flex gap-5'>
                        <div className='h-[100px] w-[150px] shadow-sm shadow-yellow-300 flex flex-col justify-center items-center space-y-1'>
                        <h3 className='font-bold text-xl'>480K</h3>
                        <p className='text-sm'>Lorem, ipsum dolor.</p>
                        </div>
                        <div className='h-[100px] w-[150px] shadow-sm shadow-yellow-300 flex flex-col justify-center items-center space-y-1'>
                        <h3 className='font-bold text-xl'>2K +</h3>
                        <p className='text-sm'>Lorem, ipsum dolor.</p>
                        </div>
                        <div className='h-[100px] w-[150px] shadow-sm shadow-yellow-300 flex flex-col justify-center items-center space-y-1'>
                        <h3 className='font-bold text-xl flex items-center gap-1'>
                        <span className='text-yellow-300'>
                        <FaRegStar />
                        </span>
                            4.7
                            </h3>
                        <p className='text-sm'>Lorem, ipsum dolor.</p>
                        </div>
                    </div>

                    <p className='text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus voluptatem tempore itaque magni quasi voluptate obcaecati explicabo odit ea libero dolorum, temporibus mollitia cum vel nesciunt at nobis minima inventore magnam maxime. Mollitia ratione quo voluptate, laboriosam est provident voluptates numquam quis aspernatur sit eum dolorum dolor maxime pariatur commodi dolorem quas blanditiis at facere. Voluptatem expedita ducimus explicabo laborum voluptate consequatur, amet, illo reprehenderit quidem nam sunt aperiam natus iusto enim eveniet, cum culpa fuga minima! Amet voluptatem quod neque maxime odit sed obcaecati veniam doloremque suscipit, sit quisquam dolor, iusto labore molestiae deleniti, harum eum. Non, repudiandae quibusdam?</p>
                </div>

            </div>
        </div>
    );
};

export default WhySafara;