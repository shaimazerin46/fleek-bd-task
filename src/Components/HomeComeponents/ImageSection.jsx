import img1 from '../../assets/image-section/ice.jpg'

const ImageSection = () => {
    return (
        <div className="py-5" style={{backgroundImage: `url(${img1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className='max-w-7xl mx-auto space-y-3'>
            <div className='w-[300px] text-center'>
            <p className='text-[100px] font-bold text-yellow-400'>السفر</p>
            <p className='font-bold text-5xl'>Super Deluxe</p>
            <p className=''>Days and nights tour</p>
            </div>

            <div className='w-[600px] mx-auto bg-white p-1 flex justify-between rounded-3xl shadow-xl'>
                <input placeholder='search here' type="search" className='outline-0 w-full px-5 focus:ouline-0'/>
                <button className='py-2 px-4 rounded-3xl text-white bg-yellow-400'>Search</button>
            </div>
            </div>
      </div>
    );
};

export default ImageSection;