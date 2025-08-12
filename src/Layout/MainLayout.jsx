import React, { useEffect } from 'react';
import Header from '../Components/Header/Header';
import { Outlet, useLocation } from 'react-router';
import Footer from '../Components/Footer/Footer';

const MainLayout = () => {
    const {pathname} = useLocation();
    useEffect(()=> {
        window.scrollTo(0,0);
    },[pathname])
    return (
        <div>
            <Header/>
            <div className='min-h-screen'>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;