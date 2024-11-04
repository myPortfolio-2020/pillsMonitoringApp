import { z } from "zod";

// identifier = email/username
export const SignInSchema = z.object({
  identifier: z.string(),
  password: z.string(),
});
