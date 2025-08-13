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
  threejs,
  moroccoTravel,
  atlassGym,
  financeApp
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "API & Auth Specialist",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer - Financial Management website",
    company_name: "CIH BANK",
    icon: Cihbank,
    iconBg: "#383E56",
    date: "june 2025 - july 2025   |   Casablanca - Stage",
    points: [
      "Developing a complete budget management web application using React.js, Node.js, and MySQL.",
      "Integrating a Clerk authentication with Google OAuth2 support, user synchronization with the MySQL database.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Implementing a secure middleware using JWT and verification of Clerk sessions.",
    ],
  },
  {
    title: "Website Integration Project Assistant",
    company_name: "Office National des Chemins de Fer",
    icon: Oncf,
    iconBg: "#E6DEDD",
    date: "March 2024 - April 2024  |  Rabat - Stage",
    points: [
      "Analysing functional and technical requirements for the integration of the website.",
      "Participating in integration testing and verification of compatibility with existing systems.",
      "Contributing to the development of specific modules and debugging of the application.",
      "Participating in functional, user, and performance testing to ensure quality.",
    ],
  },
];

const projects = [
  {
    name: "Morocco Travel",
    description:
      "A travel agency platform that allows users to explore destinations, search and filter trips, view popular places, and make bookings. Features include destination search, rating display, and multilingual support.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
    ],
    image: moroccoTravel, // import the screenshot or relevant image
    source_code_link: "https://github.com/21blackjac/Agence_Voyage_PFC",
  },
  {
    name: "Atlass Gym",
    description:
      "A fitness club website that provides information about gym services, events, and competitions. Includes user registration, location display, contact details, and promotional sections for upcoming events.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
    ],
    image: atlassGym, // import the screenshot or relevant image
    source_code_link: "https://github.com/21blackjac/AtlassGymProject",
  },
  {
    name: "Financial Management",
    description:
      "Developed a full-stack financial management app at CIH Bank featuring Clerk authentication, transaction tracking, budget alerts, and PDF/Excel exports. Built an admin dashboard for user, account, and transaction management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "orange-text-gradient",
      },
    ],
    image: financeApp, // import the screenshot or relevant image
    source_code_link: "https://github.com/21blackjac/Projet_Stage_GestionFinanciere", // Replace with actual repo link
  },
];

export { services, technologies, experiences, projects };
