import { createDeflate } from "zlib";
import { z } from "zod";

export const Categories = z.object({
  name: z.string().max(255, "Name cannot be exceed 255 characters"),
  description: z.string().optional(),
});
