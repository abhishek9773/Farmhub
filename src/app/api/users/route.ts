import { db } from "@/db/db";
import { Address } from "@/db/schema";
import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

// Define the schemas for user and address
const userSchema = z.object({
  name: z.string().max(100),
  email: z.string().email().max(150),
  password_hash: z.string().max(255), // Hash the password on the server
  phone: z.string().max(20).optional(),
  role: z.enum(["provider", "renter", "admin"]),
  profile_picture_url: z.string().max(255).optional(),
});

const addressSchema = z.object({
  address_line1: z.string().max(255),
  address_line2: z.string().max(255).optional(),
  city: z.string().max(100),
  state: z.string().max(100),
  country: z.string().max(100),
  postal_code: z.string().max(20),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      // Validate and parse user and address data
      const userResult = userSchema.safeParse(req.body.user);
      const addressResult = addressSchema.safeParse(req.body.address);

      if (!userResult.success || !addressResult.success) {
        return res.status(400).json({
          message: "Invalid data",
          errors: {
            userErrors: userResult.error ? userResult.error.errors : [], // Handle error safely
            addressErrors: addressResult.error
              ? addressResult.error.errors
              : [], // Handle error safely
          },
        });
      }

      // Insert the address into Supabase
      const { data: addressData, error: addressError } = await db
        .insert(Address)
        .values(addressResult.data)
        .single(); // Use `.single()` to return a single row

      if (addressError) {
        console.error("Error inserting address:", addressError);
        return res.status(500).json({
          message: "Error inserting address",
          error: addressError.message,
        });
      }

      // Insert the user into Supabase with the address_id
      const { data: userData, error: userError } = await db
        .from("Users")
        .insert({ ...userResult.data, address_id: addressData.id })
        .single();

      if (userError) {
        console.error("Error inserting user:", userError);
        return res
          .status(500)
          .json({ message: "Error inserting user", error: userError.message });
      }

      // Respond with the created user
      res.status(201).json(userData);
    } catch (error) {
      console.error("Error creating user and address:", error);
      res.status(500).json({ message: "Server error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
