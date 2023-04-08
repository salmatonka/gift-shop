import React from 'react';
import AddCards from '../../ProductCards/AddCards/AddCards';
import { useLoaderData } from 'react-router-dom';
import CategoryGifts from '../../CategoryGifts/CategoryGifts/CategoryGifts';
import ProductCards from '../../ProductCards/ProductCards/ProductCards';
const Products = () => {
    const categories = useLoaderData();
    return (
        <div className='pb-20 bg-red-50'>
        
            <CategoryGifts></CategoryGifts>
            
            <div>

               <p className='text-2xl font-bold text-center pb-12'>All Category Products:{categories.length}</p> 

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-10'>
                    {
                        categories.map(c => <ProductCards
                            key={c}
                            c={c}
                        ></ProductCards>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;
