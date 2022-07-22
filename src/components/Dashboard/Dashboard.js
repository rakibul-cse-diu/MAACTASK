import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import geolocation from '../../assets/images/icons/location.png';

const Dashboard = () => {
    const location = useLocation();
    console.log(location.pathname)

    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-start px-10 bg-[#F5F5F5] text-accent">
                <div className='lg:hidden w-full flex justify-start items-center'>
                    <label htmlFor="my-drawer" className="btn btn-secondary drawer-button lg:hidden mt-2 text-base-100">Open Sidebar</label>
                </div>
                <div class="text-sm breadcrumbs z-10 overflow-hidden mt-3">
                    <ul>
                        <li>
                            <span className='flex items-center'>
                                Geo
                            </span>
                        </li>
                        <li>
                            <Link to="/dashboard/region">
                                Region
                            </Link>
                        </li>
                        {
                            location.pathname === '/dashboard/area' &&
                            <li>
                                <Link to="/dashboard/area">
                                    Area
                                </Link>
                            </li>
                        }
                    </ul>
                </div>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-primary text-base-100">
                    {/* <!-- Sidebar content here --> */}
                    <li className='text-sm inline'><img className='inline' src={geolocation} alt="" />Geo Information</li>
                    <li className={location.pathname === '/dashboard/region' && `text-secondary`}><Link to="/dashboard/region">Region</Link></li>
                    <li className={location.pathname === '/dashboard/area' && `text-secondary`}><Link to="/dashboard/area">Area</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;