import React from 'react';
import Slider from '../../Slider/Slider/Slider';
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

const BookingPage = () => {
    const singleCards = useLoaderData();
    
    const {name,image,original_price,resale_price,rating} = singleCards;
    return (
        <div className='bg-red-50 '>

<div data-aos="flip-left" className='py-20 px-10 flex justify-center'>
                <div className='features-div rounded-md shadow-2xl  text-center'>

                    <div>
                        <img className='h-60 w-96' src={image} alt="" />
                    </div>
                    <h3 className='text-2xl font-bold pt-6'>{name}</h3>

                    <h6 className='text-xl font-semibold pt-3'>Original_price: {original_price}</h6>
                    <h6 className='text-xl font-semibold pt-3'>Resale_price: {resale_price}</h6>

                    <h6 className='text-xl font-semibold pt-3 pb-8'>Rating: {rating}</h6>
                    <Link to='/contact'> <button type="button" className="w-60 py-3 font-semibold rounded hover:bg-red-400 bg-red-200 dark:text-gray-900">Book Now</button></Link>
                </div>

            </div>

            <Slider />

            <div className='flex justify-center px-10'>

                <Link to='/contact'> <button type="button" className="w-60 py-3 font-semibold rounded hover:bg-red-400 bg-red-200 dark:text-gray-900">Book Now</button></Link>
            </div>

            <div className=''>
                <h2 className='text-2xl font-bold text-center pt-12'>Eid Special Offer </h2>
                <p className='text-xl font-bold text-center pt-4'>Up to 50% Off All Products & Accessories</p>
                <section className="py-6 dark:text-gray-50">
                    <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4 bg-red-200 ">
                        <img src="https://static.vecteezy.com/system/resources/previews/017/183/403/original/pink-pastel-gift-box-free-png.png" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />

                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://st.depositphotos.com/1098692/1485/i/600/depositphotos_14850833-stock-photo-red-gift-box.jpg" />
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://thumbs.dreamstime.com/b/gift-box-pink-pastel-color-present-ribbon-bow-isolated-white-background-shadow-d-rendering-190434146.jpg" />
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://www.pngitem.com/pimgs/m/105-1059560_gift-box-clipart-png-transparent-png.png" />
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://cdn.pixabay.com/photo/2019/12/16/15/47/vector-4699584_960_720.png" />

                    </div>
                </section>
            </div>


            


        </div>

    );
};

export default BookingPage;
