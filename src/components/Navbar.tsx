// 📁 src/components/Navbar.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-red-600 via-yellow-500 to-orange-400 text-white shadow-md animate-background-slide bg-[length:300%_300%]">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center gap-3 text-2xl font-extrabold hover:scale-105 transition-transform duration-200"
        >
          <Image
            src="/images/logo.png"
            alt="Aroma Curry Logo"
            width={30}
            height={30}
            className="rounded shadow-md transition-transform duration-300 hover:scale-110 hover:drop-shadow-lg"
          />
          <span className="text-white drop-shadow-sm">Aroma Curry</span>
        </Link>
        <div className="space-x-2 text-sm font-medium hidden md:flex">
          <Link
            href="/about"
            className={`px-4 py-2 rounded transition duration-150 ${
              isActive('/about')
                ? 'bg-white text-red-600 font-bold border border-red-700'
                : 'hover:text-red-100'
            }`}
          >
            About
          </Link>
          <Link
            href="/menu"
            className={`px-4 py-2 rounded transition duration-150 ${
              isActive('/menu')
                ? 'bg-white text-red-600 font-bold border border-red-700'
                : 'hover:text-red-100'
            }`}
          >
            Menu
          </Link>
          <Link
            href="/catering"
            className={`px-4 py-2 rounded transition duration-150 ${
              isActive('/catering')
                ? 'bg-white text-red-600 font-bold border border-red-700'
                : 'hover:text-red-100'
            }`}
          >
            Catering
          </Link>
          <Link
            href="/contact"
            className={`px-4 py-2 rounded transition duration-150 ${
              isActive('/contact')
                ? 'bg-white text-red-600 font-bold border border-red-700'
                : 'hover:text-red-100'
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
      <style jsx global>{`
        @keyframes background-slide {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-background-slide {
          animation: background-slide 10s ease infinite;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
