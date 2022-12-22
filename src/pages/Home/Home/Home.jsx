import React from 'react';
import OurProducts from '../../OurProducts/OurProducts';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <OurProducts></OurProducts>
        </div>
    );
};

export default Home;