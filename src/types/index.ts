export interface Project {
  id: string;
  slug: string;
  title: string;
  category: 'gedung' | 'infrastruktur' | 'renovasi' | 'industri';
  client: string;
  location: string;
  year: number;
  duration: string;
  value?: string;
  description: string;
  shortDescription: string;
  images: string[];
  featured: boolean;
  tags: string[];
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  clientTitle: string;
  company: string;
  companyLogo?: string;
  rating: number;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  photo: string;
  bio?: string;
  certifications?: string[];
}

export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Language {
  code: string;
  name: string;
  flag: string;
}
