import { clinics, doctors, users } from "@/datafake";
import { Clinic } from "@/interfaces";

export async function GET() {
  const data = users[0];
  return Response.json({
    message: "Profile",
    status: true,
    data: data,
  });
}
