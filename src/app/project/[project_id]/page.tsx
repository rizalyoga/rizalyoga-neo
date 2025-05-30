"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useParams } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import SEO from "@/app/components/SEO/SEO";
import Image from "next/image";
import { PiGithubLogoBold } from "react-icons/pi";
import { myProjects } from "@/app/data/projects";
import clsx from "clsx";
import NotFound from "@/app/not-found";

const ProjectDetail = () => {
  const { project_id } = useParams();
  const pathname = usePathname();
  const project = myProjects.find(
    (project) => (project.id.replaceAll(" ", "-") as string) == project_id
  );

  // Generate current URL for SEO
  const currentUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${pathname}`;

  if (!project) {
    return <NotFound />;
  }

  return (
    <>
      <SEO
        title={`${project?.title} - Portfolio`}
        description={project?.description as string}
        image={project?.cover}
        url={currentUrl}
        type="article"
      />

      <div className="min-h-screen transition-colors bg-white dark:bg-[#252839]">
        {/* Navigation */}
        <nav className="p-6 border-b-4 border-black dark:border-white ">
          <div className="mx-auto max-w-screen-2xl">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-pink-400 dark:bg-pink-300 text-black px-4 py-2 font-bold lg:mx-6 border-4 border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] transition-all duration-200 hover:translate-x-1 hover:translate-y-1"
            >
              <ArrowLeft size={20} />
              Back to Projects
            </Link>
          </div>
        </nav>

        {/* Project Content */}
        <div className="container px-6 py-12 mx-auto">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            {/* Project Image */}
            <div className="order-2 lg:order-1">
              <div className="-mt-1 lg:mt-3 bg-indigo-400 dark:bg-indigo-300 h-full p-6 border-4 border-black shadow-[12px_12px_0px_0px_#000]">
                <div className="relative w-full h-[300px]">
                  <Image
                    src={
                      project?.cover
                        ? project.cover
                        : "/assets/portofolio-cover/github.png"
                    }
                    alt={project?.title as string}
                    fill
                    className="object-cover border-4 border-black"
                    quality={90}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="order-1 lg:order-2">
              <h1 className="mb-6 text-5xl font-black leading-tight text-black dark:text-white">
                {project?.title}
              </h1>

              <div className="bg-yellow-300 dark:bg-yellow-200 p-6 border-4 border-black shadow-[8px_8px_0px_0px_#000] mb-8">
                <p className="text-lg font-bold leading-relaxed text-black">
                  {project?.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  href={project?.demoUrl as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={clsx(
                    "inline-flex items-center gap-2 bg-lime-400 dark:bg-lime-300 text-black px-6 py-3 font-bold border-4 border-black shadow-[6px_6px_0px_0px_#000] hover:shadow-[3px_3px_0px_0px_#000] transition-all duration-200 hover:translate-x-1 hover:translate-y-1",
                    project?.demoUrl
                      ? ""
                      : "cursor-none pointer-events-none !bg-gray-600 dark:!bg-gray-500 shadow-none"
                  )}
                >
                  <ExternalLink size={20} />
                  Live Demo
                </Link>
                <Link
                  href={project?.githubUrl as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={clsx(
                    "inline-flex items-center gap-2 bg-orange-400 dark:bg-orange-300 text-black px-6 py-3 font-bold border-4 border-black shadow-[6px_6px_0px_0px_#000] hover:shadow-[3px_3px_0px_0px_#000] transition-all duration-200 hover:translate-x-1 hover:translate-y-1",
                    project?.githubUrl
                      ? ""
                      : "cursor-none pointer-events-none !bg-gray-600 dark:!bg-gray-500 shadow-none"
                  )}
                >
                  <PiGithubLogoBold size={20} />
                  View Code
                </Link>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="mb-4 text-2xl font-black text-black dark:text-white">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project?.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-cyan-400 dark:bg-cyan-300 text-black px-4 py-2 font-bold border-2 border-black shadow-[4px_4px_0px_0px_#000]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="mb-4 text-2xl font-black text-black dark:text-white">
                  Key Features
                </h3>
                <div className="bg-slate-100 dark:bg-gray-800 border-4 border-black shadow-[8px_8px_0px_0px_#000] p-6">
                  <ul className="space-y-3">
                    {project?.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        {/* <div className="w-3 h-3 bg-black dark:bg-white"></div> */}
                        <label>
                          <input
                            type="checkbox"
                            className={
                              "appearance-none outline-none block relative text-center m-auto w-5 h-5 before:block before:absolute before:content-[''] before:bg-lime-400 before:w-5 before:h-5 before:border-black before:border-2 before:shadow-[3px_3px_0px_rgba(0,0,0,1)]  after:block after:content-[''] after:absolute after:left-1.5 after:top-0.5 after:w-2 after:h-3 after:border-black after:border-r-2 after:border-b-2 after:origin-center after:rotate-45 after:opacity-1 before:checked:bg-bg-lime-400"
                            }
                            defaultChecked
                          />
                        </label>
                        <span className="font-bold text-black dark:text-white">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
