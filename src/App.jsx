import React, { useRef } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import "./App.css";
import Skills from "./components/Skills/Skills";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import ContactMe from "./components/ContactMe/ContactMe";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

const App = () => {
   const homeRef = useRef(null);
   const skillsRef = useRef(null);
   const projectsRef = useRef(null);
   const workExperienceRef = useRef(null);
   const contactMeRef = useRef(null);

   const scrollToSection = (section) => {
      switch (section) {
         case "hero":
            window.scrollTo({
               top: homeRef.current.offsetTop,
               behavior: "smooth",
            });
            break;
         case "skills":
            window.scrollTo({
               top: skillsRef.current.offsetTop,
               behavior: "smooth",
            });
            break;
         case "projects":
            window.scrollTo({
               top: projectsRef.current.offsetTop,
               behavior: "smooth",
            });
            break;
         case "work":
            window.scrollTo({
               top: workExperienceRef.current.offsetTop,
               behavior: "smooth",
            });
            break;
         case "contact":
            window.scrollTo({
               top: contactMeRef.current.offsetTop,
               behavior: "smooth",
            });
            break;
         default:
            break;
      }
   };

   return (
      <>
         <Navbar scrollToSection={scrollToSection} />
         <div className="container">
            <div ref={homeRef}>
               <Hero />
            </div>
            <div ref={skillsRef}>
               <Skills />
            </div>
            <div ref={projectsRef}>
               <Projects />
            </div>
            <div ref={workExperienceRef}>
               <WorkExperience />
            </div>
            <div ref={contactMeRef}>
               <ContactMe />
            </div>
         </div>
         <Footer />
      </>
   );
};

export default App;
