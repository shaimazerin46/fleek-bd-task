import { NavLink } from 'react-router';
import navLogo from '../../assets/logo/logo.png'

const Navbar = () => {
    return (
        <div className=" bg-black/20 z-10 fixed top-0  w-full">
            {/* logo */}
         <div className='flex justify-between items-center py-3 max-w-7xl mx-auto'>
         <div>
                <img src={navLogo} alt="" className='h-15 w-15'/>
           </div>
           <div>
            <ul className='flex gap-8 items-center text-white'>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to=''>Pages</NavLink></li>
            <li><NavLink to=''>Browes Tips</NavLink></li>
            <li><NavLink to=''>Destination</NavLink></li>
            <li><NavLink to=''>Blog</NavLink></li>
            <li><NavLink to='/login'>
                <button className='px-4 py-1 border-[1px] border-white rounded-xl'>
                    Log in
                </button>
                </NavLink></li>
            <li><NavLink to=''>
            <button className='px-4 py-2 text-black bg-yellow-300 rounded-xl'>
                    Sign up
                </button>
                </NavLink></li>
            </ul>
           </div>
         </div>
        </div>
    );
};

export default Navbar;