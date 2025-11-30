import React from 'react';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import SignatureDishes from './components/SignatureDishes';

const Homepage = () => {
    return (
        <div>
            <Hero></Hero>
            <Marquee></Marquee>
            <SignatureDishes></SignatureDishes>
        </div>
    );
};

export default Homepage;