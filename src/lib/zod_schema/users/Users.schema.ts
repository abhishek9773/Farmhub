import { z } from "zod";

const UserRoleEnum = z.enum(["provider", "ranter", "admin"]);

export const UserSchema = z.object({
  id: z.string().uuid(),
  firstName: z.string().max(100, "First name cannot exceed 100 characters"),
  lastName: z.string().max(100, "Last name cannot exceed 100 characters"),
  email: z
    .string()
    .email("Invalid email address")
    .max(100, "Email cannot exceed 100 characters"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(255, "Password cannot exceed 255 characters"),
  phone: z
    .string()
    .max(20, "Phone number cannot exceed 20 characters")
    .optional(),
  addressId: z.string().uuid("address Id must be a valid UUID"),
  role: UserRoleEnum,
  profilePictureUrl: z.string().url("Invalid URL format").default("null"),
});
