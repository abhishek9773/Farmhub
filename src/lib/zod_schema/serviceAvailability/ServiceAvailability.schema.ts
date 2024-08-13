import { z } from "zod";

export const ServiceAvailability = z.object({
  serviceId: z.string().uuid("service ID must be a valid Service UUID"),
  date: z.string().date("date must be a valid formate"),
  available: z.boolean().default(false),
});
