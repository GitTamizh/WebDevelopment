import React from 'react'
import { Link } from "react-router-dom";
import Logo1 from "./imges/Logo1.svg"
import "./Navbar.css"; 
const Navbar = () => {
    return (
        <nav className="navbar">
        <div className="navbar-container">
            <Link to="/homePage" className="navbar-logo">
                <img src={Logo1} alt="Nav-Logo" />
            </Link>
            <ul className="navbar-menu">
            <li className="navbar-item">
                <Link to="/homePage" className="navbar-links">
                Home
                </Link>
            </li>
            <li className="navbar-item">
                <Link to="/about" className="navbar-links">
                About
                </Link>
            </li>
            <li className="navbar-item">
                <Link to="/services" className="navbar-links">
                Services
                </Link>
            </li>
            <li className="navbar-item">
                <Link to="/contact" className="navbar-links">
                Contact
                </Link>
            </li>
            </ul>
        </div>
        </nav>
    );
};


export default Navbar