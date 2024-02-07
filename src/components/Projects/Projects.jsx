import React from "react";
import "./Projects.css";
import { useRef } from "react";
import { PROJECTS } from "../../utils/data";
import ProjectCard from "./ProjectCard/ProjectCard";

const Projects = () => {
   return (
      <>
         <section className="projects-container">
            <h5>Personal Projects</h5>
         </section>
         <div className="projects-content">
            <div className="projects">
               {PROJECTS.map((item) => (
                  <ProjectCard key={item.title} details={item} />
               ))}
            </div>
         </div>
      </>
   );
};

export default Projects;
