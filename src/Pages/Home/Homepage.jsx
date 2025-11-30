import React from 'react';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import SignatureDishes from './components/SignatureDishes';
import About from './components/About';

const Homepage = () => {
    return (
        <div>
            <Hero></Hero>
            <Marquee></Marquee>
            <SignatureDishes></SignatureDishes>
            <About></About>
        </div>
    );
};

export default Homepage;