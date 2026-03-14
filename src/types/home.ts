export interface Profile {
  name: string;
  role: string;
  bio: string;
  ctaEmail: string;
  ctaLinkedIn: string;
}

export interface ProfileData {
  name: string;
  identifier: string;
  role: string;
  subtitle: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
  ctaSecondaryUrl: string;
  cvUrl: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  url: string;
  imageUrl?: string;
}
