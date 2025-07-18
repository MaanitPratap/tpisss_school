'use client';

export default function CTASection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Ready to Join Our Community?
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Take the first step towards your child's bright future with TPISSS
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg dark:from-blue-800 dark:to-blue-900 dark:hover:from-blue-900 dark:hover:to-blue-950">
            Schedule a Visit
          </button>
          <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 dark:border-blue-400 dark:text-blue-300 dark:hover:bg-blue-400 dark:hover:text-gray-900">
            Download Brochure
          </button>
        </div>
      </div>
    </section>
  );
} 