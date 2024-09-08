
import React, { useState, useEffect } from 'react';

const ProfileSection = () => {
    const phrases = [
        "Frontend Developer",
        "React JS Developer",
        "A Coder"
    ];
    
    const [currentPhrase, setCurrentPhrase] = useState("");
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const typingSpeed = 100; // Speed of typing
        // const erasingSpeed = 50; // Speed of erasing
        const pauseDuration = 2000; // Pause between phrases

        if (charIndex <= phrases[phraseIndex].length) {
        setCurrentPhrase(phrases[phraseIndex].substring(0, charIndex));
        const typingTimer = setTimeout(() => {
            setCharIndex(charIndex + 1);
        }, typingSpeed);

        return () => clearTimeout(typingTimer);
        } else {
        const pauseTimer = setTimeout(() => {
            setCharIndex(0);
            setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }, pauseDuration);

        return () => clearTimeout(pauseTimer);
        }
    }, [charIndex, phraseIndex, phrases]);

    return (
        <section id="profile">
        <div className="section__pic-container">
            <img src="/assets/profile-pic.png" alt="Tamizharasu P profile" />
        </div>
        <div className="section__text">
            <p className="section__text__p1">Hello, I'm</p>
            <h1 className="title">Tamizharasu P</h1>
            <p className="section__text__p2">{currentPhrase}</p>
            <div className="btn-container">
            <button className="btn btn-color-2" onClick={() => window.open('/assets/Tamizharasu Resume.pdf')}>
                Download CV
            </button>
            <button className="btn btn-color-1" onClick={() => window.location.href = '#contact'}>
                Contact Info
            </button>
            </div>
            <div id="socials-container">
            <img
                src="/assets/linkedin.png"
                alt="LinkedIn profile"
                className="icon"
                onClick={() => window.location.href = 'https://www.linkedin.com/in/tamizharasu/'}
            />
            <img
                src="/assets/github.png"
                alt="Github profile"
                className="icon"
                onClick={() => window.location.href = 'https://github.com/GitTamizh'}
            />
            </div>
        </div>
        </section>
    );
};

export default ProfileSection;
