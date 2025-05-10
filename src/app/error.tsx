'use client'; // Error components must be Client Components

import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

import TextButton from '@/components/buttons/TextButton';

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
      <section className="bg-gradient-to-br from-red-50 to-white">
        <div className="layout flex min-h-screen flex-col items-center justify-center text-center text-red-700 px-4">
          <span className="mb-4">
            <div
              className="drop-shadow-glow animate-pulse text-red-500"
              style={{ fontSize: '60px' }}
            >
              <Icon />
            </div>
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold">
            Oops, something went wrong!
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-xl">
            We encountered an unexpected error. Don't worry — it's not your fault (unless you were trying to order biryani with a fork 😉).
          </p>
          <TextButton
            variant="basic"
            onClick={reset}
            className="mt-8 border border-red-500 text-red-600 hover:bg-red-600 hover:text-white transition"
          >
            Try Again
          </TextButton>
        </div>
      </section>
    </main>
  );
}
