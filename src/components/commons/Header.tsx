import { UserButton } from "@clerk/nextjs";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <header
        className="flex items-center justify-between w-full h-20 px-8 bg-gray-200"
        style={{ height: "5rem" }}
    >
        <FaSearch className="text-xl" />
      <UserButton showName />
      {/* <h1>Header</h1> */}
    </header>
  );
}
