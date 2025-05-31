import { FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiSupabase,
  SiDocker,
  SiJavascript,
  //   SiHtml5,
  //   SiCss3,
  SiReact,
  SiVite,
  SiLinux,
  SiFirebase,
  SiNpm,
  SiYarn,
  SiShadcnui,
  SiDaisyui,
} from "react-icons/si";
import { TbBrandFigma } from "react-icons/tb";
import { RiVuejsFill } from "react-icons/ri";
import { TbBrandReact } from "react-icons/tb";
// import { BiLogoPostgresql } from "react-icons/bi";
import { VscVscode } from "react-icons/vsc";
// import { IoLogoSass } from "react-icons/io5";

export const technologies = [
  {
    name: "React",
    icon: <FaReact size={32} />,
    color: "bg-cyan-400 dark:bg-cyan-300",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs size={32} />,
    color: "bg-blue-500 dark:bg-blue-400",
  },
  {
    name: "Vue.js",
    icon: <RiVuejsFill size={32} />,
    color: "bg-green-400 dark:bg-green-300",
  },
  {
    name: "React Native",
    icon: <SiReact size={32} />,
    color: "bg-cyan-400 dark:bg-cyan-300",
  },
  {
    name: "Express",
    icon: <SiExpress size={32} />,
    color: "bg-yellow-400 dark:bg-yellow-300",
  },
  {
    name: "Node.js",
    icon: <FaNode size={32} />,
    color: "bg-red-400 dark:bg-red-300",
  },
  {
    name: "MySQL",
    icon: <SiMysql size={32} />,
    color: "bg-orange-400 dark:bg-orange-300",
  },
  {
    name: "Supabase",
    icon: <SiSupabase size={32} />,
    color: "bg-lime-400 dark:bg-lime-300",
  },
  // {
  //   name: "PostgreSQL",
  //   icon: <BiLogoPostgresql size={32} />,
  //   color: "bg-blue-500 dark:bg-blue-400",
  // },
  {
    name: "Firebase",
    icon: <SiFirebase size={32} />,
    color: "bg-purple-400 dark:bg-purple-300",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size={32} />,
    color: "bg-yellow-400 dark:bg-yellow-300",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={32} />,
    color: "bg-blue-400 dark:bg-blue-300",
  },
  // { name: "HTML5", icon: <SiHtml5 size={32} />, color: "bg-orange-400 dark:bg-orange-300" },
  // { name: "CSS3", icon: <SiCss3 size={32} />, color: "bg-slate-300 dark:bg-slate-300" },
  // { name: "SASS", icon: <IoLogoSass size={32} />, color: "bg-pink-400 dark:bg-pink-300" },
  {
    name: "Tanstack",
    icon: <TbBrandReact size={32} />,
    color: "bg-slate-300 dark:bg-slate-200",
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss size={32} />,
    color: "bg-lime-400 dark:bg-lime-300",
  },
  {
    name: "DaisyUI",
    icon: <SiDaisyui size={32} />,
    color: "bg-orange-400 dark:bg-orange-300",
  },
  {
    name: "ShadcnUI",
    icon: <SiShadcnui size={32} />,
    color: "bg-pink-400 dark:bg-pink-300",
  },

  {
    name: "Vite",
    icon: <SiVite size={32} />,
    color: "bg-purple-400 dark:bg-purple-300",
  },
  {
    name: "NPM",
    icon: <SiNpm size={32} />,
    color: "bg-green-400 dark:bg-green-300",
  },
  {
    name: "Yarn",
    icon: <SiYarn size={32} />,
    color: "bg-red-400 dark:bg-red-300",
  },
  {
    name: "Figma",
    icon: <TbBrandFigma size={32} />,
    color: "bg-pink-400 dark:bg-pink-300",
  },
  {
    name: "VS Code",
    icon: <VscVscode size={32} />,
    color: "bg-blue-400 dark:bg-blue-300",
  },
  {
    name: "Git",
    icon: <FaGitAlt size={32} />,
    color: "bg-teal-400 dark:bg-teal-300",
  },
  {
    name: "Github",
    icon: <FaGithub size={32} />,
    color: "bg-slate-300 dark:bg-slate-200",
  },
  {
    name: "Docker",
    icon: <SiDocker size={32} />,
    color: "bg-blue-500 dark:bg-blue-400",
  },
  {
    name: "Linux",
    icon: <SiLinux size={32} />,
    color: "bg-teal-400 dark:bg-teal-300",
  },
];
