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

import * as motion from "motion/react-client";

const Technologies = () => {
  const technologies = [
    { name: "React", icon: <FaReact size={32} />, color: "bg-cyan-400" },
    { name: "Next.js", icon: <SiNextdotjs size={32} />, color: "bg-blue-500" },
    { name: "Vue.js", icon: <RiVuejsFill size={32} />, color: "bg-green-400" },
    {
      name: "React Native",
      icon: <SiReact size={32} />,
      color: "bg-cyan-400",
    },
    { name: "Express", icon: <SiExpress size={32} />, color: "bg-yellow-400" },
    { name: "Node.js", icon: <FaNode size={32} />, color: "bg-red-400" },
    { name: "MySQL", icon: <SiMysql size={32} />, color: "bg-orange-400" },
    { name: "Supabase", icon: <SiSupabase size={32} />, color: "bg-lime-400" },
    // {
    //   name: "PostgreSQL",
    //   icon: <BiLogoPostgresql size={32} />,
    //   color: "bg-blue-500",
    // },
    {
      name: "Firebase",
      icon: <SiFirebase size={32} />,
      color: "bg-purple-400",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript size={32} />,
      color: "bg-yellow-300",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript size={32} />,
      color: "bg-blue-400",
    },
    // { name: "HTML5", icon: <SiHtml5 size={32} />, color: "bg-orange-400" },
    // { name: "CSS3", icon: <SiCss3 size={32} />, color: "bg-slate-300" },
    // { name: "SASS", icon: <IoLogoSass size={32} />, color: "bg-pink-400" },
    {
      name: "Tanstack",
      icon: <TbBrandReact size={32} />,
      color: "bg-slate-300",
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss size={32} />,
      color: "bg-lime-400",
    },
    { name: "DaisyUI", icon: <SiDaisyui size={32} />, color: "bg-orange-400" },
    { name: "ShadcnUI", icon: <SiShadcnui size={32} />, color: "bg-pink-400" },

    { name: "Vite", icon: <SiVite size={32} />, color: "bg-purple-400" },
    { name: "NPM", icon: <SiNpm size={32} />, color: "bg-green-400" },
    { name: "Yarn", icon: <SiYarn size={32} />, color: "bg-red-400" },
    { name: "Figma", icon: <TbBrandFigma size={32} />, color: "bg-pink-400" },
    { name: "VS Code", icon: <VscVscode size={32} />, color: "bg-blue-400" },
    { name: "Git", icon: <FaGitAlt size={32} />, color: "bg-teal-400" },
    {
      name: "Github",
      icon: <FaGithub size={32} />,
      color: "bg-slate-300",
    },
    { name: "Docker", icon: <SiDocker size={32} />, color: "bg-blue-500" },
    { name: "Linux", icon: <SiLinux size={32} />, color: "bg-teal-400" },
  ];

  return (
    <section
      id="technologies"
      className="py-20 transition-colors bg-white dark:bg-[#252839]"
    >
      <div className="container px-6 mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="bg-lime-400 dark:bg-lime-200 inline-block p-4 border-4 border-black shadow-[8px_8px_0px_0px_#000] mb-6">
            <h2 className="text-4xl font-black md:text-5xl">TECHS & TOOLS</h2>
          </div>
          <p className="max-w-2xl mx-auto text-xl font-bold dark:text-white">
            Tools and technologies I use to bring ideas to life
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-3 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className={`${tech.color} p-6 border-4 border-black shadow-[8px_8px_0px_0px_#000] hover:shadow-[12px_12px_0px_0px_#000] transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 group cursor-pointer`}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 mb-4 text-white transition-colors bg-black border-2 border-black group-hover:bg-white group-hover:text-black">
                  {tech.icon}
                </div>
                <h3 className="text-sm font-black md:text-base">{tech.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
