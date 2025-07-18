'use client';

import { useState, useEffect } from 'react';
import Navigation from '../../components/Navigation';
import PageHero from '../../components/PageHero';
import Footer from '../../components/Footer';

export default function Academics() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('primary');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const academicLevels = [
    {
      id: 'primary',
      name: 'Primary School',
      grades: 'Classes I-V',
      description: 'Foundation years focusing on basic skills and character development'
    },
    {
      id: 'middle',
      name: 'Middle School',
      grades: 'Classes VI-VIII',
      description: 'Transitional years with specialized subjects and skill development'
    },
    {
      id: 'secondary',
      name: 'Secondary School',
      grades: 'Classes IX-X',
      description: 'Board preparation with comprehensive academic and career guidance'
    },
    {
      id: 'senior',
      name: 'Senior Secondary',
      grades: 'Classes XI-XII',
      description: 'Specialized streams preparing for higher education and careers'
    }
  ];

  const subjects = {
    primary: [
      { name: 'English', icon: '📚' },
      { name: 'Mathematics', icon: '🔢' },
      { name: 'Science', icon: '🔬' },
      { name: 'Social Studies', icon: '🌍' },
      { name: 'Hindi', icon: '🇮🇳' },
      { name: 'Computer Science', icon: '💻' }
    ],
    middle: [
      { name: 'English', icon: '📚' },
      { name: 'Mathematics', icon: '🔢' },
      { name: 'Science', icon: '🔬' },
      { name: 'Social Studies', icon: '🌍' },
      { name: 'Hindi', icon: '🇮🇳' },
      { name: 'Computer Science', icon: '💻' },
      { name: 'Art & Craft', icon: '🎨' },
      { name: 'Physical Education', icon: '⚽' }
    ],
    secondary: [
      { name: 'English', icon: '📚' },
      { name: 'Mathematics', icon: '🔢' },
      { name: 'Science', icon: '🔬' },
      { name: 'Social Studies', icon: '🌍' },
      { name: 'Hindi', icon: '🇮🇳' },
      { name: 'Computer Applications', icon: '💻' },
      { name: 'Physical Education', icon: '⚽' },
      { name: 'Work Experience', icon: '🛠️' }
    ],
    senior: [
      { name: 'Physics', icon: '⚛️' },
      { name: 'Chemistry', icon: '🧪' },
      { name: 'Biology', icon: '🧬' },
      { name: 'Mathematics', icon: '🔢' },
      { name: 'English', icon: '📚' },
      { name: 'Computer Science', icon: '💻' },
      { name: 'Economics', icon: '💰' },
      { name: 'Business Studies', icon: '📊' }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <Navigation activePage="academics" />
      <PageHero 
        title="Academic Excellence"
        description="Discover our comprehensive curriculum designed to nurture intellectual growth, critical thinking, and prepare students for future success"
        isLoaded={isLoaded}
        highlightText="Excellence"
        logoLeft="/images/Logo.png"
      />

      {/* Academic Levels */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Academic Levels</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our structured approach to education from primary to senior secondary
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {academicLevels.map((level, index) => (
              <div 
                key={level.id}
                className={`p-6 rounded-xl bg-gradient-to-br from-blue-50 to-green-50 border-2 cursor-pointer transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 ${activeTab === level.id ? 'border-blue-600 shadow-lg' : 'border-gray-200'}`}
                onClick={() => setActiveTab(level.id)}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-center">
                  <div className="text-3xl mb-4">🎓</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{level.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{level.grades}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{level.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Details */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {academicLevels.find(level => level.id === activeTab)?.name} Curriculum
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive subjects designed to develop well-rounded individuals
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {subjects[activeTab as keyof typeof subjects]?.map((subject, index) => (
              <div 
                key={index}
                className={`bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 dark:bg-gray-900 dark:border-gray-700 dark:hover:shadow-2xl ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-center">
                  <div className="text-3xl mb-4">{subject.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900">{subject.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Teaching Methodology</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Innovative approaches that make learning engaging and effective
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Interactive Learning",
                description: "Engaging classroom activities that promote active participation and hands-on learning"
              },
              {
                icon: "💡",
                title: "Critical Thinking",
                description: "Problem-solving approaches that develop analytical and reasoning skills"
              },
              {
                icon: "🤝",
                title: "Collaborative Projects",
                description: "Team-based learning that fosters communication and leadership skills"
              },
              {
                icon: "📱",
                title: "Technology Integration",
                description: "Digital tools and smart classrooms for enhanced learning experiences"
              },
              {
                icon: "🎨",
                title: "Creative Expression",
                description: "Arts and activities that nurture creativity and self-expression"
              },
              {
                icon: "🌍",
                title: "Global Perspective",
                description: "International curriculum with focus on global citizenship and awareness"
              }
            ].map((method, index) => (
              <div 
                key={index}
                className={`p-8 rounded-xl bg-gradient-to-br from-blue-50 to-green-50 border border-gray-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 dark:bg-gray-900 dark:border-gray-700 dark:hover:shadow-2xl ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{method.title}</h3>
                <p className="text-gray-600 leading-relaxed">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Achievements */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 dark:from-blue-900 dark:to-green-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Academic Achievements</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Celebrating our students' success and academic excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "95%", label: "Board Results" },
              { number: "100+", label: "Merit Students" },
              { number: "25+", label: "Years Excellence" },
              { number: "500+", label: "Success Stories" }
            ].map((achievement, index) => (
              <div 
                key={index}
                className={`text-white ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} dark:text-yellow-200`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{achievement.number}</div>
                <div className="text-lg opacity-90">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 