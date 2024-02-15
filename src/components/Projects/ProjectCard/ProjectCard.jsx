import React from "react";
import "./ProjectCard.css";
import githubIcon from "../../../assets/images/github-icon.svg";

const ProjectCard = ({ details }) => {
   return (
      <div className="projects-card">
         <div className="card-title">
            <h6>{details.title}</h6>
         </div>
         <div className="card-body">
            <img src={details.image} alt="" />
            {/* <p>{details.description}</p> */}
         </div>

         <div className="card-footer">
            <div className="stack-info">
               <span className="tech-stack">{details.stack.frontend}</span>
               {details.stack.backend && (
                  <span className="tech-stack">{details.stack.backend}</span>
               )}
            </div>
            <a href={details.href} target="_blank" rel="noopener noreferrer">
               <button className="github-btn">
                  <span>GitHub</span> <img src={githubIcon} alt="GitHub Icon" />
               </button>
            </a>
         </div>
      </div>
   );
};

export default ProjectCard;
