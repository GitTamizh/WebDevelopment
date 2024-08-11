import React from 'react'
import { Link } from "react-router-dom";
import Logo1 from "./imges/Logo1.svg"
import { useState } from 'react';
// import {<FaUserAlt}
import { FaUserAlt } from 'react-icons/fa';
import { FaSignOutAlt } from "react-icons/fa";
import "./Navbar.css"; 
const Navbar = ({name}) => {

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen((prevState) => !prevState);
    };
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
            <div className="profile-container">
                <div className="profile-sidebar">
                {/* Sidebar with user info or navigation */}
                <button
                    type="button"
                    className="dropdown-button"
                    onClick={toggleDropdown}
                >
                    <FaUserAlt />
                </button>
                <ul className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
                    <li><p>{name}</p></li>
                    <li>Dashbord</li>
                    <li>Settings</li>
                    <li>Activity</li>
                </ul>
                </div>
            </div>
            <div className="profile-SignOut">
                <button type="submit">
                <FaSignOutAlt />
                </button>
            </div>
            </div>
        </nav>
        );
};


export default Navbar