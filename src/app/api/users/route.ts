import { db } from "@/lib/db/db";
import { Users } from "@/lib/db/schema";
import { UserSchema } from "@/lib/schemas/users/Users.schema";
import { eq } from "drizzle-orm";
import { NextApiRequest, NextApiResponse } from "next";
import { string } from "zod";

export async function POST(request: Request, response: NextApiResponse) {
  const fromData = await request.formData();

  const validatedUser = UserSchema.parse({
    id: fromData.get("id"), // they will create a problem because user id is auto genearted
    firstName: fromData.get("firstName"),
    lastName: fromData.get("lastName"),
    email: fromData.get("email"),
    password: fromData.get("password"),
    addressId: fromData.get("addressId"),
    role: fromData.get("role"),
    profilePictureUrl: fromData.get("profilePicture"),
    phone: fromData.get("phone"),
  });

  // const validatedUser = UserSchema.parse(fromData.getAll);
  try {
    const createUser = await db.insert(Users).values(validatedUser);
    return response.status(201).json(createUser);
  } catch (error) {
    return response.status(400).json({ error: error });
  }
}

export async function GET(request: NextApiRequest, response: NextApiResponse) {
  const { email } = request.query;

  try {
    const user = await db.select().from(Users).where(eq(Users.email, "email"));
    if (user) {
      response.status(200).json(user);
    } else {
      response.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    return new Response(`somthing is wrong with User database ${error}`, {
      status: 500,
    });
  }
}

// import { NextApiRequest, NextApiResponse } from "next";

// import { db } from "@/db/db";
// import { Users } from "@/db/schema";
// import { UserSchema } from "@/lib/schemas/users/Users.schema";

// // POST /api/user - Create a new user
// export async function POST(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     const data = await req;
//     const parsedBody = UserSchema.parse(JSON.parse(req.body));
//     res.status(201).json(parsedBody);
//   } catch (error) {
//     res.status(400).json({ error: error.errors });
//   }
// }

// // GET /api/user - Get a user by email
// export async function GET(req: NextApiRequest, res: NextApiResponse) {
//   const { email } = req.query;
//   if (typeof email === "string") {
//     const user = await db.select("users").where({ email }).first();
//     if (user) {
//       res.status(200).json(user);
//     } else {
//       res.status(404).json({ error: "User not found" });
//     }
//   } else {
//     res.status(400).json({ error: "Invalid email" });
//   }
// }

// // PUT /api/user - Update a user by email
// export async function PUT(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     const { email } = req.query;
//     if (typeof email !== "string") {
//       return res.status(400).json({ error: "Invalid email" });
//     }

//     const parsedBody = Users.parse(JSON.parse(req.body));
//     if (email !== parsedBody.email) {
//       return res
//         .status(400)
//         .json({ error: "Email in body does not match query email" });
//     }

//     await db.update("users").set(parsedBody).where({ email });
//     res.status(200).json(parsedBody);
//   } catch (error) {
//     res.status(400).json({ error: error.errors });
//   }
// }

// this is our post request don't need to destribe
// Zod.pars
