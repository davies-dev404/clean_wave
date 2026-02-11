# CleanWave Kenya - Laundry & Cleaning Services Web Application

## Overview

CleanWave Kenya is a modern, responsive web application for a laundry and professional cleaning services company operating in Kenya (Nairobi, Mombasa, Kisumu, Eldoret). The app allows customers to browse services, view pricing in Kenyan Shillings (KES), book cleaning/laundry services, and contact the company. It features a marketing-focused frontend with a lightweight backend for persisting bookings and contact inquiries to a PostgreSQL database.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript, bundled by Vite
- **Routing**: Uses `wouter` (lightweight alternative to React Router) with client-side routing
- **Styling**: Tailwind CSS with CSS custom properties for theming (blue/green clean palette). Fonts: DM Sans (body) and Outfit (headings)
- **UI Components**: shadcn/ui component library (new-york style) built on Radix UI primitives. Components live in `client/src/components/ui/`
- **Animations**: Framer Motion for scroll animations and page transitions
- **Forms**: react-hook-form with Zod validation via @hookform/resolvers. Form schemas are shared between client and server via `shared/schema.ts`
- **Data Fetching**: TanStack React Query for server state management. API calls go through a centralized `apiRequest` helper in `client/src/lib/queryClient.ts`
- **Icons**: Lucide React

### Pages
- **Home** (`/`) - Hero section, services preview, testimonials, service areas
- **Services** (`/services`) - Detailed service cards with pricing
- **Pricing** (`/pricing`) - Pricing tables for cleaning packages and laundry
- **Booking** (`/booking`) - Form to book a service (persisted to DB)
- **About** (`/about`) - Company story and values
- **Contact** (`/contact`) - Contact form (persisted to DB) and contact info
- **404** - Not found page

### Backend Architecture
- **Framework**: Express 5 on Node.js with TypeScript (run via `tsx`)
- **API Design**: Two POST endpoints defined in a shared route manifest (`shared/routes.ts`):
  - `POST /api/bookings` - Creates a new service booking
  - `POST /api/contact` - Creates a new contact inquiry
- **Validation**: Zod schemas generated from Drizzle table definitions via `drizzle-zod`. Validation happens server-side with proper error responses
- **Storage Layer**: `server/storage.ts` provides a `DatabaseStorage` class implementing `IStorage` interface, using Drizzle ORM to interact with PostgreSQL

### Shared Code (`shared/` directory)
- **`schema.ts`** - Drizzle ORM table definitions and Zod insert schemas. This is the single source of truth for both database structure and validation
- **`routes.ts`** - API route manifest with paths, methods, input schemas, and response types. Used by both frontend and backend for type safety

### Database
- **Database**: PostgreSQL (required, referenced via `DATABASE_URL` environment variable)
- **ORM**: Drizzle ORM with `drizzle-kit` for migrations
- **Schema push**: Run `npm run db:push` to sync schema to database
- **Tables**:
  - `bookings` - id, full_name, phone_number, location, service_type, date, size_or_weight, instructions, created_at
  - `contact_inquiries` - id, name, email, message, created_at

### Build & Dev
- **Development**: `npm run dev` runs the Express server with Vite middleware for HMR
- **Production Build**: `npm run build` runs a custom build script (`script/build.ts`) that builds the Vite frontend and bundles the server with esbuild
- **Production Start**: `npm start` serves the built app from `dist/`
- **Path Aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`

### Key Design Decisions
1. **Shared schema between frontend and backend** - Drizzle schemas generate Zod validators used on both sides, ensuring type safety end-to-end
2. **Route manifest pattern** - API routes are defined declaratively in `shared/routes.ts` rather than being hardcoded strings scattered across the codebase
3. **No authentication** - This is a public-facing marketing site with simple form submissions; no auth is needed
4. **Mobile-first responsive design** - Tailwind breakpoints used throughout, with a `useIsMobile` hook for programmatic responsiveness

## External Dependencies

### Required Services
- **PostgreSQL Database** - Required for storing bookings and contact inquiries. Must be provisioned and `DATABASE_URL` environment variable set
- **WhatsApp Integration** - Floating WhatsApp button links to `wa.me/254700000000` (direct link, no API integration)

### Key NPM Packages
- `express` v5 - HTTP server
- `drizzle-orm` + `drizzle-kit` - Database ORM and migration tooling
- `drizzle-zod` - Auto-generates Zod schemas from Drizzle table definitions
- `react` + `vite` - Frontend framework and bundler
- `@tanstack/react-query` - Server state management
- `framer-motion` - Animations
- `wouter` - Client-side routing
- `react-hook-form` + `@hookform/resolvers` - Form handling
- `zod` - Schema validation
- `lucide-react` - Icon library
- `connect-pg-simple` - PostgreSQL session store (available but not actively used for sessions currently)
- `tailwindcss` - Utility-first CSS framework
- Radix UI primitives - Accessible UI component foundations (via shadcn/ui)

### External Assets
- Google Fonts (DM Sans, Outfit)
- Pixabay images used for hero and about page backgrounds