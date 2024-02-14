import React, { useState } from "react";
import "./Skills.css";
import { SKILLS } from "../../utils/data";
import SkillCard from "./SkillCard/SkillCard";
import SkillsInfoCard from "./SkillsInfoCard/SkillsInfoCard";
import reactIcon from "../../assets/images/react-icon.png";
import javaScriptIcon from "../../assets/images/javaScript-icon.png";
import htmlIcon from "../../assets/images/html5.png";
import cssIcon from "../../assets/images/css3-icon.png";
import pythonIcon from "../../assets/images/python-icon.svg";
import djangoIcon from "../../assets/images/django-icon.svg";
import javaIcon from "../../assets/images/java-icon.svg";
import springIcon from "../../assets/images/spring-icon.svg";
import angularIcon from "../../assets/images/angular-icon.png";

const Skills = () => {
   const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

   const handleSelectSkill = (data) => {
      setSelectedSkill(data);
   };
   return (
      <>
         <section className="skills-container">
            <h5>Technical Proficiency</h5>
            <p>
               In the course of my software development career, I have finished
               a rigorous internship, a state-accredited apprenticeship program,
               and several boot camp certification courses. Throughout my
               experience, these immersive programs have helped me acquire a
               wide range of skills and knowledge about different technologies
               and tech stacks within the always evolving field of software
               development.
            </p>
            <p>
               Get in touch with me to see how I can best serve your needs with
               my skills!
            </p>

            <div className="tech-stacks">
               <div className="stack-row">
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
                  <div className="tech-icon">
                     <img src={angularIcon} alt="" />
                  </div>
               </div>
               <div className="stack-row">
                  <div className="tech-icon">
                     <img src={pythonIcon} alt="" />
                  </div>
                  <div className="tech-icon">
                     <img src={djangoIcon} alt="" />
                  </div>
                  <div className="tech-icon">
                     <img src={javaIcon} alt="" />
                  </div>
                  <div className="tech-icon">
                     <img src={springIcon} alt="" />
                  </div>
               </div>
            </div>
            <div className="skills-content">
               <div className="skills">
                  {SKILLS.map((item) => (
                     <SkillCard
                        key={item.title}
                        iconUrl={item.icon}
                        title={item.title}
                        isActive={selectedSkill.title === item.title}
                        onClick={() => {
                           handleSelectSkill(item);
                        }}
                     />
                  ))}
               </div>
               <div className="skills-info">
                  <SkillsInfoCard
                     heading={selectedSkill.title}
                     skills={selectedSkill.skills}
                  />
               </div>
            </div>
         </section>
      </>
   );
};

export default Skills;
