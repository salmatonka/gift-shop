import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AddCards from '../../ProductCards/AddCards/AddCards';

const Category = () => {
    const allProducts = useLoaderData();
    return (
        <div className='py-20'>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-10'>
                {
                    allProducts.map(p => <AddCards
                        key={p._id}
                        p={p}
                    ></AddCards>)
                }
            </div>
        </div>
    );
};

export default Category;