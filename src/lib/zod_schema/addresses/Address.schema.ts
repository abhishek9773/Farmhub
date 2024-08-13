import { z } from "zod";

export const addressSchema = z.object({
  addressLine1: z
    .string()
    .max(255, { message: "Address Line 1  cannot  exceed 255 characters" }),
  addressLine2: z
    .string()
    .max(255, "Address Line 2 cannot exceed 255 characters"),
  city: z.string().max(100, "city cannot be exceed 100 character"),
  state: z.string().max(100, "state cannot be exceed 100 character"),
  country: z.string().max(100, "contry cannot be exceed 100 character"),
  postalCode: z.string().max(20, "postalCode cannot be exceed 20 character"),
});
