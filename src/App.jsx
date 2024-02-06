import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import "./App.css";
import Skills from "./components/Skills/Skills";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import ContactMe from "./components/ContactMe/ContactMe";
import Projects from "./components/Projects/Projects";

const App = () => {
   return (
      <>
         <Navbar />
         <div className="container">
            <Hero />
            <Skills />
            <Projects />
            <WorkExperience />
            <ContactMe />
         </div>
      </>
   );
};

export default App;
