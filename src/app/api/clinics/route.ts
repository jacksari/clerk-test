import { clinics, doctors } from "@/datafake";
import { Clinic } from "@/interfaces";

export async function GET() {
  const data = clinics;

  return Response.json({
    message: "Clinics fetched successfully",
    status: true,
    data: data,
  });
}
