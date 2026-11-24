import type { Conversation, ChatMessage } from "@/types/messaging-types";

export const studentConversations: Conversation[] = [
  {
    id: "jane",
    name: "Jane Cooper",
    avatar: "https://i.pravatar.cc/120?img=47",
    initials: "JC",
    preview: "Yeah sure, tell me zafor",
    time: "just now",
    online: true,
  },
  {
    id: "jenny",
    name: "Jenny Wilson",
    avatar: "https://i.pravatar.cc/120?img=44",
    initials: "JW",
    preview: "Thank you so much, sir",
    time: "2 d",
    unread: true,
  },
  {
    id: "marvin",
    name: "Marvin McKinney",
    avatar: "https://i.pravatar.cc/120?img=12",
    initials: "MM",
    preview: "You're Welcome",
    time: "1 m",
    unread: true,
  },
  {
    id: "eleanor",
    name: "Eleanor Pena",
    avatar: "https://i.pravatar.cc/120?img=32",
    initials: "EP",
    preview: "Thank you so much, sir",
    time: "1 m",
  },
  {
    id: "ronald",
    name: "Ronald Richards",
    avatar: "https://i.pravatar.cc/120?img=13",
    initials: "RR",
    preview: "Sorry, I can't help you",
    time: "2 m",
    online: true,
  },
  {
    id: "kathryn",
    name: "Kathryn Murphy",
    avatar: "https://i.pravatar.cc/120?img=49",
    initials: "KM",
    preview: "new message",
    time: "2 m",
  },
  {
    id: "jacob",
    name: "Jacob Jones",
    avatar: "https://i.pravatar.cc/120?img=68",
    initials: "JJ",
    preview: "Thank you so much, sir",
    time: "6 m",
    online: true,
  },
  {
    id: "cameron",
    name: "Cameron Williamson",
    avatar: "https://i.pravatar.cc/120?img=25",
    initials: "CW",
    preview: "It's okay, no problem brother, I will fix everything",
    time: "6 m",
  },
  {
    id: "arlene",
    name: "Arlene McCoy",
    avatar: "https://i.pravatar.cc/120?img=5",
    initials: "AM",
    preview: "Thank you so much, sir",
    time: "9 m",
  },
  {
    id: "dianne",
    name: "Dianne Russell",
    avatar: "https://i.pravatar.cc/120?img=9",
    initials: "DR",
    preview: "You're Welcome",
    time: "9 m",
    online: true,
  },
];

export const studentInitialMessages: Record<string, ChatMessage[]> = {
  jane: [
    {
      id: "student-m1",
      text: "Hello and thanks for signing up to the course. If you have any questions about the course or Adobe XD, feel free to get in touch and I'll be happy to help 🙂",
      time: "10:20 AM",
      sender: "them",
    },
    {
      id: "student-m2",
      text: "Hello, Good Evening.",
      time: "10:22 AM",
      sender: "me",
    },
    {
      id: "student-m3",
      text: "I'm Zafor",
      time: "10:23 AM",
      sender: "me",
    },
    {
      id: "student-m4",
      text: "I only have a small doubt about your lecture, can you give me some time for this?",
      time: "10:24 AM",
      sender: "me",
    },
    {
      id: "student-m5",
      text: "Yeah sure, tell me zafor",
      time: "10:25 AM",
      sender: "them",
    },
  ],
  jenny: [
    {
      id: "student-m6",
      text: "Thank you so much, sir",
      time: "Yesterday",
      sender: "them",
    },
  ],
  marvin: [
    {
      id: "student-m7",
      text: "You're Welcome",
      time: "10:15 AM",
      sender: "them",
    },
  ],
  eleanor: [
    {
      id: "student-m8",
      text: "Thank you so much, sir",
      time: "9:30 AM",
      sender: "them",
    },
  ],
  ronald: [
    {
      id: "student-m9",
      text: "Sorry, I can't help you",
      time: "9:15 AM",
      sender: "them",
    },
  ],
  kathryn: [
    {
      id: "student-m10",
      text: "I have a new message for you.",
      time: "9:00 AM",
      sender: "them",
    },
  ],
  jacob: [
    {
      id: "student-m11",
      text: "Thank you so much, sir",
      time: "Yesterday",
      sender: "them",
    },
  ],
  cameron: [
    {
      id: "student-m12",
      text: "It's okay, no problem brother, I will fix everything",
      time: "Yesterday",
      sender: "them",
    },
  ],
  arlene: [
    {
      id: "student-m13",
      text: "Thank you so much, sir",
      time: "Yesterday",
      sender: "them",
    },
  ],
  dianne: [
    {
      id: "student-m14",
      text: "You're Welcome",
      time: "Yesterday",
      sender: "them",
    },
  ],
};
