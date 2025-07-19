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
        <motion.div 
          layoutId="logo-hero" 
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={isLoaded ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.8, rotate: -5 }}
          transition={{ 
            duration: 1.2, 
            ease: "easeOut",
            delay: 0.3 
          }}
        >
          <motion.div
            whileHover={{ 
              scale: 1.05,
              rotate: 2,
              transition: { duration: 0.3 }
            }}
            className="relative"
          >
            <Image
              src="/images/Logo.png"
              alt="TPISSS Logo"
              width={180}
              height={180}
              className="drop-shadow-lg filter brightness-110"
              priority
            />
            {/* Subtle glow effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 0.4 } : { opacity: 0 }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-green-400/30 rounded-full blur-2xl -z-10"
            />
          </motion.div>
        </motion.div>
      </div>
      {/* Remove <PageHero ... /> from here, as hero is now custom above */}
      <PageHero 
        title="The Pinewood International Senior Secondary School"
        description="Established in April 1995, TPISSS is a co-educational institution dedicated to academic and social well-being, serving students from Nursery to Senior Secondary with a vision to set standards of educational excellence in India."
        isLoaded={isLoaded}
      />
      <FeaturesSection isLoaded={isLoaded} />
      <StatsSection isLoaded={isLoaded} />
      <CTASection />
      <Footer />
    </div>
  );
}
