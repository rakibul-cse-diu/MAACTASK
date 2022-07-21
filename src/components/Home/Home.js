import React from 'react';
import ProductFeatures from '../ProductFeatures/ProductFeatures';
import AboutUs from './AboutUs/AboutUs';
import HearoSection from './HeroSection/HearoSection';
import Question from './Questions/Question';


const Home = () => {
    return (
        <div className=''>
            <HearoSection />
            <ProductFeatures />
            <AboutUs />
            <Question />
        </div>
    );
};

export default Home;