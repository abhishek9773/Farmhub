import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  if (!request.headers) {
    return new Response("somthig is wrong", { status: 300 });
  }
  const requestHeaders = new Headers(request.headers);
}
