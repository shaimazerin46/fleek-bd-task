
import { FaStar } from 'react-icons/fa';
import customer from '../../assets/customer.png'
const CustomerSays = () => {
    return (
        <div className="pb-20 max-w-7xl mx-auto">
            <div className="text-center w-1/2 mx-auto mb-20">
                <h3 className="font-bold text-3xl mb-3">Here What <span className="text-yellow-400"> Our Customer</span> Says</h3>
                <p>Find your perfect escape among the world’s most stunning destinations. Adventure, relaxation, and unforgettable memories await you</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                <div className="space-y-5">
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel obcaecati sapiente accusantium debitis adipisci sunt dicta totam nam in nisi est quis fugiat reprehenderit dolore quisquam reiciendis consectetur quod, nulla rem distinctio? Inventore, maiores. Ipsa, soluta suscipit. Atque repellendus facilis inventore! Nesciunt ea id earum amet, corrupti doloribus eos minus! Atque repellendus facilis inventore! Nesciunt ea id earum amet, corrupti doloribus eos minus! Atque repellendus facilis inventore! Nesciunt ea id earum amet, corrupti doloribus eos minus!</p>
                    <button className='px-5 py-2 text-white font-bold bg-yellow-400 rounded-xl'>
                   Lorem ipsum button
            </button>
                </div>

                <div>
                    <img src={customer} alt="" className='h-[150px] w-[200px] object-cover rounded-t-xl '/>
                    <div className='border-l-4 border-yellow-400 p-5 w-[420px] shadow-xl space-y-3'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur iste excepturi totam voluptates quia hic dignissimos ducimus. Inventore natus porro nulla dolores ipsa officia, provident eaque praesentium velit.</p>

                        <div className='flex justify-between items-center'>
                            <p className='font-bold'>Lorem ipsum dolor sit</p>
                           <div>
                           <span className='text-yellow-400 flex'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            </span>
                            <p className='text-sm'>Lorem ipsum</p>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerSays;