import type {
  CourseAdvanceInformationFormValues,
  CurriculumSection,
  Instructor,
} from "../types/course-types";

type CourseTranslator = (key: string) => string;

export const courseCategories = [
  {
    labelKey: "options.categories.development",
    value: "development",
  },
  {
    labelKey: "options.categories.business",
    value: "business",
  },
  {
    labelKey: "options.categories.finance",
    value: "finance",
  },
  {
    labelKey: "options.categories.it-software",
    value: "it-software",
  },
  {
    labelKey: "options.categories.design",
    value: "design",
  },
  {
    labelKey: "options.categories.marketing",
    value: "marketing",
  },
  {
    labelKey: "options.categories.personal-development",
    value: "personal-development",
  },
];

export const courseSubcategories = [
  {
    labelKey: "options.subcategories.web-development",
    value: "web-development",
  },
  {
    labelKey: "options.subcategories.mobile-development",
    value: "mobile-development",
  },
  {
    labelKey: "options.subcategories.programming",
    value: "programming",
  },
  {
    labelKey: "options.subcategories.data-science",
    value: "data-science",
  },
  {
    labelKey: "options.subcategories.ui-ux-design",
    value: "ui-ux-design",
  },
  {
    labelKey: "options.subcategories.graphic-design",
    value: "graphic-design",
  },
];

export const courseLanguages = [
  { labelKey: "options.languages.english", value: "english" },
  { labelKey: "options.languages.arabic", value: "arabic" },
  { labelKey: "options.languages.french", value: "french" },
  { labelKey: "options.languages.spanish", value: "spanish" },
  { labelKey: "options.languages.german", value: "german" },
];

export const courseLevels = [
  { labelKey: "options.levels.beginner", value: "beginner" },
  { labelKey: "options.levels.intermediate", value: "intermediate" },
  { labelKey: "options.levels.advanced", value: "advanced" },
  { labelKey: "options.levels.all-levels", value: "all-levels" },
];

export const durationUnits = [
  { labelKey: "options.durationUnits.day", value: "day" },
  { labelKey: "options.durationUnits.week", value: "week" },
  { labelKey: "options.durationUnits.month", value: "month" },
];

export const advanceInformationInitialValues: CourseAdvanceInformationFormValues =
  {
    thumbnail: null,
    trailer: null,
    courseDescription: "",
    whatYouWillLearn: Array.from({ length: 4 }, () => ({ value: "" })),
    targetAudience: Array.from({ length: 4 }, () => ({ value: "" })),
    courseRequirements: Array.from({ length: 4 }, () => ({ value: "" })),
  };

export const instructors: Instructor[] = [
  {
    id: "sarah",
    username: "Sarah Johnson",
    roleKey: "instructorRoles.uiUxDesigner",
    avatar: "/images/student1.jpg",
  },
  {
    id: "robert",
    username: "Robert Fox",
    roleKey: "instructorRoles.uiUxDesigner",
    avatar: "/images/student2.jpg",
  },
  {
    id: "jenny",
    username: "Jenny Wilson",
    roleKey: "instructorRoles.frontendDeveloper",
    avatar: "/images/student3.jpg",
  },
  {
    id: "marvin",
    username: "Marvin McKinney",
    roleKey: "instructorRoles.productDesigner",
    avatar: "/images/student4.jpg",
  },
];

export const initialInstructorIds = ["sarah", "robert"];

export const getInitialCurriculum = (
  t: CourseTranslator,
): CurriculumSection[] => [
  {
    id: "section-1",
    title: t("curriculum.defaultSectionName"),
    lectures: [
      {
        id: "lecture-1",
        title: t("curriculum.defaultLectureName"),
      },
      {
        id: "lecture-2",
        title: t("curriculum.defaultLectureName"),
      },
    ],
  },
];
