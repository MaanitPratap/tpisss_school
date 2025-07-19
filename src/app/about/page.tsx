'use client';

import { useState, useEffect } from 'react';
import Navigation from '../../components/Navigation';
import PageHero from '../../components/PageHero';
import Footer from '../../components/Footer';

export default function About() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <Navigation activePage="about" />
      <PageHero 
        title="About TPISSS"
        description="Discover our rich history, mission, and commitment to excellence in education"
        isLoaded={isLoaded}
        highlightText="TPISSS"
        logoLeft="/images/Logo.png"
      />

      {/* Mission & Vision */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl border border-gray-200 dark:bg-gradient-to-br dark:from-gray-700 dark:to-gray-900 dark:border-gray-700 h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 dark:text-white">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed mb-6 dark:text-gray-300">
                  To provide world-class education that nurtures intellectual curiosity, fosters creativity, 
                  and develops responsible global citizens who are prepared to meet the challenges of tomorrow.
                </p>
                <div className="space-y-3 text-gray-600 dark:text-gray-300">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    <span>Excellence in academic achievement</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    <span>Character development and values</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    <span>Innovation and critical thinking</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl border border-gray-200 dark:bg-gradient-to-br dark:from-gray-700 dark:to-gray-900 dark:border-gray-700 h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 dark:text-white">Our Vision</h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p className="leading-relaxed">
                    From earliest entry to the school at Nursery, we seek to teach and encourage students to reflect these values in all areas of their social, emotional, cognitive and physical development.
                  </p>
                  <p className="leading-relaxed">
                    In a wider context we also plan to develop strong links with the community, fulfilling our intention to provide a challenging program of studies that will meet many of the intellectual, spiritual, physical, emotional and social needs of students, families and staff.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditation & Recognition */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 dark:text-white">Accreditation & Recognition</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
              Official recognition and affiliations that validate our educational standards
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className={`bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl border-2 border-blue-200 dark:bg-gradient-to-br dark:from-gray-700 dark:to-gray-900 dark:border-blue-600 shadow-xl transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="text-center">
                <div className="text-5xl mb-6">🏛️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 dark:text-white">CBSE Affiliation</h3>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p className="text-lg font-medium">
                    The School is Affiliated to CBSE Board, Delhi.
                  </p>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Affiliation Number:</p>
                    <p className="text-xl font-bold text-blue-600 dark:text-blue-400">1630597</p>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                    This affiliation ensures that our curriculum meets the highest standards set by the Central Board of Secondary Education, 
                    providing students with nationally recognized qualifications and preparing them for higher education and career success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 dark:text-white">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
              A timeline of our school's growth and achievements over the years
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-600 to-green-600"></div>
            
            <div className="space-y-12">
              {[
                {
                  year: "1995",
                  title: "Foundation",
                  description: "TPISSS opened in April 1995 with a vision to set a standard of educational excellence in India as an institution whose ethos and practice is based upon human precepts."
                },
                {
                  year: "2000",
                  title: "Early Growth",
                  description: "Established as a co-educational institution dedicated to academic and social well-being of all students"
                },
                {
                  year: "2005",
                  title: "Expansion",
                  description: "Added senior secondary section and modern facilities across six acres of land"
                },
                {
                  year: "2012",
                  title: "Excellence",
                  description: "Achieved great distinction in all respects within short span of time"
                },
                {
                  year: "2020",
                  title: "Innovation",
                  description: "Launched digital learning initiatives and smart classrooms"
                },
                {
                  year: "2024",
                  title: "Future Ready",
                  description: "Continuing to evolve with cutting-edge educational practices"
                }
              ].map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'md:pr-8 text-right' : 'md:pl-8 text-left'}`}>
                    <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 200}ms` }}>
                      <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 dark:text-white">{milestone.year}</h3>
                        <h4 className="text-lg font-semibold text-blue-600 mb-2">{milestone.title}</h4>
                        <p className="text-gray-600 dark:text-gray-300">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-green-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 dark:text-white">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
              The principles that guide everything we do at TPISSS
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Excellence",
                description: "We strive for the highest standards in everything we do"
              },
              {
                icon: "🤝",
                title: "Integrity",
                description: "Honesty, transparency, and ethical behavior in all interactions"
              },
              {
                icon: "🌱",
                title: "Innovation",
                description: "Embracing new ideas and creative approaches to learning"
              },
              {
                icon: "🌍",
                title: "Diversity",
                description: "Celebrating differences and fostering inclusive communities"
              },
              {
                icon: "💪",
                title: "Resilience",
                description: "Building strength to overcome challenges and adapt to change"
              },
              {
                icon: "❤️",
                title: "Compassion",
                description: "Showing care and empathy towards others and our community"
              }
            ].map((value, index) => (
              <div 
                key={index}
                className={`p-8 rounded-xl bg-gradient-to-br from-blue-50 to-green-50 border border-gray-200 dark:bg-gradient-to-br dark:from-gray-700 dark:to-gray-900 dark:border-gray-700 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 dark:text-white">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed dark:text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team CTA */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 dark:text-white">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 dark:text-gray-300">
              Meet the dedicated professionals who guide our school's vision and mission
            </p>
            
            <a 
              href="/leadership" 
              className="inline-block bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105"
            >
              Meet Our Full Leadership Team
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}