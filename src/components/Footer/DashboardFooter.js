import React from 'react';

const DashboardFooter = () => {
    return (
        <div className='h-[40px] flex'>
            <div className='w-56 bg-primary'>

            </div>
            <div className='bg-[#DBDBDB] w-full text-accent font-light text-sm flex justify-between items-center px-7 py-1'>
                <div>
                    <span>2022 &copy; MAAC</span>
                </div>
                <div>
                    <span className='mr-2'>Contact us</span>
                    <span className='mr-2'>Privacy Policy</span>
                    <span className='mr-2'>Terms & Condition</span>
                </div>
            </div>
        </div>
    );
};

export default DashboardFooter;