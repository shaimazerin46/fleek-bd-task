import bannerImg from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div style={{ 
            backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${bannerImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} className='h-[500px]'>

            
            </div>
    );
};

export default Banner;