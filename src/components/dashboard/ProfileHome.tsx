"use client";

import navigation from "@/navigation";
import Link from "next/link";

export default function ProfileHome(
  props: React.PropsWithChildren<{
    email: string | null | undefined;
    name: string | null;
    url_profile: string | null;
  }>
) {
  return (
    <div>
      <div>
        <p>Bienvenido, {props.name}!</p>
      </div>
      <div className="w-1/6 mt-8">
        <h3 className="mb-4">Menu</h3>

        {navigation.map((nav) => (
          <div key={nav.label} className="p-2 border-b border-gray-200">
            <Link className="text-blue-500 hover:text-blue-700" href={nav.href}>
              {nav.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
