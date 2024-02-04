import React from "react";
import "./MobileNav.css";
import { ReactComponent as Logo2 } from "../../../assets/images/logo2.svg";

const MobileNav = ({ isOpen, toggleMenu }) => {
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
                  <li>
                     <a className="menu-item" href="#">
                        Home
                     </a>
                  </li>
                  <li>
                     <a className="menu-item" href="#">
                        Skills
                     </a>
                  </li>
                  <li>
                     <a className="menu-item" href="#">
                        Work Experience
                     </a>
                  </li>
                  <li>
                     <a className="menu-item" href="#">
                        Contact Me
                     </a>
                  </li>

                  <button className="contact-btn" onClick={() => {}}>
                     Hire Me
                  </button>
               </ul>
            </div>
         </div>
      </>
   );
};

export default MobileNav;
