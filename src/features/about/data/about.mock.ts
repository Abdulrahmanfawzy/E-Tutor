import type { AboutData } from "../types/about.types";

export const aboutMockData: AboutData = {
  hero: {
    foundedYear: "2007–2021",
    title: "We share knowledge with the world",
    description:
      "Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fermentum quam mauris. Fusce tempor et augue a aliquet. Donec non ipsum non risus egestas tincidunt at vitae nulla.",
    image: "/images/about/about-hero.jpg",
  },

  companiesTitle: "We Just keep growing with 6.3k Companies",
  companiesDescription:
    "Nullam egestas tellus at enim ornare tristique. Class aptent taciti sociosqu ad litora torquent.",

  companies: [
    { id: 1, name: "Netflix", logo: "/images/companies/netflix.png" },
    { id: 2, name: "YouTube", logo: "/images/companies/youtube.png" },
    { id: 3, name: "Google", logo: "/images/companies/google.png" },
    { id: 4, name: "Lenovo", logo: "/images/companies/lenovo.png" },
    { id: 5, name: "Slack", logo: "/images/companies/slack.png" },
    { id: 6, name: "Verizon", logo: "/images/companies/verizon.png" },
    { id: 7, name: "Lexmark", logo: "/images/companies/lexmark.png" },
    { id: 8, name: "Microsoft", logo: "/images/companies/microsoft.png" },
  ],

  stats: [
    { id: 1, value: "67.1k", label: "Students", icon: "users" },
    { id: 2, value: "26k", label: "Certified Instructor", icon: "book" },
    { id: 3, value: "72", label: "Country Language", icon: "globe" },
    { id: 4, value: "99.9%", label: "Success Rate", icon: "badge" },
    { id: 5, value: "57", label: "Trusted Companies", icon: "layers" },
  ],

  mission: {
    eyebrow: "OUR ONE BILLION MISSION",
    title: "Our one billion mission sounds bold, We agree.",
    description:
      "We cannot solve our problems with the same thinking we used when we created them. Institutions are slow to change. Committees are where good ideas and innovative thinking go to die. Choose agility over dogma. Embrace and drive change.",
    image: "/images/about/mission.jpg",
  },

  gallery: {
    eyebrow: "OUR GALLERY",
    title: "We've been here almost 17 years",
    description:
      "Fusce lobortis leo augue, sit amet tristique nisi commodo in. Aliquam ac libero quis tellus venenatis imperdiet. Sed sed nunc libero. Curabitur in urna ligula, torquent per conubia nostra.",
    buttonText: "Join Our Team",
   images: [
  "/images/about/gallery-1.jpg",
  "/images/about/gallery-2.jpg",
  "/images/about/gallery-3.jpg",
  "/images/about/gallery-4.jpg",
  "/images/about/gallery-5.jpg",
  "/images/about/gallery-6.jpg",
  "/images/about/gallery-7.jpg",
],
  },

  testimonials: [
    {
      id: 1,
      content:
        "Eduguard fits us like a glove. Their team curates fresh, up-to-date courses from their marketplace and makes them available to customers.",
      author: "Sundar Pichai",
      role: "Chief Chairman of",
      company: "Google",
    },
    {
      id: 2,
      content:
        "Eduguard responds to the needs of the business in an agile and global manner. It's truly the best solution for our employees and their careers.",
      author: "Satya Nadella",
      role: "CEO of",
      company: "Microsoft",
    },
    {
      id: 3,
      content:
        "In total, it was a big success, I would get emails about what a fantastic resource it was.",
      author: "Ted Sarandos",
      role: "Chief Executive Officer of",
      company: "Netflix",
    },
  ],
};