// src/components/AboutSection.js
import React from 'react';

const AboutSection = () => (
    <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
        <div className="section__pic-container">
            <img src="./assets/about-pic.jpg" alt="Profile icon" className="about-pic" />
        </div>
        <div className="about-details-container">
            <div className="about-containers">
            <div className="details-container">
                <img src="./assets/experience.png" alt="Experience icon" className="icon" />
                <h3>Experience</h3>
                <p>2+ years <br />Frontend Development</p>
            </div>
            <div className="details-container">
                <img src="./assets/education.png" alt="Education icon" className="icon" />
                <h3>Education</h3>
                <p>B.E Mechanical Engineer</p>
            </div>
            </div>
            <div className="text-container">
            <p>
                I'm <strong>Tamizharasu P</strong>, a React developer and Front End Developer.
                I'm a Graduate with Mechanical Engineering as Majors from <strong>Chennai Institue of Teachnology</strong>
                , Chennai india. I have been developing Front-end websites for over 2 years now. I have worked with cross-functional teams to deliver high-quality, scalable, and maintainable code.. Currently working as Front-end Developer at Tata Consultancy Services
            </p>
            </div>
        </div>
        </div>
        <img
        src="./assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => window.location.href = '#experience'}
        />
    </section>
);

export default AboutSection;
