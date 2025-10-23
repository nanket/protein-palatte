import Link from 'next/link';

export default function Home() {
  const featuredItems = [
    {
      name: 'High-Protein Rice Bowl',
      description: 'Grilled chicken with brown rice, veggies, and our signature sauce',
      protein: '30g',
      price: '₹140',
      image: '🍚',
    },
    {
      name: 'Power-Packed Sub',
      description: 'Whole wheat sub loaded with lean protein and fresh vegetables',
      protein: '28g',
      price: '₹130',
      image: '🥪',
    },
    {
      name: 'Fresh Protein Salad',
      description: 'Mixed greens with grilled protein, nuts, and healthy dressing',
      protein: '25g',
      price: '₹120',
      image: '🥗',
    },
  ];

  const testimonials = [
    {
      name: 'Rahul Sharma',
      role: 'Fitness Enthusiast',
      content: 'The Protein Palate has transformed my meal prep routine. Delicious, nutritious, and affordable!',
      rating: 5,
    },
    {
      name: 'Priya Desai',
      role: 'Working Professional',
      content: 'Finally, healthy food that actually tastes good! The meal subscriptions are a lifesaver.',
      rating: 5,
    },
    {
      name: 'Amit Patel',
      role: 'Gym Trainer',
      content: 'I recommend The Protein Palate to all my clients. Perfect macros and great taste!',
      rating: 5,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
                Where <span className="text-primary-600">Taste</span> Meets{' '}
                <span className="text-accent-600">Wellness</span>
              </h1>
              <p className="text-xl text-neutral-700 mb-8">
                Nutritionist-approved meals with 25-30g protein per dish.
                Healthy doesn&apos;t mean boring - discover the difference!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/menu"
                  className="bg-primary-500 text-white px-8 py-4 rounded-full hover:bg-primary-600 transition-colors font-semibold text-center"
                >
                  View Menu
                </Link>
                <Link
                  href="/meal-plans"
                  className="bg-white text-primary-600 border-2 border-primary-500 px-8 py-4 rounded-full hover:bg-primary-50 transition-colors font-semibold text-center"
                >
                  Meal Plans
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-400 to-accent-400 rounded-3xl h-96 flex items-center justify-center text-8xl">
                🥗
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💪</span>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">25-30g Protein</h3>
              <p className="text-neutral-600">Every dish packed with high-quality protein to fuel your goals</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👨‍⚕️</span>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Nutritionist Approved</h3>
              <p className="text-neutral-600">Certified nutritionists design every meal for optimal health</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Pocket-Friendly</h3>
              <p className="text-neutral-600">Premium quality at ₹100-₹150 range for bulk orders</p>
            </div>
          </div>
        </div>
      </section>


      {/* Featured Menu Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Featured Menu Items
            </h2>
            <p className="text-xl text-neutral-600">
              Taste the perfect balance of nutrition and flavor
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredItems.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center text-7xl">
                  {item.image}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">{item.name}</h3>
                  <p className="text-neutral-600 mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-2xl font-bold text-primary-600">{item.price}</span>
                      <span className="text-sm text-neutral-500 ml-2">per serving</span>
                    </div>
                    <div className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full font-semibold">
                      {item.protein} protein
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/menu"
              className="inline-block bg-primary-500 text-white px-8 py-4 rounded-full hover:bg-primary-600 transition-colors font-semibold"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Meal Plans CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Worry-Free Meals?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Subscribe to our meal plans and get exclusive discounts + free delivery
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/meal-plans"
              className="bg-white text-primary-600 px-8 py-4 rounded-full hover:bg-primary-50 transition-colors font-semibold"
            >
              Explore Meal Plans
            </Link>
            <Link
              href="/contact"
              className="bg-accent-500 text-white px-8 py-4 rounded-full hover:bg-accent-600 transition-colors font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              What Our Community Says
            </h2>
            <p className="text-xl text-neutral-600">
              Join thousands of satisfied customers on their wellness journey
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-neutral-50 rounded-2xl p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-accent-500 text-xl">★</span>
                  ))}
                </div>
                <p className="text-neutral-700 mb-4 italic">&quot;{testimonial.content}&quot;</p>
                <div>
                  <p className="font-bold text-neutral-900">{testimonial.name}</p>
                  <p className="text-sm text-neutral-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Platforms Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Order Now on Your Favorite Platform
          </h2>
          <p className="text-xl text-neutral-600 mb-8">
            Available on Zomato & Swiggy for quick delivery
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://www.zomato.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-500 text-white px-12 py-4 rounded-full hover:bg-red-600 transition-colors font-semibold text-lg"
            >
              Order on Zomato
            </a>
            <a
              href="https://www.swiggy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 text-white px-12 py-4 rounded-full hover:bg-orange-600 transition-colors font-semibold text-lg"
            >
              Order on Swiggy
            </a>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Visit Us in Hadapsar
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-neutral-900">Address</p>
                    <p className="text-neutral-600">Shop B-3, Amit Heights, Sasane Nagar, Hadapsar, Pune, Maharashtra</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-neutral-900">Operating Hours</p>
                    <p className="text-neutral-600">Mon - Sun: 8:00 AM - 10:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-neutral-900">Contact</p>
                    <p className="text-neutral-600">info@proteinpalate.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-neutral-200 rounded-2xl h-96 flex items-center justify-center">
              <p className="text-neutral-600 text-lg">Map Placeholder</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
