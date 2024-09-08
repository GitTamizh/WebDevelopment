// src/App.js
import React from "react";
import "./App.css";
import "./mediaqueries.css";

import NavBar from "./components/NavBar";
import ProfileSection from "./components/ProfileSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ProfileSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
