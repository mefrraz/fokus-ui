# FOKUS Design Guidelines

## Design Approach
**Reference-Based**: Linear + Reflect aesthetic - premium SaaS minimalism with institutional credibility. Clean, professional, geometry-focused with subtle motion.

## Color System (CRITICAL - ONLY 3 COLORS)
```
Primary Accent: #102A43 (Deep Navy Blue)
- CTAs, key headings, interactive elements, SVG accents

Background: #F8F8F8 (Soft White/Light Gray)
- Main page background, card backgrounds

Text/Contrast: #111827 (Dark Gray/Black)
- All body text, headings, UI text

Permitted Variation: #EAEAEA (Light gray for subtle dividers only)
```

**Forbidden**: No yellows, greens, purples, oranges, or vibrant colors.

## Typography Hierarchy
- **Hero H1**: 3.5rem (56px) desktop / 2.25rem (36px) mobile, font-bold, #111827
- **Section H2**: 2.5rem (40px) desktop / 1.875rem (30px) mobile, font-bold, #111827
- **Card H3**: 1.5rem (24px), font-semibold, #111827
- **Body**: 1.125rem (18px), font-normal, #111827 with 80% opacity
- **CTA Text**: 1rem (16px), font-medium, white on #102A43
- **Font Stack**: System fonts (Inter/SF Pro if available, fallback to sans-serif)

## Spacing System
Use Tailwind units: **4, 8, 12, 16, 20, 24, 32**
- Section padding: py-20 desktop, py-12 mobile
- Component gaps: gap-8 to gap-12
- Container max-width: max-w-7xl with px-6 padding

## Layout Structure

### Hero Section (100vh)
- Centered content with max-w-4xl
- Animated geometric SVG background (circles, lines, grids in #102A43 + white)
- H1 + subtitle + primary CTA button
- Subtle parallax/float animations on SVG elements

### Value Proposition (3 Pillars)
- Three-column grid (grid-cols-1 md:grid-cols-3)
- Each card: SVG icon (geometric shapes) + H3 + description
- Minimal card styling: subtle border or slight background tint (#FAFAFA)

### Credibility Section
- Trust indicators with geometric visual elements
- Staggered fade-in animations
- Clean data presentation with large numbers

### CTA Section
- Centered, bold headline + secondary CTA
- Contrasting background (#102A43) with white text
- Generous padding (py-24)

### Footer
- Two-column layout (md:grid-cols-2)
- Institutional links + contact info
- Minimal, text-focused

## Visual Elements (NO EXTERNAL IMAGES)

**SVG Animations**:
- Hero: Floating geometric shapes (circles, hexagons, lines) with subtle rotation/translate
- Section dividers: Animated gradient lines or geometric patterns
- Card icons: Simple geometric SVG icons in #102A43
- Background patterns: Grid overlays, dots, or abstract shapes at 5% opacity

**All visuals must be created with SVG/CSS** - clean, geometric, minimal.

## Component Design

**Buttons**:
- Primary: bg-[#102A43] text-white, rounded-lg, px-8 py-4, font-medium
- Hover: Subtle scale (1.02) + slight shadow
- Focus: ring-2 ring-[#102A43] ring-offset-2

**Cards**:
- Minimal borders (border border-gray-200)
- Subtle hover lift (translateY(-4px))
- Rounded corners (rounded-xl)
- No shadows at rest, subtle on hover

**Dividers**:
- 1px solid #EAEAEA
- Or geometric SVG separators

## Animation Principles (Framer Motion)
- **Fade-in on scroll**: opacity 0→1, y: 20→0, duration: 0.6s
- **Stagger children**: staggerChildren: 0.1
- **Hover states**: scale: 1.02, subtle transitions
- **Hero SVG**: Continuous gentle float/rotation (infinite loop)
- **Keep subtle**: No aggressive animations - Linear-inspired restraint

## Responsive Behavior
- **Desktop (lg)**: Multi-column grids, generous spacing
- **Tablet (md)**: 2-column grids, reduced spacing
- **Mobile (base)**: Single column, stack all content, py-12 sections

## Pages/Sections Structure
1. **Hero** - Full viewport with geometric SVG + main CTA
2. **Value Proposition** - 3-column cards
3. **Credibility/Trust** - Stats or trust indicators
4. **Final CTA** - Dark section with contrast
5. **Footer** - Institutional info

**Total Length**: 4-5 sections, concise landing page focused on lead capture.

No images. Pure geometric SVG artistry. Institutional minimalism.