import React from 'react';
import Slider from '../Components/Slider';
import PopularSection from '../Components/PopularSection';
import MeetOurVets from '../Components/MeetOurVets';
import PetAdopt from '../Components/PetAdopt';
import Statistics from '../Components/Statistics';
import Testimonial from '../Components/Testimonial';
import Blog from '../Components/Blog';
import Faq from '../Components/Faq';
import NewsletterCTA from '../Components/NewsletterCTA';

const Home = () => {
    return (
        <div>
           <div>

            <Slider></Slider>
           </div>

        

            <PopularSection></PopularSection>
            <PetAdopt></PetAdopt>
            <MeetOurVets></MeetOurVets>
            <Statistics></Statistics>
            <Testimonial></Testimonial>
            <Blog></Blog>
            <Faq></Faq>
            <NewsletterCTA></NewsletterCTA>
        </div>
    );
};

export default Home;