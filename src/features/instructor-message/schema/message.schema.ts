import { z } from "zod";

export const messageSchema = z.object({
  message: z
    .string()
    .trim()
    .min(1, "Please enter a message.")
    .max(2000, "Message cannot exceed 2000 characters."),
});

export type MessageFormValues = z.infer<typeof messageSchema>;
