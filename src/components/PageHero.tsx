'use client';

import { motion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  isLoaded: boolean;
  highlightText?: string;
  logoLeft?: string; // path to logo image, optional
}

export default function PageHero({ 
  title, 
  subtitle, 
  description, 
  isLoaded, 
  highlightText, 
  logoLeft 
}: PageHeroProps) {
  return (
    <section id="home" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className={`${logoLeft ? 'flex items-center justify-center gap-4 mb-6' : 'mb-6'} ${!logoLeft ? 'text-center' : ''}`}>
            {logoLeft && (
              <motion.img
                src={logoLeft}
                alt="Logo"
                className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-lg"
                layoutId="logo-hero"
              />
            )}
            <h1 className={`text-5xl md:text-6xl font-bold text-gray-900 dark:text-white m-0 ${!logoLeft ? 'text-center w-full' : 'text-left'}`}>
              {highlightText && highlightText !== title ? (
                <>
                  {title.split(highlightText)[0]}
                  <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                    {highlightText}
                  </span>
                  {title.split(highlightText)[1]}
                </>
              ) : (
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  {title}
                </span>
              )}
            </h1>
          </div>
          {subtitle && (
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-8">
              {subtitle}
            </h2>
          )}
          {description && (
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
} 