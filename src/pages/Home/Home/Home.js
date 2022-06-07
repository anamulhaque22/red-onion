import React from 'react';
import FoodMenu from '../FoodMenu/FoodMenu';
import Hero from '../Hero/Hero';
import './Home.css';
const Home = () => {
    return (
        <>
            <Hero></Hero>
            <FoodMenu></FoodMenu>
        </>
    );
};

export default Home;