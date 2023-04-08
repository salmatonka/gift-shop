import React from 'react';

const AddGift = () => {
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1'>
            <div className='w-50'>
                
                <img className='w-30' src="https://www.giftster.com/wp-content/uploads/group-gift-registry-1.png" alt="" />
            </div>
            <div>
                <h1 className='text-2xl font-bold py-8'>Add gifts from any site or add from our Shop</h1>
                <ul>
                    
                <li className='text-xl '>Paste a link from any site and we’ll fetch the details.</li>
                <li className='text-xl py-4'>Refresh item details at any time for price updates.</li>
                <li className='text-xl pb-4'>Browse our Shop of hundreds of gift ideas from your favorite brands.</li>
                <li>Download our “Add to GiftList” browser extensions.</li>
                </ul>

                <button>Get Started</button>

            </div>
        </div>
    );
};

export default AddGift;