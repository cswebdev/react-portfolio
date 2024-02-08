import frontend from "../assets/images/frontend-icon.svg";
import backend from "../assets/images/backend-icon.svg";
import tools from "../assets/images/tools-icon.svg";
import softskills from "../assets/images/softskills-icon.svg";
import closetSwap from "../assets/images/closet-swap.herokuapp.com.png";
import medisense from "../assets/images/localhost_4200_login.png";
import pixelPerfect from "../assets/images/cswebdev.github.io_pixel-perfect_.png";
import dashboardy from "../assets/images/cswebdev.github.io_smart_dashboard_.png";

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
         { skill: "Attention to Detail", percentage: "95%" },
         { skill: "Communication", percentage: "80%" },
         { skill: "Problem Solving", percentage: "60%" },
         { skill: "Creativity", percentage: "90%" },
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
      title: "Booz Allen Hamilton - Full Stack Intern",
      date: "July 2023 - December 2023",
      responsibilities: [
         "Developed dynamic front-end AngularJS components to display for a Department of Veterans Affairs financial dashboard.",
         "Increased security by preventing users from deactivating their own accounts in the Java Spring Boot backend of the Veterans Affairs financial dashboard.",
         "Created front end and back end unit tests to verify correct HTTPS status codes related to user access in order to ehance error handling for Veterans Affairs financial dashboard.",
         "Researched and created reports for the National Oceanic and Atmospheric Administration on AI and non AI based options to update Fortran codebases to Python.",
         "Collaborated with multiple teams on different projects in a highly agile development environment.",
      ],
   },
   {
      title: "Develop Carolina - Software Development Apprentice",
      date: "June 2023 - December 2023",
      responsibilities: [
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
         "lacus vel facilisis volutpat est velit egestas dui id ornare arcu odio ut sem nulla",
         "orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus",
         "imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida",
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
