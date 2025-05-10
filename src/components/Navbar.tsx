// src/components/Navbar.tsx
'use client'

import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-red-600">🍽️ Grand Feast</Link>
        <div className="space-x-6 text-sm font-medium">
          <Link href="/about">About</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/catering">Catering</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
