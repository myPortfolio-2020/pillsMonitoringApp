import { z } from "zod";

export const AcceptMessageSchema = z.object({
  asseptMessages: z.boolean(),
});
