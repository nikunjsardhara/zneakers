import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
const LoggedOutLayout = () => {
    return <><div>
        <Header />
    </div>
        <div className='bg-white dark:bg-gray-800 flex flex-wrap relative z-20 items-center overflow-hidden container mx-auto px-4'>
            <Outlet />
        </div>
        <Footer />
    </>;
};

export default LoggedOutLayout;
