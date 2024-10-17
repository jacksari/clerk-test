import { Clinic } from "@/interfaces";
import { FaLink } from "react-icons/fa";
import DoctorItem from "./DoctorItem";

export default function ClinicItem(
  props: React.PropsWithChildren<{
    clinic: Clinic;
  }>
) {
  const { clinic } = props;
  return (
    <div key={clinic.id} className="border border-gray-200 rounded-lg">
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex flex-col gap-0">
          <h2 className="text-2xl font-semibold text-gray-900">
            {clinic.name}
          </h2>
          <p className="text-sm text-gray-600">{clinic.address}</p>
        </div>
        <FaLink className="text-xl text-blue-400 cursor-pointer" />
      </div>
      <div className="flex items-center flex-col gap-4 p-4">
        <h3 className="text-xl font-semibold text-gray-900">Doctores</h3>
        <div className="grid grid-cols-2 gap-4">
          {clinic.doctors.map((doctor) => (
            <DoctorItem key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </div>
  );
}
