export type SkillGroup = {
  category: string;
  skills: string[];
};

export type Profile = {
  name: string;
  professionalHeadline: string;
  shortIntroduction: string;
  currentFocus: string[];
  buildWithAIStatement: string;
  skills: SkillGroup[];
  githubUrl: string;
  linkedInUrl: string | null;
  email: string | null;
};
