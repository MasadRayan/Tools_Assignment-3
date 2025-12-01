import React from 'react';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import SignatureDishes from './components/SignatureDishes';
import About from './components/About';
import ChefSection from './components/ChefSection';
import Gallery from './components/Gallery';

const Homepage = () => {
    return (
        <div>
            <Hero></Hero>
            <Marquee></Marquee>
            <SignatureDishes></SignatureDishes>
            <About></About>
            <ChefSection></ChefSection>
            <Gallery></Gallery>
        </div>
    );
};

export default Homepage;