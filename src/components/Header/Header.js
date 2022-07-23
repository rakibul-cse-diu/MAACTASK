import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { logout } from '../../services/actions/signInAction';

const Header = () => {

    const userState = useSelector(state => state.userLogin || state.userRegister);
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout());
        console.log(userState.user.user._id)
    }

    return (
        <div className="navbar bg-primary">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <div className="flex-none">
                {
                    !userState.user.user?._id && <><div className="mx-7">
                        <Link to="/signin"><button className='btn btn-secondary text-primary capitalize text-lg'>Login</button></Link>
                    </div>
                        <div className='mx-7'>
                            <Link to="/registration"><button className='btn btn-outline btn-secondary text-lg shadow-[2px_2px_7px_1px_#0052CC] capitalize hover:text-[#ffff]'>Registration</button></Link>
                        </div></>
                }
                {
                    userState.user.user?._id && <div className="dropdown dropdown-end">
                        <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" alt='' />
                            </div>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52">
                            <li>
                                <Link to='' className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li><Link to='/'>Settings</Link></li>
                            <li><Link to='/'><button onClick={handleLogout}>Logout</button></Link></li>
                        </ul>
                    </div>
                }
            </div>
        </div>
    );
};

export default Header;