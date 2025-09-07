import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  Cihbank,
  Oncf,
  laravel,
  moroccoTravel,
  atlassGym,
  financeApp,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About", // ✅ translation key
  },
  {
    id: "work",
    title: "Work", // ✅ translation key
  },
  {
    id: "contact",
    title: "Contact", // ✅ translation key
  },
];

const services = [
  {
    title: "skills.fullstack", // ✅
    icon: web,
  },
  {
    title: "skills.reactnative", // ✅
    icon: mobile,
  },
  {
    title: "skills.backend", // ✅
    icon: backend,
  },
  {
    title: "skills.api", // ✅
    icon: creator,
  },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Laravel", icon: laravel },
  { name: "git", icon: git },
  { name: "figma", icon: figma },
  { name: "docker", icon: docker },
];

const experiences = [
  {
    title: "exp1.title", // ✅
    company_name: "exp1.company",
    icon: Cihbank,
    iconBg: "#383E56",
    date: "exp1.date",
    points: ["exp1.task1", "exp1.task2", "exp1.task3", "exp1.task4"], // ✅
  },
  {
    title: "exp2.title", // ✅
    company_name: "exp2.company",
    icon: Oncf,
    iconBg: "#E6DEDD",
    date: "exp2.date",
    points: ["exp2.task1", "exp2.task2", "exp2.task3", "exp2.task4"], // ✅
  },
];

const projects = [
  {
    name: "proj1.title", // ✅
    description: "proj1.desc", // ✅
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
      { name: "restapi", color: "green-text-gradient" },
    ],
    image: moroccoTravel,
    source_code_link: "https://github.com/21blackjac/Agence_Voyage_PFC",
  },
  {
    name: "proj2.title", // ✅
    description: "proj2.desc", // ✅
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
    ],
    image: atlassGym,
    source_code_link: "https://github.com/21blackjac/AtlassGymProject",
  },
  {
    name: "proj3.title", // ✅
    description: "proj3.desc", // ✅
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "mysql", color: "orange-text-gradient" },
    ],
    image: financeApp,
    source_code_link:
      "https://github.com/21blackjac/Projet_Stage_GestionFinanciere",
  },
];

export { services, technologies, experiences, projects };
