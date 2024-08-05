import { uuid } from "drizzle-orm/pg-core";
import { z } from "zod";

export const ReviewsSchema = z.object({
  serviceId: z.string().uuid("service id must be valid UUID"),
  userId: z.string().uuid("userId must be valid Users UUID"),
  rating: z
    .number()
    .min(0, "rating must be positive")
    .max(5, "rating cannot exceed 5")
    .default(0),
  comment: z.string({ message: "comment should be string " }),
});
