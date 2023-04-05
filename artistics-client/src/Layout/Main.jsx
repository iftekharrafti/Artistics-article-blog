import React from 'react';
import MainNavbar from '../Shared/MainNavbar/MainNavbar';
import Footer from '../Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <MainNavbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;