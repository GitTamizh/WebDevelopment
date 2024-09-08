import React, { useState, useEffect } from 'react';
import { FaCode, FaBars, FaTimes, FaGithub, FaLinkedin, FaMoon, FaSun } from 'react-icons/fa';

const NavBar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(prevState => !prevState);
    };

    const toggleDarkMode = () => {
        setIsDarkMode(prevState => !prevState);
        // Optionally store the preference in local storage
        localStorage.setItem('darkMode', !isDarkMode);
    };

    // Load dark mode preference from local storage
    useEffect(() => {
        const darkModePreference = localStorage.getItem('darkMode') === 'true';
        setIsDarkMode(darkModePreference);
    }, []);

    return (
        <React.Fragment>
            {/* Desktop Navbar */}
            <nav id="desktop-nav" className={isDarkMode ? 'dark' : ''}>
                <div className="logo">
                    Tamizh
                    <FaCode className="developer-icon" />
                </div>
                <ul className="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                    {/* <div>
                        <button className="dark-mode-toggle desktop" onClick={toggleDarkMode}>
                            {isDarkMode ? <FaSun /> : <FaMoon />}
                        </button>
                    </div> */}
                </ul>
            </nav>

            {/* Mobile Sidebar Toggle Button */}
            <div
                id="hamburger-nav"
                className={`sidebar-toggle ${isDarkMode ? 'dark' : ''}`}
                onClick={toggleSidebar}
                aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
                aria-expanded={isSidebarOpen}
            >
                {isSidebarOpen ? <FaTimes /> : <FaBars />}
            </div>

            {/* Mobile Sidebar */}
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''} ${isDarkMode ? 'dark' : ''}`}>
                <div className="sidebar-header">
                    <div className="logo">
                        Tamizh
                        <FaCode className="developer-icon" />
                    </div>
                    {/* <button className="dark-mode-toggle mobile" onClick={toggleDarkMode}>
                        {isDarkMode ? <FaSun /> : <FaMoon />}
                    </button> */}
                    <button className="close-btn" onClick={toggleSidebar}>
                        <FaTimes />
                    </button>
                </div>
                <ul className="sidebar-links">
                    <li><a href="#about" onClick={toggleSidebar}>About</a></li>
                    <li><a href="#experience" onClick={toggleSidebar}>Experience</a></li>
                    <li><a href="#projects" onClick={toggleSidebar}>Projects</a></li>
                    <li><a href="#contact" onClick={toggleSidebar}>Contact</a></li>
                </ul>
                <ul className="social-icons">
                    <li><a href="https://github.com/GitTamizh" aria-label="GitHub"><FaGithub /></a></li>
                    <li><a href="https://www.linkedin.com/in/tamizharasu/" aria-label="LinkedIn"><FaLinkedin /></a></li>
                </ul>
            </div>

            {/* Overlay for closing sidebar on click outside */}
            {isSidebarOpen && <div className="overlay show" onClick={toggleSidebar}></div>}
        </React.Fragment>
    );
};

export default NavBar;
