import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { PiGithubLogoBold } from "react-icons/pi";
import Image from "next/image";
import { ProjectInterface as ProjectCardPropsInterface } from "@/app/types/types";
import LinkIconButton from "../buttons/LinkIconButton";

const ProjectCard = ({
  id,
  title,
  cover,
  description,
  demoUrl,
  githubUrl,
  color,
  technologies,
}: ProjectCardPropsInterface) => {
  return (
    <div
      className={`${color} border-4 border-black shadow-[8px_8px_0px_0px_#000] hover:shadow-[12px_12px_0px_0px_#000] transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 group overflow-hidden`}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        {" "}
        <Image
          src={cover ? cover : "/assets/portofolio-cover/github.png"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 border-b-4 border-black group-hover:scale-110"
          quality={90}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 transition-all duration-300 bg-black bg-opacity-0 group-hover:bg-opacity-20"></div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="mb-3 text-2xl font-black text-black">{title}</h3>
        <p className="mb-4 font-bold leading-relaxed text-black line-clamp-2">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies?.map((tech, techIndex) => (
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
            href={`/project/${id.replaceAll(" ", "-")}`}
            className="flex-1 bg-white text-black px-4 py-3 font-bold border-4 border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 text-center hover:bg-gray-700 hover:text-white"
          >
            View Details
          </Link>

          <LinkIconButton
            bgColor="bg-white"
            directLink={githubUrl}
            icon={<PiGithubLogoBold size={20} />}
            textColor="bg-black"
          />

          <LinkIconButton
            bgColor="bg-white"
            directLink={demoUrl}
            icon={<ExternalLink size={20} />}
            textColor="bg-black"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
