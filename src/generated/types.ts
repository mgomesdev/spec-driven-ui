export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  url: string;
  tags: string[];
}

export interface Skill {
  name: string;
  category: 'languages' | 'frameworks' | 'tools';
  icon?: string;
}

export interface SocialProof {
  author: string;
  role: string;
  quote: string;
}
