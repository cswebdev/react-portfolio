import React from "react";
import "./Hero.css";
import heroIllustration from "../../assets/images/selfie.png";
// import heroIllustration from "../../assets/images/hero-illustration.png";
import githubIcon from "../../assets/images/github-icon.svg";
import linkedinIcon from "../../assets/images/linkedin-icon.svg";
import devtoIcon from "../../assets/images/dev-to.svg";
import emailIcon from "../../assets/images/email-icon.svg";

const Hero = () => {
   return (
      <>
         <section className="hero-container">
            <div className="hero-content">
               <div className="hero-content-container">
                  <div className="hero-content-text">
                     <h2>
                        I'm <span>Chelsea</span>,
                     </h2>
                     <h2>a Web Developer</h2>
                     <p>
                        I specialize in full-stack web development with a
                        passion for front-end design. Let me help you transform
                        your ideas into fully functional and visually striking
                        software solutions.
                     </p>
                  </div>

                  <div className="social-bar">
                     <div className="social-icon">
                        <a
                           href="https://www.linkedin.com/in/chelsea-snider"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <img
                              src={linkedinIcon}
                              style={{ fill: "#fff" }}
                              alt="linkedIcon"
                           />
                        </a>
                     </div>
                     <div className="social-icon">
                        <a
                           href="https://github.com/cswebdev"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <img
                              id="githubIcon"
                              src={githubIcon}
                              alt="githubIcon"
                           />
                        </a>
                     </div>
                     <div className="social-icon">
                        <a
                           href="https://dev.to/codewithchelsea"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <img
                              id="githubIcon"
                              src={devtoIcon}
                              alt="devTo Icon"
                           />
                        </a>
                     </div>
                     <div className="social-icon">
                        <a
                           href="mailto:cswebdev91@gmail.com"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <img
                              id="emailIcon"
                              src={emailIcon}
                              alt="devTo Icon"
                           />
                        </a>
                     </div>
                  </div>
               </div>
            </div>

            <div className="hero-img">
               <div className="hero-border">
                  <img
                     className="hero-illustration"
                     loading="lazy"
                     src={heroIllustration}
                     alt=""
                  />
               </div>
            </div>
         </section>
      </>
   );
};

export default Hero;
