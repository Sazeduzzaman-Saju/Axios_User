import React from 'react';
import HeroSection from '../comps/Hero/HeroSection';
import Pagination from '../comps/Pagination/Pagination';
import User from '../comps/User/User';
import Footer from './Footer';

const Home = () => {
    return (
        <div className=''>
            <HeroSection></HeroSection>
            <User></User>
            <Pagination></Pagination>
            <Footer></Footer>
        </div>
    );
};

export default Home;