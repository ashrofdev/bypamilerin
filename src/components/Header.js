import React from 'react';
import Navigation from './Navigation';

const Header = () => {
    return (
        <div className="header grid">
            <div className="logo">LOGO</div>
            <Navigation/>
        </div>
    );
};

export default Header;