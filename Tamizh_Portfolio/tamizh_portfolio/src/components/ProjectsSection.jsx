// src/components/ProjectsSection.js
import React from 'react';

const projects = [
    {
        id: 1,
        imgSrc: '/assets/project-1.png',
        title: 'Food Menu',
        githubUrl: 'https://github.com/GitTamizh/WebDevelopment/tree/b68d4b713d7db8ecd88e9a373a38b6749c694995/Javascript%20Projects/08-%20Menu/Menus',
        liveDemoUrl: 'https://foody-corner.netlify.app/',
    },
    {
        id: 2,
        imgSrc: '/assets/project-2.png',
        title: 'Review project',
        githubUrl: 'https://github.com/GitTamizh/WebDevelopment/tree/b68d4b713d7db8ecd88e9a373a38b6749c694995/Javascript%20Projects/03-reviews/Reviews',
        liveDemoUrl: 'https://review-one.netlify.app/',
    },
    {
        id: 3,
        imgSrc: '/assets/project-3.png',
        title: 'Travel Tribes',
        githubUrl: 'https://github.com/GitTamizh/WebDevelopment/tree/b68d4b713d7db8ecd88e9a373a38b6749c694995/Javascript%20Projects/10-%20Scroll/Scroll',
        liveDemoUrl: 'https://travel-tribes.netlify.app/',
    },
    ];

    const ProjectsSection = () => (
    <section id="projects">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
        <div className="about-containers">
            {projects.map(project => (
            <div className="details-container color-container" key={project.id}>
                <div className="article-container">
                <img src={project.imgSrc} alt={project.title} className="project-img" />
                </div>
                <h2 className="experience-sub-title project-title">{project.title}</h2>
                <div className="btn-container">
                <button className="btn btn-color-2 project-btn" onClick={() => window.location.href = project.githubUrl}>
                    Github
                </button>
                <button className="btn btn-color-2 project-btn" onClick={() => window.location.href = project.liveDemoUrl}>
                    Live Demo
                </button>
                </div>
            </div>
            ))}
        </div>
        </div>
        <img
        src="/assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => window.location.href = '#contact'}
        />
    </section>
);

export default ProjectsSection;
