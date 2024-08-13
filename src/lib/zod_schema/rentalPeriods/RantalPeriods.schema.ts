import { z } from "zod";

export const RantalPeriodsSchema = z.object({
  serviceId: z.string().uuid("serviced ID must be a valid  uuid"),
  rentalId: z.string().uuid("rental ID must be a valid Users UUID "),
  startDate: z
    .string()
    .datetime({ offset: true, message: "Invalid start date formate" })
    .default(() => new Date().toISOString()),
  endDate: z
    .string()
    .datetime({ offset: true, message: "Invalid end date formate" })
    .default(() => new Date().toISOString()),
  extended: z.boolean().default(false),
  extensionRequested: z.boolean().default(false),
  extensionApproved: z.boolean().default(false),
  extensionApprovedBy: z.boolean().default(false),
});
