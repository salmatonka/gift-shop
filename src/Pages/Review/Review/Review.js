import React from 'react';
import './Review.css';

const Review = () => {
    return (
        <div className='py-24 bg-red-100'>
            <h2 className='text-3xl font-bold text-center pb-10 hover:scale-125'>As seen on…</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  px-10  py-20'>
                <div data-aos="fade-up"
                    data-aos-anchor-placement="center-center"
                    className='bg-gray-50 border-8 border-t-red-400 rounded-md shadow-2xl text-center h-80 lg:h-64 w-60 lg:w-96 skew-x-12 hover:animate-spin'>

                    <div className='flex justify-center'><img src="https://www.giftster.com/wp-content/uploads/group.png" alt="" /></div>

                    <p className='px-3 text-sm'>"It is my go-to app for my family at Christmas and birthdays.We never get duplicates and everyone gets something they want."</p>
                    <h4><span className='font-bold'>_Leslie B.</span></h4>
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-center"
                    className='bg-gray-50 border-8 border-b-red-400 rounded-md shadow-2xl text-center h-80 lg:h-64 w-60 lg:w-96 skew-x-12 hover:animate-spin'>
                    <div className='flex justify-center'>
                        <img src="https://www.giftster.com/wp-content/uploads/group.png" alt="" />
                    </div>

                    <p className='text-sm px-3'>"Love this app ! It's made our gift buying so simple & streamlined, and no more unwanted gift which is also good for the planet! Less waste! "</p>
                    <h4><span className='font-bold'>_Airini K.</span></h4>
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-center"
                    className='bg-gray-50 border-8 border-t-red-400 rounded-md shadow-2xl text-center h-80 lg:h-64 w-60 lg:w-96 skew-x-12 hover:animate-spin'>
                    <div className='flex justify-center '>
                        <img src="https://www.giftster.com/wp-content/uploads/shop-for.png" alt="" />
                    </div>
                    <p className='text-sm px-3'>"I have 16 people to buy gifts for. Before Giftster I used to get burnt out buying gifts, now i do almost all of my gift buying online via Giftster well before Christmas.Ghristmas burnout is a thing of the past."</p>
                    <h4><span className='font-bold'>_Rebecca W.</span></h4>
                </div>
            </div>
        </div>
    );
};

export default Review;