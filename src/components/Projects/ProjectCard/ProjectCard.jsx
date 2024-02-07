import React from "react";
import "./ProjectCard.css";
import githubIcon from "../../../assets/images/github-icon.svg";

const ProjectCard = ({ details }) => {
   return (
      <div className="projects-card">
         <h6>{details.title}</h6>
         <p>{details.description}</p>
         <div className="stack-info">
            <span className="tech-stack">{details.stack.frontend}</span>
            <span className="tech-stack">{details.stack.backend}</span>
         </div>
         <a href={details.href} target="_blank">
            <button className="github-btn">
               <span>GitHub</span> <img src={githubIcon} alt="GitHub Icon" />
            </button>
         </a>
      </div>
   );
};

export default ProjectCard;
