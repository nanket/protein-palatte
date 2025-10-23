import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Menu - The Protein Palate | High-Protein Meals in Pune',
  description: 'Explore our nutritious menu featuring high-protein rice bowls, power-packed subs, fresh salads, and more. 25-30g protein per dish.',
};

export default function MenuPage() {
  const menuCategories = [
    {
      name: 'High-Protein Rice Bowls',
      description: 'Wholesome bowls packed with protein and nutrients',
      items: [
        {
          name: 'Grilled Chicken Rice Bowl',
          description: 'Tender grilled chicken breast with brown rice, steamed vegetables, and signature sauce',
          protein: '30g',
          calories: '450 kcal',
          price: '₹140',
          bulkPrice: '₹120',
        },
        {
          name: 'Paneer Tikka Rice Bowl',
          description: 'Marinated paneer tikka with quinoa, mixed veggies, and mint chutney',
          protein: '28g',
          calories: '420 kcal',
          price: '₹130',
          bulkPrice: '₹110',
        },
        {
          name: 'Egg White Rice Bowl',
          description: 'Protein-rich egg whites with brown rice, spinach, and herbs',
          protein: '25g',
          calories: '380 kcal',
          price: '₹120',
          bulkPrice: '₹100',
        },
      ],
    },
    {
      name: 'Power-Packed Subs',
      description: 'Whole wheat subs loaded with lean protein',
      items: [
        {
          name: 'Grilled Chicken Sub',
          description: 'Whole wheat sub with grilled chicken, fresh veggies, and low-fat mayo',
          protein: '28g',
          calories: '400 kcal',
          price: '₹130',
          bulkPrice: '₹110',
        },
        {
          name: 'Tuna Protein Sub',
          description: 'Tuna with whole wheat bread, lettuce, tomatoes, and healthy dressing',
          protein: '30g',
          calories: '420 kcal',
          price: '₹150',
          bulkPrice: '₹130',
        },
        {
          name: 'Veggie Protein Sub',
          description: 'Mixed vegetables with hummus, falafel, and tahini sauce',
          protein: '22g',
          calories: '360 kcal',
          price: '₹120',
          bulkPrice: '₹100',
        },
      ],
    },
    {
      name: 'Fresh Salads',
      description: 'Nutrient-dense salads with premium proteins',
      items: [
        {
          name: 'Grilled Chicken Caesar Salad',
          description: 'Romaine lettuce, grilled chicken, parmesan, and light Caesar dressing',
          protein: '32g',
          calories: '320 kcal',
          price: '₹140',
          bulkPrice: '₹120',
        },
        {
          name: 'Greek Protein Salad',
          description: 'Mixed greens, feta cheese, olives, chickpeas, and Greek dressing',
          protein: '25g',
          calories: '300 kcal',
          price: '₹130',
          bulkPrice: '₹110',
        },
        {
          name: 'Quinoa Power Salad',
          description: 'Quinoa, mixed beans, avocado, nuts, and lemon vinaigrette',
          protein: '24g',
          calories: '350 kcal',
          price: '₹135',
          bulkPrice: '₹115',
        },
      ],
    },
    {
      name: 'Protein Gravies',
      description: 'Rich, flavorful gravies with high protein content',
      items: [
        {
          name: 'Chicken Tikka Masala',
          description: 'Tender chicken in creamy tomato-based gravy (serves with rice/roti)',
          protein: '35g',
          calories: '380 kcal',
          price: '₹150',
          bulkPrice: '₹130',
        },
        {
          name: 'Paneer Butter Masala',
          description: 'Cottage cheese in rich, protein-enhanced butter gravy',
          protein: '28g',
          calories: '400 kcal',
          price: '₹140',
          bulkPrice: '₹120',
        },
        {
          name: 'Dal Tadka Protein',
          description: 'High-protein lentils with traditional tempering',
          protein: '22g',
          calories: '280 kcal',
          price: '₹110',
          bulkPrice: '₹90',
        },
      ],
    },
    {
      name: 'Nutritious Smoothie Bowls',
      description: 'Delicious and protein-rich smoothie bowls',
      items: [
        {
          name: 'Berry Protein Bowl',
          description: 'Mixed berries, protein powder, granola, and chia seeds',
          protein: '25g',
          calories: '320 kcal',
          price: '₹130',
          bulkPrice: '₹110',
        },
        {
          name: 'Chocolate Peanut Butter Bowl',
          description: 'Chocolate protein, peanut butter, banana, and almonds',
          protein: '28g',
          calories: '380 kcal',
          price: '₹140',
          bulkPrice: '₹120',
        },
        {
          name: 'Green Power Bowl',
          description: 'Spinach, avocado, protein powder, and tropical fruits',
          protein: '22g',
          calories: '300 kcal',
          price: '₹135',
          bulkPrice: '₹115',
        },
      ],
    },
  ];

  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Menu</h1>
          <p className="text-xl text-primary-100 mb-6">
            Every dish crafted with 25-30g protein and nutritionist approval
          </p>
          <div className="inline-block bg-accent-500 text-white px-6 py-3 rounded-full font-semibold">
            🎉 Bulk Orders: ₹100-₹150 per meal
          </div>
        </div>
      </section>

      {/* Add-on Section */}
      <section className="bg-white py-8 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-neutral-900">Boost Your Protein</h3>
              <p className="text-neutral-600">Add premium whey protein to any dish</p>
            </div>
            <div className="bg-primary-100 text-primary-700 px-6 py-3 rounded-full font-semibold">
              + ₹30 for Whey Protein Add-on
            </div>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {menuCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-neutral-900 mb-2">
                    {category.name}
                  </h2>
                  <p className="text-lg text-neutral-600">{category.description}</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6"
                    >
                      <h3 className="text-xl font-bold text-neutral-900 mb-2">
                        {item.name}
                      </h3>
                      <p className="text-neutral-600 mb-4">{item.description}</p>
                      
                      {/* Nutritional Info */}
                      <div className="flex gap-3 mb-4">
                        <div className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
                          💪 {item.protein}
                        </div>
                        <div className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-sm font-semibold">
                          🔥 {item.calories}
                        </div>
                      </div>

                      {/* Pricing */}
                      <div className="border-t border-neutral-200 pt-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-neutral-600">Regular Price:</span>
                          <span className="text-xl font-bold text-neutral-900">{item.price}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-neutral-600">Bulk Order:</span>
                          <span className="text-lg font-bold text-primary-600">{item.bulkPrice}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-accent-500 to-accent-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Order?
          </h2>
          <p className="text-xl mb-8 text-accent-100">
            Get your nutritious meals delivered fresh to your doorstep
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.zomato.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-accent-600 px-8 py-4 rounded-full hover:bg-accent-50 transition-colors font-semibold"
            >
              Order on Zomato
            </a>
            <a
              href="https://www.swiggy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-accent-600 px-8 py-4 rounded-full hover:bg-accent-50 transition-colors font-semibold"
            >
              Order on Swiggy
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

