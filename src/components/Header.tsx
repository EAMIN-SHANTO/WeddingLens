'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-primary-600">
              WeddingLens
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/browse-equipment" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">
              Browse Equipment
            </Link>
            <Link href="/photographers" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">
              Top Photographers
            </Link>
            <Link href="/list-equipment" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">
              List Equipment
            </Link>
            <Link href="/how-it-works" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">
              How It Works
            </Link>
          </nav>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">
              Sign In
            </Link>
            <Link href="/signup" className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-sm font-medium">
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none focus:text-primary-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link href="/browse-equipment" className="block text-gray-700 hover:text-primary-600 px-3 py-2 text-base font-medium">
              Browse Equipment
            </Link>
            <Link href="/photographers" className="block text-gray-700 hover:text-primary-600 px-3 py-2 text-base font-medium">
              Top Photographers
            </Link>
            <Link href="/list-equipment" className="block text-gray-700 hover:text-primary-600 px-3 py-2 text-base font-medium">
              List Equipment
            </Link>
            <Link href="/how-it-works" className="block text-gray-700 hover:text-primary-600 px-3 py-2 text-base font-medium">
              How It Works
            </Link>
            <Link href="/login" className="block text-gray-700 hover:text-primary-600 px-3 py-2 text-base font-medium">
              Sign In
            </Link>
            <Link href="/signup" className="block bg-primary-600 hover:bg-primary-700 text-white px-3 py-2 text-base font-medium rounded-md">
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}