import { z } from "zod";

export const MessageSchema = z.object({
  content: z
    .string()
    .min(10, { message: "must be 10 char" })
    .max(20, { message: "must be no longer than 300" }),
});
