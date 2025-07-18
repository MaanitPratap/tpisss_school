'use client';

import Link from 'next/link';

interface NavigationProps {
  activePage?: string;
}

export default function Navigation({ activePage = 'home' }: NavigationProps) {
  const navItems = [
    { href: '/', label: 'Home', page: 'home' },
    { href: '/about', label: 'About', page: 'about' },
    { href: '/academics', label: 'Academics', page: 'academics' },
    { href: '/facilities', label: 'Facilities', page: 'facilities' },
    { href: '/contact', label: 'Contact', page: 'contact' }
  ];

  return (
    <nav className="sticky top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-gray-900">TPISSS</h1>
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
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
} 