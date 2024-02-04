import frontend from "../assets/images/frontend-icon.svg";
import backend from "../assets/images/backend-icon.svg";
import tools from "../assets/images/tools-icon.svg";
import softskills from "../assets/images/softskills-icon.svg"

export const SKILLS = [
   {
      title: "Frontend",
      icon: frontend,
      skills: [
         { skill: "HTML5", percentage: "80%" },
         { skill: "CSS3 (Sass/SCSS)", percentage: "70%" },
         { skill: "JavaScript", percentage: "60%" },
         { skill: "ReactJS", percentage: "70%" },
      ],
   },
   {
      title: "Backend",
      icon: backend,
      skills: [
         { skill: "Java SpringBoot", percentage: "40%" },
         { skill: "Django", percentage: "40%" },
      ],
   },
   {
      title: "Tools",
      icon: tools,
      skills: [
         { skill: "Git & Github", percentage: "40%" },
         { skill: "Visual Studio Code", percentage: "40%" },
         { skill: "PostgreSQL", percentage: "40%" },
         { skill: "Docker", percentage: "40%" },
      ],
   },
   {
      title: "Soft Skills",
      icon: softskills,
      skills: [
         { skill: "Git & Github", percentage: "40%" },
         { skill: "Visual Studio Code", percentage: "40%" },
         { skill: "PostgreSQL", percentage: "40%" },
         { skill: "Docker", percentage: "40%" },
      ],
   },
];
