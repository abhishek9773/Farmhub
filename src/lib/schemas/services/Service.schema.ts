import { z } from "zod";

// Custom validation for decimal precision and scale
const validateDecimal = (value: number, precision: number, scale: number) => {
  const [integerPart, decimalPart = ""] = value.toString().split(".");
  const integerDigits = integerPart.length;
  const decimalDigits = decimalPart.length;
  return integerDigits <= precision - scale && decimalDigits <= scale;
};

// Define the Zod schema for creating a service
export const ServiceSchema = z.object({
  userId: z.string().uuid({ message: "User ID must be a valid UUID." }),
  title: z.string().max(255, {
    message:
      "Title should be a string with a maximum length of 255 characters.",
  }),
  description: z.string().optional(),
  priceParDay: z
    .number()
    .positive({ message: "Price per day must be a positive number." })
    .refine((value) => validateDecimal(value, 10, 2), {
      message:
        "Price per day must have a maximum of 10 digits, with 2 decimal places.",
    }),
  categoryId: z.string().uuid({ message: "Category ID must be a valid UUID." }),

  availability: z.enum(["AVAILABLE", "UNAVAILABLE"]),
  location: z
    .object({
      type: z
        .string()
        .refine((val) => ["Point", "Polygon", "LineString"].includes(val), {
          message:
            "Location type must be either Point, Polygon, or LineString.",
        }),
      coordinates: z.array(z.number()).refine((coords) => coords.length > 0, {
        message: "Coordinates array must contain at least one coordinate.",
      }),
    })
    .nullable(),
  created_at: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Created at must be a valid ISO date string.",
  }),
  updated_at: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Updated at must be a valid ISO date string.",
  }),
});

export type ServiceType = z.infer<typeof ServiceSchema>;
