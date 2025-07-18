'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Navigation from '../components/Navigation';
import PageHero from '../components/PageHero';
import FeaturesSection from '../components/FeaturesSection';
import StatsSection from '../components/StatsSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <Navigation activePage="home" />
      {/* Full-width hero image with dark tint and logo overlay */}
      <div className="relative w-full h-[40vw] max-h-[420px] min-h-[200px] overflow-hidden mb-8 transition-all duration-1000">
        <Image
          src="/images/home/School-front.jpg"
          alt="School Campus Full Width"
          fill
          priority
          className={`object-cover object-center transition-all duration-1000 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
          sizes="100vw"
        />
        {/* Dark tint overlay */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Logo overlay */}
        <motion.div layoutId="logo-hero" className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Image
            src="/images/Logo.png"
            alt="TPISSS Logo"
            width={180}
            height={180}
            className="drop-shadow-lg"
            priority
          />
        </motion.div>
      </div>
      {/* Remove <PageHero ... /> from here, as hero is now custom above */}
      <PageHero 
        title="The Pinewood International Senior Secondary School"
        description="Nurturing excellence, fostering innovation, and building character for tomorrow's leaders"
        isLoaded={isLoaded}
      />
      <FeaturesSection isLoaded={isLoaded} />
      <StatsSection isLoaded={isLoaded} />
      <CTASection />
      <Footer />
    </div>
  );
}
