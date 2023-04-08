import React from 'react';
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Slider = () => {
    return (
        <div className='text-2xl font-bold text-center py-20 bg-red-50'>
            <h2>Gift lists for any occasion</h2>
            <div
                data-aos="zoom-out-up"
                className='py-20 px-10'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide >
                        <div className='bg-red-100 rounded-md shadow-2xl text-center h-96 w-70 hover:skew-x-12'>
                            <div className='flex justify-center pt-4'>
                                <img src="https://www.giftlist.com/assets/new_images/gift_list_icon.svg" alt="" />
                            </div>

                            <h4 className='text-xl font-semibold'>Valentine's Day</h4>
                            <p className='pt-6 text-sm lg:text-xl font-semibold'>Create a universal wish list to help make gifting easy for your select Valentine.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='bg-red-100  rounded-md shadow-2xl text-center h-96 w-70 hover:skew-x-12'>
                            <div className='flex justify-center pt-4'>
                                <img src="https://www.giftlist.com/assets/new_images/gift_list_icon2.svg" alt="" />
                            </div>
                            <h4 className='text-xl font-semibold'>Birthday</h4>
                            <p className='pt-6 text-sm lg:text-xl font-semibold'>Create a birthday wish list for your special day.Add gift ideas from any site and then share your list with family.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='bg-red-100  rounded-md shadow-2xl text-center h-96 w-70 hover:skew-x-12'>
                            <div className='flex justify-center pt-4'>
                                <img src="https://www.giftlist.com/assets/new_images/gift_list_icon1.svg" alt="" />
                            </div>

                            <h4 className='text-xl font-semibold'>Graduation</h4>
                            <p className='pt-6 text-sm lg:text-xl font-semibold'>Create a gift registry graduation day.Help family and friends find the perfect gift for you.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='bg-red-100  rounded-md shadow-2xl text-center h-96 w-70 hover:skew-x-12'>
                            <div className='flex justify-center pt-4'>
                                <img src="https://www.giftlist.com/assets/new_images/gift_list_icon3.svg" alt="" />
                            </div>

                            <h4 className='text-xl font-semibold'>Christmas</h4>
                            <p className='pt-6 text-sm lg:text-xl font-semibold'>Create your Christmas wish list with GiftList. Add items from any site and then easily share your list with friend.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='bg-red-100  rounded-md shadow-2xl text-center h-96 w-70 hover:skew-x-12'>
                            <div className='flex justify-center pt-4'>
                                <img src="https://www.giftlist.com/assets/new_images/gift_list_icon2.svg" alt="" />
                            </div>

                            <h4 className='text-xl font-semibold'>Anniversary</h4>
                            <p className='pt-6 text-sm lg:text-xl font-semibold'>Create a birthday wish list for your special day.Add gift ideas from any site and then share your list with family.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='bg-red-100  rounded-md shadow-2xl text-center h-96 w-70 hover:skew-x-12'>
                            <div className='flex justify-center pt-4'>
                                <img src="https://www.giftlist.com/assets/new_images/gift_list_icon4.svg" alt="" />
                            </div>

                            <h4 className='text-xl font-semibold'>Holidays</h4>
                            <p className='pt-6 lg:text-xl text-sm font-semibold'>Create a anniversary wish list for your favorite holiday.Add gift ideas from any site and then share your list with anyone.</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>

    );
}

export default Slider;