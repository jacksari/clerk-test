import Link from "next/link";

export default function Breadcrumb(
  props: React.PropsWithChildren<{
    name: string;
  }>
) {
  return (
    <nav className="flex bg-gray-200 p-4 rounded-md mb-4 breadcrumb" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3 w-full justify-between">
        <h2 className="text-xl font-semibold text-gray-900">{props.name}</h2>

        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M10 18a1 1 0 01-1-1V4.414L5.707 7.707a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L11 4.414V17a1 1 0 01-1 1z" />
            </svg>
            Home
          </Link>
        </li>
      </ol>
    </nav>
  );
}
