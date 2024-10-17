"use client";
import navigation from "@/navigation";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Sidebar() {
  const path = usePathname();

  return (
    <aside className="w-1/4 h-full bg-gray-200">
      <div
        className="p-5 flex items-center justify-center "
        style={{ height: "5rem" }}
      >
        <Image
          width={150}
          height={40}
          src="https://digitalhublatam.com/wp-content/uploads/2023/03/logo-digitalhub.png.webp"
          alt=""
        />
      </div>
      <div className="p-8 border-t-2 border-gray-300">
        <ul className="flex flex-col items-center justify-center gap-2">
          {navigation.map((link, index) => (
            <li
              key={index}
              className={`hover:bg-gray-300 w-full rounded-lg cursor-pointer ${
                path === link.href ? "bg-gray-300 font-bold" : ""
              }`}
            >
              <Link
                href={link.href}
                className="text-gray-700 w-full p-4 flex items-center justify-start"
              >
                <link.icon className="inline-block mr-2" />
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
