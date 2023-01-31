import React from 'react';
import OurProducts from '../../OurProducts/OurProducts';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <OurProducts></OurProducts>
            <Team></Team>
        </div>
    );
};

export default Home;