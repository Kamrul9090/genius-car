import React from 'react';
import OurProducts from '../../OurProducts/OurProducts';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Team from '../Team/Team';
import Time from '../Time/Time';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <OurProducts></OurProducts>
            <Time></Time>
            <Team></Team>
        </div>
    );
};

export default Home;