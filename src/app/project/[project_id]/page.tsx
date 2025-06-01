"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useParams } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import SEO from "@/app/components/SEO/SEO";
import Image from "next/image";
import { PiGithubLogoBold } from "react-icons/pi";
import { myProjects } from "@/app/data/projects";
import NotFound from "@/app/not-found";
import LinkStringButton from "@/app/components/buttons/LinkStringButton";
import CheckBoxFeatures from "@/app/components/buttons/CheckBoxFeatures";
import VideoDemo from "@/app/components/VideoDemo";
import clsx from "clsx";

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
        <div className="container px-6 py-12 max-w-screen-md mx-auto">
          <div className="grid items-start gap-12">
            {/* Project Image */}
            <div className="order-2 lg:order-1">
              <div className="-mt-1 lg:mt-3 bg-indigo-400 dark:bg-indigo-300 h-full shadow-board-contact-description">
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

              <div className="bg-yellow-300 dark:bg-yellow-200 mb-8 shadow-board-contact-description">
                <p className="text-lg font-bold leading-relaxed text-black">
                  {project?.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <LinkStringButton
                  btnTitle="Live Demo"
                  bgColor="bg-lime-400 dark:bg-lime-300"
                  textColor="text-black"
                  directUrl={project?.demoUrl}
                  icon={<ExternalLink size={20} />}
                  px="px-6"
                  py="py-3"
                />

                <LinkStringButton
                  btnTitle="View Code"
                  bgColor="bg-orange-400 dark:bg-orange-300"
                  textColor="text-black"
                  directUrl={project?.githubUrl}
                  icon={<PiGithubLogoBold size={20} />}
                  px="px-6"
                  py="py-3"
                />
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
              <>
                <h3 className="mb-4 text-2xl font-black text-black dark:text-white">
                  Key Features
                </h3>
                <div className="bg-slate-100 dark:bg-slate-600 shadow-board-contact-description">
                  <ul className="space-y-3">
                    {project?.features.map((feature, index) => (
                      <CheckBoxFeatures feature={feature} key={index} />
                    ))}
                  </ul>
                </div>
              </>
            </div>

            {/* Video Demo */}
            <div
              className={clsx(
                project.videoUrl ? "order-3 lg:order-3 -mt-2" : "hidden"
              )}
            >
              <h3 className="mb-4 text-2xl font-black text-black dark:text-white">
                Video Demo
              </h3>
              <VideoDemo videoUrl={project.videoUrl} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
