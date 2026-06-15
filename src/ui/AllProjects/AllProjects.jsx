// pages/AllProjects.jsx
import React, { useEffect } from "react";
import { projects } from "../../data";
import ProjectCard from "../ProjectCard";
import "./AllProjects.css"; 

const AllProjects = () => {
  // Optional: Scroll to top of the page when this page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="all-projects__page">
      <div className="section__wrapper">
        <div className="section__header">
          <h2 className="shine">All Projects</h2>
          <p className="text__muted">A complete archive of everything I've built.</p>
        </div>
        
        <div className="projects__container">
          {projects.map((project, index) => (
            <ProjectCard {...project} key={index} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default AllProjects;