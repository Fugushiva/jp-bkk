import Link from "next/link";

export default function LangNotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="font-heading mb-4 text-5xl font-bold text-[--color-neutral-900]">
        404
      </h1>
      <p className="font-heading mb-2 text-2xl font-semibold text-[--color-neutral-700]">
        Page not found
      </p>
      <p className="mb-8 max-w-md text-[--color-neutral-600]">
        The page you are looking for does not exist or has been moved.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md bg-[--color-brand-primary] px-6 py-3 text-sm font-medium text-[--color-neutral-50] transition-colors hover:bg-[--color-brand-primary-hover] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-brand-primary]"
        >
          Back to Home
        </Link>
        <Link
          href="/menu"
          className="inline-flex items-center justify-center rounded-md border border-[--color-brand-primary] px-6 py-3 text-sm font-medium text-[--color-brand-primary] transition-colors hover:bg-[--color-neutral-100] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-brand-primary]"
        >
          View our Menu
        </Link>
      </div>
    </div>
  );
}
