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
      />

      {/* Mission & Vision */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 dark:text-white">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed dark:text-gray-300">
                To provide world-class education that nurtures intellectual curiosity, fosters creativity, 
                and develops responsible global citizens who are prepared to meet the challenges of tomorrow.
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Excellence in academic achievement
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Character development and values
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Innovation and critical thinking
                </li>
              </ul>
            </div>
            <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl border border-gray-200 dark:bg-gradient-to-br dark:from-gray-700 dark:to-gray-900 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 dark:text-white">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed dark:text-gray-300">
                  To be a leading educational institution that inspires students to reach their full potential, 
                  embrace diversity, and contribute positively to society through knowledge, compassion, and innovation.
                </p>
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
                  year: "1998",
                  title: "Foundation",
                  description: "TPISSS was established with a vision to provide quality education"
                },
                {
                  year: "2005",
                  title: "Expansion",
                  description: "Added senior secondary section and modern facilities"
                },
                {
                  year: "2012",
                  title: "Excellence",
                  description: "Achieved 100% board results for the first time"
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
                
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 dark:text-white">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed dark:text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 dark:text-white">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
              Meet the dedicated professionals who guide our school's vision and mission
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Adv. Surjit Singh Likhari",
                position: "Chairman",
                description: "Leading our school with over 30 years of educational experience"
              },
              {
                name: "Er. Harneet Singh",
                position: "Director",
                description: "Overseeing academic excellence and student development"
              },
              {
                name: "Mr. Avneet Singh",
                position: "Principal",
                description: "Ensuring curriculum innovation and teaching excellence"
              },
            ].map((leader, index) => (
              <div 
                key={index}
                className={`bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 dark:bg-gray-900 dark:border-gray-700 dark:hover:shadow-2xl ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                  {leader.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 dark:text-white">{leader.name}</h3>
                <p className="text-blue-600 font-medium mb-3 dark:text-blue-400">{leader.position}</p>
                <p className="text-gray-600 leading-relaxed dark:text-gray-300">{leader.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 