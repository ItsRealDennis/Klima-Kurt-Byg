# Teknisk Dokumentation - Klima Kurt Byg

## Projekt Oversigt

**Projekt Navn:** Klima Kurt Byg Website
**Version:** 1.0.0
**Udviklet:** November 2025
**Repository:** https://github.com/ItsRealDennis/Klima-Kurt-Byg
**Live URL:** https://klima-kurt-byg.vercel.app

---

## Indholdsfortegnelse

1. [Teknologi Stack](#teknologi-stack)
2. [Projekt Struktur](#projekt-struktur)
3. [Arkitektur](#arkitektur)
4. [Komponenter](#komponenter)
5. [Styling System](#styling-system)
6. [Performance Optimering](#performance-optimering)
7. [Deployment](#deployment)
8. [Vedligeholdelse](#vedligeholdelse)
9. [API Reference](#api-reference)

---

## Teknologi Stack

### Frontend Framework
- **Next.js 15.5.6** - React framework med App Router
- **React 19.0.0** - UI library
- **TypeScript 5.x** - Type-safe JavaScript

### Styling
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Custom Design System** - Warm & organic color palette

### Animation & Interaktivitet
- **Framer Motion 11.15.0** - Advanced animations
- **Lenis 1.1.17** - Smooth scroll library
- **Embla Carousel 8.5.1** - Touch-enabled carousel

### Forms & Validation
- **React Hook Form 7.54.2** - Form state management
- **Zod 3.24.1** - Schema validation

### Utilities
- **clsx 2.1.1** - Conditional classnames
- **tailwind-merge 2.6.0** - Merge Tailwind classes

---

## Projekt Struktur

```
Byggehjemmeside/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout (fonts, metadata)
│   ├── page.tsx                 # Homepage
│   ├── globals.css              # Global styles
│   ├── om-os/
│   │   └── page.tsx            # About page
│   ├── baeredygtighed/
│   │   └── page.tsx            # Sustainability page
│   ├── projekter/
│   │   └── page.tsx            # Projects page
│   └── kontakt/
│       └── page.tsx            # Contact page
│
├── components/
│   ├── layout/                  # Layout components
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Footer.tsx          # Footer with links
│   │   └── SmoothScroll.tsx    # Lenis wrapper
│   │
│   ├── home/                    # Homepage sections
│   │   ├── Hero.tsx            # Hero with parallax
│   │   ├── ProfileSection.tsx  # Company profile
│   │   ├── SustainabilityPreview.tsx
│   │   └── ProjectsPreview.tsx
│   │
│   ├── projects/
│   │   └── ProjectSlider.tsx   # Full-screen carousel
│   │
│   ├── forms/
│   │   └── ContactForm.tsx     # Contact form with validation
│   │
│   └── ui/                      # Reusable UI components
│       ├── AnimatedSection.tsx # Scroll animations
│       ├── ParallaxImage.tsx   # Image component
│       └── Button.tsx          # Button component
│
├── lib/
│   ├── animations.ts            # Framer Motion variants
│   └── utils.ts                 # Utility functions
│
├── public/
│   └── Klimakurt.png           # Profile image
│
├── next.config.ts               # Next.js configuration
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies
```

---

## Arkitektur

### App Router (Next.js 15)
Projektet bruger Next.js App Router for:
- Server Components som standard
- Automatic code splitting
- Optimized routing
- Built-in SEO support

### Component Pattern
```typescript
// Server Component (default)
export default function Page() {
  return <div>...</div>
}

// Client Component (når interaktivitet kræves)
"use client";
export default function InteractiveComponent() {
  const [state, setState] = useState();
  return <div>...</div>
}
```

### Data Flow
```
Pages (Server) → Sections (Client) → UI Components
                      ↓
                 State Management
                      ↓
                 User Interactions
```

---

## Komponenter

### Layout Komponenter

#### Header.tsx
**Placering:** `components/layout/Header.tsx`

**Features:**
- Sticky navigation med backdrop blur
- Mobile-responsive hamburger menu
- Active state highlighting
- Smooth scroll til sektioner

**Props:** Ingen (bruger Next.js routing)

**State:**
```typescript
const [isScrolled, setIsScrolled] = useState(false);
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
```

#### Footer.tsx
**Placering:** `components/layout/Footer.tsx`

**Sektioner:**
- Company info
- Quick links
- Contact information
- Opening hours
- Copyright notice

#### SmoothScroll.tsx
**Placering:** `components/layout/SmoothScroll.tsx`

**Implementation:**
```typescript
useEffect(() => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });
  // RAF loop
}, []);
```

---

### Home Components

#### Hero.tsx
**Features:**
- Full-screen hero section
- Parallax background image
- Staggered text animations
- CTA buttons
- Scroll indicator

**Animations:**
```typescript
initial={{ opacity: 0, y: 40 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8, delay: 0.4 }}
```

#### ProfileSection.tsx
**Layout:** 2-column grid (image + content)

**Content:**
- Company description
- Image with decorative elements
- CTA button

#### SustainabilityPreview.tsx
**Layout:** 2-column grid (alternating)

**Features:**
- 3 key sustainability features
- Checkmark icons
- Image with parallax effect

#### ProjectsPreview.tsx
**Layout:** 3-column grid

**Content:**
- 3 project cards
- Hover effects
- Image optimization

---

### Project Components

#### ProjectSlider.tsx
**Library:** Embla Carousel

**Features:**
- Full-screen immersive slider
- Touch/drag navigation
- Keyboard navigation
- Progress dots
- Project counter
- Expandable details panel

**State Management:**
```typescript
const [emblaRef, emblaApi] = useEmblaCarousel({
  loop: true,
  skipSnaps: false,
  duration: 30,
});
const [selectedIndex, setSelectedIndex] = useState(0);
const [showDetails, setShowDetails] = useState(false);
```

---

### Form Components

#### ContactForm.tsx
**Validation:** React Hook Form + Zod

**Schema:**
```typescript
const contactFormSchema = z.object({
  name: z.string().min(2, "Navn skal være mindst 2 tegn"),
  email: z.string().email("Ugyldig email adresse"),
  phone: z.string().min(8, "Telefonnummer skal være mindst 8 cifre"),
  subject: z.string().min(5, "Emne skal være mindst 5 tegn"),
  message: z.string().min(10, "Besked skal være mindst 10 tegn"),
});
```

**Features:**
- Real-time validation
- Error messages
- Success/error states
- Loading indicator
- Accessible form fields

---

### UI Components

#### AnimatedSection.tsx
**Purpose:** Wrapper for scroll-triggered animations

**Usage:**
```typescript
<AnimatedSection variants={fadeInUp}>
  <YourContent />
</AnimatedSection>
```

#### Button.tsx
**Variants:**
- `primary` - Green background
- `secondary` - Brown background
- `outline` - Transparent with border

**Props:**
```typescript
interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}
```

---

## Styling System

### Color Palette

#### Sand (Warm Beige)
```typescript
sand: {
  50: "#fdfbf7",
  100: "#f8f3e9",
  200: "#f0e6d2",
  // ... til 900
}
```

#### Sage (Natural Green)
```typescript
sage: {
  50: "#f6f7f4",
  100: "#e8ebe3",
  // ... til 900
}
```

#### Earth (Rich Brown)
```typescript
earth: {
  50: "#f7f5f2",
  100: "#ebe6de",
  // ... til 900
}
```

### Typography
**Sans Serif:** Inter (variable font)
**Serif:** Playfair Display (variable font)

**Font Classes:**
- `font-sans` - Inter for body text
- `font-serif` - Playfair Display for headings

### Spacing System
**Mobile-first responsive spacing:**
```css
py-16 sm:py-24 lg:py-32   /* Vertical padding */
px-4 sm:px-6 lg:px-12     /* Horizontal padding */
```

### Breakpoints
```typescript
sm: 640px   // Small devices
md: 768px   // Medium devices
lg: 1024px  // Large devices
xl: 1280px  // Extra large devices
```

---

## Performance Optimering

### Image Optimization
**Next.js Image Component:**
```typescript
<Image
  src="https://images.unsplash.com/..."
  width={800}
  height={600}
  quality={75}
  loading="lazy"
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

**Optimering strategier:**
- WebP format automatisk
- Responsive sizes
- Lazy loading for off-screen images
- Priority loading for above-fold
- Optimized Unsplash URLs

### Code Splitting
- Automatic route-based splitting
- Dynamic imports for heavy components
- Tree-shaking unused code

### Font Optimization
```typescript
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",  // Prevents FOIT
});
```

### Bundle Size
**Strategies:**
- No unused dependencies
- Minimal external libraries
- Tree-shakeable utilities
- Server Components hvor muligt

---

## Deployment

### Vercel Deployment

#### Automatic Deployment
```bash
git push origin main
# Vercel auto-deploys from GitHub
```

#### Manual Deployment
```bash
vercel --prod
```

#### Environment Variables
Ingen kræves til nuværende version.

For fremtidig email integration:
```env
RESEND_API_KEY=re_xxxxx
CONTACT_EMAIL=kontakt@klimakurtbyg.dk
```

### Build Process
```bash
npm run build  # Production build
npm start      # Start production server
```

**Build Output:**
- Static pages: Pre-rendered HTML
- Dynamic pages: Server-side rendering
- Client bundles: Optimized JavaScript
- Image optimization: Automatic WebP

---

## Vedligeholdelse

### Opdatering af Dependencies
```bash
# Check for updates
npm outdated

# Update all dependencies
npm update

# Update specific package
npm install framer-motion@latest
```

### Content Updates

#### Opdater Tekst
Rediger relevante `.tsx` filer i `app/` eller `components/`

#### Tilføj Nyt Projekt
Rediger `app/projekter/page.tsx`:
```typescript
const projects = [
  {
    title: "Nyt Projekt",
    description: "...",
    details: "...",
    image: "...",
    tags: ["..."],
  },
  // Eksisterende projekter
];
```

#### Skift Billeder
Erstat Unsplash URLs eller tilføj nye billeder i `public/`

### Performance Monitoring
```bash
# Build analysis
npm run build

# Check bundle size
npx @next/bundle-analyzer
```

---

## API Reference

### Animation Variants

#### fadeInUp
```typescript
{
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}
```

#### staggerContainer
```typescript
{
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    }
  }
}
```

### Utility Functions

#### cn() - Class Merger
```typescript
import { cn } from "@/lib/utils";

cn("base-class", condition && "conditional-class", className);
```

---

## Browser Support

**Supported Browsers:**
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile Safari (iOS 13+)
- Chrome Mobile (Android 10+)

**Required Features:**
- CSS Grid
- Flexbox
- CSS Custom Properties
- ES6+ JavaScript
- IntersectionObserver API

---

## Testing

### Manual Testing Checklist

**Funktionalitet:**
- [ ] Navigation fungerer på alle sider
- [ ] Mobil menu åbner/lukker korrekt
- [ ] Kontaktformular validerer input
- [ ] Projekt slider navigerer korrekt
- [ ] Alle links fungerer

**Responsivitet:**
- [ ] Layout fungerer på mobil (375px+)
- [ ] Layout fungerer på tablet (768px+)
- [ ] Layout fungerer på desktop (1024px+)
- [ ] Billeder skalerer korrekt
- [ ] Tekst er læsbar på alle skærmstørrelser

**Performance:**
- [ ] First Contentful Paint < 1.8s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Time to Interactive < 3.8s
- [ ] Cumulative Layout Shift < 0.1

---

## Troubleshooting

### Common Issues

#### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

#### Images Not Loading
Check `next.config.ts` remotePatterns:
```typescript
images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "images.unsplash.com",
    },
  ],
}
```

#### Slow Performance
1. Check image sizes
2. Verify lazy loading
3. Check bundle size with analyzer
4. Enable Next.js Speed Insights

---

## Future Enhancements

### Planned Features
- [ ] Blog section for project updates
- [ ] Admin panel for content management
- [ ] Email backend for contact form
- [ ] Google Analytics integration
- [ ] Cookie consent banner
- [ ] Multi-language support (English)
- [ ] Case study pages for individual projects
- [ ] Team member profiles
- [ ] Client testimonials section

### Technical Improvements
- [ ] Add E2E testing (Playwright)
- [ ] Implement CMS (Sanity/Contentful)
- [ ] Add PWA capabilities
- [ ] Implement image CDN
- [ ] Add sitemap.xml generation
- [ ] Implement structured data (JSON-LD)

---

## Support & Contact

**Developer:** Dennis
**Email:** dennisework@protonmail.com
**Repository:** https://github.com/ItsRealDennis/Klima-Kurt-Byg

**Documentation Updates:** Dette dokument bør opdateres ved alle større ændringer til projektet.

**Version History:**
- v1.0.0 (Nov 2025) - Initial release

---

*Sidst opdateret: November 2025*
