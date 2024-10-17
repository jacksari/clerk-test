import { appointments } from "@/datafake";

export async function GET() {
  const data = appointments.map((appointment) => {
    const { doctors, ...clinicWithoutDoctors } = appointment.clinic;
    const { availableTimes, ...doctorWithAvailable } = appointment.doctor;
    return {
      ...appointment,
      doctor: doctorWithAvailable,
      clinic: clinicWithoutDoctors,
    };
  });

  return Response.json({
    message: "Appointments fetched successfully",
    status: true,
    data: data,
  });
}
