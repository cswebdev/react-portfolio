import frontend from "../assets/images/frontend-icon.svg";
import backend from "../assets/images/backend-icon.svg";
import tools from "../assets/images/tools-icon.svg";
import softskills from "../assets/images/softskills-icon.svg";

export const SKILLS = [
   {
      title: "Frontend",
      icon: frontend,
      skills: [
         { skill: "HTML5", percentage: "80%" },
         { skill: "CSS3 (Sass/SCSS)", percentage: "75%" },
         { skill: "JavaScript", percentage: "60%" },
         { skill: "ReactJS", percentage: "70%" },
         { skill: "AngularJS", percentage: "55%" },
      ],
   },
   {
      title: "Backend",
      icon: backend,
      skills: [
         { skill: "Java SpringBoot", percentage: "40%" },
         { skill: "Django", percentage: "45%" },
      ],
   },
   {
      title: "Tools",
      icon: tools,
      skills: [
         { skill: "Git & Github", percentage: "70%" },
         { skill: "Visual Studio Code", percentage: "88%" },
         { skill: "PostgreSQL", percentage: "40%" },
         { skill: "Docker", percentage: "20%" },
      ],
   },
   {
      title: "Soft Skills",
      icon: softskills,
      skills: [
         { skill: "Attention to Detail", percentage: "90%" },
         { skill: "Communication", percentage: "80%" },
         { skill: "Problem Soliving", percentage: "60%" },
         { skill: "Creativity", percentage: "70%" },
      ],
   },
];
