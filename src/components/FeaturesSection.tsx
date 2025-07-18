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
      description: "Consistently high academic performance with personalized learning approaches"
    },
    {
      icon: "🌍",
      title: "Global Perspective",
      description: "International curriculum with focus on global citizenship and cultural awareness"
    },
    {
      icon: "🔬",
      title: "Modern Facilities",
      description: "State-of-the-art laboratories, libraries, and technology-enabled classrooms"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose TPISSS?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`p-8 rounded-xl bg-gradient-to-br from-blue-50 to-green-50 border border-gray-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 