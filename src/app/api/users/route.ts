import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db/db"; // Adjust the import based on your project structure
import { Users } from "@/lib/db/schema";
import { UserSchema } from "@/lib/zod_schema/users/Users.schema";
import { eq } from "drizzle-orm";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    // Convert FormData to plain object
    const data = {
      id: formData.get("id") as string, // Ensure correct type handling
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      addressId: formData.get("addressId") as string,
      role: formData.get("role") as string,
      profilePictureUrl: formData.get("profilePicture") as string,
      phone: formData.get("phone") as string,
    };

    // Validate data using Zod schema
    const validatedUser = UserSchema.parse(data);

    // Insert validated user into the database
    const result = await db.insert(Users).values(validatedUser);

    return new NextResponse(JSON.stringify(result), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    if (error instanceof Error) {
      return new NextResponse(
        JSON.stringify({ error: `Failed to create user: ${error.message}` }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    } else {
      return new NextResponse(
        JSON.stringify({ error: "An unknown error occurred" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  }
}
