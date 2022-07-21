import React from 'react';
import abouUsImg from '../../../assets/images/about-us.png';
import avatar from '../../../assets/images/Ellipse 1.png';
import platfroms from '../../../assets/images/icons/platfroms.png';
import client from '../../../assets/images/icons/user.png';
import user from '../../../assets/images/icons/people.png';
import cup from '../../../assets/images/icons/cup.png';

import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className='about-container pb-10'>
            <div class="hero min-h-screen bg-transparent">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={abouUsImg} class="max-w-sm rounded-lg" alt='about us' />
                    <div className='w-1/2'>
                        <h3 className='text-secondary font-medium'>About Us</h3>
                        <h1 class="text-5xl font-bold text-accent">A dedicated solution for startups and enterprises</h1>
                        <p class="py-6 text-base-100">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <hr />
                        <div className='flex mt-6'>
                            <div className='avatar mr-5'>
                                <div class="w-16 rounded-full">
                                    <img src={avatar} alt='avatar' />
                                </div>
                            </div>
                            <div>
                                <pre className='text-base-100'>
                                    "Fieldx is for teams that care about<br />
                                    their product growth."
                                </pre>
                                <h3 className='text-accent font-bold'>CEO, FieldX</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-36 flex justify-between items-center mb-14'>
                <div className='flex flex-col justify-center items-center'>
                    <img src={platfroms} alt="" />
                    <h1 className='text-secondary text-2xl my-2 font-bold'>10+</h1>
                    <h2 className='text-base-100 text-xl'>Platforms Created</h2>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src={user} alt="" />
                    <h1 className='text-secondary text-2xl my-2 font-bold'>1559+</h1>
                    <h2 className='text-base-100 text-xl'>Total Users</h2>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src={client} alt="" />
                    <h1 className='text-secondary text-2xl my-2 font-bold'>10+</h1>
                    <h2 className='text-base-100 text-xl'>Total Clients</h2>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src={cup} alt="" />
                    <h1 className='text-secondary text-2xl my-2 font-bold'>300 Days</h1>
                    <h2 className='text-base-100 text-xl'>In Operations</h2>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;