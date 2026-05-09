"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-32 text-center">
      <p className="text-sm font-semibold text-indigo-600 tracking-wide uppercase mb-4">
        Error
      </p>
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 mb-4">
        Something went wrong
      </h1>
      <p className="text-lg text-zinc-600 mb-8 max-w-md">
        {error?.message || "An unexpected error occurred."}
      </p>
      <button
        onClick={() => reset()}
        className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-all cursor-pointer"
      >
        Try again
      </button>
    </div>
  );
}
