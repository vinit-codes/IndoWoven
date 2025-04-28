import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <h1 className="text-6xl font-bold text-eco-green-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-eco-green-800 mb-6">
        Page Not Found
      </h2>
      <p className="text-eco-green-700 max-w-md mb-8">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link
        href="/"
        className="bg-eco-green-600 text-white px-6 py-3 rounded-md hover:bg-eco-green-700 transition-colors"
      >
        Return to Homepage
      </Link>
    </div>
  );
}
