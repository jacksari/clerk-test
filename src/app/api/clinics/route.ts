import { clinics } from "@/datafake";
export async function GET() {
  const data = clinics;

  return Response.json({
    message: "Clinics fetched successfully",
    status: true,
    data: data,
  });
}
