import { z } from "zod";

export const ServiceImages = z.object({
  serviceId: z.string().uuid("service ID must be a valid Service UUid"),
  imageUrl: z.string({ message: "invalid image" }),
});
