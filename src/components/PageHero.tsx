'use client';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  isLoaded: boolean;
  highlightText?: string;
}

export default function PageHero({ 
  title, 
  subtitle, 
  description, 
  isLoaded, 
  highlightText 
}: PageHeroProps) {
  return (
    <section id="home" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {highlightText && highlightText !== title ? (
              <>
                {title.split(highlightText)[0]}
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  {highlightText}
                </span>
                {title.split(highlightText)[1]}
              </>
            ) : (
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                {title}
              </span>
            )}
          </h1>
          {subtitle && (
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-8">
              {subtitle}
            </h2>
          )}
          {description && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
} 