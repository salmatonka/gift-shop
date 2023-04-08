import React from 'react';
import Slider from '../../Slider/Slider/Slider';
import { Link } from 'react-router-dom';
// import { useLoaderData } from 'react-router-dom';
// import BookingCard from './BookingCard';
const BookingPage = () => {
    // const bookingProducts = useLoaderData();
    return (
        <div  className='bg-red-100'>
           
            <Slider />
            {/* <div className='bg-red-100'> */}

            {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-10'>
                {
                    bookingProducts.map(b => <BookingCard
                        key={b._id}
                        p={b}
                    ></BookingCard>)
                }
                {
                    bookingProducts.length
                }
                
            </div> */}

           

            {/* </div> */}
          
          <div className='flex justify-center'>
          <Link to='/contact'> <button type="button" className="w-60 py-3 font-semibold rounded hover:bg-red-400 bg-red-200 dark:text-gray-900">Book Now</button></Link>
          </div>



            <div>
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
