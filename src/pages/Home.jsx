import React from 'react';
import Slider from '../Components/Slider';
import PopularSection from '../Components/PopularSection';
import MeetOurVets from '../Components/MeetOurVets';
import WinterCareTips from '../Components/WinterCareTips';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopularSection></PopularSection>
            <MeetOurVets></MeetOurVets>
            <WinterCareTips></WinterCareTips>
        </div>
    );
};

export default Home;