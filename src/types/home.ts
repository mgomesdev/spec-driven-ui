export interface Profile {
  name: string;
  role: string;
  bio: string;
  ctaEmail?: string;
  ctaLinkedIn?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  url: string;
  imageUrl?: string;
}
