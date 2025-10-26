import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us - The Protein Palate | Our Story & Mission',
  description: 'Learn about The Protein Palate - your wellness community in Hadapsar, Pune. Nutritionist-approved meals, certified experts, and a mission to make healthy eating accessible.',
};

export default function AboutPage() {
  const values = [
    {
      icon: '🎯',
      title: 'Our Mission',
      description: 'To make nutritious, high-protein meals accessible and affordable for everyone in Pune, proving that healthy food can be delicious and pocket-friendly.',
    },
    {
      icon: '👁️',
      title: 'Our Vision',
      description: 'To become the most trusted wellness food partner in India, building a community where health and taste coexist perfectly.',
    },
    {
      icon: '💚',
      title: 'Our Values',
      description: 'Quality ingredients, nutritional excellence, customer satisfaction, and community wellness are at the heart of everything we do.',
    },
  ];

  const team = [

    {
      name: 'Chef Sneha N',
      role: 'Head Chef',
      credentials: 'Culinary Expert',
      description: 'Specializes in healthy, protein-rich cuisine',
    },
    {
      name: 'Akhilesh',
      role: 'Fitness Consultant',
      credentials: 'Certified Personal Trainer',
      description: 'Helps design meal plans for fitness goals',
    },
  ];

  const whyChooseUs = [
    {
      icon: '✅',
      title: 'Nutritionist Approved',
      description: 'Every meal is designed and approved by certified nutritionists',
    },
    {
      icon: '🥗',
      title: 'Fresh Ingredients',
      description: 'We source fresh, high-quality ingredients daily',
    },
    {
      icon: '💪',
      title: 'High Protein',
      description: '25-30g protein in every dish to fuel your goals',
    },
    {
      icon: '💰',
      title: 'Affordable Pricing',
      description: 'Premium quality at pocket-friendly prices',
    },
    {
      icon: '🚚',
      title: 'Fast Delivery',
      description: 'Quick and reliable delivery across Hadapsar',
    },
    {
      icon: '🌱',
      title: 'Sustainable',
      description: 'Eco-friendly packaging and sustainable practices',
    },
  ];

  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Your trusted wellness community in Hadapsar, Pune - where taste meets nutrition
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-neutral-700">
                <p>
                  The Protein Palate was born from a simple belief: <strong>healthy doesn&apos;t mean boring</strong>. 
                  We noticed that health-conscious individuals in Pune were struggling to find nutritious meals 
                  that were both delicious and affordable.
                </p>
                <p>
                  Founded in Hadapsar, we set out to change the narrative around healthy eating. Our team of 
                  certified nutritionists and experienced chefs work together to create meals that not only 
                  meet your nutritional needs but also satisfy your taste buds.
                </p>
                <p>
                  Today, we&apos;re proud to serve gym enthusiasts, working professionals, students, and anyone 
                  who values their health. We&apos;re not just a meal service - we&apos;re a wellness community 
                  committed to making healthy living accessible to all.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-3xl h-96 flex items-center justify-center text-8xl">
              🥗
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-6xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">{value.title}</h3>
                <p className="text-neutral-600 text-lg">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Why Choose The Protein Palate?
            </h2>
            <p className="text-xl text-neutral-600">
              We&apos;re committed to your wellness journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">{reason.icon}</div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{reason.title}</h3>
                <p className="text-neutral-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-neutral-600">
              Certified professionals dedicated to your health
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-neutral-50 rounded-2xl p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl text-white">
                  👤
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-1">{member.name}</h3>
                <p className="text-primary-600 font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-neutral-600 mb-3">{member.credentials}</p>
                <p className="text-neutral-700">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Wellness Community
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              We&apos;re more than a meal service - we&apos;re a community of health-conscious individuals 
              supporting each other on the journey to wellness
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">5000+</div>
              <p className="text-primary-100">Happy Customers</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-primary-100">Menu Items</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <p className="text-primary-100">Meals Delivered</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.8★</div>
              <p className="text-primary-100">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-neutral-50 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 text-center">
              Our Commitment to You
            </h2>
            <div className="space-y-4 text-lg text-neutral-700">
              <p>
                At The Protein Palate, we promise to deliver more than just meals. We&apos;re committed to:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3">•</span>
                  <span>Using only fresh, high-quality ingredients sourced from trusted suppliers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3">•</span>
                  <span>Maintaining strict hygiene and food safety standards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3">•</span>
                  <span>Providing accurate nutritional information for every dish</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3">•</span>
                  <span>Continuously innovating our menu based on customer feedback</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3">•</span>
                  <span>Supporting your wellness journey with expert guidance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Ready to Start Your Wellness Journey?
          </h2>
          <p className="text-xl text-neutral-600 mb-8">
            Join thousands of satisfied customers and experience the difference
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/menu"
              className="bg-primary-500 text-white px-8 py-4 rounded-full hover:bg-primary-600 transition-colors font-semibold"
            >
              View Menu
            </Link>
            <Link
              href="/contact"
              className="bg-white text-primary-600 border-2 border-primary-500 px-8 py-4 rounded-full hover:bg-primary-50 transition-colors font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

