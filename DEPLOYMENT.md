# Deployment Guide - Klima Kurt Byg

## Quick Deploy to Vercel (Recommended)

### Option 1: Deploy via GitHub

1. **Push to GitHub** (Already done! ✅)
   - Repository: https://github.com/ItsRealDennis/Klima-Kurt-Byg

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import from your GitHub repository: `ItsRealDennis/Klima-Kurt-Byg`
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Done!**
   - Your site will be live in ~2 minutes
   - Vercel provides a free `.vercel.app` domain
   - You can add a custom domain later in project settings

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (run from project root)
vercel

# Deploy to production
vercel --prod
```

## Alternative Hosting Options

### Netlify

1. Push code to GitHub (done ✅)
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import from Git"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy"

### Custom Server / VPS

```bash
# Build for production
npm run build

# Start production server
npm start

# Or use PM2 for process management
npm install -g pm2
pm2 start npm --name "klima-kurt-byg" -- start
pm2 save
pm2 startup
```

## Environment Variables

Currently, the site doesn't require environment variables. If you add backend functionality:

1. Create `.env.local` file
2. Add variables (e.g., email service API keys)
3. Add same variables in Vercel/Netlify dashboard under Settings → Environment Variables

## Custom Domain Setup

### On Vercel:
1. Go to Project Settings → Domains
2. Add your domain (e.g., `klimakurtbyg.dk`)
3. Follow DNS configuration instructions
4. SSL certificate auto-configured

### DNS Records:
```
Type: A
Name: @
Value: 76.76.21.21 (Vercel)

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## Performance Tips

✅ **Already Optimized:**
- Image optimization with Next.js Image component
- Lazy loading for images
- Optimized Unsplash URLs (smaller sizes, lower quality for web)
- Tree-shaking and code splitting (automatic with Next.js)
- Font optimization with next/font

📊 **Monitoring:**
- Check Vercel Analytics (free tier includes basic analytics)
- Use Google PageSpeed Insights: https://pagespeed.web.dev/
- Target: 90+ performance score

## Post-Deployment Checklist

- [ ] Test all pages on mobile and desktop
- [ ] Verify contact form works
- [ ] Check all images load properly
- [ ] Test navigation and animations
- [ ] Verify SEO metadata (view page source)
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics (optional)

## Troubleshooting

**Images not loading?**
- Check Unsplash URLs are accessible
- Verify `next.config.ts` has correct `remotePatterns`

**Build fails?**
- Run `npm run build` locally to check for errors
- Check Node version (requires Node 18+)

**Slow loading?**
- Images are already optimized
- Check your internet connection
- Vercel edge network serves from nearest location

## Support

- Next.js Docs: https://nextjs.org/docs
- Vercel Support: https://vercel.com/support
- GitHub Issues: https://github.com/ItsRealDennis/Klima-Kurt-Byg/issues
