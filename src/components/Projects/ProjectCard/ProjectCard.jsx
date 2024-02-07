import React from "react";
import "./ProjectCard.css";
import githubIcon from "../../../assets/images/github-icon.svg";

const ProjectCard = ({ details }) => {
   return (
      <div className="projects-card">
         <h6>{details.title}</h6>
         <p className="tech-stack">frontend: {details.stack.frontend}</p>
         <p className="tech-stack">backend: {details.stack.backend}</p>
         <p>{details.description}</p>
         <a href={details.href} target="_blank">
            <button className="github-btn">
               <span>GitHub</span> <img src={githubIcon} alt="GitHub Icon" />
            </button>
         </a>
      </div>
   );
};

export default ProjectCard;
