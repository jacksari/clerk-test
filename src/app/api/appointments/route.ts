import { appointments, clinics, doctors } from "@/datafake";
import { Appointment, Clinic } from "@/interfaces";

export async function GET() {
  const data = appointments.map((appointment) => {
    // const doctor = doctors.find((doctor) => doctor.id === appointment.doctorId);
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
