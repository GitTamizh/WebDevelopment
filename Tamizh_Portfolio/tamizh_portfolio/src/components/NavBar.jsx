import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';


const NavBar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(prevState => !prevState);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <React.Fragment>
            {/* Desktop Navbar */}
            <nav id="desktop-nav">
                <div className="logo">
                    <img src="/assets/Tamizh.svg" alt="Tamizh" />
                </div>
                <ul className="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            {/* Mobile Sidebar Toggle Button */}
            <div
                id="hamburger-nav"
                className="sidebar-toggle"
                onClick={toggleSidebar}
                aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
                aria-expanded={isSidebarOpen}
            >
                {isSidebarOpen ? <FaTimes /> : <FaBars />}
            </div>

            {/* Mobile Sidebar */}
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <div className="sidebar-logo">
                        <img src="/assets/Tamizh-logo.svg" alt="Tamizh" />
                    </div>
                    <button className="close-btn" onClick={toggleSidebar}>
                        <FaTimes />
                    </button>
                </div>
                <ul className="sidebar-links">
                    <li><a href="#about" onClick={closeSidebar}>About</a></li>
                    <li><a href="#experience" onClick={closeSidebar}>Experience</a></li>
                    <li><a href="#projects" onClick={closeSidebar}>Projects</a></li>
                    <li><a href="#contact" onClick={closeSidebar}>Contact</a></li>
                </ul>
                <ul className="social-icons">
                    <li><a href="https://www.github.com" aria-label="GitHub"><FaGithub /></a></li>
                    <li><a href="https://www.linkedin.com" aria-label="LinkedIn"><FaLinkedin /></a></li>
                </ul>
            </div>

            {/* Overlay for closing sidebar on click outside */}
            {isSidebarOpen && <div className="overlay show" onClick={closeSidebar}></div>}
        </React.Fragment>
    );
};

export default NavBar;
