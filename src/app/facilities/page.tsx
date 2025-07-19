'use client';

import { useState, useEffect } from 'react';
import Navigation from '../../components/Navigation';
import PageHero from '../../components/PageHero';
import Footer from '../../components/Footer';

export default function Facilities() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const facilities = [
    {
      id: 'classrooms',
      name: '55 Classrooms',
      icon: '🏫',
      description: 'The school has 55 classrooms including smart classrooms with modern technology and comfortable learning environments',
      details: 'Modern and medieval architecture with smart classrooms featuring interactive whiteboards and digital learning tools'
    },
    {
      id: 'library',
      name: 'Digital Library',
      icon: '📚',
      description: 'Fully equipped library with Modern Audio-Visual instruments of various disciplines and spacious study areas',
      details: 'Extensive collection of books, audio-visual instruments, study rooms, and research facilities for comprehensive learning'
    },
    {
      id: 'computer',
      name: 'Computer Lab',
      icon: '💻',
      description: 'Computer Room with software computers and qualified staff engaged to provide basic applications for Computer Science',
      details: 'Software computers with qualified staff providing basic applications and Computer Science education'
    },
    {
      id: 'auditorium',
      name: 'Auditorium',
      icon: '🎭',
      description: 'Large auditorium for performances, assemblies, and school events with modern audio-visual equipment',
      details: 'Large capacity auditorium with modern audio-visual equipment for performances and assemblies'
    },
    {
      id: 'activities',
      name: 'Activity Halls',
      icon: '🎨',
      description: 'Two dedicated activity halls for co-curricular activities and special programs',
      details: 'Two dedicated activity halls providing flexible space for co-curricular activities and special programs'
    },
    {
      id: 'sports',
      name: 'Sports Grounds',
      icon: '⚽',
      description: 'Spacious grounds for every sport and athletics with gymnastics coaching and comprehensive sports facilities',
      details: 'Multiple sports grounds with athletics facilities, gymnastics coaching, and comprehensive sports equipment'
    },
    {
      id: 'labs',
      name: 'Science Laboratories',
      icon: '🔬',
      description: 'Well equipped Science Laboratories for hands-on learning and practical experiments',
      details: 'Physics, Chemistry, and Biology labs with modern equipment for hands-on learning experiences'
    },
    {
      id: 'transport',
      name: 'Transportation',
      icon: '🚌',
      description: 'School vehicles to bring children from remote places with safe and reliable transportation services',
      details: 'School vehicles providing safe and reliable transportation services covering remote areas'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <Navigation activePage="facilities" />
      <PageHero 
        title="World-Class Facilities"
        description="State-of-the-art infrastructure spread across six acres, designed to provide the best learning environment and support holistic development"
        isLoaded={isLoaded}
        highlightText="Facilities"
        logoLeft="/images/Logo.png"
      />

      {/* Campus Overview */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 dark:text-white">Our Campus</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
              The school is spread across six acres of land with a gorgeous building displaying a unique type of modern and medieval architecture. 
              Our campus is only 12 km from the central Bus Stand of Amritsar and about 14 km from the Amritsar Railway Station on the Batala road leading to Pathankot.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { number: "55", label: "Classrooms", icon: "🏫" },
              { number: "6", label: "Acres Campus", icon: "🏛️" },
              { number: "2", label: "Activity Halls", icon: "🎨" },
              { number: "24/7", label: "Generator Backup", icon: "⚡" }
            ].map((stat, index) => (
              <div 
                key={index}
                className={`text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-green-50 border border-gray-200 dark:bg-gradient-to-br dark:from-gray-700 dark:to-gray-900 dark:border-gray-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 dark:text-white">Our Facilities</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
              Comprehensive range of facilities designed to support academic excellence and personal growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <div 
                key={facility.id}
                className={`p-6 rounded-xl bg-white border border-gray-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 dark:bg-gray-900 dark:border-gray-700 dark:hover:shadow-2xl ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{facility.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 dark:text-white">{facility.name}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed dark:text-gray-300">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 dark:text-white">Supporting Infrastructure</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
              Additional features that enhance the learning experience and ensure student well-being
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🔒",
                title: "Security & Safety",
                description: "24/7 security personnel, CCTV surveillance, fire safety equipment, and comprehensive emergency response systems"
              },
              {
                icon: "🌿",
                title: "Green Campus",
                description: "Eco-friendly initiatives, gardens, and sustainable practices throughout the six-acre campus"
              },
              {
                icon: "⚡",
                title: "Power Backup",
                description: "Own generator set despite electric connection with twenty-four hour supply line for uninterrupted operations"
              },
              {
                icon: "🚌",
                title: "Transportation",
                description: "School vehicles to bring children from remote places with safe and reliable transportation services"
              },
              {
                icon: "🏥",
                title: "Health & Safety",
                description: "Fire safety equipment and sanitary conditions duly certified for student well-being"
              },
              {
                icon: "📱",
                title: "Modern Technology",
                description: "Smart classrooms, digital integration, and modern audio-visual equipment throughout the campus"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className={`p-6 rounded-xl bg-gradient-to-br from-blue-50 to-green-50 border border-gray-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 dark:bg-gradient-to-br dark:from-gray-700 dark:to-gray-900 dark:border-gray-700 dark:hover:shadow-2xl ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 