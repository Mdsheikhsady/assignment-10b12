import React from 'react';
import Slider from '../Components/Slider';
import PopularSection from '../Components/PopularSection';
import MeetOurVets from '../Components/MeetOurVets';
import PetAdopt from '../Components/PetAdopt';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopularSection></PopularSection>
            <PetAdopt></PetAdopt>
            <MeetOurVets></MeetOurVets>
        </div>
    );
};

export default Home;