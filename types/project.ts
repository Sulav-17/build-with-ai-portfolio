export type ProjectStatus = "Completed";

export type ProjectScreenshot = {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  status: ProjectStatus;
  featured: boolean;
  category: string;
  technologies: string[];
  problem: string;
  intendedUser: string;
  solution: string;
  features: string[];
  architecture: string[];
  engineeringDecisions: string[];
  challenges: string[];
  testing: string[];
  results: string[];
  limitations: string[];
  futureImprovements: string[];
  githubUrl: string | null;
  demoUrl: string | null;
  videoUrl: string | null;
  screenshots: ProjectScreenshot[];
  completedDate: string;
};
