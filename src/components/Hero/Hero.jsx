import React from "react";
import "./Hero.css";
import heroIllustration from "../../assets/images/hero-illustration.png";
import reactIcon from "../../assets/images/react-icon.png";
import javaScriptIcon from "../../assets/images/javaScript-icon.png";
import htmlIcon from "../../assets/images/html5.png";
import cssIcon from "../../assets/images/css3-icon.png";

const Hero = () => {
   return (
      <>
         <section className="hero-container">
            <div className="hero-content">
               <h2>Building Digital Experiences That Inspire</h2>
               <p>
                  Passionate Full Stack Developer | Transforming ideas into
                  seamless and visually stunning web solutions
               </p>
            </div>

            <div className="hero-img">
               <div>
                  <img
                     className="hero-illustration"
                     src={heroIllustration}
                     alt=""
                  />
               </div>

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
               </div>
               
            </div>
         </section>
      </>
   );
};

export default Hero;
