"use client";

import { myProjects } from "@/app/data/projects";
import { useEffect, useState } from "react";
import ProjectCard from "../cards/ProjectCard";
import { ProjectInterface } from "@/app/types/types";
import TitleSection from "../title-section/TitleSection";

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
      className="py-20 transition-colors bg-white dark:bg-[#252839]"
    >
      <div className="container px-6 mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <TitleSection
            title="PROJECTS"
            bgColor="bg-pink-400 dark:bg-pink-300"
          />
          <p className="max-w-2xl mx-auto text-lg md:text-xl font-bold text-black dark:text-white">
            A showcase of my recent work and side projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 mb-12  lg:grid-cols-2 xl:grid-cols-3">
          {listProject?.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              cover={project.cover}
              technologies={project.technologies}
              demoUrl={project.demoUrl}
              githubUrl={project.githubUrl}
              color={project.color}
            />
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <button
            className="bg-yellow-400 dark:bg-yellow-300 text-black px-8 py-4 font-bold text-base md:text-lg border-4 border-black shadow-[8px_8px_0px_0px_#000] hover:shadow-[4px_4px_0px_0px_#000] transition-all duration-200 hover:translate-x-1 hover:translate-y-1"
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
