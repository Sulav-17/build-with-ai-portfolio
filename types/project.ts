export type ProjectStatus = "Completed";

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
  screenshots: string[] | null;
  completedDate: string;
};
