"use client";

import { formatDate, formatHour } from "@/helpers/date";
import { Doctor, IResponseGetDoctorById } from "@/interfaces";
import navigation from "@/navigation";
import dataService from "@/services/dataService";
import Image from "next/image";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaCircleArrowDown } from "react-icons/fa6";
import { GrSchedules } from "react-icons/gr";

export default function DoctorProfile(
  props: React.PropsWithChildren<{
    doctorId: string;
  }>
) {
  const hasFetched = useRef(false);
  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchClinics = async () => {
      const result: IResponseGetDoctorById = await dataService.doctorById(
        props.doctorId
      );
      // setClinics(result.data);
      setDoctor(result.data);
      if (!result.data) {
        console.log("No se encontraron datos");
        router.push("/doctores");
      }
    };

    if (!hasFetched.current) {
      fetchClinics();
      hasFetched.current = true;
    }
  }, []);

  return (
    <div>
      <div>
        <div className="flex flex-col items-start">
          {doctor && (
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4">
                {doctor.profileImageUrl ? (
                  <Image
                    width={80}
                    height={80}
                    src={doctor.profileImageUrl}
                    alt={doctor.name}
                    className="w-20 h-20 rounded-full"
                  />
                ) : (
                  <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
                )}
                <div>
                  <p className="text-lg font-semibold">{doctor.name}</p>
                  <p className="text-sm gray-500">{doctor.specialty}</p>
                  <p className="text-sm gray-500">{doctor.clinicName}</p>
                </div>
              </div>
              <div>
                <p className="text-lg font-semibold">Horarios disponibles</p>
                <div className="flex flex-col gap-2 mt-4">
                  {doctor.availableTimes.map((time) => (
                    <div key={time.id} className="flex items-center gap-4 ">
                      {/* <p>{time.id}</p> */}
                      <GrSchedules />
                      <p>
                        {formatDate(time.date)} - {formatHour(time.time)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ver mas doctores */}
          <div className="flex items-center gap-4 w-full mt-8 justify-center">
            
            <Link href="/doctores"
            className="bg-blue-400 text-white p-2 rounded-lg flex items-center gap-2 px-8 py-3 hover:bg-blue-500">
              
              Ver más doctores
            </Link>
            </div>
        </div>
      </div>
    </div>
  );
}
