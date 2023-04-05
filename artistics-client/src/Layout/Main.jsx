import React from 'react';
import MainNavbar from '../Shared/MainNavbar/MainNavbar';
import Footer from '../Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Home from '../Pages/Home/Home'

const Main = () => {
    return (
        <div>
            <MainNavbar />
            {/* <Outlet /> */}
            <Home />
            <Footer />
        </div>
    );
};

export default Main;