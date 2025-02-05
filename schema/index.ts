import { z } from "zod";

export const playerNameSchema = z.object({
	name: z.string().default("anonymous").optional(),
});
