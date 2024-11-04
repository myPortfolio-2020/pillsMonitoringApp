import { z } from "zod";

export const userNameValidation = z
  .string()
  .min(2, "must be atleast 2 Char")
  .max(20, "must be no longet than 20")
  .regex(/^[a-zA-Z0-9_]+$/, "must not contain specail Char");

  export const SignUpSchema = z.object({
    username: userNameValidation,
    email: z.string().email({message:'email invalid address'}),
    password: z.string().min(2,{message:'password must be atleast 6 char'})
  })
