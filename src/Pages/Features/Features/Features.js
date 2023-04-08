import React from 'react';
import './Features.css';

const Features = () => {
    return (
       <section>
         <div className='py-20 bg-red-50'>
            <h2 className='text-2xl font-bold text-center py-10'>So many useful features to love</h2>
            <div data-aos="zoom-out-right" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-10'>
                <div  className='features-div rounded-md shadow-2xl text-center h-60 w-70 hover:scale-75 bg-gray-50'>
                    
                    <div className='flex justify-center'>
                        <img src="https://www.giftster.com/wp-content/uploads/group.png" alt="" />
                        </div>
                    <h3 className='text-xl font-semibold'>Add any item in seconds</h3>
                    <p className='pt-4 text-sm'>Paste a link to your item and use Fetch to auto-fill the details. Less typing.</p>
                </div>
                <div className='features-div rounded-md shadow-2xl text-center h-60 w-70 hover:scale-75 bg-gray-50'>
                    <div className='flex justify-center'>
                    <img src="https://www.giftster.com/wp-content/uploads/group.png" alt="" />
                    </div>
                    
                    <h4 className='text-xl font-semibold'>Share lists in a group</h4>
                    <p className='pt-4 text-sm'>Invite friends to share and shop each others lists or keep your lists private.</p>
                </div>
                <div  className='features-div rounded-md shadow-2xl text-center h-60 w-70 hover:scale-75 bg-gray-50'>
                    <div className='flex justify-center'>
                    <img src="https://www.giftster.com/wp-content/uploads/shop-for.png" alt="" />
                    </div>
                    <h4 className='text-xl font-semibold'>Avoid duplicates & returns</h4>
                    <p className='pt-4 text-sm'>See if items are available. Purchases remain hidden from the list maker.</p>
                </div>
                <div 
                 className='features-div rounded-md shadow-2xl text-center h-60 w-70 hover:scale-75 bg-gray-50'>
                    <div className='flex justify-center'>
                 <img src="https://www.giftster.com/wp-content/uploads/secret-santa-2.png" alt="" />
                    </div>
                    <h4 className='text-xl font-semibold'>Add a virtual gift exchange</h4>
                    <p className='pt-4 text-sm'>Add a Secret Santa draw to any group. Giftster automatically picks the names.</p>
                </div>
            </div>
        </div>
       </section>
    );
};

export default Features;