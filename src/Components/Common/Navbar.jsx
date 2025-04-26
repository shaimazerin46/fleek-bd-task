import { NavLink } from 'react-router';
import navLogo from '../../assets/logo/logo.png'

const Navbar = () => {
    return (
        <div className="flex justify-between items-center max-w-7xl mx-auto bg-transparent">
            {/* logo */}
           <div>
                <img src={navLogo} alt="" className='h-20 w-20'/>
           </div>
           <div>
            <ul className='flex gap-8 items-center'>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to=''>Pages</NavLink></li>
            <li><NavLink to=''>Browes Tips</NavLink></li>
            <li><NavLink to=''>Destination</NavLink></li>
            <li><NavLink to=''>Blog</NavLink></li>
            <li><NavLink to=''>
                <button className='px-4 py-1 border-[1px] border-black rounded-xl'>
                    Log in
                </button>
                </NavLink></li>
            <li><NavLink to=''>
            <button className='px-4 py-2  bg-yellow-300 rounded-xl'>
                    Sign up
                </button>
                </NavLink></li>
            </ul>
           </div>
        </div>
    );
};

export default Navbar;