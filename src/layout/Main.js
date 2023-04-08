import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Shares/Header/Header';
import Footer from '../Shares/Footer/Footer';

const Main = () => {
    return (
        <div className=''>
            <Header />
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Main;