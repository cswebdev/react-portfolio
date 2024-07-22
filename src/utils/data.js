import frontend from "../assets/images/frontend-icon.svg";
import backend from "../assets/images/backend-icon.svg";
import tools from "../assets/images/tools-icon.svg";
import softskills from "../assets/images/softskills-icon.svg";
import closetSwap from "../assets/images/closet-swap.herokuapp.com.png";
import medisense from "../assets/images/localhost_4200_login.png";
import pixelPerfect from "../assets/images/cswebdev.github.io_pixel-perfect_.png";
import dashboardy from "../assets/images/cswebdev.github.io_smart_dashboard_.png";
import tetris from "../assets/images/tetris.png";

export const SKILLS = [
   {
      title: "Frontend",
      icon: frontend,
      skills: [
         { skill: "HTML5", percentage: "80%" },
         { skill: "CSS3 (Sass/SCSS)", percentage: "75%" },
         { skill: "JavaScript", percentage: "70%" },
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
         { skill: "Critical Thinking", percentage: "95%" },
         { skill: "Team Collaboration", percentage: "100%" },
         { skill: "Adaptability", percentage: "90%" },
         { skill: "Communication", percentage: "100%" },
      ],
   },
];

export const PROJECTS = [
   {
      title: "ClosetSwap",
      image: closetSwap,
      stack: {
         frontend: "ReactJS",
         backend: "Django",
      },
      description:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur. Donec enim diam vulputate ut.",
      href: "https://github.com/cswebdev/closet-swap",
   },
   {
      title: "Tetris Clone",
      image: tetris,
      stack: {
         frontend: "ReactJS",
      },
      href: "https://github.com/cswebdev/tetris_clone",
   },

   {
      title: "Pixel Perfect",
      image: pixelPerfect,
      stack: {
         frontend: "HTML5",
         backend: "",
      },
      description:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur. Donec enim diam vulputate ut.",
      href: "https://github.com/cswebdev/pixel-perfect",
   },
   {
      title: "Medisense",
      image: medisense,
      stack: {
         frontend: "AngularJS",
         backend: "Java Spring Boot",
      },
      description:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur. Donec enim diam vulputate ut.",
      href: "https://github.com/cswebdev/medisense",
   },
   {
      title: "MyDashboard",
      image: dashboardy,
      stack: {
         frontend: "ReactJS",
         backend: "",
      },
      description:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur. Donec enim diam vulputate ut.",
      href: "https://github.com/cswebdev/smart_dashboard",
   },
];

export const WORK_EXPERIENCE = [
   {
      title: "Teachers Assistant, Carolina Code School, Greenville SC",
      date: "May 2024 - July 2024",
      responsibilities: [
         "Supported a cohort in achieving a 100% graduation rate by assisting students with technical knowledge and troubleshooting needs.",
         "Guided students in troubleshooting issues, enhancing their problem solving skills.",
         "Developed weekly JavaScript challenges and conducted mock coding interviews to enhance students' technical skills and interview readiness.",
         "Boosted program engagement for Carolina Code School by creating weekly blog posts for the Full-Stack Developer Certification course.",
      ],
   },
   {
      title: "Front End Developer, Interconnected Collective, Remote",
      date: "March 2024 - June 2024",
      responsibilities: [
         "Assisted volunteer group in launching an application for the Lesbian Who Tech and Allies Summit 2024.",
         "Developed a static ReactJS application hosted via Netlify.",
         "Collaborated closely with a volunteer lead team of project managers, UI/UX designers, and developers.",
         "Supported the app development process from initial development to launch.",
      ],
   },
   {
      title: "Booz Allen Hamilton - Apprentice Full-Stack Developer",
      date: "July 2023 - December 2023",
      responsibilities: [
         "Developed dynamic front-end AngularJS components to display for a Department of Veterans Affairs financial dashboard.",
         "Increased security by preventing users from deactivating their own accounts in the Java Spring Boot backend of the Veterans Affairs financial dashboard.",
         "Created front end and back end unit tests to verify correct HTTPS status codes related to user access in order to enhance error handling for Veterans Affairs financial dashboard.",
         "Researched and created reports for the National Oceanic and Atmospheric Administration on AI and non AI based options to update Fortran codebases to Python.",
         "Collaborated with multiple teams on different projects in a highly agile development environment.",
      ],
   },
];

export const EDUCATION_EXPERIENCE = [
   {
      title: "Develop Carolina Apprenticeship",
      date: "June 2023 - December 2023",
      degree: "Journeymans Certification in Software Development.",
   },
   {
      title: "Carolina Code School",
      date: "January 2023 - March 2023",
      degree: "Full Stack Developer Certification",
   },
];
