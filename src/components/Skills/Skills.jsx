import React, { useState } from "react";
import "./Skills.css";
import { SKILLS } from "../../utils/data";
import SkillCard from "./SkillCard/SkillCard";
import SkillsInfoCard from "./SkillsInfoCard/SkillsInfoCard";

const Skills = () => {
   const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

   const handleSelectSkill = (data) => {
      setSelectedSkill(data);
   };
   return (
      <>
         <section className="skills-container">
            <h5>Techincal Profeciency</h5>

            <div className="skills-content">
               <div className="skills">
                  {SKILLS.map((item) => (
                     <SkillCard
                        key={item.title}
                        iconUrl={item.icon}
                        title={item.title}
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