"use client";
import { IResponseGetProfile, User } from "@/interfaces";
import dataService from "@/services/dataService";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ProfileMain(
  props: React.PropsWithChildren<{
    email: string | null | undefined;
    name: string | null;
    url_profile: string | null;
  }>
) {
  const [user, setUser] = useState<User | null>(null);
  const hasFetched = useRef(false);

  useEffect(() => {
    const fetchClinics = async () => {
      const result: IResponseGetProfile = await dataService.profile();
      setUser({
        ...result.data,
        firstName: props.name ? props.name : "",
        email: props.email ? props.email : "",
        profileImageUrl: props.url_profile ? props.url_profile : "",
      });
    };

    if (!hasFetched.current) {
      fetchClinics();
      hasFetched.current = true;
    }
  }, []);

  const formSubmit = () => {
    console.log(user);
  };

  return (
    <div>
      {user && (
        <form className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold leading-6 text-gray-900">
                Foto de perfil
              </label>
              <div className="mt-2.5">
                {user.profileImageUrl ? (
                  <Image
                    src={user.profileImageUrl}
                    alt="Profile"
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                ) : (
                  <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
                )}
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold leading-6 text-gray-900">
                Nombre
              </label>
              <div className="mt-2.5">
                <input
                  disabled
                  onChange={(e) => {
                    setUser({ ...user, firstName: e.target.value });
                  }}
                  value={user.firstName || ""}
                  type="text"
                  name="first-name"
                  id="first-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  disabled
                  onChange={(e) => {
                    setUser({ ...user, email: e.target.value });
                  }}
                  value={user.email || ""}
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold leading-6 text-gray-900">
                Tipo de documento
              </label>
              <div className="mt-2.5">
                <input
                  onChange={(e) => {
                    setUser({ ...user, documentType: e.target.value });
                  }}
                  value={user.documentType || ""}
                  type="text"
                  name="document-type"
                  id="document-type"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold leading-6 text-gray-900">
                Documento
              </label>
              <div className="mt-2.5">
                <input
                  onChange={(e) => {
                    setUser({ ...user, documentNumber: e.target.value });
                  }}
                  value={user.documentNumber || ""}
                  type="text"
                  name="document-number"
                  id="document-number"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              onClick={formSubmit}
              type="button"
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Actualizar perfil
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
