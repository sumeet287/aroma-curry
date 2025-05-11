// 📁 src/components/ErrorPage.tsx
'use client';

import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    console.error(error);
  }, [error]);

  const Icon = RiAlarmWarningFill as unknown as React.FC;

  return (
    <main>
      <nav className="bg-red-600 p-4 text-white shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/">
            <span className="text-2xl font-bold cursor-pointer">Aroma Curry</span>
          </Link>
          <div className="space-x-6 hidden md:block">
            <Link href="/menu" className="hover:underline">Menu</Link>
            <Link href="/catering" className="hover:underline">Catering</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
      </nav>

      <section className="min-h-screen bg-[url('/images/error-bg.png')] bg-cover bg-center text-white flex flex-col justify-center items-center px-4 text-center">
        <div className="bg-black/60 backdrop-blur-md p-8 rounded-lg max-w-xl w-full animate-fade-in-up">
          <div className="text-red-400 mb-6 text-6xl animate-pulse">
            <Icon />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Oops, something went wrong!</h1>
          <p className="text-md text-gray-200 mb-6">
            Looks like we're out of curry or the page you're looking for has vanished in the tandoor.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={reset}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded font-semibold"
            >
              Try Again
            </button>
            <Link
              href="/"
              className="bg-white text-red-600 px-6 py-2 rounded font-semibold hover:bg-gray-100"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
