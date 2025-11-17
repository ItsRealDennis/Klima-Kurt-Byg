# Bæredygtig Byggeri - Award-Winning Website

A modern, immersive website for a sustainable construction company built with Next.js, TypeScript, Framer Motion, and Tailwind CSS.

## Features

- **Warm & Organic Design**: Earthy color palette with natural aesthetics
- **Smooth Animations**: Parallax scrolling, scroll-triggered reveals, and page transitions
- **Full-Screen Project Slider**: Immersive carousel with Embla
- **Contact Form**: With validation using React Hook Form and Zod
- **Responsive**: Mobile-first design that works on all devices
- **Performance**: Optimized images and smooth scrolling with Lenis

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Smooth Scroll**: Lenis
- **Carousel**: Embla Carousel
- **Forms**: React Hook Form + Zod
- **Images**: Unsplash (high-quality stock photos)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout with fonts and metadata
│   ├── page.tsx             # Home page
│   ├── om-os/               # About page
│   ├── baeredygtighed/      # Sustainability page
│   ├── projekter/           # Projects page
│   └── kontakt/             # Contact page
├── components/
│   ├── layout/              # Header, Footer, SmoothScroll
│   ├── home/                # Home page sections
│   ├── projects/            # Project slider
│   ├── forms/               # Contact form
│   └── ui/                  # Reusable components
├── lib/
│   ├── animations.ts        # Framer Motion variants
│   └── utils.ts             # Utility functions
└── public/                  # Static assets
```

## Pages

1. **Hjem (Home)**: Hero section + profile, sustainability preview, and projects preview
2. **Om Os (About)**: Company story, values, and team
3. **Bæredygtighed (Sustainability)**: 4 key principles with immersive sections
4. **Projekter (Projects)**: Full-screen slider with 3 case studies
5. **Kontakt (Contact)**: Contact form with validation and company info

## Customization

### Colors

Edit `tailwind.config.ts` to customize the warm & organic color palette:

- **sand**: Warm beige tones
- **sage**: Natural green tones
- **earth**: Rich brown tones

### Content

All content is in Danish and can be edited directly in the component files.

### Images

Images are sourced from Unsplash. Replace URLs in components to use your own images.

### Contact Form Backend

The contact form currently simulates submission. To connect a real backend:

1. Create an API route in `app/api/contact/route.ts`
2. Use a service like Resend, SendGrid, or Nodemailer
3. Update the form submission in `components/forms/ContactForm.tsx`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Bæredygtig Byggeri. All rights reserved.
