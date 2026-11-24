import { z } from "zod";

export const messageSchema = z.object({
  message: z
    .string()
    .trim()
    .min(1, "Please enter a message.")
    .max(2000, "Message cannot exceed 2000 characters."),
});

export const newMessageSchema = z.object({
  teacherId: z.string().min(1, "Please select a teacher."),

  message: z
    .string()
    .trim()
    .min(1, "Please enter a message.")
    .max(2000, "Message cannot exceed 2000 characters."),
});

export type NewMessageFormValues = z.infer<typeof newMessageSchema>;
export type MessageFormValues = z.infer<typeof messageSchema>;