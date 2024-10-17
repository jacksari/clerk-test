import { clinics, doctors } from "@/datafake";
import { Clinic } from "@/interfaces";

export async function GET() {
  const data = doctors.map((doctor) => {
    const { doctors, ...clinicWithoutDoctors } = clinics.find(
      (clinic) => clinic.id === doctor.clinicId
    ) as Clinic;
    return {
      ...doctor,
      clinic: clinicWithoutDoctors,
    };
  });

  return Response.json({
    message: "Doctors fetched successfully",
    status: true,
    data: data,
  });
}
