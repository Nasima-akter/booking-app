import React from 'react';
import { Outlet } from 'react-router-dom';
import Appointment from '../Pages/Appointment/Appointment/Appointment';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* <Outlet></Outlet> */}
            <Appointment></Appointment>
            <Footer></Footer>
        </div>
    );
};

export default Main;