import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const Header = () => {
    return (
        <div class="navbar bg-primary">
            <div class="flex-1">
                <Link to='/' class="btn btn-ghost normal-case text-xl">
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <div class="flex-none">
                <div class="mx-7">
                    <button className='btn btn-secondary text-primary'>Login</button>
                </div>
                <div className='mx-7'>
                    <button className='btn btn-outline btn-secondary text-primary'>Registration</button>
                </div>
                <div class="dropdown dropdown-end">
                    <label tabIndex="0" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" alt='' />
                        </div>
                    </label>
                    <ul tabIndex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link to='' class="justify-between">
                                Profile
                                <span class="badge">New</span>
                            </Link>
                        </li>
                        <li><Link to='/'>Settings</Link></li>
                        <li><Link to='/'>Logout</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;