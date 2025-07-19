'use client';

interface StatsSectionProps {
  isLoaded: boolean;
}

export default function StatsSection({ isLoaded }: StatsSectionProps) {
  const stats = [
    { number: "600+", label: "Students" },
    { number: "30+", label: "Expert Teachers" },
    { number: "100%", label: "Success Rate" },
    { number: "25+", label: "Years Experience" }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 dark:from-blue-900 dark:to-green-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`text-white ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} dark:text-yellow-200`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 