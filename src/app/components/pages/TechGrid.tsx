"use client";
import React from "react";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiJavascript,
  SiNodedotjs,
  SiVuedotjs,
  SiReactquery,
  SiExpress,
} from "react-icons/si";

const technologies = [
  { name: "React", icon: <SiReact size={48} />, color: "text-blue-500" },
  {
    name: "TypeScript",
    icon: <SiTypescript size={48} />,
    color: "text-blue-400",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={48} />,
    color: "text-cyan-500",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs size={48} />,
    color: "text-black dark:text-white",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size={48} />,
    color: "text-yellow-400",
  },
  { name: "Node.js", icon: <SiNodedotjs size={48} />, color: "text-green-500" },
  { name: "Vue", icon: <SiVuedotjs size={48} />, color: "text-green-600" },
  { name: "Express", icon: <SiExpress size={48} />, color: "text-emerald-400" },
  {
    name: "Tanstack",
    icon: <SiReactquery size={48} />,
    color: "text-red-500",
  },
];

const TechGrid = () => {
  return (
    <div className="hidden lg:grid grid-cols-3 gap-4">
      {technologies.map((tech, index) => (
        <div
          key={index}
          title={tech.name}
          className="bg-white dark:bg-gray-800 p-4 flex justify-center items-center transition-shadow duration-300 shadow-board-description shadow-[4px_4px_0px_0px_#000]"
        >
          <div className={tech.color}>{tech.icon}</div>
        </div>
      ))}
    </div>
  );
};

export default TechGrid;
