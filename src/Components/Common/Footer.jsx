import { FaApple } from 'react-icons/fa';
import logo from '../../assets/logo/logo.png'

const Footer = () => {
    return (
        <div className="pt-20">
            <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
  <aside>
    <img src={logo} alt="" className='w-20 h-20'/>
    
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Download the app</h6>
    <button className='btn bg-black rounded-3xl text-white'>
        <img src="https://img.icons8.com/?size=48&id=L1ws9zn2uD01&format=png" alt="" className='w-7'/>
        Google play
    </button>

    <button className='btn bg-black rounded-3xl text-white flex items-center'>
        <span className='text-[27px]'>
        <FaApple />
        </span>
        Apple store
    </button>
  </nav>

  <nav>
    <h6 className="footer-title">More networking</h6>
   <div className='flex gap-1'>
        <img src="https://img.icons8.com/?size=40&id=30448&format=png" alt="" className='w-7'/>
        <img src="https://img.icons8.com/?size=48&id=P7UIlhbpWzZm&format=png" alt="" className='w-7'/>
   </div>
   <div className='flex gap-2 items-center'>
    <span>Follow us:</span>
    <img src="https://img.icons8.com/?size=48&id=118497&format=png" alt="" className='w-7'/>
    <img src="https://img.icons8.com/?size=48&id=Xy10Jcu1L2Su&format=png" alt="" className='w-7'/>
    <img src="https://img.icons8.com/?size=48&id=19318&format=png" alt="" className='w-7'/>
   </div>
  </nav>
</footer>
        </div>
    );
};

export default Footer;