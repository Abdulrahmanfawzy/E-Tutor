import type { Comment } from "../types/Comments";

const avatar = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=64&h=64&q=70`;

const A = {
  m1: avatar("photo-1507003211169-0a1dd7228f2d"),
  w1: avatar("photo-1494790108377-be9c29b29330"),
  m2: avatar("photo-1500648767791-00dcc994a43e"),
  w2: avatar("photo-1438761681033-6461ffad8d80"),
  m3: avatar("photo-1472099645785-5658abf4ff4e"),
  w3: avatar("photo-1544005313-94ddf0286df2"),
  m4: avatar("photo-1519345182560-3f2917c472ef"),
  m5: avatar("photo-1506794778202-cad84cf45f1d"),
};

export const commentsTotal = 154;

export const comments: Comment[] = [
  {
    id: "c1", authorName: "Ronald Richards", authorAvatarUrl: A.m1, postedAt: "1 week ago",
    content: "Maecenas risus tortor, tincidunt nec purus eu, gravida suscipit tortor.",
    replies: [
      { id: "c1-1", authorName: "Kristin Watson", authorAvatarUrl: A.w1, postedAt: "1 week ago", isAdmin: true,
        content: "Nulla pellentesque leo vitae lorem hendrerit, sit amet elementum ipsum rutrum. Morbi ultricies volutpat orci quis fringilla. Suspendisse faucibus augue quis dictum egestas." },
      { id: "c1-2", authorName: "Cody Fisher", authorAvatarUrl: A.m2, postedAt: "1 week ago",
        content: "Thank You so much sir, you're a great mentor. 🔥🔥🔥" },
    ],
  },
  { id: "c2", authorName: "Guy Hawkins", authorAvatarUrl: A.w2, postedAt: "2 weeks ago",
    content: "Thank you for your helpful video. May I ask what is the application use to demo the animation at [4:24], is it the runnable mobile application?\n\nAs what I know, Figma Mirror app cannot do that. Please help me\n\nGreat thanks" },
  { id: "c3", authorName: "Esther Howard", authorAvatarUrl: A.m3, postedAt: "2 weeks ago", content: "Quality content 🔥" },
  { id: "c4", authorName: "Theresa Webb", authorAvatarUrl: A.m4, postedAt: "3 weeks ago", isReplying: true,
    content: "Now i know that I will spent that 5 minutes of my life with pure pleasure" },
  { id: "c5", authorName: "Marvin McKinney", authorAvatarUrl: A.w3, postedAt: "3 weeks ago",
    content: "Great tutorial! I'm subscribing, I'm just wondering if is this feasible to be materialized in a real project or can be integrated in an actual app code?" },
  { id: "c6", authorName: "Darrell Steward", authorAvatarUrl: A.m5, postedAt: "1 month ago",
    content: "Awesome video. Sometimes, we have got to try and push the possibilities of designs and not be bounded by codes. The fact that the design itself is a push from the norm, it is only expected that to code it would require some level of thinking out of the box. That is what differentiates yourself from others who are just building on top of someone else's code." },
  { id: "c7", authorName: "Floyd Miles", authorAvatarUrl: A.m2, postedAt: "1 month ago",
    content: "I really hope you create more series of this UI + AE tutorials :)" },
  { id: "c8", authorName: "Courtney Henry", authorAvatarUrl: A.w1, postedAt: "1 month ago",
    content: "Imagine seeing this while being a front end programmer." },
];
