# Deployment Guide - The Protein Palate

This guide will help you deploy The Protein Palate website to production.

## 🚀 Quick Deploy to Vercel (Recommended)

Vercel is the recommended platform for Next.js applications, offering the best performance and easiest deployment.

### Option 1: Deploy via Vercel Dashboard

1. **Create a Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub, GitLab, or Bitbucket

2. **Import Your Project**
   - Click "Add New Project"
   - Import your Git repository
   - Vercel will auto-detect Next.js settings

3. **Configure & Deploy**
   - Review the settings (usually no changes needed)
   - Click "Deploy"
   - Your site will be live in ~2 minutes!

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to project directory
cd protein-palate

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Select your account
# - Link to existing project? No
# - Project name? protein-palate
# - Directory? ./
# - Override settings? No

# For production deployment
vercel --prod
```

## 🌐 Custom Domain Setup

### On Vercel

1. Go to your project dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., proteinpalate.com)
4. Follow DNS configuration instructions
5. Vercel will automatically provision SSL certificate

### DNS Configuration Example

Add these records to your domain registrar:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## 📝 Pre-Deployment Checklist

Before deploying to production, update these items:

### 1. Update Contact Information

**File: `components/Footer.tsx`**
- Replace `+91 XXXXX XXXXX` with actual phone number
- Update email addresses if different

**File: `app/contact/page.tsx`**
- Update phone number
- Update email addresses

### 2. Update Order Platform Links

**Files to update:**
- `app/page.tsx`
- `app/menu/page.tsx`
- `app/contact/page.tsx`

Replace:
```typescript
href="https://www.zomato.com"
href="https://www.swiggy.com"
```

With your actual restaurant URLs:
```typescript
href="https://www.zomato.com/pune/the-protein-palate-hadapsar"
href="https://www.swiggy.com/restaurants/the-protein-palate-hadapsar-pune"
```

### 3. Add Real Images

Replace emoji placeholders with actual food images:

1. Add images to `public/images/` directory
2. Update image references in:
   - `app/page.tsx` (hero section, featured items)
   - `app/menu/page.tsx` (menu items)
   - `app/about/page.tsx` (team photos)

Example:
```typescript
// Before
<div className="text-8xl">🥗</div>

// After
<Image 
  src="/images/hero-salad.jpg" 
  alt="Fresh protein salad"
  width={800}
  height={600}
/>
```

### 4. Add Google Maps Integration

**File: `app/contact/page.tsx`**

Replace the map placeholder:
```typescript
// Current placeholder
<div className="bg-neutral-200 rounded-2xl h-96 flex items-center justify-center">
  <p className="text-neutral-600 text-lg">Map Placeholder</p>
</div>

// Replace with Google Maps embed
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d..."
  width="100%"
  height="384"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  className="rounded-2xl"
/>
```

Get your embed code from [Google Maps](https://www.google.com/maps).

### 5. Update Sitemap URL

**File: `app/sitemap.ts`**

Replace `https://www.proteinpalate.com` with your actual domain.

**File: `public/robots.txt`**

Update the sitemap URL to match your domain.

### 6. Add Analytics (Optional)

**Google Analytics:**

1. Create a Google Analytics account
2. Get your tracking ID
3. Add to `app/layout.tsx`:

```typescript
import Script from 'next/script'

// In the <head> section
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

## 🔒 Environment Variables

If you add backend functionality later, create a `.env.local` file:

```env
# Email Service (e.g., SendGrid)
SENDGRID_API_KEY=your_api_key

# Database (if needed)
DATABASE_URL=your_database_url

# Analytics
NEXT_PUBLIC_GA_ID=your_ga_id
```

Add these to Vercel:
1. Go to Project Settings → Environment Variables
2. Add each variable
3. Redeploy

## 🧪 Testing Before Deployment

```bash
# Run production build locally
npm run build
npm start

# Test on http://localhost:3000
# Check all pages and functionality
```

## 📊 Post-Deployment Tasks

### 1. Submit to Search Engines

**Google Search Console:**
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your property
3. Verify ownership
4. Submit sitemap: `https://yourdomain.com/sitemap.xml`

**Bing Webmaster Tools:**
1. Go to [bing.com/webmasters](https://www.bing.com/webmasters)
2. Add your site
3. Submit sitemap

### 2. Set Up Monitoring

**Vercel Analytics:**
- Enable in Vercel dashboard (free tier available)
- Monitor page views, performance, and errors

**Uptime Monitoring:**
- Use services like UptimeRobot or Pingdom
- Get alerts if site goes down

### 3. Performance Optimization

**Check Performance:**
- Run [PageSpeed Insights](https://pagespeed.web.dev/)
- Run [GTmetrix](https://gtmetrix.com/)
- Aim for 90+ scores

**Optimize Images:**
```bash
# Install sharp for image optimization
npm install sharp

# Next.js will automatically optimize images
```

## 🔄 Continuous Deployment

### Set Up Git Integration

1. Push code to GitHub/GitLab/Bitbucket
2. Connect repository to Vercel
3. Every push to `main` branch auto-deploys

```bash
# Example workflow
git add .
git commit -m "Update menu items"
git push origin main
# Vercel automatically deploys!
```

## 🆘 Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Deployment Issues

- Check Vercel deployment logs
- Verify all environment variables are set
- Ensure Node.js version compatibility (18.x+)

### Performance Issues

- Enable Vercel Edge Network
- Optimize images (use WebP format)
- Enable caching headers

## 📱 Mobile Testing

Test on real devices:
- iOS Safari
- Android Chrome
- Different screen sizes

Use browser dev tools:
- Chrome DevTools (F12)
- Responsive design mode
- Lighthouse audit

## 🎉 Launch Checklist

- [ ] All placeholder content updated
- [ ] Real images added
- [ ] Contact information verified
- [ ] Order platform links working
- [ ] Google Maps integrated
- [ ] Custom domain configured
- [ ] SSL certificate active
- [ ] Analytics installed
- [ ] Sitemap submitted to search engines
- [ ] Performance tested (90+ score)
- [ ] Mobile responsiveness verified
- [ ] All forms tested
- [ ] Social media links updated
- [ ] Backup plan in place

## 📞 Support

For deployment issues:
- Vercel Documentation: [vercel.com/docs](https://vercel.com/docs)
- Next.js Documentation: [nextjs.org/docs](https://nextjs.org/docs)

---

**Ready to Deploy?** Follow the steps above and your site will be live in minutes! 🚀

