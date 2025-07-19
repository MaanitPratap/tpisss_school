'use client';

import Image from 'next/image';

interface FeaturesSectionProps {
  isLoaded: boolean;
}

export default function FeaturesSection({ isLoaded }: FeaturesSectionProps) {
  const features = [
    {
      icon: "🎓",
      title: "Academic Excellence",
      description: "Centre of learning focused on effective teaching and student learning with meaningful relationships in an atmosphere of academic rigor"
    },
    {
      icon: "🏫",
      title: "Modern Infrastructure",
      description: "55 classrooms, smart classrooms, auditorium, library with audio-visual instruments, and computer labs across six acres"
    },
    {
      icon: "🤝",
      title: "Human Values",
      description: "Institution whose ethos and practice is based upon human precepts, committed to honoring human values in all that we do"
    },
    {
      icon: "🌟",
      title: "Holistic Development",
      description: "Comprehensive approach to education that nurtures intellectual, physical, emotional, and social growth of every student"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Choose TPISSS?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We provide world-class education with modern facilities and experienced faculty
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className={`w-full lg:w-1/2 flex justify-center items-center mb-8 lg:mb-0 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{transitionProperty: 'opacity, transform'}}>
            <div className="relative w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image 
                src="/images/home/main2.jpg"
                alt="School Features"
                fill
                style={{objectFit: 'cover'}}
                priority
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`p-8 rounded-xl bg-gradient-to-br from-blue-50 to-green-50 border border-gray-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 dark:border-gray-700 dark:hover:shadow-2xl ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-left">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 