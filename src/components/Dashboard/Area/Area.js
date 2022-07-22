import React from 'react';
import createRegion from '../../../assets/images/dashboard-bg.png';

const Area = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <button className='btn btn-[#0B2E4E] capitalize text-primary relative left-[400px]'>+ Create New</button>
            <div className='bg-primary mt-9 min-h-[300px] w-3/4 shadow-lg rounded-sm flex flex-col justify-center items-center'>
                <div>
                    <img src={createRegion} width={280} height={172} alt="" />
                    <h4 className='text-[16px] font-[400] text-center mt-3 text-[#9FA3A6]'>Currently you have no Data. <br />
                        For next step first <span className='text-secondary'>Create Region</span></h4>
                </div>
            </div>
        </div>
    );
};

export default Area;