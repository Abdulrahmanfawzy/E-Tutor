
import type { ContactsData } from "../types/contacts.types";

export const contactsMockData: ContactsData = {
  hero: {
    title: "Connect with us",
    description:
      "Want to chat? We'd love to hear from you! Get in touch with our Customer Success Team to inquire about speaking events, advertising rates, or just say hello.",
    email: "help.eduguard@gmail.com",
    image: "/images/contacts/contact-hero.png",
  },

  branchesTitle: "Our branches all over the world.",
  branchesDescription:
    "Phasellus sed quam eu eros faucibus cursus. Quisque mauris urna, imperdiet id leo quis, luctus auctor nisi.",

  branches: [
    {
      id: 1,
      name: "Los Angeles, California",
      address: "1702 Olympic Boulevard, Santa Monica, CA 90404",
      image: "/images/contacts/branch-los-angeles.jpg",
      isMain: true,
    },
    {
      id: 2,
      name: "Tokyo, Japan",
      address: "901 N Pitt St., Suite 170, Tokyo, VA 22314, Japan",
      image: "/images/contacts/branch-tokyo.jpg",
    },
    {
      id: 3,
      name: "Moscow, Russia",
      address: "Anjelierstrasse 470H, 1015 NL Moscow, Russia",
      image: "/images/contacts/branch-moscow.jpg",
    },
    {
      id: 4,
      name: "Mumbai, India",
      address: "36 East 20th St, 6th Floor Mumbai, India",
      image: "/images/contacts/branch-mumbai.jpg",
    },
  ],

  contactInfo: {
    description:
      "Will you be in Los Angeles or any other branches any time soon? Stop by the office! We'd love to meet.",
    address: ["1702 Olympic Boulevard", "Santa Monica, CA 90404"],
    phoneNumbers: ["(480) 555-0103", "(219) 555-0114"],
    emails: [
      "help.eduguard@gmail.com",
      "career.eduguard@gmail.com",
    ],
  },

  mapLocation: "Santa Monica, Los Angeles, California",
};
