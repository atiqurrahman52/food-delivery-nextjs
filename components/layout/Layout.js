import React from 'react';
import Footer from '../navigation/Footer';
import Navbar from '../navigation/Navbar';
import MobileBottomNav from '../shared/MobileBottomNav';

const Layout = ({children}) => {
    return (
        <div>
            <Navbar />
            {children}
            <MobileBottomNav />
            <Footer />
        </div>
    );
};

export default Layout;