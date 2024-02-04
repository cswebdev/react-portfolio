import React, { useState } from "react";
import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav";

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
                  <svg
                     className="logo"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 32 32"
                  >
                     <path
                        d="M31.194 15.201h-0.319c-0.395-3.303-3.202-5.864-6.611-5.864-3.168 0-5.813 2.212-6.491 5.174l-1.526-0.797c-0.154-0.080-0.339-0.080-0.493 0l-1.526 0.797c-0.677-2.962-3.323-5.174-6.491-5.174-3.41 0-6.216 2.562-6.612 5.864h-0.319c-0.442 0-0.8 0.358-0.8 0.8 0 0.441 0.358 0.799 0.8 0.799h0.319c0.396 3.303 3.202 5.864 6.612 5.864 3.68 0 6.664-2.983 6.664-6.664 0-0.124-0.012-0.245-0.019-0.368l1.618-0.845 1.618 0.845c-0.007 0.122-0.019 0.244-0.019 0.368 0 3.68 2.984 6.664 6.664 6.664 3.409 0 6.215-2.561 6.611-5.864h0.319c0.442 0 0.8-0.358 0.8-0.8s-0.358-0.8-0.8-0.8zM7.737 21.598c-3.087 0-5.598-2.511-5.598-5.598s2.511-5.598 5.598-5.598c3.087 0 5.598 2.511 5.598 5.598s-2.511 5.598-5.598 5.598zM24.263 21.598c-3.087 0-5.598-2.511-5.598-5.598s2.511-5.597 5.598-5.597c3.087 0 5.598 2.511 5.598 5.597s-2.511 5.598-5.598 5.598z"
                        fill="#fff"
                     ></path>
                  </svg>
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