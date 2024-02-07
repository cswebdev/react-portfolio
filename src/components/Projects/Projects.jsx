import React from "react";
import "./Projects.css";
import { useRef } from "react";
import Slider from "react-slick";
import { PROJECTS } from "../../utils/data";
import ProjectCard from "./ProjectCard/ProjectCard";

const Projects = () => {
   const sliderRef = useRef();
   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
         {
            breakpoint: 769,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
      ],
   };
   const slideRight = () => {
      sliderRef.current.slickNext();
   };

   const slideLeft = () => {
      sliderRef.current.slickPrev();
   };
   return (
      <>
         <section className="projects-container">
            <h5>Personal Projects</h5>
         </section>
         <div className="projects-content">
            <div className="arrow-right" onClick={slideRight}>
               <span className="material-symbols-outlined">chevron_right</span>
            </div>
            <div className="arrow-left" onClick={slideLeft}>
               <span className="material-symbols-outlined">chevron_left</span>
            </div>
            <div className="projects">
               <Slider ref={sliderRef} {...settings}>
                  {PROJECTS.map((item) => (
                     <ProjectCard key={item.title} details={item} />
                  ))}
               </Slider>
            </div>
         </div>
      </>
   );
};

export default Projects;
