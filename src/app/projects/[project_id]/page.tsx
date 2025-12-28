import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { PiGithubLogoBold } from "react-icons/pi";
import { myProjects } from "@/app/data/projects";
import NotFound from "@/app/not-found";
import LinkStringButton from "@/app/components/buttons/LinkStringButton";
import CheckBoxFeatures from "@/app/components/buttons/CheckBoxFeatures";
import VideoDemo from "@/app/components/VideoDemo";
import clsx from "clsx";
import DetailNavigation from "@/app/components/navigations/DetailNavigation";

type ParamsType = Promise<{
  project_id: string;
}>;

const ProjectDetail = async ({ params }: { params: ParamsType }) => {
  const { project_id }: { project_id: string } = await params;
  const project = myProjects.find(
    (project) => (project.id.replaceAll(" ", "-") as string) == project_id
  );

  if (!project) {
    return <NotFound />;
  }

  return (
    <>
      <div className="min-h-screen transition-colors bg-white dark:bg-[#252839]">
        <DetailNavigation />
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
              <h1 className="mb-6 text-3xl md:text-5xl font-black leading-tight text-black dark:text-white">
                {project?.title}
              </h1>

              <div className="bg-yellow-300 dark:bg-yellow-200 mb-8 shadow-board-contact-description">
                <p className="text-base font-semibold leading-relaxed text-black">
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
                <h3 className="mb-4 text-xl md:text-2xl font-black text-black dark:text-white">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project?.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs md:text-sm bg-cyan-400 dark:bg-cyan-300 text-black px-4 py-2 font-semibold border-2 border-black shadow-[4px_4px_0px_0px_#000]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <>
                <h3 className="mb-4 text-xl md:text-2xl font-black text-black dark:text-white">
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
              <h3 className="mb-4 text-xl md:text-2xl font-black text-black dark:text-white">
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
