"use client";
import {
  Doctor,
  IResponseGetProfile,
} from "@/interfaces";
import dataService from "@/services/dataService";
import { useEffect, useRef, useState } from "react";
import DoctorItem from "./DoctorItem";

export default function ProfileFavoriteDoctorsMain() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const hasFetched = useRef(false);

  useEffect(() => {
    const fetchClinics = async () => {
      const result: IResponseGetProfile = await dataService.profile();
      setDoctors(result.data.favoriteDoctors);
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
