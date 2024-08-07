import React, { useState } from "react";
import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav";
import { ReactComponent as Logo2 } from "../../assets/images/logo2.svg";
import resumePdf from "../../assets/Chelsea_Snider_resume.pdf";

const Navbar = ({ scrollToSection }) => {
   const [openMenu, setOpenMenu] = useState(false);

   const toggleMenu = () => {
      setOpenMenu(!openMenu);
   };

   return (
      <>
         <MobileNav
            isOpen={openMenu}
            toggleMenu={toggleMenu}
            scrollToSection={scrollToSection}
         />

         <nav className="nav-wrapper">
            <div className="nav-content">
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

               <button className="menu-btn" onClick={toggleMenu}>
                  <span
                     className={"material-symbols-outlined"}
                     style={{ fontSize: "1.8rem" }}
                  >
                     {openMenu ? "close" : "menu"}
                  </span>
               </button>
            </div>
         </nav>
      </>
   );
};

export default Navbar;
