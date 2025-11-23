"use client";
import clsx from "clsx";
import React from "react";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiJavascript,
  SiNodedotjs,
  SiVuedotjs,
  SiPrisma,
  SiMysql,
} from "react-icons/si";

const technologies = [
  { name: "React", icon: <SiReact size={48} />, color: "text-blue-500" },
  {
    name: "TypeScript",
    icon: <SiTypescript size={48} />,
    color: "text-blue-400",
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss size={48} />,
    color: "text-cyan-500",
  },
  {
    name: "Next",
    icon: <SiNextdotjs size={48} />,
    color: "text-black dark:text-white",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size={48} />,
    color: "text-yellow-400",
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs size={48} />,
    color: "text-green-500 ",
  },
  {
    name: "Vue",
    icon: <SiVuedotjs size={48} />,
    color: "text-green-600 ",
  },
  {
    name: "Prisma",
    icon: <SiPrisma size={48} />,
    color: "text-purple-500 dark:text-white ",
  },
  {
    name: "Mysql",
    icon: <SiMysql size={48} />,
    color: "text-red-500 dark:text-red-300",
  },
];

const TechGrid = () => {
  return (
    <div className="hidden lg:grid grid-cols-3 gap-4 ">
      {technologies.map((tech, index) => (
        <div
          key={index}
          title={tech.name}
          className={clsx(
            "bg-white dark:bg-gray-800 p-4 flex justify-center items-center transition-shadow duration-300 shadow-board-description shadow-[4px_4px_0px_0px_#000] relative group",
            `transition duration-300 dark:hover:bg-pink-700`
          )}
        >
          <div
            role="tooltip"
            id="tooltip-id"
            className="absolute left-1/2 transform -translate-x-1/2 bottom-5 text-xs bg-black/90 font-semibold w-full text-center text-white p-2 transition-all duration-300 ease-out opacity-0 group-hover:opacity-100"
          >
            {tech.name}
          </div>
          <div className={tech.color}>{tech.icon}</div>
        </div>
      ))}
    </div>
  );
};

export default TechGrid;
