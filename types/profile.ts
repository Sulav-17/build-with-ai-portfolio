export type SkillGroup = {
  category: string;
  skills: string[];
};

export type Profile = {
  name: string;
  professionalHeadline: string;
  shortIntroduction: string;
  currentFocus: string[];
  portfolioStatement: string;
  skills: SkillGroup[];
  githubUrl: string;
  linkedInUrl: string;
  email: string | null;
};
