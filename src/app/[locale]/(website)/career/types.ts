export type CTA = { label: string; url: string };

export type HeroSection = { type: "hero"; title: string; body: string; cta: CTA; image: string };
export type WhyJoinSection = { type: "why_join"; title: string; body: string; items: string[] };
export type PerksSection = {
  type: "perks";
  title: string;
  items: { icon: string; title: string }[];
};
export type GallerySection = { type: "gallery"; title: string; images: string[] };
export type PositionsSection = { type: "positions"; title: string };

export type Section =
  | HeroSection
  | WhyJoinSection
  | PerksSection
  | GallerySection
  | PositionsSection;

export type Position = {
  id: number;
  title: string;
  slug: string;
  location: string;
  type: string;
  vacancies: number;
  deadline: string;
  salary: string;
  is_active: boolean;
  posted_at: string;
  who_we_are: string;
  requirements: string[];
  benefits: string[];
  apply_url: string;
};

export type CareersData = {
  page: { id: number; slug: string; title: string; content: Section[]; updated_at: string };
  positions: Position[];
};

export type CareersResponse = {
  success: boolean;
  message: string | null;
  data: CareersData;
};


export interface Job {
  id: number;
  title: string;
  slug: string;
  location: string;
  type: string;
  vacancies: number;
  deadline: string;
  salary: string;
  is_active: boolean;
  posted_at: string;
  who_we_are: string;
  requirements: string[];
  benefits: string[];
  apply_url: string;
}

export interface JobApiResponse {
  success: boolean;
  message: string | null;
  data: Job;
}
