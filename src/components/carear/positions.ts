export type Position = {
  id: string;
  title: string;
  location: string;
  type: string;
  vacancy: string;
  deadline: string;
  address: string;
  email: string;
  phone: string;
  about: string;
  requirements: string[];
  benefits: string[];
  salary: string;
  jobNature: string[];
};

export const positions: Position[] = [
  {
    id: "product-designer",
    title: "Product Designer (UI/UX Designer)",
    location: "Tokyo, Japan",
    type: "Full-Time",
    vacancy: "01 Vacancy",
    deadline: "30 June, 2021",
    address: "1702 Olympic Boulevard, Santa Monica, CA 90404",
    email: "career.eduguard@gmail.com",
    phone: "(310) 555-0114",
    about:
      "We are looking for a creative designer to shape our learning experience and build intuitive products for millions of learners.",
    requirements: [
      "3+ years of experience in UI/UX design",
      "Strong portfolio of web and mobile work",
      "Proficiency in Figma",
      "Understanding of user research and prototyping",
    ],
    benefits: [
      "Competitive salary",
      "Flexible working hours",
      "Annual learning budget",
      "Health insurance",
    ],
    salary: "Salary: $60k - $80k + Other Benefits",
    jobNature: [
      "Job Type: Full Time",
      "Office Hours: 9 AM to 5 PM (Sat-Thu)",
      "Location: Tokyo, Japan",
    ],
  },
  {
    id: "social-media-manager",
    title: "Social Media Manager",
    location: "Moscow, Russia",
    type: "Full-Time",
    vacancy: "01 Vacancy",
    deadline: "30 June, 2021",
    address: "Tverskaya St, Moscow, Russia",
    email: "career.eduguard@gmail.com",
    phone: "(495) 555-0123",
    about:
      "Join us to grow our community across all social platforms and tell the story of our brand.",
    requirements: [
      "2+ years managing brand social accounts",
      "Excellent copywriting skills",
      "Experience with analytics tools",
    ],
    benefits: [
      "Remote-friendly schedule",
      "Performance bonuses",
      "Paid vacation",
    ],
    salary: "Salary: $40k - $55k + Other Benefits",
    jobNature: [
      "Job Type: Full Time",
      "Office Hours: 9 AM to 5 PM (Mon-Fri)",
      "Location: Moscow, Russia",
    ],
  },
  {
    id: "director-of-accounting",
    title: "Director of Accounting",
    location: "Mumbai, India",
    type: "Full-Time",
    vacancy: "01 Vacancy",
    deadline: "30 June, 2021",
    address: "Bandra Kurla Complex, Mumbai, India",
    email: "career.eduguard@gmail.com",
    phone: "(022) 555-0145",
    about:
      "We need an experienced leader to run our finance team and keep our growth on solid ground.",
    requirements: [
      "8+ years in accounting, 3+ in management",
      "CPA or equivalent certification",
      "Strong knowledge of financial reporting",
    ],
    benefits: [
      "Executive compensation package",
      "Health and life insurance",
      "Retirement plan",
    ],
    salary: "Salary: $90k - $120k + Other Benefits",
    jobNature: [
      "Job Type: Full Time",
      "Office Hours: 9 AM to 6 PM (Mon-Fri)",
      "Location: Mumbai, India",
    ],
  },
  {
    id: "principal-software-engineer",
    title: "Principal Software Engineer",
    location: "Tokyo, Japan",
    type: "Full-Time",
    vacancy: "01 Vacancy",
    deadline: "30 June, 2021",
    address: "1702 Olympic Boulevard, Santa Monica, CA 90404",
    email: "career.eduguard@gmail.com",
    phone: "(310) 555-0188",
    about:
      "Lead the technical direction of our platform and mentor a team of talented engineers.",
    requirements: [
      "7+ years of software engineering experience",
      "Deep knowledge of React and Node.js",
      "Experience designing scalable systems",
    ],
    benefits: [
      "Stock options",
      "Remote work options",
      "Conference budget",
    ],
    salary: "Salary: $110k - $150k + Other Benefits",
    jobNature: [
      "Job Type: Full Time",
      "Office Hours: Flexible",
      "Location: Tokyo, Japan",
    ],
  },
];