import { CiTimer } from 'react-icons/ci';
import nepal from '../../assets/destination/nepal.jpg'
import taj from '../../assets/destination/tajmahal.jpg'
import dome from '../../assets/destination/dome.jpg'

const BestDestination = () => {
    return (
        <div className="py-20 max-w-7xl mx-auto">
            <div className="text-center w-1/2 mx-auto mb-20">
                <h3 className="font-bold text-3xl mb-3"><span className="text-yellow-400">Best </span>Destination</h3>
                <p>Find your perfect escape among the world’s most stunning destinations. Adventure, relaxation, and unforgettable memories await you</p>
            </div>

            <div className="flex justify-between flex-col md:flex-row">

                <div className="card bg-base-100 w-96 shadow-sm shadow-yellow-200 space-y-3">
                    <figure>
                        <img
                            src={taj}
                            alt="Tajmahal" className='h-[250px] object-cover w-full'/>
                    </figure>
                    <div className="flex justify-between px-3 text-sm">
                        <p>The Taz Mahal</p>
                        <p>Agra, Uttar Pradesh, India</p>
                    </div>
                    <div className='flex px-3 gap-1 items-center text-sm pb-3'>
                    <CiTimer />
                    <p>2 days ago</p>
                    </div>
                </div>

                <div className="card bg-base-100 w-96 shadow-sm shadow-yellow-200 space-y-3">
                    <figure>
                        <img
                            src={nepal}
                            alt="Hills" className='h-[250px] object-cover w-full'/>
                    </figure>
                    <div className="flex justify-between px-3 text-sm">
                        <p>Chandragiri Hill</p>
                        <p>Kathmundu Valley, Nepal</p>
                    </div>
                    <div className='flex px-3 gap-1 items-center text-sm pb-3'>
                    <CiTimer />
                    <p>2 days ago</p>
                    </div>
                </div>

                <div className="card bg-base-100 w-96 shadow-sm shadow-yellow-200 space-y-3">
                    <figure>
                        <img
                            src={dome}
                            alt="Masjid" className='h-[250px] object-cover w-full'/>
                    </figure>
                    <div className="flex justify-between px-3 text-sm">
                        <p>The Dome of the Rock</p>
                        <p>Temple Mount, Jerusalem</p>
                    </div>
                    <div className='flex px-3 gap-1 items-center text-sm pb-3'>
                    <CiTimer />
                    <p>3 days ago</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestDestination;