# FOKUS - Online Course Platform

## Overview

FOKUS is a premium online course platform designed to deliver professional training and certifications. The application features an institutional landing page with course catalog and detailed course pages, emphasizing a clean, minimalist design inspired by Linear and Reflect aesthetics. The platform prioritizes professional credibility, geometric design elements, and smooth user interactions through motion animations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **Framework:** React 18 with TypeScript
- **Routing:** Wouter (lightweight client-side routing)
- **Styling:** Tailwind CSS with custom design system
- **UI Components:** Radix UI primitives with shadcn/ui component library
- **Animations:** Framer Motion for smooth transitions and geometric animations
- **State Management:** TanStack React Query for server state
- **Build Tool:** Vite

**Design System:**
- **Color Palette:** Strict three-color system
  - Primary Accent: #102A43 (Deep Navy Blue) for CTAs and interactive elements
  - Background: #F8F8F8 (Soft White/Light Gray) for surfaces
  - Text/Contrast: #111827 (Dark Gray/Black) for typography
- **Typography:** System fonts (Inter preferred) with defined hierarchy
- **Component Style:** Glassmorphism effects with backdrop blur, rounded corners (rounded-3xl), and subtle shadows
- **Motion:** Geometric SVG animations (circles, rectangles, lines) with parallax and floating effects

**Page Structure:**
- **Home (Landing Page):** Hero section with animated background, value proposition cards, credibility metrics, and CTA section
- **Catalog Page:** Course listing with search, category filters, and sorting capabilities
- **Course Detail Page:** Comprehensive course information including modules, instructor bio, testimonials, and FAQs

**Component Organization:**
- Reusable UI components in `client/src/components/ui/` (shadcn/ui)
- Page-specific sections in `client/src/components/sections/`
- Page components in `client/src/pages/`
- Shared course components (CourseCard, Header, Footer)

### Backend Architecture

**Technology Stack:**
- **Runtime:** Node.js with TypeScript
- **Framework:** Express.js for HTTP server
- **Database ORM:** Drizzle ORM
- **Session Storage:** In-memory storage (development) with interface for database implementation

**Server Structure:**
- Modular route registration system in `server/routes.ts`
- Abstract storage interface (`IStorage`) in `server/storage.ts` for CRUD operations
- Static file serving for built client assets
- Development mode with Vite middleware integration via `server/vite.ts`

**Build Process:**
- Client built with Vite to `dist/public/`
- Server bundled with esbuild to `dist/index.cjs`
- Selective dependency bundling for optimized cold start performance

**Current State:**
- Basic user schema defined but not actively used
- No authentication/authorization implemented
- Course data currently mocked in `shared/courses.ts` (ready for database migration)
- Routes placeholder ready for API endpoint implementation

### Data Architecture

**Schema Definition:**
- Database schemas defined in `shared/schema.ts` using Drizzle ORM
- Type-safe schema validation with Zod via drizzle-zod
- PostgreSQL dialect configuration in `drizzle.config.ts`

**Current Data Model:**
- **Users table:** Basic structure with id, username, password (not actively used)
- **Course data:** Mock data structure includes comprehensive fields (id, slug, title, category, duration, students, rating, description, price, level, objectives, modules, instructor, testimonials, FAQs)

**Planned Database:**
- PostgreSQL via Neon serverless driver
- Migration system configured via Drizzle Kit
- Schema shared between client and server for type consistency

## External Dependencies

### Third-Party Services

**Database:**
- Neon Serverless PostgreSQL (configured but not yet provisioned)
- Connection via `@neondatabase/serverless` driver
- Environment variable: `DATABASE_URL` required for deployment

### UI/Component Libraries

**Core UI Framework:**
- Radix UI primitives for accessible, unstyled components
- shadcn/ui component system (New York style variant)
- Component aliases configured via `components.json`

**Animation & Interaction:**
- Framer Motion for declarative animations
- Embla Carousel for course sliders
- React Hook Form with Zod resolvers for form validation

### Development Tools

**Replit Integration:**
- Vite plugin for runtime error overlay
- Development banner plugin
- Cartographer plugin for code navigation
- Custom HMR path configuration

### Styling & Design

**CSS Framework:**
- Tailwind CSS with custom configuration
- PostCSS with Autoprefixer
- CSS custom properties for theming
- Design tokens defined in `client/src/index.css`

**Typography:**
- Google Fonts (Inter) preloaded in HTML
- System font fallbacks configured

### Session & State Management

**Client State:**
- TanStack React Query for server state caching and synchronization
- Custom query client configuration with fetch wrappers

**Server State:**
- Connect-pg-simple for PostgreSQL session storage (configured)
- In-memory storage fallback for development

### Build & Development

**Package Management:**
- npm with package-lock.json
- Selective bundling for production optimization

**TypeScript:**
- Strict mode enabled
- Path aliases for clean imports (`@/`, `@shared/`, `@assets/`)
- ESNext module system with bundler resolution