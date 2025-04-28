import { Link } from 'react-router';
import logo from '../assets/logo/logo2.png'

const Login = () => {
    return (
        <div className="">
            <img src={logo} alt="" className='h-15 w-20 mx-auto my-20' />
            <form className="md:w-96 mx-auto mb-20 md:px-0 px-5">
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Email</legend>
                    <input type="email" className="input w-full" placeholder="Type here" />

                </fieldset>

                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Password</legend>
                    <input type="text" className="input w-full" placeholder="Type here" />

                </fieldset>

                <div className='flex justify-between items-center'>
                <fieldset className="fieldset  rounded-box w-64">

<label className="label">
    <input type="checkbox" defaultChecked className="checkbox" />
    Remember me
</label>
</fieldset>
<Link className='text-sm text-blue-500'>Forget password?</Link>
                </div>

                <button className='w-full bg-yellow-400 my-5 rounded-xl py-3'>Log in</button>
                <button className='w-full bg-white border-[1px] border-gray-300 my-5 rounded-xl py-3'>Log in</button>
                <p className='text-center text-xs'>or connected to </p>
                <div className='flex justify-center gap-4 py-5'>
                    <img src='https://img.icons8.com/?size=48&id=118497&format=png' alt="" className='w-8 h-8'/>
                    <img src='https://img.icons8.com/?size=48&id=17949&format=png' alt="" className='w-8 h-8'/>
                    <img src='https://img.icons8.com/?size=50&id=30840&format=png' alt="" className='w-8 h-8'/>
                </div>

                <p className='text-xs text-center '>Sign up for <Link className='text-blue-600'>Transaction </Link>or<Link className='text-blue-600'> Service provider</Link></p>
            </form>
        </div>
    );
};

export default Login;