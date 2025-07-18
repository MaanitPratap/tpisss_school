'use client';

import { useState, useEffect } from 'react';
import Navigation from '../../components/Navigation';
import PageHero from '../../components/PageHero';
import Footer from '../../components/Footer';

export default function Facilities() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFacility, setActiveFacility] = useState('classrooms');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const facilities = [
    {
      id: 'classrooms',
      name: 'Smart Classrooms',
      icon: '🏫',
      description: 'Modern, technology-enabled classrooms with interactive whiteboards and digital learning tools',
      features: ['Interactive whiteboards', 'Audio-visual equipment', 'Comfortable seating', 'Climate control']
    },
    {
      id: 'labs',
      name: 'Science Laboratories',
      icon: '🔬',
      description: 'Well-equipped physics, chemistry, and biology labs for hands-on learning experiences',
      features: ['Physics lab', 'Chemistry lab', 'Biology lab', 'Computer lab']
    },
    {
      id: 'library',
      name: 'Digital Library',
      icon: '📚',
      description: 'Extensive collection of books, digital resources, and study spaces for students',
      features: ['Physical books', 'E-books', 'Study rooms', 'Research facilities']
    },
    {
      id: 'sports',
      name: 'Sports Facilities',
      icon: '⚽',
      description: 'Comprehensive sports infrastructure for physical development and recreation',
      features: ['Indoor stadium', 'Outdoor grounds', 'Swimming pool', 'Fitness center']
    },
    {
      id: 'transport',
      name: 'Transportation',
      icon: '🚌',
      description: 'Safe and reliable transportation services covering major routes in the city',
      features: ['GPS-enabled buses', 'Trained drivers', 'Multiple routes', 'Safety protocols']
    },
    {
      id: 'cafeteria',
      name: 'Cafeteria & Dining',
      icon: '🍽️',
      description: 'Hygienic and nutritious meals prepared in our modern kitchen facilities',
      features: ['Healthy meals', 'Hygienic kitchen', 'Dining hall', 'Snack counters']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navigation activePage="facilities" />
      <PageHero 
        title="World-Class Facilities"
        description="State-of-the-art infrastructure designed to provide the best learning environment and support holistic development of our students"
        isLoaded={isLoaded}
        highlightText="Facilities"
      />

      {/* Facilities Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Facilities</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive range of facilities that support academic excellence and personal growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div 
                key={facility.id}
                className={`p-8 rounded-xl bg-gradient-to-br from-blue-50 to-green-50 border-2 cursor-pointer transition-all duration-300 hover:shadow-lg transform hover:-translate-y-2 ${activeFacility === facility.id ? 'border-blue-600 shadow-lg' : 'border-gray-200'}`}
                onClick={() => setActiveFacility(facility.id)}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{facility.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{facility.name}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{facility.description}</p>
                  <div className="space-y-2">
                    {facility.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-center space-x-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Facility View */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {facilities.find(f => f.id === activeFacility)?.name}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {facilities.find(f => f.id === activeFacility)?.description}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {facilities.find(f => f.id === activeFacility)?.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                <div className="text-center">
                  <div className="text-6xl mb-4">{facilities.find(f => f.id === activeFacility)?.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {facilities.find(f => f.id === activeFacility)?.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Experience the best in educational infrastructure designed for modern learning needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Stats */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Infrastructure Highlights</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Numbers that reflect our commitment to providing world-class facilities
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Smart Classrooms" },
              { number: "10+", label: "Laboratories" },
              { number: "5", label: "Sports Grounds" },
              { number: "24/7", label: "Security" }
            ].map((stat, index) => (
              <div 
                key={index}
                className={`text-center text-white ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Additional Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Supporting infrastructure that enhances the learning experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🔒",
                title: "Security & Safety",
                description: "24/7 security personnel, CCTV surveillance, and emergency response systems"
              },
              {
                icon: "🌿",
                title: "Green Campus",
                description: "Eco-friendly initiatives, gardens, and sustainable practices throughout the campus"
              },
              {
                icon: "🏥",
                title: "Health Center",
                description: "On-campus medical facility with trained staff for immediate health care"
              },
              {
                icon: "🚌",
                title: "Transportation",
                description: "Safe and reliable bus services with GPS tracking and trained drivers"
              },
              {
                icon: "🍽️",
                title: "Cafeteria",
                description: "Hygienic and nutritious meals prepared in modern kitchen facilities"
              },
              {
                icon: "📱",
                title: "Digital Integration",
                description: "Wi-Fi campus, smart cards, and digital communication systems"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className={`p-8 rounded-xl bg-gradient-to-br from-blue-50 to-green-50 border border-gray-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 