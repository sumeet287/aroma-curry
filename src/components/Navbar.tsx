'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  const handleLinkClick = () => setIsMenuOpen(false);

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

        {/* Hamburger button */}
        <button
          className="md:hidden text-white focus:outline-none z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 text-sm font-medium">
          {['about', 'menu', 'catering', 'contact'].map((item) => (
            <Link
              key={item}
              href={`/${item}`}
              className={`px-4 py-2 rounded transition duration-150 ${
                isActive(`/${item}`)
                  ? 'bg-white text-red-600 font-bold border border-red-700'
                  : 'hover:text-red-100'
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-gradient-to-br from-red-700 via-orange-600 to-yellow-400 px-6`}
      >
        {['about', 'menu', 'catering', 'contact'].map((item) => (
          <Link
            key={item}
            href={`/${item}`}
            onClick={handleLinkClick}
            className={`block py-3 border-b border-white/20 ${
              isActive(`/${item}`)
                ? 'bg-white text-red-600 font-bold px-4 rounded border-red-700 mt-1 mb-2'
                : 'hover:text-yellow-100'
            }`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Link>
        ))}
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
