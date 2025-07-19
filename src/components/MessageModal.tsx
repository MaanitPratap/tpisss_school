'use client';

import { useState, useEffect } from 'react';

interface MessageModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  message: {
    opening: string;
    content: string[];
    closing: {
      wishes: string;
      name: string;
      position: string;
      credentials?: string;
    };
  };
}

export default function MessageModal({ isOpen, onClose, title, subtitle, message }: MessageModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      // Small delay to ensure the initial state is rendered before animation
      const timer = setTimeout(() => setIsAnimating(true), 10);
      return () => clearTimeout(timer);
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => setIsVisible(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 transition-all duration-700 ease-out ${
          isAnimating ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div 
          className={`relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full mx-auto transform transition-all duration-700 ease-out ${
            isAnimating 
              ? 'scale-100 opacity-100 translate-y-0' 
              : 'scale-90 opacity-0 translate-y-8'
          }`}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-t-2xl">
            <div className="flex justify-between items-center">
                              <div className={`transition-all duration-700 delay-200 ${
                  isAnimating ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}>
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="text-purple-100 mt-1">{subtitle}</p>
              </div>
              <button
                onClick={onClose}
                className={`text-white hover:text-gray-200 transition-all duration-300 p-2 rounded-full hover:bg-white hover:bg-opacity-20 ${
                  isAnimating ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                }`}
                aria-label="Close modal"
                style={{ transitionDelay: '300ms' }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 max-h-[70vh] overflow-y-auto">
            <div className="prose prose-lg max-w-none dark:prose-invert">
                              <div className={`mb-6 transition-all duration-700 delay-300 ${
                  isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  TPISSS provides its students with a world class education by nurturing self-confidence, self-discipline, critical thinking and creativity.
                </h3>
              </div>

              <div className={`space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed transition-all duration-700 delay-500 ${
                isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <p>
                  {message.opening}
                </p>

                {message.content.map((paragraph, index) => (
                  <p key={index} className={`transition-all duration-700 ${
                    isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`} style={{ transitionDelay: `${600 + index * 100}ms` }}>
                    {paragraph}
                  </p>
                ))}

                <div className={`mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 transition-all duration-700 delay-700 ${
                  isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">{message.closing.wishes}</p>
                  <div className="space-y-1">
                    <p className="font-semibold text-gray-900 dark:text-white">{message.closing.name}</p>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">{message.closing.position}</p>
                    {message.closing.credentials && (
                      <p className="text-sm text-gray-600 dark:text-gray-400">{message.closing.credentials}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 dark:bg-gray-800 px-8 py-4 rounded-b-2xl">
            <div className="flex justify-end">
              <button
                onClick={onClose}
                className={`bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 ${
                  isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '800ms' }}
              >
                Close Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 