import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ details }) => {
   return (
      <>
         <div className="projects-card">
            <h6>{details.title}</h6>
            <p>{details.frontend}</p>
            <p>{details.stack.frontend}</p>
            <p>{details.stack.backend}</p>

            <p>{details.description}</p>

            <button>github</button>
         </div>
      </>
   );
};

export default ProjectCard;
