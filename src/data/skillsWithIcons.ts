import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiPython,
  SiDjango,
  SiMysql,
  SiSqlite,
  SiGit,
  SiGithub,
  SiMongodb
} from "react-icons/si";
import {
  FaHandsHelping,
  FaBrain,
  FaComments,
  FaLightbulb,
} from "react-icons/fa";

import { IconType } from "react-icons";

export type Skill = {
  name: string;
  icon: IconType;
  color: string;
  description: string;
};

export const hardSkills: Skill[] = [
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#f7df1e",
    description: "I use JavaScript to make websites interactive."
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178c6",
    description: "TypeScript helps me write better and safer code."
  },
  {
    name: "React",
    icon: SiReact,
    color: "#61dafb",
    description: "I use React to build fast and modern user interfaces."
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#000000",
    description: "With Next.js, I build fast websites using React."
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#339933",
    description: "I use Node.js to build the server part of web apps."
  },
  {
    name: "Express",
    icon: SiExpress,
    color: "#000000",
    description: "Express helps me create simple and fast APIs."
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#38bdf8",
    description: "I use Tailwind to style websites quickly and cleanly."
  },
  {
    name: "Python",
    icon: SiPython,
    color: "#3776ab",
    description: "I use Python to write scripts and backend logic."
  },
  {
    name: "Django",
    icon: SiDjango,
    color: "#092e20",
    description: "Django helps me build websites fast and securely."
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "#00758f",
    description: "I use MySQL to manage structured data."
  },
  {
    name: "SQLite",
    icon: SiSqlite,
    color: "#003b57",
    description: "I use SQLite for small apps that need a local database."
  },
  {
    name: "Git",
    icon: SiGit,
    color: "#f05032",
    description: "I use Git to save versions of my code and work with others."
  },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "#000000",
    description: "GitHub is where I store and share my code online."
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47a248",
    description: "I use MongoDB to store flexible and unstructured data."
  }
];

export const softSkills: Skill[] = [
  {
    name: "Problem Solving",
    icon: FaLightbulb,
    color: "#facc15",
    description: "I like finding smart and simple solutions to problems."
  },
  {
    name: "Communication",
    icon: FaComments,
    color: "#60a5fa",
    description: "I explain ideas clearly and listen to others."
  },
  {
    name: "Teamwork",
    icon: FaHandsHelping,
    color: "#10b981",
    description: "I enjoy working with people and reaching goals together."
  },
  {
    name: "Critical Thinking",
    icon: FaBrain,
    color: "#c084fc",
    description: "I look at problems from different angles before deciding."
  }
];
