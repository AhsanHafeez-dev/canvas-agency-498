import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-32 text-center">
      <p className="text-sm font-semibold text-indigo-600 tracking-wide uppercase mb-4">
        404 Error
      </p>
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 mb-4">
        Page not found
      </h1>
      <p className="text-lg text-zinc-600 mb-8 max-w-md">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-all"
      >
        Go back home
      </Link>
    </div>
  );
}
