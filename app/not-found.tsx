import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center section-padding">
      <div className="text-center">
        <span className="text-7xl mb-6 block">🔍</span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight">
          Page Not Found
        </h1>
        <p className="mt-4 text-lg text-navy-500 max-w-md mx-auto">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been moved or doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center mt-8 px-8 py-3 text-base font-semibold text-white bg-navy-900 hover:bg-navy-800 rounded-xl transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}