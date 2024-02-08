import React, { useState } from "react";
import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav";
import { ReactComponent as Logo2 } from "../../assets/images/logo2.svg";

const Navbar = () => {
   const [openMenu, setOpenMenu] = useState(false);
   const toggleMenu = () => {
      setOpenMenu(!openMenu);
   };

   return (
      <>
         <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
         <nav className="nav-wrapper">
            <div className="nav-content">
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
                     <a href="#" className="menu-item">
                        Projects
                     </a>
                  </li>
                  <li>
                     <a className="menu-item" href="#">
                        Work Experience
                     </a>
                  </li>

                  <button className="resume-btn" onClick={() => {}}>
                     Resume
                  </button>
               </ul>

               <button className="menu-btn" onClick={toggleMenu}>
                  <span
                     class={"material-symbols-outlined"}
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
