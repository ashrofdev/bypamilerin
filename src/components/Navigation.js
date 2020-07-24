import React from 'react';
import {
    Link
  } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/contact">Contact me</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;