"use client";
import { Appointment, IResponseGetProfile } from "@/interfaces";
import dataService from "@/services/dataService";
import { useEffect, useRef, useState } from "react";
import { formatDate } from "@/helpers/date";
import { FaArrowDown } from "react-icons/fa";
import { money } from "@/helpers/money";
import { BiStreetView } from "react-icons/bi";
import { MdModeComment, MdModeEdit } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

export default function ProfileMyAppointmentsMain() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const hasFetched = useRef(false);

  useEffect(() => {
    const fetchClinics = async () => {
      const result: IResponseGetProfile = await dataService.profile();
      setAppointments(result.data.appointments);
    };

    if (!hasFetched.current) {
      fetchClinics();
      hasFetched.current = true;
    }
  }, []);

  return (
    <div>
      <div className="relative flex flex-col w-full h-full text-slate-700 bg-white shadow-md rounded-xl bg-clip-border">
        <div className="relative mx-4 mt-4 overflow-hidden text-slate-700 bg-white rounded-none bg-clip-border">
          <div className="flex items-center justify-between ">
            <div>
              <h3 className="text-lg font-semibold text-slate-800">
                Lista de Citas
              </h3>
              <p className="text-slate-500">Revisa tus citas agendadas</p>
            </div>
            <div className="flex flex-col gap-2 shrink-0 sm:flex-row">
              <button
                className="rounded border border-slate-300 py-2.5 px-3 text-center text-xs font-semibold text-slate-600 transition-all hover:opacity-75 focus:ring focus:ring-slate-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Ver todas
              </button>
              <Link
                href="/mis-doctores-favoritos"
                className="flex select-none items-center gap-2 rounded bg-slate-800 py-2.5 px-4 text-xs font-semibold text-white shadow-md shadow-slate-900/10 transition-all hover:shadow-lg hover:shadow-slate-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                <BiStreetView className="w-5 h-5" />
                Ver doctores
              </Link>
            </div>
          </div>
        </div>
        <div className="p-0 overflow-scroll">
          <table className="w-full mt-4 text-left table-auto min-w-max">
            <thead>
              <tr>
                <th className="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
                  <p className="flex items-center justify-between gap-2 font-sans text-sm font-normal leading-none text-slate-500">
                    Fecha
                    <FaArrowDown />
                  </p>
                </th>
                <th className="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
                  <p className="flex items-center justify-between gap-2 font-sans text-sm font-normal leading-none text-slate-500">
                    Costo
                    <FaArrowDown />
                  </p>
                </th>
                <th className="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
                  <p className="flex items-center justify-between gap-2 font-sans text-sm font-normal leading-none text-slate-500">
                    Doctor
                    <FaArrowDown />
                  </p>
                </th>
                <th className="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
                  <p className="flex items-center justify-between gap-2 font-sans text-sm  font-normal leading-none text-slate-500">
                    Clinica
                    <FaArrowDown />
                  </p>
                </th>
                <th className="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
                  <p className="flex items-center justify-between gap-2 font-sans text-sm  font-normal leading-none text-slate-500">
                    Estado
                    <FaArrowDown />
                  </p>
                </th>
                <th className="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
                  <p className="flex items-center justify-between gap-2 font-sans text-sm  font-normal leading-none text-slate-500">
                    Acciones
                    <FaArrowDown />
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td className="p-4 border-b border-slate-200">
                    <p className="text-sm font-semibold text-slate-700">
                      {formatDate(appointment.date)}
                    </p>
                  </td>
                  <td className="p-4 border-b border-slate-200">
                    <p className="text-sm font-semibold text-slate-700">
                      {money(appointment.cost)}
                    </p>
                  </td>
                  <td className="p-4 border-b border-slate-200">
                    <div className="flex items-center gap-3">
                      {appointment.doctor.profileImageUrl ? (
                        <Image
                          width={36}
                          height={36}
                          src={appointment.doctor.profileImageUrl}
                          alt={appointment.doctor.name}
                          className="relative inline-block h-9 w-9 !rounded-full object-cover object-center"
                        />
                      ) : (
                        <div className="w-9 h-9 bg-gray-200 rounded-full"></div>
                      )}
                      <div className="flex flex-col">
                        <p className="text-sm font-semibold text-slate-700">
                          {appointment.doctor.name}
                        </p>
                        <p className="text-sm text-slate-500">
                          {appointment.doctor.specialty}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 border-b border-slate-200">
                    <div className="flex flex-col">
                      <p className="text-sm font-semibold text-slate-700">
                        {appointment.clinic.name}
                      </p>
                      <p className="text-sm text-slate-500">
                        {appointment.clinic.address}
                      </p>
                    </div>
                  </td>
                  <td className="p-4 border-b border-slate-200 ">
                    <div className=" flex justify-center gap-2  w-full">
                      <div
                        className={`px-2 py-1 text-xs font-semibold text-white rounded-lg ${
                          appointment.status === "pending"
                            ? "bg-yellow-500"
                            : appointment.status === "confirmed"
                            ? "bg-green-500"
                            : appointment.status === "cancelled"
                            ? "bg-red-500"
                            : ""
                        }`}
                      >
                        <span className="">{appointment.status}</span>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 border-b border-slate-200">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-slate-900 transition-all hover:bg-slate-900/10 active:bg-slate-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                      >
                        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                          <MdModeEdit className="w-5 h-5" />
                        </span>
                      </button>

                      <button
                        className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-slate-900 transition-all hover:bg-slate-900/10 active:bg-slate-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                      >
                        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                          <MdModeComment className="w-5 h-5" />
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between p-3">
          <p className="block text-sm text-slate-500">
            Mostrando 1 - 2 de 2 resultados
          </p>
          <div className="flex gap-1">
            <button
              className="rounded border border-slate-300 py-2.5 px-3 text-center text-xs font-semibold text-slate-600 transition-all hover:opacity-75 focus:ring focus:ring-slate-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Anterior
            </button>
            <button
              className="rounded border border-slate-300 py-2.5 px-3 text-center text-xs font-semibold text-slate-600 transition-all hover:opacity-75 focus:ring focus:ring-slate-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
