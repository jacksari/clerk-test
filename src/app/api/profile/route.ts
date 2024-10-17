import { users } from "@/datafake";

export async function GET() {
  const data = users[0];
  return Response.json({
    message: "Profile",
    status: true,
    data: data,
  });
}
