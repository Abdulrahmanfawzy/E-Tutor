export interface AboutHeroData {
  foundedYear: string;
  title: string;
  description: string;
  image: string;
}

export interface Company {
  id: number;
  name: string;
  logo: string;
}

export interface AboutStat {
  id: number;
  value: string;
  label: string;
  icon: "users" | "book" | "globe" | "badge" | "layers";
}

export interface MissionData {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
  company: string;
}

export interface AboutData {
  hero: AboutHeroData;
  companies: Company[];
  companiesTitle: string;
  companiesDescription: string;
  stats: AboutStat[];
  mission: MissionData;
  gallery: {
    eyebrow: string;
    title: string;
    description: string;
    images: string[];
    buttonText: string;
  };
  testimonials: Testimonial[];
}
