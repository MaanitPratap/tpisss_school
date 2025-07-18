'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Navigation from '../components/Navigation';
import PageHero from '../components/PageHero';
import FeaturesSection from '../components/FeaturesSection';
import StatsSection from '../components/StatsSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navigation activePage="home" />
      {/* Full-width hero image */}
      <div className="relative w-full h-[40vw] max-h-[420px] min-h-[200px] overflow-hidden mb-8 transition-all duration-1000">
        <Image
          src="/images/home/main2.jpg"
          alt="School Campus Full Width"
          fill
          priority
          className={`object-cover object-center transition-all duration-1000 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
      </div>
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
