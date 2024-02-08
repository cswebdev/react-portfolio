import React from "react";
import "./Hero.css";
import heroIllustration from "../../assets/images/hero-illustration.png";

import githubIcon from "../../assets/images/github-icon.svg";
import linkedinIcon from "../../assets/images/linkedin-icon.svg";
import devtoIcon from "../../assets/images/dev-to.svg";

const Hero = () => {
   return (
      <>
         <section className="hero-container">
            <div className="hero-content">
               <h2>
                  Hello, <br /> I'm Christian!
               </h2>
               <p>Full Stack Developer | Innovator | Problem Solver</p>
               <p>
                  Transforming ideas into seamless and visually stunning web
                  solutions
               </p>
               <div className="social-bar">
                  <div className="social-icon">
                     <a
                        href="https://www.linkedin.com/in/chelsea-snider"
                        target="_blank"
                     >
                        <img src={linkedinIcon} alt="linkedIcon" />
                     </a>
                  </div>
                  <div className="social-icon">
                     <a href="https://github.com/cswebdev" target="_blank">
                        <img
                           id="githubIcon"
                           src={githubIcon}
                           alt="githubIcon"
                        />
                     </a>
                  </div>
                  <div className="social-icon">
                     <a href="https://dev.to/codewithchelsea" target="_blank">
                        <img id="githubIcon" src={devtoIcon} alt="devTo Icon" />
                     </a>
                  </div>
               </div>
            </div>

            <div className="hero-img">
               <div>
                  <img
                     className="hero-illustration"
                     src={heroIllustration}
                     alt=""
                  />
               </div>
               {/* 
               <div>
                  <div className="tech-icon">
                     <img src={htmlIcon} alt="" />
                  </div>
                  <div className="tech-icon">
                     <img src={cssIcon} alt="" />
                  </div>
                  <div className="tech-icon">
                     <img src={javaScriptIcon} alt="" />
                  </div>
                  <div className="tech-icon">
                     <img src={reactIcon} alt="" />
                  </div>
               </div> */}
            </div>
         </section>
      </>
   );
};

export default Hero;
