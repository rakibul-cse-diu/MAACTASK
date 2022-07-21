import React from 'react';
import treva from '../../../assets/images/teams/Treva.png';
import kyan from '../../../assets/images/teams/Kyan.png';
import circle from '../../../assets/images/teams/Circle.png';
import amara from '../../../assets/images/teams/Amara.png';
import aven from '../../../assets/images/teams/Aven.png';

const Teams = () => {
    return (
        <div className='mt-16'>
            <div className='mb-10'>
                <h3 className='text-secondary text-3xl text-center font-medium'>5,000+ high-impact teams rely on Fieldx</h3>
            </div>
            <div className='pb-20 flex justify-center items-center'>
                <div className='grid grid-cols-5 gap-10'>
                    <img src={aven} alt="" />
                    <img src={amara} alt="" />
                    <img src={circle} alt="" />
                    <img src={kyan} alt="" />
                    <img src={treva} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Teams;