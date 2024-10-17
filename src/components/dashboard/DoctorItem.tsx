import { Doctor } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

export default function DoctorItem(
  props: React.PropsWithChildren<{
    doctor: Doctor;
  }>
) {
  const { doctor } = props;
  return (
    <Link
      key={doctor.id}
      href={`/doctores/${doctor.id}`}
      className="flex items-center flex-col bg-gray-100 rounded-lg overflow-hidden shadow"
    >
      <div className="flex items-center flex-col gap-2 p-2 pt-4">
        {/* <Image
                width={80}
                height={80}
          className="w-20 h-20 rounded-full"
          src={doctor.profileImageUrl}
          alt=""
        /> */}
        {doctor.profileImageUrl ? (
          <img
            src={doctor.profileImageUrl}
            alt={doctor.name}
            className="w-20 h-20 rounded-full"
          />
        ) : (
          <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
        )}

        <h3>{doctor.name}</h3>
      </div>
      <div className="flex items-center flex-col gap-2 p-2 bg-blue-400 w-full">
        <p className="text-sm text-white">{doctor.specialty}</p>
      </div>
    </Link>
  );
}
