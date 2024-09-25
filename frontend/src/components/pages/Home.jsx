import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../CardF'; // Ensure you import the Cards component

function Home() { // Change 'home' to 'Home'
    return (
        <>
            <HeroSection />
            <Cards /> {/* Change 'cards' to 'Cards' */}
        </>
    );
}

export default Home;
