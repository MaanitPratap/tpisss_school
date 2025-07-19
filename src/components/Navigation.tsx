'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

interface NavigationProps {
  activePage?: string;
}

export default function Navigation({ activePage = 'home' }: NavigationProps) {
  const navItems = [
    { href: '/', label: 'Home', page: 'home' },
    { href: '/about', label: 'About', page: 'about' },
    { href: '/leadership', label: 'Leadership', page: 'leadership' },
    { href: '/academics', label: 'Academics', page: 'academics' },
    { href: '/facilities', label: 'Facilities', page: 'facilities' },
    { href: '/contact', label: 'Contact', page: 'contact' }
  ];

  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // On mount, check localStorage or system preference
    const stored = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const toggleMobileMenu = () => {
    if (isMobileMenuOpen) {
      // Closing animation
      setIsAnimating(true);
      setTimeout(() => {
        setIsMobileMenuOpen(false);
        setIsAnimating(false);
      }, 300); // Match the transition duration
    } else {
      // Opening animation
      setIsMobileMenuOpen(true);
      setTimeout(() => setIsAnimating(true), 10);
    }
  };

  return (
    <nav className="sticky top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <img
              src="/images/Logo.png"
              alt="TPISSS Logo"
              className="w-10 h-10 rounded-lg object-contain drop-shadow"
            />
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">TPISSS</h1>
              <p className="text-xs bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent font-medium">
                The Pinewood International Senior Secondary School
              </p>
            </div>
          </div>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.page}
                href={item.href} 
                className={`transition-colors ${
                  activePage === item.page 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-2">
            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              {isDark ? (
                // Sun icon
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.93l-.71-.71M12 7a5 5 0 100 10 5 5 0 000-10z" /></svg>
              ) : (
                // Moon icon
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
              )}
            </button>
            {/* Mobile menu button */}
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6 text-gray-700 dark:text-gray-200 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu with animations */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className={`px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transform transition-all duration-300 ${
            isAnimating && isMobileMenuOpen ? 'translate-y-0' : 'translate-y-[-10px]'
          }`}>
            {navItems.map((item, index) => (
              <Link
                key={item.page}
                href={item.href}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsAnimating(false);
                }}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 transform ${
                  activePage === item.page
                    ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50 dark:text-gray-200 dark:hover:text-blue-400 dark:hover:bg-gray-800'
                } ${
                  isAnimating && isMobileMenuOpen 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-[-20px] opacity-0'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
} 