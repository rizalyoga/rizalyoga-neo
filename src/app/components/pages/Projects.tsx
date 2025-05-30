"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { PiGithubLogoBold } from "react-icons/pi";
import Image from "next/image";
import { myProjects } from "@/app/data/projects";
import clsx from "clsx";
import { useEffect, useState } from "react";

interface ProjectInterface {
  id: string;
  cover: string;
  title: string;
  technologies: string[];
  description: string;
  demoUrl: string;
  githubUrl: string;
  color: string;
  features: string[];
}

const Projects = () => {
  const [isShowAll, setIsShowAll] = useState(false);
  const [listProject, setListProject] = useState<ProjectInterface[]>([]);
  const sliceProject = myProjects.slice(0, 6);

  const showAllProjectHandler = () => {
    setIsShowAll((showAll) => !showAll);
  };

  useEffect(() => {
    if (!isShowAll) {
      setListProject(sliceProject);
    } else {
      setListProject(myProjects);
    }
  }, [isShowAll]);

  return (
    <section
      id="projects"
      className="py-20 transition-colors bg-gray-50 dark:bg-gray-700"
    >
      <div className="container px-6 mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="bg-pink-400 dark:bg-pink-300 inline-block p-4 border-4 border-black shadow-[8px_8px_0px_0px_#000] mb-6">
            <h2 className="text-4xl font-black text-black md:text-5xl">
              PROJECTS
            </h2>
          </div>
          <p className="max-w-2xl mx-auto text-xl font-bold text-black dark:text-white">
            A showcase of my recent work and side projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 mb-12 md:grid-cols-2 lg:grid-cols-3">
          {listProject?.map((project) => (
            <div
              key={project.id}
              className={`${project.color} border-4 border-black shadow-[8px_8px_0px_0px_#000] hover:shadow-[12px_12px_0px_0px_#000] transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 group overflow-hidden`}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                {" "}
                <Image
                  src={
                    project.cover
                      ? project.cover
                      : "/assets/portofolio-cover/github.png"
                  }
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 border-b-4 border-black group-hover:scale-110"
                  quality={90}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 transition-all duration-300 bg-black bg-opacity-0 group-hover:bg-opacity-20"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="mb-3 text-2xl font-black text-black">
                  {project.title}
                </h3>
                <p className="mb-4 font-bold leading-relaxed text-black line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies?.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm font-bold text-black bg-white border-2 border-black"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Link
                    href={`/project/${project.id.replaceAll(" ", "-")}`}
                    className="flex-1 bg-white text-black px-4 py-3 font-bold border-4 border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 text-center hover:bg-gray-700 hover:text-white"
                  >
                    View Details
                  </Link>
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    className={
                      (clsx(),
                      project.githubUrl
                        ? "bg-white text-black p-3 border-4 border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] transition-all duration-200 hover:translate-x-1 hover:translate-y-1"
                        : "hidden")
                    }
                  >
                    <PiGithubLogoBold size={20} />
                  </Link>
                  <Link
                    href={project.demoUrl}
                    target="_blank"
                    className={
                      (clsx(),
                      project.demoUrl
                        ? "bg-white text-black p-3 border-4 border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] transition-all duration-200 hover:translate-x-1 hover:translate-y-1"
                        : "hidden")
                    }
                  >
                    <ExternalLink size={20} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <button
            className="bg-yellow-400 dark:bg-yellow-300 text-black px-8 py-4 font-bold text-lg border-4 border-black shadow-[8px_8px_0px_0px_#000] hover:shadow-[4px_4px_0px_0px_#000] transition-all duration-200 hover:translate-x-1 hover:translate-y-1"
            onClick={showAllProjectHandler}
          >
            {!isShowAll ? " VIEW ALL PROJECTS" : "HIDE PROJECTS"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
