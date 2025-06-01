export interface ProjectInterface {
  id: string;
  cover: string;
  title: string;
  technologies: string[];
  description: string;
  demoUrl: string;
  githubUrl: string;
  videoUrl?: string;
  color: string;
  features?: string[];
}
