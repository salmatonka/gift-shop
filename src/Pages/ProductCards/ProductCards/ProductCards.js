import React from 'react';
import { Link } from 'react-router-dom';


const ProductCards = ({c}) => {

    const {_id,name,image,original_price,resale_price,rating} = c;
    return (
        
        <div data-aos="flip-left" className='features-div rounded-md shadow-2xl text-center h-120 w-70 '>
                
        <div>
            <img className='h-60 w-96' src={image} alt="" />
            </div>
        <h3 className='text-xl font-semibold pt-4'>{name}</h3>
         
         <h6>Original_price: {original_price}</h6>
         <h6>Resale_price: {resale_price}</h6>
         
         <h6>Rating: {rating}</h6>
         <Link to='/contact'> <button type="button" className="w-60 py-3 font-semibold rounded hover:bg-red-400 bg-red-200 dark:text-gray-900">Book Now</button></Link>
    </div>

    );
};

export default ProductCards;