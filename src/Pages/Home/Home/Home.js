import React from 'react';
import AddGift from '../../AddGift/AddGift/AddGift';
import BuildShare from '../../BuildShare/BuildShare/BuildShare';
import Features from '../../Features/Features/Features';
import Review from '../../Review/Review/Review';
import Slider from '../../Slider/Slider/Slider';
import HomeBanner from '../../HomeBanner/HomeBanner/HomeBanner';
import CategoryGifts from '../../CategoryGifts/CategoryGifts/CategoryGifts';


const Home = () => {
    return (
        <div>
          <HomeBanner />
         <CategoryGifts />
          <BuildShare />
          <Features />
          <Review />
          <Slider />
        </div>
    );
};

export default Home;