import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import Logo1 from "./imges/Logo1.svg"
import { useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { FaSignOutAlt } from "react-icons/fa";
import { useUser } from "./UserContext";
import "./Navbar.css"; 



const Navbar = () => {

    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const { user, signOut } = useUser();
    const navigate = useNavigate();
    console.log('Current user:', user); // Debug line

    const toggleDropdown = () => {
        setDropdownOpen((prevState) => !prevState);

    };
    const handleSignOut = () => {
        const confirmSignOut = window.confirm("Do you really want to sign out?");
        if (confirmSignOut) {
            if (typeof signOut === 'function') {
                    signOut(); 
                    navigate('/');
                } else {
                    console.error("signOut is not a function");
                }
            }
        }

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
                    <br />
                    <li>{user ? user.name : 'Guest'}</li>
                    {/* {console.log(user.name)} */}
                    <li><Link to='/dashboard' className="profile-links">Dashbord</Link></li>
                    <li>Settings</li>
                    <li>Activity</li>
                </ul>
                </div>
            </div>
            <div className="profile-SignOut">
                <button type="button" onClick={handleSignOut}>
                <FaSignOutAlt />
                </button>
            </div>
            </div>
        </nav>
        );
};


export default Navbar