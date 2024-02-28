import React from "react";
import "./MobileNav.css";
import { ReactComponent as Logo2 } from "../../../assets/images/logo2.svg";
import resumePdf from "../../../assets/Chelsea_Snider_resume.pdf";

const MobileNav = ({ isOpen, toggleMenu, scrollToSection }) => {
   return (
      <>
         <div
            className={`mobile-menu ${isOpen ? "active" : ""}`}
            onClick={toggleMenu}
         >
            <div className="mobile-menu-container">
               <div className="logo-wrapper">
                  <Logo2 className="logo" />
                  <div className="outline"></div>
               </div>
               <ul>
                  <li
                     onClick={() => scrollToSection("hero")}
                     className="menu-item"
                  >
                     Home
                  </li>
                  <li
                     onClick={() => scrollToSection("skills")}
                     className="menu-item"
                  >
                     Skills
                  </li>
                  <li
                     onClick={() => scrollToSection("projects")}
                     className="menu-item"
                  >
                     Projects
                  </li>
                  <li
                     onClick={() => scrollToSection("work")}
                     className="menu-item"
                  >
                     Work Experience
                  </li>
                  <li
                     onClick={() => scrollToSection("contact")}
                     className="menu-item"
                  >
                     Contact Me
                  </li>

                  <button className="resume-btn" onClick={() => {}}>
                     <a
                        href={resumePdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resume-link"
                     >
                        Resume
                     </a>
                  </button>
               </ul>
            </div>
         </div>
      </>
   );
};

export default MobileNav;
