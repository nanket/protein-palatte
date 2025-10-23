'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'general',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1000);
  };

  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-primary-100">
            We&apos;re here to help with your wellness journey
          </p>
        </div>
      </section>

      {/* Order Platforms */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Order Now
            </h2>
            <p className="text-xl text-neutral-600">
              Get your meals delivered fresh to your doorstep
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://www.zomato.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-500 text-white px-12 py-4 rounded-full hover:bg-red-600 transition-colors font-semibold text-lg w-full sm:w-auto text-center"
            >
              🍽️ Order on Zomato
            </a>
            <a
              href="https://www.swiggy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 text-white px-12 py-4 rounded-full hover:bg-orange-600 transition-colors font-semibold text-lg w-full sm:w-auto text-center"
            >
              🛵 Order on Swiggy
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                Send Us a Message
              </h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 bg-primary-100 border border-primary-500 text-primary-700 px-4 py-3 rounded-lg">
                  Thank you! We&apos;ll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="subscription">Meal Subscription</option>
                    <option value="bulk">Bulk Order</option>
                    <option value="nutrition">Nutrition Consultation</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-500 text-white px-8 py-4 rounded-full hover:bg-primary-600 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-neutral-900 mb-1">Address</h3>
                      <p className="text-neutral-600">
                        Shop B-3, Amit Heights,<br />
                        Sasane Nagar, Hadapsar,<br />
                        Pune, Maharashtra
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-neutral-900 mb-1">Email</h3>
                      <p className="text-neutral-600">info@proteinpalate.com</p>
                      <p className="text-neutral-600">support@proteinpalate.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-neutral-900 mb-1">Phone</h3>
                      <p className="text-neutral-600">+91 XXXXX XXXXX</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-neutral-900 mb-1">Operating Hours</h3>
                      <p className="text-neutral-600">Monday - Sunday</p>
                      <p className="text-neutral-600">8:00 AM - 10:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-neutral-200 h-64 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-neutral-600 text-lg mb-2">📍 Map Location</p>
                    <p className="text-sm text-neutral-500">Hadapsar, Pune</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-neutral-50 rounded-xl p-6">
              <h3 className="font-bold text-neutral-900 mb-2">What are your delivery areas?</h3>
              <p className="text-neutral-600">We currently deliver across Hadapsar and nearby areas in Pune. Contact us to check if we deliver to your location.</p>
            </div>
            <div className="bg-neutral-50 rounded-xl p-6">
              <h3 className="font-bold text-neutral-900 mb-2">How do I subscribe to a meal plan?</h3>
              <p className="text-neutral-600">You can subscribe through our contact form or call us directly. Our team will help you choose the perfect plan for your goals.</p>
            </div>
            <div className="bg-neutral-50 rounded-xl p-6">
              <h3 className="font-bold text-neutral-900 mb-2">Can I customize my meals?</h3>
              <p className="text-neutral-600">Yes! We offer customization options for dietary preferences and allergies. Contact our nutritionist for personalized meal plans.</p>
            </div>
            <div className="bg-neutral-50 rounded-xl p-6">
              <h3 className="font-bold text-neutral-900 mb-2">What is your cancellation policy?</h3>
              <p className="text-neutral-600">You can pause or cancel your subscription anytime with 24 hours notice. No hidden fees or penalties.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

