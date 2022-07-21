import React from 'react';
import './HeroSection.css';
import heroImg from '../../../assets/images/hero-img.png';

const HearoSection = () => {
    return (
        <div className=''>
            <div className='flex flex-col justify-center items-center home-container pt-16 pb-[350px]'>
                <h1 className='text-5xl leading-normal font-medium text-accent text-center'>Analytics that transform your <br /> product inside-out</h1>
                <div className='my-9'>
                    <button className='btn btn-secondary text-primary capitalize text-lg mx-7'>Request for demo</button>
                    <button className='btn btn-outline btn-secondary text-primary capitalize text-lg shadow-[2px_2px_7px_1px_#0052CC]'>Download</button>
                </div>
            </div>
            <div className='flex justify-center items-center h-[400px] relative top-[-150px]'>
                <img className='' src={heroImg} alt="" width={1032} />
            </div>
        </div>
    );
};

export default HearoSection;