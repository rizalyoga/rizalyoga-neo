import type { Metadata } from "next";
import { myProjects } from "@/app/data/projects";
type ParamsType = Promise<{
  project_id: string;
}>;

export const generateMetadata = async ({
  params,
}: {
  params: ParamsType;
}): Promise<Metadata> => {
  const { project_id }: { project_id: string } = await params;

  const project = myProjects.find(
    (project) => (project.id.replaceAll(" ", "-") as string) == project_id
  );

  const newImageURL = project?.cover.replace(".webp", ".png");

  return {
    title: `Rizalyoga | ${project?.title}`,
    description: `${project?.description}`,
    keywords: [
      "frontend",
      "front-end",
      "front-end developer",
      "frontend developer",
      "front-end engineer",
      "frontend engineer",
      "sofware developer",
      "software engineer",
      "coding",
      "personal website",
      "freelance",
      "programmer",
      "website",
    ],
    openGraph: {
      title: `Rizalyoga | ${project?.title}`,
      description: `${project?.description}`,
      url: `https://rizalyoga.my.id/project/${project_id}`,
      type: "website",
      siteName: `Rizalyoga | ${project?.title}`,
      images: [
        {
          url: `${newImageURL}`,
          secureUrl: `${newImageURL}`,
          width: 1200,
          height: 630,
          alt: `Rizalyoga | ${project?.title}`,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@rizalyoga",
      title: `Rizalyoga | ${project?.title}`,
      description: `${project?.description}`,
      creator: "@rizalyoga",
      images: {
        url: `${newImageURL}`,
        alt: `Rizalyoga | ${project?.title}`,
        width: 1200,
        height: 630,
        type: "image/png",
      },
    },
  };
};

export default function DetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
