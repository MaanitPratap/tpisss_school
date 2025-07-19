'use client';

import { useState, useEffect } from 'react';
import Navigation from '../../components/Navigation';
import PageHero from '../../components/PageHero';
import Footer from '../../components/Footer';
import MessageModal from '../../components/MessageModal';

export default function Leadership() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [modalConfig, setModalConfig] = useState<{
    isOpen: boolean;
    title: string;
    subtitle: string;
    message: any;
  }>({
    isOpen: false,
    title: '',
    subtitle: '',
    message: {}
  });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const chairmanMessage = {
    opening: "Dear All,",
    content: [
      "It gives me utmost ecstasy to inform you that The Pinewood International Sen. Sec. School ranks amongst the best institutions and has established a name for itself in the core of hearts of the citizens of Amritsar. As we have stepped in the 21st century and the present era is full of topsy-turvied values, money culture and scams, it is our foremost duty that a student should acquire as much knowledge as possible and for acquisition of knowledge, he has to be dutiful, disciplined, devoted and regular in his/her studies. A school like this has become a solid foundation and source of immense inspiration for the acquisition of above said qualities.",
      "The school values of respect, service, perservance, compassion, self-discipline, honesty and responsibility form the framework of our pastoral care, discipline and learning programs.",
      "From earliest entry to the school at Nursery we seek to teach and encourage students to reflect these values in all areas of their social, emotional, cognitive and physical development.",
      "In a wider context we also plan to develop strong links with the community, fulfilling our intention to provide a challenging program of studies that will meet many of the intellectual, spiritual, physical, emotional and social needs of students, families and staff.",
      "To this end, we consider it a privilege to share in your child's educational journey and we look forward to work together with you to provide an environment that is positive, stimulating and focused on learning."
    ],
    closing: {
      wishes: "Best Wishes,",
      name: "S. Surjit Singh Likhari",
      position: "Chairman",
      credentials: "Advocate & Educationalist"
    }
  };

  const directorMessage = {
    opening: "Welcome to The Pinewood International Sen. Sec. School!",
    content: [
      "Our goal for every student who enters T.P.I.S.S.S. is to provide a secure environment where they will be given opportunities to expand their knowledge and develop their social skills.",
      "Students at T.P.I.S.S.S. will find a warm and welcoming environment. The teaching staff is specially selected from a group of dedicated professionals who are firstly passionate about teaching children, and secondly, are experienced in teaching their individual subject content and specialty areas.",
      "Teachers, parents and students at T.P.I.S.S.S. work as a team. It is my hope that in combining both home and School knowledge a unique support system for every child can be designed so that each student will find a consistent link between School and home."
    ],
    closing: {
      wishes: "Best Wishes,",
      name: "Er. Harneet Singh Likhari",
      position: "Managing Director"
    }
  };

  const principalMessage = {
    opening: "Dear All,",
    content: [
      "It would be no exaggeration to say that our 25-year-old-school has built a reputation that is synonymous with excellence. It endeavours to provide an environment that encourages growth, fosters creativity, exploration and discovery; where children can find magic in the mundane, enjoy the gift of robust laughter, broaden their intellectual, physical and emotional horizons and build a strong sense of integrity, compassion and generosity of spirit. School life must be a quest for meaning that goes far beyond the limitations of conventional curricula, text books and standardised examinations, so that when our pupils leave us they are secure in their abilities, strong in their principles and confident to face challenge."
    ],
    closing: {
      wishes: "Wishing best of Luck to all Students,",
      name: "Mr. Avneet Singh",
      position: "Principal"
    }
  };

  const openModal = (title: string, subtitle: string, message: any) => {
    setModalConfig({
      isOpen: true,
      title,
      subtitle,
      message
    });
  };

  const closeModal = () => {
    setModalConfig(prev => ({ ...prev, isOpen: false }));
  };

  const leadershipData = [
    {
      name: "Adv. Surjit Singh Likhari",
      position: "Chairman",
      description: "Leading our school with over 30 years of educational experience and a deep commitment to academic excellence.",
      achievements: [
        "30+ years in educational leadership",
        "Pioneered innovative teaching methodologies",
        "Established strong community partnerships"
      ],
      image: "/images/leadership/Chairman.jpg",
      email: "tpisss_school@hotmail.com",
      phone: "+91-9815522107"
    },
    {
      name: "Er. Harneet Singh",
      position: "Director",
      description: "Overseeing academic excellence and student development with a focus on modern educational practices.",
      achievements: [
        
        "Specialist in educational technology",
        "Led digital transformation initiatives",
        "Implemented smart classroom solutions",
        
      ],
      image: "/images/leadership/Director.jpg",
      email: "tpisss_school@hotmail.com",
      phone: "+91-7042194677"
    },
    {
      name: "Mr. Avneet Singh",
      position: "Principal",
      description: "Ensuring curriculum innovation and teaching excellence while fostering a nurturing learning environment.",
      achievements: [
        "Expert in curriculum development",
        "Champion of student-centered learning",
        "Mentored numerous successful educators",
      ],
      image: "/images/leadership/Principal.jpg",
      email: "tpisss_school@hotmail.com",
      phone: "+91-XXX-XXX-XXXX"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <Navigation activePage="leadership" />
      <PageHero 
        title="Leadership Team"
        description="Meet the dedicated professionals who guide our school's vision and mission"
        isLoaded={isLoaded}
        highlightText="Leadership"
        logoLeft="/images/Logo.png"
      />

      {/* Leadership Introduction */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 dark:text-white">
              Guiding Excellence in Education
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed dark:text-gray-300">
              Our leadership team brings together decades of experience in education, 
              innovation, and community building. They work collaboratively to ensure 
              TPISSS remains at the forefront of educational excellence.
            </p>
          </div>
          

        </div>
      </section>

      {/* Leadership Cards */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {leadershipData.map((leader, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl shadow-xl border border-gray-200 dark:bg-gray-900 dark:border-gray-700 overflow-hidden transition-all duration-1000 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="md:flex">
                  {/* Image Section */}
                  <div className="md:w-1/3 p-8 bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-700 dark:to-gray-900 flex items-center justify-center">
                    <div className="text-center">
                      {leader.image && leader.image.includes('/images/leadership/') ? (
                        <div className="w-40 h-40 rounded-3xl overflow-hidden mb-4 mx-auto border-4 border-white shadow-lg">
                          <img 
                            src={leader.image} 
                            alt={leader.name}
                            className="w-full h-full object-cover object-top"
                            style={{ objectPosition: 'center 10%' }}
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              e.currentTarget.nextElementSibling.style.display = 'flex';
                            }}
                          />
                          <div className="w-40 h-40 bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl flex items-center justify-center text-white text-3xl font-bold mb-4 mx-auto" style={{ display: 'none' }}>
                            {leader.name.split(' ').map(n => n[0]).join('')}
                          </div>
                        </div>
                      ) : (
                        <div className="w-40 h-40 bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl flex items-center justify-center text-white text-3xl font-bold mb-4 mx-auto">
                          {leader.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      )}
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 dark:text-white">
                        {leader.name}
                      </h3>
                      <p className="text-blue-600 font-semibold text-lg dark:text-blue-400">
                        {leader.position}
                      </p>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="md:w-2/3 p-8">
                    <div className="mb-6">
                      <p className="text-gray-600 leading-relaxed text-lg dark:text-gray-300 mb-6">
                        {leader.description}
                      </p>
                      
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 dark:text-white">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2 mb-6">
                        {leader.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Contact Information */}
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 dark:text-white">
                        Contact Information
                      </h4>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-gray-600 dark:text-gray-300">
                          <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <span>{leader.email}</span>
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-300">
                          <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <span>{leader.phone}</span>
                        </div>
                      </div>
                      
                      {/* Message Buttons for Leadership */}
                      {leader.position === "Chairman" && (
                        <button
                          onClick={() => openModal("Chairman's Message", "A Message from Our Leadership", chairmanMessage)}
                          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-sm"
                        >
                          Read Chairman's Message
                        </button>
                      )}
                      {leader.position === "Director" && (
                        <button
                          onClick={() => openModal("Director's Message", "A Message from Our Leadership", directorMessage)}
                          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-sm"
                        >
                          Read Director's Message
                        </button>
                      )}
                      {leader.position === "Principal" && (
                        <button
                          onClick={() => openModal("Principal's Message", "A Message from Our Leadership", principalMessage)}
                          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-sm"
                        >
                          Read Principal's Message
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 dark:text-white">
              Our Leadership Philosophy
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Vision-Driven",
                description: "We lead with a clear vision for educational excellence and student success"
              },
              {
                icon: "🤝",
                title: "Collaborative",
                description: "Working together with teachers, parents, and the community to achieve our goals"
              },
              {
                icon: "🚀",
                title: "Innovative",
                description: "Embracing new technologies and methodologies to enhance learning outcomes"
              }
            ].map((philosophy, index) => (
              <div 
                key={index}
                className={`text-center p-8 rounded-xl bg-gradient-to-br from-blue-50 to-green-50 border border-gray-200 dark:bg-gradient-to-br dark:from-gray-700 dark:to-gray-900 dark:border-gray-700 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${(index + 3) * 200}ms` }}
              >
                <div className="text-4xl mb-4">{philosophy.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 dark:text-white">
                  {philosophy.title}
                </h3>
                <p className="text-gray-600 leading-relaxed dark:text-gray-300">
                  {philosophy.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Meet Our Team?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule a meeting with our leadership team to discuss your child's educational journey
          </p>
          <div className="space-x-4">
            <a 
              href="/contact" 
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
            <a 
              href="/about" 
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Leadership Messages Modal */}
      <MessageModal 
        isOpen={modalConfig.isOpen} 
        onClose={closeModal}
        title={modalConfig.title}
        subtitle={modalConfig.subtitle}
        message={modalConfig.message}
      />
    </div>
  );
} 