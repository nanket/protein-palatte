import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Meal Plans - The Protein Palate | Subscription Plans in Pune',
  description: 'Customized meal plans for weight loss, muscle gain, and overall wellness. Subscribe and get free delivery + exclusive discounts.',
};

export default function MealPlansPage() {
  const mealPlans = [
    {
      name: 'Weight Loss Plan',
      icon: '⚖️',
      description: 'Calorie-controlled meals designed to help you shed pounds healthily',
      features: [
        'Low-calorie, high-protein meals',
        'Portion-controlled servings',
        'Metabolism-boosting ingredients',
        'Nutritionist consultation included',
        '1200-1500 calories per day',
      ],
      pricing: {
        weekly: '₹2,100',
        monthly: '₹7,500',
        quarterly: '₹21,000',
      },
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'Muscle Gain Plan',
      icon: '💪',
      description: 'High-protein meals to support muscle growth and recovery',
      features: [
        '35-40g protein per meal',
        'Complex carbs for energy',
        'Post-workout meal options',
        'Supplement recommendations',
        '2000-2500 calories per day',
      ],
      pricing: {
        weekly: '₹2,800',
        monthly: '₹10,000',
        quarterly: '₹28,000',
      },
      color: 'from-primary-500 to-primary-600',
      popular: true,
    },
    {
      name: 'Overall Wellness Plan',
      icon: '🌟',
      description: 'Balanced nutrition for maintaining optimal health and energy',
      features: [
        'Balanced macronutrients',
        'Variety of cuisines',
        'Immunity-boosting ingredients',
        'Flexible meal options',
        '1600-1800 calories per day',
      ],
      pricing: {
        weekly: '₹2,400',
        monthly: '₹8,500',
        quarterly: '₹24,000',
      },
      color: 'from-accent-500 to-accent-600',
    },
  ];

  const subscriptionBenefits = [
    {
      icon: '🚚',
      title: 'Free Delivery',
      description: 'No delivery charges on subscription orders',
    },
    {
      icon: '💰',
      title: 'Exclusive Discounts',
      description: 'Save up to 20% on monthly subscriptions',
    },
    {
      icon: '🎁',
      title: 'First Month Offer',
      description: 'Special discount for new subscribers',
    },
    {
      icon: '📅',
      title: 'Flexible Schedule',
      description: 'Pause or modify your plan anytime',
    },
    {
      icon: '👨‍⚕️',
      title: 'Nutritionist Support',
      description: 'Free consultation with certified nutritionists',
    },
    {
      icon: '✨',
      title: 'Priority Service',
      description: 'Subscribers get priority delivery slots',
    },
  ];

  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Meal Plans</h1>
          <p className="text-xl text-primary-100 mb-6">
            Customized nutrition plans tailored to your fitness goals
          </p>
          <div className="inline-block bg-accent-500 text-white px-6 py-3 rounded-full font-semibold">
            🎉 First Month: Get 15% OFF
          </div>
        </div>
      </section>

      {/* Meal Plans */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-neutral-600">
              All plans include nutritionist-approved meals and free delivery
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mealPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
                  plan.popular ? 'ring-4 ring-primary-500 relative' : ''
                }`}
              >
                {plan.popular && (
                  <div className="bg-primary-500 text-white text-center py-2 font-semibold">
                    Most Popular
                  </div>
                )}
                <div className={`bg-gradient-to-r ${plan.color} text-white p-8 text-center`}>
                  <div className="text-6xl mb-4">{plan.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm opacity-90">{plan.description}</p>
                </div>
                <div className="p-8">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-neutral-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-neutral-200 pt-6 mb-6">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-neutral-600">Weekly:</span>
                        <span className="font-bold text-neutral-900">{plan.pricing.weekly}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-600">Monthly:</span>
                        <span className="font-bold text-primary-600">{plan.pricing.monthly}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-600">Quarterly:</span>
                        <span className="font-bold text-neutral-900">{plan.pricing.quarterly}</span>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className={`block w-full bg-gradient-to-r ${plan.color} text-white text-center px-6 py-3 rounded-full hover:opacity-90 transition-opacity font-semibold`}
                  >
                    Subscribe Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Subscription Benefits
            </h2>
            <p className="text-xl text-neutral-600">
              Why subscribe to The Protein Palate?
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {subscriptionBenefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{benefit.title}</h3>
                <p className="text-neutral-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Ordering */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-accent-500 to-accent-600 rounded-3xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Bulk Ordering for Teams
                </h2>
                <p className="text-xl mb-6 text-accent-100">
                  Perfect for offices, gyms, and fitness centers
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Special pricing for bulk orders (10+ meals)
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Customizable menu options
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Dedicated account manager
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="inline-block bg-white text-accent-600 px-8 py-4 rounded-full hover:bg-accent-50 transition-colors font-semibold"
                >
                  Get Bulk Quote
                </Link>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                <div className="text-6xl mb-4">📦</div>
                <p className="text-2xl font-bold mb-2">₹100 - ₹150</p>
                <p className="text-accent-100">per meal for bulk orders</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Start Your Wellness Journey Today
          </h2>
          <p className="text-xl text-neutral-600 mb-8">
            Join our community and experience the perfect blend of taste and nutrition
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary-500 text-white px-8 py-4 rounded-full hover:bg-primary-600 transition-colors font-semibold text-lg"
          >
            Subscribe Now
          </Link>
        </div>
      </section>
    </div>
  );
}

