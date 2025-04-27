import { CiTimer } from 'react-icons/ci';
import tample from '../../assets/top-des/chinese-tample.jpg'
import cloud from '../../assets/top-des/cloud.jpg'
import kashmir from '../../assets/top-des/kashmir.jpg'
const TopPlaces = () => {
    return (
        <div>
             <div className="pb-20 max-w-7xl mx-auto">
                        <div className="text-center w-1/2 mx-auto mb-20">
                            <h3 className="font-bold text-3xl mb-3"><span className="text-yellow-400">Top </span>tour places for you</h3>
                            <p>Find your perfect escape among the world’s most stunning destinations. Adventure, relaxation, and unforgettable memories await you</p>
                        </div>
            
                        <div className="grid md:grid-cols-3 grid-cols-1">
            
                            <div className="card bg-base-100 w-96 shadow-sm space-y-3">
                                <figure>
                                    <img
                                        src={tample}
                                        alt="Tample" className='h-[250px] object-cover w-full'/>
                                </figure>
                                <div className="flex justify-between px-3 text-sm">
                                    <p>Chinese temple</p>
                                    <p>China city</p>
                                </div>
                                <div className='flex px-3 gap-1 items-center text-sm pb-3'>
                                <CiTimer />
                                <p>3 hours ago</p>
                                </div>
                            </div>
            
                            <div className="card bg-base-100 w-96 shadow-sm space-y-3">
                                <figure>
                                    <img
                                        src={kashmir}
                                        alt="Kashmir" className='h-[250px] object-cover w-full'/>
                                </figure>
                                <div className="flex justify-between px-3 text-sm">
                                    <p>Sinthan Top Daksum </p>
                                    <p>Kashmir, India</p>
                                </div>
                                <div className='flex px-3 gap-1 items-center text-sm pb-3'>
                                <CiTimer />
                                <p>1 days ago</p>
                                </div>
                            </div>
            
                            <div className="card bg-base-100 w-96 shadow-sm space-y-3">
                                <figure>
                                    <img
                                        src={cloud}
                                        alt="Masjid" className='h-[250px] object-cover w-full'/>
                                </figure>
                                <div className="flex justify-between px-3 text-sm">
                                    <p>Kirigalpoththa </p>
                                    <p>Nuwara Eliya,  Sri Lanka</p>
                                </div>
                                <div className='flex px-3 gap-1 items-center text-sm pb-3'>
                                <CiTimer />
                                <p>2 days ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default TopPlaces;