import { z } from "zod";

export const ServiceTagSchema = z.object({
  serviceId: z.string().uuid(" Service id must be a void Service UUID"),
  tag: z.string().max(100, "tag string cannot exceed 100 character"),
});
