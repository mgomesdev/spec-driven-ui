export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

export interface ContactLink {
  id: string;
  label: string;
  url: string;
  icon: 'linkedin' | 'github' | 'email';
}

export interface AboutData {
  profile: {
    name: string;
    role: string;
    avatar?: string;
  };
  bio: string[];
  experience: Experience[];
  skills: SkillCategory[];
  contact: ContactLink[];
}
