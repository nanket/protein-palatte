import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const menuCategories = [
    {
      name: 'Power Bowls',
      image: '/img/category1.png',
    },
    {
      name: 'Fresh Salads',
      image: '/img/category2.png',
    },
    {
      name: 'Protein Smoothies',
      image: '/img/category3.png',
    },
    {
      name: 'Healthy Wraps',
      image: '/img/category4.png',
    },
  ];

  const howItWorks = [
    {
      icon: '🍽️',
      title: 'Browse Our Menu',
      description: 'Explore our wide range of nutritious and delicious options.',
    },
    {
      icon: '🛒',
      title: 'Place Your Order',
      description: 'Select your favorite meals and proceed to checkout.',
    },
    {
      icon: '🚚',
      title: 'Enjoy Healthy Delivery',
      description: 'Get your healthy meals delivered to your door.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah J.',
      content: '"The best healthy food delivery I\'ve tried!"',
      rating: 5,
    },
    {
      name: 'Mike R.',
      content: '"Delicious and so convenient for my busy schedule."',
      rating: 5,
    },
    {
      name: 'Emily L.',
      content: '"I love the variety and freshness of the ingredients."',
      rating: 5,
    },
  ];

  return (
    <div className="bg-neutral-50">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-neutral-900">
        <div className="relative h-[80vh] md:h-[86vh] lg:h-[92vh] min-h-[560px] w-full">
          <Image
            src="/img/hero04.png"
            alt="Delicious high-protein meal"
            fill
            className="object-cover object-bottom w-full animate-fade-in"
            priority
            sizes="100vw"
          />
          {/* Gradient overlays to match reference contrast: left darken + bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

          {/* Text Overlay */}
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="w-full px-6 md:px-10 lg:px-16">
              <div className="max-w-[900px] mx-auto text-center animate-slide-up">
              <h1 className="uppercase text-white font-extrabold text-[38px] sm:text-[48px] md:text-[64px] lg:text-[72px] leading-[1.05] tracking-[-0.02em] md:tracking-[-0.03em] drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
              <span className="block">FUEL YOUR GOALS</span>
              <span className="block">WITH FRESH,</span>
              <span className="block">PROTEIN-PACKED MEALS</span>
              </h1>
                <p className="mt-6 text-white/90 text-base sm:text-lg md:text-xl leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]">
                  Crafted by chefs. Balanced by nutritionists. Delivered to your door.
                </p>
                <div className="mt-8">
                  <Link
                    href="/menu"
                    className="inline-flex items-center justify-center bg-[#34C759] text-white px-7 md:px-8 py-3 md:py-3.5 rounded-full uppercase font-semibold tracking-wide shadow-[0_10px_20px_rgba(52,199,89,0.35)] hover:shadow-[0_14px_28px_rgba(52,199,89,0.45)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                    aria-label="View Menu"
                  >
                    View Menu
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Feature badges at bottom of hero (matches reference) */}
          <div className="absolute bottom-6 md:bottom-8 inset-x-0 z-10">
            <div className="flex items-center justify-center gap-8 md:gap-12 text-white text-sm md:text-base">
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 text-xl">🌿</span>
                <span className="text-white/90">Fresh Ingredients</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 text-xl">⚡</span>
                <span className="text-white/90">High Protein</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 text-xl">🚚</span>
                <span className="text-white/90">Doorstep Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-16 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {menuCategories.map((category, index) => (
              <Link
                key={index}
                href="/menu"
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 aspect-square animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/70 transition-all duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-bold text-base md:text-lg group-hover:scale-110 transition-transform duration-300">{category.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* How It Works Section */}
      <section className="py-16 bg-white animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Ordering from Protein Palate is simple and convenient. Follow these easy steps to get your healthy meals delivered.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {howItWorks.map((step, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-4xl group-hover:bg-primary-500 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:shadow-lg">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">{step.title}</h3>
                <p className="text-neutral-600 group-hover:text-neutral-900 transition-colors duration-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-neutral-50 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              What Our Customers Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current animate-bounce-slow" style={{ animationDelay: `${i * 100}ms` }} viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-neutral-700 mb-4 italic">{testimonial.content}</p>
                <p className="font-semibold text-neutral-900">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment Section */}
      <section className="py-16 bg-white animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden group animate-fade-in-up">
              <Image
                src="/img/IMG-20250924-WA0003.jpg"
                alt="Fresh ingredients"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Our Commitment to Quality
              </h2>
              <p className="text-lg text-neutral-700 mb-4">
                At Protein Palate, we believe that healthy eating should never compromise on taste. We are dedicated to sourcing the freshest, highest-quality local ingredients to create meals that are both nutritious and delicious.
              </p>
              <p className="text-lg text-neutral-700">
                Our philosophy is simple: eat well, live well. Every meal is crafted with care to ensure you get the nutrition you need without sacrificing flavor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-100 animate-fade-in-up">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 animate-fade-in">
            Ready to Eat Healthy?
          </h2>
          <p className="text-lg text-neutral-700 mb-8 animate-fade-in-delay-1">
            Join thousands of happy customers and start your journey towards a healthier lifestyle today.
          </p>
          <Link
            href="/menu"
            className="inline-block bg-primary-500 text-white px-8 py-3.5 rounded-full hover:bg-primary-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:scale-110 animate-fade-in-delay-2 animate-pulse-slow"
          >
            Order Now
          </Link>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-neutral-50">
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
            <div className="bg-neutral-200 rounded-2xl h-96 overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=Shop%20B-3,%20Amit%20Heights,%20Sasane%20Nagar,%20Hadapsar,%20Pune,%20Maharashtra&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
