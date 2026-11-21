import { Layers, ClipboardList, MonitorPlay, CirclePlay } from "lucide-react";

export const courseSteps = [
  {
    id: "basic-information",
    labelKey: "steps.basicInformation",
    icon: Layers,
    href: "/instructor/create-course",
  },
  {
    id: "advance-information",
    labelKey: "steps.advanceInformation",
    icon: ClipboardList,
    href: "/instructor/create-course/advanced",
  },
  {
    id: "curriculum",
    labelKey: "steps.curriculum",
    icon: MonitorPlay,
    href: "/instructor/create-course/curriculum",
  },
  {
    id: "publish-course",
    labelKey: "steps.publishCourse",
    icon: CirclePlay,
    href: "/instructor/create-course/publish",
  },
] as const;

export type CourseStep = (typeof courseSteps)[number]["id"];
