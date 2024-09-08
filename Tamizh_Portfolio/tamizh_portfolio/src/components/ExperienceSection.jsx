// src/components/ExperienceSection.js
import React from 'react';

const ExperienceSection = () => (
    <section id="experience">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Experience</h1>
        <div className="experience-details-container">
        <div className="about-containers">
            <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
                <article>
                <img src="./assets/checkmark.png" alt="Experience icon" className="icon" />
                <div>
                    <h3>HTML</h3>
                    <p>Experienced</p>
                </div>
                </article>
                <article>
                <img src="./assets/checkmark.png" alt="Experience icon" className="icon" />
                <div>
                    <h3>css</h3>
                    <p>Experienced</p>
                </div>
                </article>
                <article>
                <img src="./assets/checkmark.png" alt="Experience icon" className="icon" />
                <div>
                    <h3>Javascript</h3>
                    <p>Experienced</p>
                </div>
                </article>
                <article>
                <img src="./assets/checkmark.png" alt="Experience icon" className="icon" />
                <div>
                    <h3>React js</h3>
                    <p>Experienced</p>
                </div>
                </article>
                <article>
                <img src="./assets/checkmark.png" alt="Experience icon" className="icon" />
                <div>
                    <h3>Git</h3>
                    <p>Intermediate</p>
                </div>
                </article>
            </div>
            </div>
        </div>
        </div>
        <img
        src="./assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => window.location.href = '#projects'}
        />
    </section>
);

export default ExperienceSection;
