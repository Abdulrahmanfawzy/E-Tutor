import { z } from "zod";

export type CourseTranslator = (
  key: string,
  values?: Record<string, string | number>,
) => string;

export const createCourseSchema = (t: CourseTranslator) =>
  z.object({
    title: z
      .string()
      .trim()
      .min(1, t("validation.titleRequired"))
      .max(80, t("validation.titleMax")),

    subtitle: z
      .string()
      .trim()
      .min(1, t("validation.subtitleRequired"))
      .max(120, t("validation.subtitleMax")),

    category: z.string().min(1, t("validation.categoryRequired")),

    subcategory: z.string().min(1, t("validation.subcategoryRequired")),

    topic: z.string().trim().min(1, t("validation.topicRequired")),

    language: z.string().min(1, t("validation.languageRequired")),

    subtitleLanguage: z.string(),

    level: z.string().min(1, t("validation.levelRequired")),

    duration: z
      .string()
      .min(1, t("validation.durationRequired"))
      .refine(
        (value) => Number.isFinite(Number(value)) && Number(value) > 0,
        t("validation.durationPositive"),
      ),

    durationUnit: z.string().min(1, t("validation.durationUnitRequired")),
  });

export type CourseFormValues = z.infer<ReturnType<typeof createCourseSchema>>;

export const defaultCourseValues: CourseFormValues = {
  title: "",
  subtitle: "",
  category: "",
  subcategory: "",
  topic: "",
  language: "",
  subtitleLanguage: "",
  level: "",
  duration: "",
  durationUnit: "day",
};

export const createCourseAdvanceInformationSchema = (t: CourseTranslator) => {
  const uploadedFileSchema = z.custom<File | null>(
    (value) =>
      value === null || (typeof File !== "undefined" && value instanceof File),
    { message: t("validation.invalidFile") },
  );

  const repeatedTextSchema = z.object({
    value: z
      .string()
      .max(120, t("validation.maxCharacters", { max: 120 })),
  });

  return z.object({
    thumbnail: uploadedFileSchema,
    trailer: uploadedFileSchema,
    courseDescription: z
      .string()
      .max(5000, t("validation.descriptionTooLong")),
    whatYouWillLearn: z.array(repeatedTextSchema).min(4).max(8),
    targetAudience: z.array(repeatedTextSchema).min(4).max(8),
    courseRequirements: z.array(repeatedTextSchema).min(4).max(8),
  });
};

export type CourseAdvanceInformationFormValues = z.infer<
  ReturnType<typeof createCourseAdvanceInformationSchema>
>;

export const createPublishCourseSchema = (t: CourseTranslator) =>
  z.object({
    welcomeMessage: z.string().max(500, t("validation.welcomeMax")),
    congratulationsMessage: z
      .string()
      .max(500, t("validation.congratulationsMax")),
  });

export type PublishCourseFormValues = z.infer<
  ReturnType<typeof createPublishCourseSchema>
>;

export const createCurriculumNameSchema = (t: CourseTranslator) =>
  z.object({
    name: z
      .string()
      .trim()
      .min(1, t("validation.nameRequired"))
      .max(80, t("validation.nameMax")),
  });

export type CurriculumNameValues = z.infer<
  ReturnType<typeof createCurriculumNameSchema>
>;
