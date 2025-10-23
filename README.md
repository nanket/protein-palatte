# The Protein Palate - Website

A modern, responsive Next.js website for The Protein Palate, a health-focused restaurant and meal subscription service in Hadapsar, Pune.

## 🌟 Features

- **Modern Design**: Clean, health-focused design using Tailwind CSS
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **SEO Optimized**: Comprehensive metadata and sitemap for better search engine visibility
- **Fast Performance**: Built with Next.js 16 and optimized for speed
- **Accessible**: WCAG compliant with semantic HTML

## 📄 Pages

1. **Homepage** - Hero section, USPs, featured menu, testimonials, and location
2. **Menu** - Complete menu with categories, pricing, and nutritional information
3. **Meal Plans** - Subscription plans for weight loss, muscle gain, and wellness
4. **About** - Brand story, mission, team, and community information
5. **Contact** - Contact form, location details, and delivery platform links

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd protein-palate
```

2. Install dependencies (already done):
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Design System

### Colors

- **Primary Green**: Health and wellness theme
  - `primary-500`: #10b981
  - `primary-600`: #059669

- **Accent Orange**: Energy and vitality
  - `accent-500`: #f97316
  - `accent-600`: #ea580c

- **Neutral Grays**: Clean, modern aesthetic

### Typography

- Font: Inter (Google Fonts)
- Responsive font sizes
- Clear hierarchy

## 📱 Key Features

### Homepage
- Compelling hero section with "taste + wellness" messaging
- USP highlights (25-30g protein, nutritionist-approved, pocket-friendly)
- Featured menu items with pricing
- Customer testimonials
- Order platform integration (Zomato & Swiggy)
- Location and contact information

### Menu Page
- 5 categories: Rice Bowls, Subs, Salads, Gravies, Smoothie Bowls
- Nutritional information (protein content, calories)
- Regular and bulk pricing
- Whey protein add-on option

### Meal Plans Page
- 3 plan types: Weight Loss, Muscle Gain, Overall Wellness
- Weekly, monthly, and quarterly pricing
- Subscription benefits
- First-month discount promotion
- Bulk ordering information

### About Page
- Brand story and mission
- Team introduction
- Why choose us section
- Community statistics

### Contact Page
- Contact form with validation
- Location details
- Operating hours
- Delivery platform links
- FAQ section

## 🔧 Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter (Google Fonts)
- **Build Tool**: Turbopack

## 📍 Business Information

**Location**: Shop B-3, Amit Heights, Sasane Nagar, Hadapsar, Pune, Maharashtra

**Operating Hours**: Monday - Sunday, 8:00 AM - 10:00 PM

**Order Platforms**: Zomato & Swiggy

## 🚀 Deployment

Deploy to Vercel (recommended):

```bash
npm install -g vercel
vercel
```

Or use the [Vercel Platform](https://vercel.com/new) - the easiest way to deploy Next.js apps.

## 📝 Customization

### Update Business Information

1. Edit contact details in `components/Footer.tsx`
2. Update location in `app/contact/page.tsx`
3. Modify menu items in `app/menu/page.tsx`
4. Adjust pricing in `app/meal-plans/page.tsx`

### Update Colors

Edit color variables in `app/globals.css` under the `@theme inline` section.

---

Built with ❤️ for The Protein Palate
