import { z } from "zod";

export const RentalRequestSchema = z.object({
  serviceId: z.string().uuid("service should be a valid Service UUId"),
  renterId: z.string().uuid("rental Id should be a vaoid Users id"),
  requestDate: z
    .string()
    .datetime({ offset: true, message: "Invalid creation date formate" })
    .default(() => new Date().toISOString()),
});
