'use client';

import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Navigation from '../../components/Navigation';
import PageHero from '../../components/PageHero';
import Footer from '../../components/Footer';


// Inside your Contact.tsx
import dynamic from 'next/dynamic';

// Dynamically load map with no SSR
const LeafletMap = dynamic(() => import('../../components/LeafletMap'), {
  ssr: false,
});


export default function Contact() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject) {
      newErrors.subject = 'Please select a subject';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success('Thank you for your message! We will get back to you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        setErrors({});
      } else {
        toast.error(`Error: ${result.error || 'Failed to send message. Please try again.'}`);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Failed to send message. Please check your internet connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 5000,
            iconTheme: {
              primary: '#10b981',
              secondary: '#fff',
            },
          },
          error: {
            duration: 6000,
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
      <Navigation activePage="contact" />
      <PageHero 
        title="Get in Touch"
        description="We'd love to hear from you. Reach out to us for any inquiries about admissions, programs, or general information about TPISSS."
        isLoaded={isLoaded}
        highlightText="Touch"
      />

      {/* Contact Information */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 dark:text-white">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-200">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 dark:bg-gray-800 dark:text-white ${
                        errors.name 
                          ? 'border-red-500 focus:ring-red-500 dark:border-red-500' 
                          : 'border-gray-300 dark:border-gray-700'
                      }`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-200">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 dark:bg-gray-800 dark:text-white ${
                        errors.email 
                          ? 'border-red-500 focus:ring-red-500 dark:border-red-500' 
                          : 'border-gray-300 dark:border-gray-700'
                      }`}
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
                    )}
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-200">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-200">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 dark:bg-gray-800 dark:text-white ${
                        errors.subject 
                          ? 'border-red-500 focus:ring-red-500 dark:border-red-500' 
                          : 'border-gray-300 dark:border-gray-700'
                      }`}
                    >
                      <option value="">Select a subject</option>
                      <option value="admission">Admission Inquiry</option>
                      <option value="academics">Academic Information</option>
                      <option value="facilities">Facilities & Infrastructure</option>
                      <option value="general">General Information</option>
                      <option value="feedback">Feedback & Suggestions</option>
                    </select>
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.subject}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-200">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none dark:bg-gray-800 dark:text-white ${
                      errors.message 
                        ? 'border-red-500 focus:ring-red-500 dark:border-red-500' 
                        : 'border-gray-300 dark:border-gray-700'
                    }`}
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed dark:from-blue-800 dark:to-blue-900 dark:hover:from-blue-900 dark:hover:to-blue-950"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 dark:text-white">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl text-blue-600">
                    📍
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 dark:text-white">Address</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Village Jethuwal, Batala Road<br />
                      Amritsar-143001<br />
                      Punjab, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-2xl text-blue-600">
                    📞
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 dark:text-white">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Ph: 8968223712<br />
                      M: (+91) 7042194677<br />
                      M: (+91) 9815213772<br />
                      M: (+91) 9815522107
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-2xl text-blue-600">
                    ✉️
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 dark:text-white">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      tpisss_school@hotmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-2xl text-blue-600">
                    🕒
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 dark:text-white">Office Hours</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Monday - Friday: 8:00 AM - 4:00 PM<br />
                      Saturday: 8:00 AM - 12:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 dark:text-white">Find Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
              Visit our campus to experience the TPISSS difference firsthand
            </p>
          </div>
          
          <div className="h-[500px] rounded-lg overflow-hidden">
            <LeafletMap />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 dark:text-white">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
              Quick answers to common questions about TPISSS
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "What are the admission requirements?",
                answer: "Admission requirements vary by grade level. Generally, we require previous academic records, entrance tests, and parent interviews. Please contact our admissions office for specific details."
              },
              {
                question: "What is the fee structure?",
                answer: "Our fee structure is competitive and transparent. It includes tuition, facilities, and other academic expenses. Detailed fee breakdowns are available upon request."
              },
              {
                question: "Do you provide transportation?",
                answer: "Yes, we provide safe and reliable transportation services with GPS-enabled buses covering major routes in the city. Transportation fees are additional to tuition."
              },
              {
                question: "What extracurricular activities do you offer?",
                answer: "We offer a wide range of extracurricular activities including sports, arts, music, debate, science clubs, and community service programs."
              },
              {
                question: "How do you ensure student safety?",
                answer: "Student safety is our top priority. We have 24/7 security personnel, CCTV surveillance, controlled access points, and comprehensive emergency response systems."
              },
              {
                question: "What is the student-teacher ratio?",
                answer: "We maintain an optimal student-teacher ratio of approximately 25:1 to ensure personalized attention and quality education for every student."
              }
            ].map((faq, index) => (
              <div 
                key={index}
                className={`p-6 rounded-xl bg-gradient-to-br from-blue-50 to-green-50 border border-gray-200 hover:shadow-lg transition-all duration-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3 dark:text-white">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 