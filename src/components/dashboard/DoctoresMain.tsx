"use client";
import {
  Doctor,
  IResponseGetDoctors,
} from "@/interfaces";
import dataService from "@/services/dataService";
import { useEffect, useRef, useState } from "react";
import DoctorItem from "./DoctorItem";

export default function DoctoresMain() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const hasFetched = useRef(false);

  useEffect(() => {
    const fetchClinics = async () => {
      const result: IResponseGetDoctors = await dataService.doctors();
      setDoctors(result.data);
    };

    if (!hasFetched.current) {
      fetchClinics();
      hasFetched.current = true;
    }
  }, []);

  return (
    <div>
      {doctors.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {doctors.map((doctor) => (
            <DoctorItem key={doctor.id} doctor={doctor} />
          ))}
        </div>
      ) : (
        <p>Sin datos para mostrar</p>
      )}
    </div>
  );
}
