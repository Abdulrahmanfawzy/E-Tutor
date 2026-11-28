import type { LectureDetails } from "../types/Lecture-types";

const avatar = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=64&h=64&q=70`;

const p = (text: string): { type: "paragraph"; segments: { text: string }[] } => ({
  type: "paragraph",
  segments: [{ text }],
});

export const lectureDetails: LectureDetails = {
  watchersCount: 512,
  watcherAvatars: [
    avatar("photo-1507003211169-0a1dd7228f2d"),
    avatar("photo-1494790108377-be9c29b29330"),
    avatar("photo-1500648767791-00dcc994a43e"),
    avatar("photo-1438761681033-6461ffad8d80"),
    avatar("photo-1472099645785-5658abf4ff4e"),
  ],
  lastUpdated: "Oct 26, 2020",
  commentsCount: 154,
  description: [
    "We cover everything you need to build your first website. From creating your first page through to uploading your website to the internet. We'll use the world's most popular (and free) web design tool called Visual Studio Code. There are exercise files you can download and then work along with me. At the end of each video I have a downloadable version of where we are in the process so that you can compare your project with mine. This will enable you to see easily where you might have a problem. We will delve into all the good stuff such as how to create your very own mobile burger menu from scratch learning some basic JavaScript and jQuery.",
    "If that all sounds a little too fancy - don't worry, this course is aimed at people new to web design and who have never coded before. We'll start right at the beginning and work our way through step by step.",
  ],
  notesUrl: "#",
  notes: [
    p("In ut aliquet ante. Curabitur mollis tincidunt turpis, sed aliquam mauris finibus vel. Praesent eget mi in mi maximus egestas. Mauris eget ipsum in justo bibendum pellentesque. Sed id arcu in arcu ullamcorper eleifend condimentum quis diam. Phasellus tempus, urna ut auctor mattis, nisi nunc tincidunt lorem, eu egestas augue lectus sit amet sapien. Maecenas tristique aliquet massa, a venenatis augue tempor in. Aliquam turpis urna, imperdiet in lacus a, posuere suscipit augue."),
    {
      type: "paragraph",
      segments: [{ text: "Nullam non quam a lectus finibus varius nec a orci. Aliquam efficitur sem cursus elit efficitur lacinia" }],
    },
    {
      type: "list",
      items: [
        [{ text: "Morbi sit amet pretium tellus. Donec blandit " }, { text: "fermentum tincidunt.", bold: true }],
        [{ text: "Proin iaculis sem et imperdiet tristique. Nam varius ac nisl id sodales. Donec iaculis interdum mattis." }],
        [{ text: "Curabitur posuere ultricies diam in egestas." }],
        [{ text: "Donec id diam et lacus pharetra vestibulum a id est. Mauris vestibulum massa quis elit feugiat, dictum maximus ipsum pellentesque." }],
        [{ text: "Sed elementum, libero id lacinia aliquet, purus nibh consectetur mauris, eget interdum mi lacus vitae sem." }],
      ],
    },
    {
      type: "paragraph",
      segments: [
        { text: "Donec congue aliquam lorem nec congue. Suspendisse eu risus mattis, interdum ante sed, fringilla urna. Praesent mattis dictum sapien a lacinia. Ut scelerisque magna aliquet, " },
        { text: "blandit arcu quis", bold: true },
        { text: ", consequat purus. Suspendisse eget scelerisque felis. Integer vulputate urna laoreet purus vehicula condimentum. Donec quis luctus quam. Curabitur quis molestie ante. Nam pharetra sagittis varius. Sed ullamcorper facilisis bibendum." },
      ],
    },
  ],
  attachments: [
    { id: "a1", name: "Create account on webflow.pdf", size: "12.6 MB", url: "#" },
  ],
};
