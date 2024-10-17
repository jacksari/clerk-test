import { clinics, doctors } from "@/datafake";
import { Clinic } from "@/interfaces";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const doctorId = url.searchParams.get("id");

  if (!doctorId) {
    return Response.json({
      message: "Doctor id is required",
      status: false,
      data: null,
    });
  }

  const data = doctors
    .map((doctor) => {
      const { doctors, ...clinicWithoutDoctors } = clinics.find(
        (clinic) => clinic.id === doctor.clinicId
      ) as Clinic;
      return {
        ...doctor,
        clinic: clinicWithoutDoctors,
      };
    })
    .filter((doctor) => doctor.id == parseInt(doctorId));

  return Response.json({
    message: "Doctors fetched successfully",
    status: true,
    data: data.length > 0 ? data[0] : null,
  });
}
