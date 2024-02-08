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
                  Hello, <br /> I'm Chelsea!
               </h2>
               <p>Full Stack Developer | Innovator | Problem Solver</p>
               <p>
                  Transforming ideas into seamless and visually stunning web
                  solutions
               </p>
               <div className="social-bar">
                  <div className="social-icon">
                     <img src={linkedinIcon} alt="linkedIcon" />
                  </div>
                  <div className="social-icon">
                     <img id="githubIcon" src={githubIcon} alt="githubIcon" />
                  </div>
                  <div className="social-icon">
                     <img id="githubIcon" src={devtoIcon} alt="devTo Icon" />
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
