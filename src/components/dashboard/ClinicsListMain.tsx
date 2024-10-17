"use client";
import { Clinic, IResponseGetClinics } from "@/interfaces";
import dataService from "@/services/dataService";
import { useEffect, useRef, useState } from "react";
import ClinicItem from "./ClinicItem";

export default function ClinicsListMain() {
  const [clinics, setClinics] = useState<Clinic[]>([]);
  const hasFetched = useRef(false);

  useEffect(() => {
    const fetchClinics = async () => {
      const result: IResponseGetClinics = await dataService.clinics();
      setClinics(result.data);
    };

    if (!hasFetched.current) {
      fetchClinics();
      hasFetched.current = true;
    }
  }, []);

  return (
    <div>
      {clinics.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {clinics.map((clinic) => (
            <ClinicItem key={clinic.id} clinic={clinic} />
          ))}
        </div>
      ) : (
        <p>Sin datos para mostrar</p>
      )}
    </div>
  );
}
