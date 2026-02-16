# Travel Website Project: Technology Research Findings
## Korean Domestic + International Travel | Next.js + React | Map-Based UI
### Research Date: 2026-02-14

---

## 1. Map Libraries for React/Next.js

### Comparison Table

| Feature | react-leaflet | react-map-gl (Mapbox) | @vis.gl/react-google-maps | Kakao Maps SDK |
|---|---|---|---|---|
| **Pricing** | 100% free (OSS, BSD-2) | Free: ~50K map loads/mo, then $5/1K loads | $200 free credit/mo, then pay-per-use | Free for personal use; 10 KRW/call for commercial (discounted to 80% off through Dec 2026) |
| **API Key Required** | No (with OSS tiles like OpenStreetMap) | Yes | Yes | Yes (Kakao Developers account) |
| **Bundle Size** | Lightweight | ~213 KB | Medium | Medium |
| **Markers** | Yes (+ custom icons) | Yes (+ custom icons) | Yes | Yes |
| **Clustering** | Via plugin (leaflet.markercluster) | Via Supercluster | Built-in | Via plugin |
| **Route Drawing** | Via plugin (leaflet-routing-machine) | Built-in (Directions API, extra cost) | Built-in (Directions API, extra cost) | Built-in (free) |
| **Korean Map Quality** | Decent (OpenStreetMap data) | Good | Excellent (best POI data) | Excellent (best for Korean domestic, Naver-level detail) |
| **Korean Address/POI** | Limited | Good | Best international coverage | Best Korean domestic coverage (road-name addresses, local businesses) |
| **3D/WebGL** | No | Yes | Yes | No |
| **Offline/Vector Tiles** | Limited | Yes | Yes | No |
| **Weekly npm Downloads** | ~960K | ~960K | ~310K | ~15K |
| **Next.js Compatibility** | Good (needs dynamic import, no SSR) | Good (needs dynamic import) | Good | Good (use Next.js Script component) |
| **Learning Curve** | Low | Medium | Medium | Low-Medium (Korean docs mainly) |

### Analysis

**react-leaflet** is the best starting point for a hobby project:
- Zero cost, no API key needed, no usage limits
- Lightweight and simple API
- Huge plugin ecosystem (routing, clustering, heatmaps, etc.)
- Drawback: OpenStreetMap's Korean data is decent but not as detailed as Kakao/Google for local Korean businesses and POIs

**Kakao Maps SDK** (react-kakao-maps-sdk) is essential for Korean domestic travel:
- Best Korean address system support (road-name addresses, jibeon addresses)
- Most accurate Korean POI data (restaurants, cafes, tourist spots)
- Free for personal/non-commercial use
- Library: `react-kakao-maps-sdk` with `useKakaoLoader` hook for Next.js
- Drawback: Only covers Korea; not useful for international destinations

**react-map-gl (Mapbox)** is the premium option:
- Best visual quality and customization (vector tiles, 3D terrain, custom styles)
- 50K free map loads/month is generous for a hobby project
- Excellent developer experience
- Drawback: Costs kick in at scale; requires API key

**@vis.gl/react-google-maps** is powerful but expensive:
- Best global POI data
- $200/month free credit covers ~28,000 map loads
- Drawback: Most expensive option at scale; overkill for a hobby project

### RECOMMENDATION
**Use a dual-map strategy:**
1. **Kakao Maps** for Korean domestic travel pages (best Korean POI, addresses, routing)
2. **react-leaflet** (OpenStreetMap) for international travel pages (free, no limits)
3. Consider upgrading international maps to **Mapbox** later if you need prettier visuals

---

## 2. Next.js 15 (App Router) Best Practices (2025-2026)

### Recommended Project Structure

```
src/
├── app/                          # App Router (routes)
│   ├── (auth)/                   # Route group: auth pages
│   │   ├── login/page.tsx
│   │   └── register/page.tsx
│   ├── (main)/                   # Route group: main app
│   │   ├── layout.tsx            # Shared layout with nav
│   │   ├── page.tsx              # Home/landing
│   │   ├── korea/                # Korean travel
│   │   │   ├── page.tsx
│   │   │   └── [id]/page.tsx
│   │   ├── international/        # International travel
│   │   │   ├── page.tsx
│   │   │   └── [id]/page.tsx
│   │   ├── community/            # Community features
│   │   │   └── page.tsx
│   │   └── profile/
│   │       └── page.tsx
│   ├── api/                      # API routes (Route Handlers)
│   │   └── ...
│   ├── layout.tsx                # Root layout
│   └── globals.css
├── components/
│   ├── ui/                       # shadcn/ui components
│   ├── maps/                     # Map components
│   │   ├── KakaoMap.tsx          # Client Component
│   │   └── LeafletMap.tsx        # Client Component
│   ├── layout/                   # Header, Footer, Sidebar
│   └── features/                 # Feature-specific components
├── lib/
│   ├── db/                       # Database client & schema
│   ├── auth/                     # Auth configuration
│   ├── utils.ts                  # Utility functions
│   └── constants.ts
├── hooks/                        # Custom React hooks
├── types/                        # TypeScript type definitions
├── actions/                      # Server Actions
└── middleware.ts                 # Auth middleware, etc.
```

### Key App Router Best Practices

1. **Server Components by default** - Only add `"use client"` when you need interactivity (maps, forms, state). Map components MUST be client components.
2. **Route Groups** `(groupName)` - Organize routes without affecting URLs
3. **Server Actions** - Use for form submissions and data mutations instead of API routes
4. **Streaming & Suspense** - Wrap slow components in `<Suspense>` with fallback UI
5. **Dynamic imports** - Use `next/dynamic` with `ssr: false` for map libraries
6. **Parallel routes & intercepting routes** - For modals and complex layouts
7. **Metadata API** - Use `generateMetadata()` for SEO on each page

### Recommended Full-Stack Package Stack

| Category | Recommendation | Why |
|---|---|---|
| **Framework** | Next.js 15 (App Router) | Latest features, RSC, Server Actions |
| **Language** | TypeScript | Type safety, better DX |
| **Auth** | **Auth.js (NextAuth v5)** or **Supabase Auth** | Free, well-documented. Auth.js if using your own DB; Supabase Auth if using Supabase |
| **Database** | **Supabase** (PostgreSQL) | Free tier, built-in auth, real-time, storage - all-in-one |
| **ORM** | **Drizzle ORM** | Lightweight (~7KB), zero code generation, type-safe, SQL-like API, fast cold starts on Vercel |
| **Client State** | **Zustand** | Minimal boilerplate, ~40% of new React projects use it |
| **Server State** | **TanStack Query v5** | Caching, background refetching, optimistic updates |
| **Styling** | **Tailwind CSS + shadcn/ui** | See Section 4 |
| **Validation** | **Zod** | Schema validation for forms and API inputs, integrates with Server Actions |
| **File Upload** | **Supabase Storage** or **UploadThing** | Supabase Storage included free; UploadThing has a generous free tier |

### Alternative Auth Option: Better Auth
Better Auth is a newer TypeScript-first auth library gaining traction in 2025-2026. Worth watching but Auth.js has a larger community and more documentation.

---

## 3. Database Options for a Hobby Travel Project

### Comparison Table

| Feature | Supabase | Neon | Firebase | PlanetScale |
|---|---|---|---|---|
| **Database Type** | PostgreSQL | PostgreSQL | NoSQL (Firestore) + Realtime DB | MySQL (Vitess) |
| **Free Tier Storage** | 500 MB database + 1 GB file storage | 0.5 GB per project (5 GB aggregate across 10 projects) | 1 GB Firestore + 10 GB Realtime DB | **No free tier** (removed 2024) |
| **Free Tier Compute** | Unlimited API requests | 100 CU-hours/month (~400 hrs at 0.25 CU) | 50K reads/day, 20K writes/day | N/A |
| **Free Tier Auth** | 50,000 MAU | 60,000 MAU (via Neon Auth) | Unlimited auth users | N/A |
| **Free Projects** | 2 projects | 20 projects | Unlimited (Spark plan) | N/A |
| **Real-time** | Built-in (Postgres changes) | No built-in | Built-in (excellent) | No |
| **Auth Built-in** | Yes (email, OAuth, magic link) | Recently added (Neon Auth) | Yes (comprehensive) | No |
| **File Storage** | Yes (1 GB free) | No | Yes (5 GB free) | No |
| **Edge Functions** | Yes (500K invocations/mo free) | No | Yes (Cloud Functions) | No |
| **Auto-pause** | Yes (7 days inactive on free) | Yes (5 min idle, scale-to-zero) | No | N/A |
| **ORM Compatibility** | Drizzle, Prisma, any SQL ORM | Drizzle, Prisma, any SQL ORM | Firebase SDK only | Drizzle, Prisma |
| **Branching** | No (on free tier) | Yes (great for dev/staging) | No | Yes |

### Analysis

**Supabase** is the clear winner for this project:
- All-in-one: Database + Auth + Storage + Real-time + Edge Functions
- PostgreSQL means standard SQL, great ORM support, easy to migrate later
- Built-in real-time subscriptions (perfect for community features)
- Row Level Security (RLS) for fine-grained access control
- Dashboard with table editor, SQL editor, and logs
- Generous free tier covers a hobby project easily
- Caveat: Projects pause after 7 days of inactivity on free tier (just ping it periodically or use a cron)

**Neon** is the runner-up:
- Generous free tier with scale-to-zero (great for intermittent usage)
- Database branching is excellent for development workflows
- Pure PostgreSQL with serverless scaling
- Caveat: Database-only - you need separate services for auth, storage, real-time

**Firebase** is viable but has drawbacks:
- NoSQL data model is harder to query for relational travel data
- Vendor lock-in (proprietary SDK, hard to migrate)
- Real-time is excellent for chat/collaboration features
- Good for mobile-first apps but less ideal for Next.js web apps

**PlanetScale**: Not recommended (no free tier since 2024)

### RECOMMENDATION
**Use Supabase** as your primary backend. It gives you everything in one place:
- PostgreSQL database for travel data (places, itineraries, reviews)
- Supabase Auth for user authentication
- Supabase Storage for user-uploaded travel photos
- Real-time subscriptions for community features (live comments, collaborative trip planning)
- Use **Drizzle ORM** to interact with the database for type-safe queries

---

## 4. Design/UI Libraries

### Comparison Table

| Feature | Tailwind CSS + shadcn/ui | Chakra UI | Material UI (MUI) |
|---|---|---|---|
| **Initial JS Bundle** | ~2.3 KB | ~47 KB | ~92 KB |
| **Styling Approach** | Utility-first CSS + copy-paste components | CSS-in-JS (Emotion) | CSS-in-JS (Emotion) |
| **Customization** | Full control (you own the code) | Theme-based | Theme-based |
| **Component Count** | 50+ (growing) | 60+ | 100+ |
| **Design Language** | Neutral/minimal | Clean/modern | Google Material Design |
| **Dark Mode** | Built-in (CSS variables) | Built-in | Built-in |
| **Accessibility** | Excellent (Radix UI primitives) | Excellent | Excellent |
| **Server Components** | Compatible (no runtime CSS-in-JS) | Partial (requires client) | Partial (requires client) |
| **Installation** | CLI copies code into your project | npm package | npm package |
| **Community (2025-2026)** | Fastest growing, dominant in new projects | Stable, strong | Largest, enterprise-focused |
| **Learning Curve** | Medium (need to learn Tailwind) | Low | Low-Medium |
| **Tree-Shaking** | Excellent (only include what you use) | Good | Moderate |

### Analysis

**Tailwind CSS + shadcn/ui** is the strongest choice for this project:
- **Smallest bundle size** by far (~2.3 KB vs ~92 KB for MUI)
- **Full customization**: Components are copied into your project, so you can modify anything
- **Server Component compatible**: No CSS-in-JS runtime, works perfectly with Next.js App Router
- **Beautiful defaults**: Clean, modern design that works well for travel content
- **Growing ecosystem**: shadcn/ui has become the de facto standard for new Next.js projects
- **Easy to customize for travel**: Can create custom map controls, cards for destinations, etc.
- Radix UI primitives underneath provide excellent accessibility

**Chakra UI** is a solid alternative:
- Easier learning curve if you're not familiar with Tailwind
- Good TypeScript support
- Drawback: CSS-in-JS means less optimal for Server Components

**Material UI (MUI)** is overkill for this project:
- Largest bundle size
- Material Design aesthetic may feel "enterprise-y" for a travel site
- Best for large teams and enterprise apps
- Drawback: Heaviest bundle, Google Material Design look may not match a travel aesthetic

### RECOMMENDATION
**Use Tailwind CSS + shadcn/ui.** It's the modern standard for Next.js projects:
- Install: `npx shadcn@latest init`
- Add components as needed: `npx shadcn@latest add button card dialog`
- Supplement with:
  - **Framer Motion** for map/page transitions and animations
  - **Lucide React** for icons (already included with shadcn/ui)
  - **Embla Carousel** for photo galleries (shadcn/ui carousel uses this)

---

## 5. Similar Travel Sites for Reference

### Map-Based Travel Platforms

| Platform | Key Features | UX Patterns Worth Studying |
|---|---|---|
| **Wanderlog** | Free itinerary builder, collaborative trip planning, map with color-coded markers, AI suggestions | Split-panel: list on left + map on right; drag-and-drop day planning; auto-generated routes on map |
| **KAYAK Explore** | Budget-based destination discovery, price overlay on world map, real-time price updates | Map as primary navigation; price bubbles on destinations; filter by budget/dates/duration |
| **Google Travel** | Trip planning, saved places, AI-powered recommendations, hotel/flight integration | Clean card-based UI; "Saved places" that appear on map; integrated booking |
| **Roadtrippers** | Road trip planning, route optimization, POI discovery along routes | Route-first design; POI cards along route; distance/time estimates between stops |
| **Tripomatic (Sygic Travel)** | Day-by-day itinerary, 50M+ places database, walking route optimization | Day tabs + map view; categorized POI (sights, food, shopping); printable itinerary |
| **Mapify** | Create and share personal travel maps, discover others' trips | User-generated maps as social content; photo pins on map; travel stories |
| **Airbnb** | Map-based property search, price clusters on map | Price markers on map; list+map split view; filter panel; responsive map zoom = results update |

### Korean-Specific Travel Platforms

| Platform | Key Features | Notes |
|---|---|---|
| **MyRealTrip (마이리얼트립)** | Korean domestic/international tours, activities, tickets | Focus on bookable experiences; Korean language UX |
| **Naver Map (네이버 지도)** | Most popular Korean map, comprehensive POI, transit routing | Best reference for Korean map UX; road-view; transit integration |
| **Kakao Map (카카오맵)** | Korean map with strong search, transit, real-time traffic | Competitor to Naver; excellent API for developers |
| **TripAdvisor Korea** | Reviews-heavy, map overlay of attractions | User review patterns; ranking systems |

### Key UX Patterns to Implement

1. **Split-Panel Layout (List + Map)**
   - Left panel: scrollable list of places/itinerary
   - Right panel: interactive map with markers
   - Clicking a list item highlights/pans to marker and vice versa
   - Responsive: stack vertically on mobile, toggle between list/map views

2. **Map Interaction Patterns**
   - Clustered markers that expand on zoom
   - Custom marker icons by category (food, hotel, attraction, etc.)
   - Info popup/card on marker click (photo, name, rating, quick-save button)
   - "Search this area" button when user pans the map

3. **Itinerary Builder**
   - Day-by-day timeline view
   - Drag-and-drop reordering
   - Auto-route drawing between stops
   - Time/distance estimates between stops

4. **Community Features**
   - User-submitted travel logs with map traces
   - Photo pins on the map
   - Comments and likes on places/itineraries
   - "Fork" someone else's itinerary

5. **Mobile-First Considerations**
   - Bottom sheet pattern (map full-screen with draggable bottom panel)
   - Swipeable place cards over the map
   - Touch-optimized map controls

---

## 6. Final Recommended Stack Summary

```
Framework:        Next.js 15 (App Router) + TypeScript
Styling:          Tailwind CSS + shadcn/ui
Maps (Korea):     Kakao Maps (react-kakao-maps-sdk)
Maps (World):     react-leaflet (OpenStreetMap) — free, no limits
Database:         Supabase (PostgreSQL)
ORM:              Drizzle ORM
Auth:             Supabase Auth (built-in)
Storage:          Supabase Storage (travel photos)
Client State:     Zustand
Server State:     TanStack Query v5
Validation:       Zod
Animation:        Framer Motion
Icons:            Lucide React
Deployment:       Vercel (free hobby tier)
```

### Estimated Monthly Cost: $0
All recommended tools have free tiers sufficient for a hobby/side project.

### Getting Started Commands

```bash
# Create Next.js project
npx create-next-app@latest travel-app --typescript --tailwind --eslint --app --src-dir

# Install core dependencies
npm install zustand @tanstack/react-query zod drizzle-orm framer-motion

# Install map libraries
npm install react-leaflet leaflet react-kakao-maps-sdk
npm install -D @types/leaflet

# Initialize shadcn/ui
npx shadcn@latest init

# Install Supabase client
npm install @supabase/supabase-js

# Install Drizzle tools
npm install drizzle-kit -D
```

---

## Sources

### Map Libraries
- [React Map Library Comparison - LogRocket](https://blog.logrocket.com/react-map-library-comparison/)
- [Leaflet or Mapbox - Visarsoft](https://medium.com/visarsoft-blog/leaflet-or-mapbox-choosing-the-right-tool-for-interactive-maps-53dea7cc3c40)
- [react-kakao-maps-sdk Next.js docs](https://react-kakao-maps-sdk.jaeseokim.dev/docs/setup/next/)
- [react-kakao-maps-sdk GitHub](https://github.com/JaeSeoKim/react-kakao-maps-sdk)
- [Free Maps for React Apps](https://brev.al/blog/articles/free-maps-react-alternatives)
- [Mapbox Pricing](https://www.mapbox.com/pricing)
- [Mapbox GL JS Pricing Guide](https://docs.mapbox.com/mapbox-gl-js/guides/pricing/)
- [@vis.gl/react-google-maps](https://visgl.github.io/react-google-maps/)
- [npm trends: react-leaflet vs react-map-gl](https://npmtrends.com/react-leaflet-vs-react-map-gl-vs-react-mapbox-gl)

### Next.js 15 Best Practices
- [Next.js App Router Best Practices 2025 - Medium](https://medium.com/better-dev-nextjs-react/inside-the-app-router-best-practices-for-next-js-file-and-directory-structure-2025-edition-ed6bc14a8da3)
- [Next.js Official Project Structure](https://nextjs.org/docs/app/getting-started/project-structure)
- [Next.js Performance & Architecture - RaftLabs](https://www.raftlabs.com/blog/building-with-next-js-best-practices-and-benefits-for-performance-first-teams/)
- [Ultimate Guide to Next.js 15 Structure - Wisp](https://www.wisp.blog/blog/the-ultimate-guide-to-organizing-your-nextjs-15-project-structure)
- [Modern Full Stack with Next.js 15 - SoftwareMill](https://softwaremill.com/modern-full-stack-application-architecture-using-next-js-15/)
- [Battle-Tested NextJS Project Structure 2025](https://medium.com/@burpdeepak96/the-battle-tested-nextjs-project-structure-i-use-in-2025-f84c4eb5f426)

### Database
- [Supabase vs PlanetScale vs Neon - GetSabo](https://getsabo.com/blog/supabase-vs-neon)
- [Supabase Review 2026](https://hackceleration.com/supabase-review/)
- [Supabase Pricing 2026 Breakdown](https://www.metacto.com/blogs/the-true-cost-of-supabase-a-comprehensive-guide-to-pricing-integration-and-maintenance)
- [Neon Plans & Pricing](https://neon.com/docs/introduction/plans)
- [Neon Pricing 2026 Breakdown](https://vela.simplyblock.io/articles/neon-serverless-postgres-pricing-2026/)
- [Neon vs Supabase - Bytebase](https://www.bytebase.com/blog/neon-vs-supabase/)
- [Best Database for Startups 2026 - MakerKit](https://makerkit.dev/blog/tutorials/best-database-software-startups)

### ORM
- [Prisma vs Drizzle 2026 - DesignRevision](https://designrevision.com/blog/prisma-vs-drizzle)
- [Drizzle vs Prisma Practical Comparison - MakerKit](https://makerkit.dev/blog/tutorials/drizzle-vs-prisma)
- [2025 TypeScript ORM Battle - Level Up Coding](https://levelup.gitconnected.com/the-2025-typescript-orm-battle-prisma-vs-drizzle-vs-kysely-007ffdfded67)

### UI Libraries
- [shadcn/ui vs Chakra vs MUI 2025](https://asepalazhari.com/blog/shadcn-ui-vs-chakra-ui-vs-material-ui-component-battle-2025)
- [Best React UI Library 2026 - latestLY](https://www.latestly.in/post/best-react-ui-library-2026-mui-vs-chakra-vs-shadcn)
- [React UI Libs 2025 - Makers' Den](https://makersden.io/blog/react-ui-libs-2025-comparing-shadcn-radix-mantine-mui-chakra)
- [Why shadcn Over MUI/Chakra - Medium](https://medium.com/@joseph.goins/why-i-chose-shadcn-over-mui-chakra-for-my-saas-ui-ad3b1eeaa727)

### State Management
- [State Management 2025 - Medium](https://medium.com/@pooja.1502/state-management-in-2025-redux-toolkit-vs-zustand-vs-jotai-vs-tanstack-store-c888e7e6f784)
- [React State Management Trends 2025 - Makers' Den](https://makersden.io/blog/react-state-management-in-2025)
- [React Stack Patterns 2026](https://www.patterns.dev/react/react-2026/)
- [Zustand + TanStack Query](https://javascript.plainenglish.io/zustand-and-tanstack-query-the-dynamic-duo-that-simplified-my-react-state-management-e71b924efb90)

### Travel UX Reference
- [Map-Based Travel Sites - Travel Massive](https://www.travelmassive.com/posts/what-travel-websites-are-using-maps-754496606)
- [Interactive Map Design & UX - TravelTime](https://traveltime.com/blog/interactive-map-design-ux-mobile-desktop)
- [Map UI Patterns](https://www.mapuipatterns.com/)
- [Travel Site UX Best Practices - Baymard](https://baymard.com/blog/travel-site-ux-best-practices)
- [Wanderlog](https://wanderlog.com/)
- [Top Travel Apps 2026](https://tomsolotravels.com/blog/top-47-travel-apps-and-websites-of-2026-that-let-you-plan-and-book-trips-worldwide/)

---

## 7. AI-Powered Travel Planning Agent

### Research Date: 2026-02-14

---

### 7.1 AI Provider Comparison for a Hobby Travel Project

#### Pricing Comparison (per 1 million tokens, as of Feb 2026)

| Provider / Model | Input Cost | Output Cost | Context Window | Best For |
|---|---|---|---|---|
| **Claude Haiku 4.5** | $1.00 | $5.00 | 200K | Simple Q&A, routing, classification |
| **Claude Sonnet 4.5** | $3.00 | $15.00 | 200K | Balanced quality/cost for planning |
| **Claude Opus 4.5 / 4.6** | $5.00 | $25.00 | 1M | Complex multi-step reasoning |
| **GPT-4o** | $2.50 | $10.00 | 128K | General purpose, good tool calling |
| **GPT-4o mini** | $0.15 | $0.60 | 128K | Cheapest option, simple tasks |
| **Gemini 2.5 Flash** | $0.15 | $0.60 | 1M | Ultra-cheap, long context |
| **Gemini 2.5 Pro** | $1.25 | $10.00 | 1M | Good quality at lower cost |
| **Gemini 3 Pro Preview** | $2.00 | $12.00 | 200K+ | Latest Google model |

#### Provider Feature Comparison

| Feature | Claude (Anthropic) | GPT-4o (OpenAI) | Gemini (Google) |
|---|---|---|---|
| **Tool Calling** | Excellent (native, input examples) | Excellent (function calling) | Good |
| **Streaming** | Yes | Yes | Yes |
| **Structured Output** | Yes (via Vercel AI SDK) | Yes (JSON mode, structured outputs) | Yes (but occasionally malformed) |
| **Long Context** | Up to 1M tokens (Opus 4.6) | 128K tokens | Up to 1M tokens |
| **Prompt Caching** | Yes (90% input cost reduction) | Yes (automatic) | Limited |
| **Batch API** | Yes (50% discount) | Yes (50% discount) | Yes (50% discount) |
| **Vercel AI SDK Support** | First-class (@ai-sdk/anthropic) | First-class (@ai-sdk/openai) | First-class (@ai-sdk/google) |
| **Quality for Travel Planning** | Best natural language, nuanced | Very good, reliable | Good, occasionally inconsistent |

#### RECOMMENDATION: Model Strategy for a Hobby Project

Use a **tiered model approach** to minimize costs:

1. **Simple tasks** (greeting, FAQ, clarifying questions): **Gemini 2.5 Flash** ($0.15/$0.60) or **GPT-4o mini** ($0.15/$0.60)
2. **Core planning** (itinerary generation, destination suggestions): **Claude Sonnet 4.5** ($3/$15) or **Gemini 2.5 Pro** ($1.25/$10)
3. **Complex reasoning** (multi-day optimization, budget analysis): **Claude Sonnet 4.5** ($3/$15) -- Opus is overkill for travel planning

The Vercel AI SDK makes switching between providers trivial (just change the model string), so you can start with the cheapest option and upgrade as needed.

---

### 7.2 Vercel AI SDK Integration (ai package)

#### Overview

The Vercel AI SDK (package name: `ai`) is a free, open-source TypeScript toolkit for building AI-powered applications. As of v6.0+ (late 2025), it provides:
- **AI SDK Core**: Unified interface for text generation, structured output, tool calling, and agents
- **AI SDK UI**: Framework-agnostic hooks (`useChat`, `useCompletion`) for building chat interfaces
- **Provider-agnostic**: Switch between Claude, GPT-4o, Gemini, etc. by changing one string

#### Installation

```bash
# Core packages
npm install ai @ai-sdk/react zod

# Provider-specific (choose one or more)
npm install @ai-sdk/anthropic    # For Claude
npm install @ai-sdk/openai       # For GPT-4o
npm install @ai-sdk/google       # For Gemini
```

#### Basic Chat Setup with Next.js App Router

**API Route** (`app/api/chat/route.ts`):

```typescript
import { streamText, UIMessage, convertToModelMessages, tool } from 'ai';
import { anthropic } from '@ai-sdk/anthropic';
import { z } from 'zod';

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: anthropic('claude-sonnet-4-5-20250514'),
    system: `You are a helpful Korean travel planning assistant.
You help users plan trips to destinations in Korea and internationally.
You can suggest destinations, create itineraries, recommend restaurants,
and estimate budgets. Always respond in the same language the user writes in.
When suggesting Korean destinations, use both Korean and English names.`,
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
```

**Client Component** (`app/chat/page.tsx`):

```typescript
'use client';

import { useChat } from '@ai-sdk/react';
import { useState } from 'react';

export default function TravelChat() {
  const [input, setInput] = useState('');
  const { messages, sendMessage, isLoading } = useChat();

  return (
    <div className="flex flex-col h-screen max-w-2xl mx-auto">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map(message => (
          <div key={message.id} className={`flex ${
            message.role === 'user' ? 'justify-end' : 'justify-start'
          }`}>
            <div className={`rounded-lg p-3 max-w-[80%] ${
              message.role === 'user'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100'
            }`}>
              {message.parts.map((part, i) => {
                if (part.type === 'text') {
                  return <p key={i}>{part.text}</p>;
                }
              })}
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={e => {
        e.preventDefault();
        sendMessage({ text: input });
        setInput('');
      }} className="p-4 border-t">
        <div className="flex gap-2">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="여행 계획을 도와드릴까요?"
            className="flex-1 rounded-lg border p-2"
            disabled={isLoading}
          />
          <button type="submit" disabled={isLoading}
            className="bg-blue-500 text-white rounded-lg px-4 py-2">
            전송
          </button>
        </div>
      </form>
    </div>
  );
}
```

#### How Streaming Works

```
User types message
  → useChat sends POST to /api/chat
    → streamText calls Claude API
      → Claude streams response tokens
        → Server sends Server-Sent Events (SSE)
          → useChat updates messages state in real-time
            → React re-renders with new text appearing incrementally
```

The `useChat` hook handles all the complexity: managing conversation history, sending messages, receiving streamed responses, and updating the UI. No manual WebSocket or SSE parsing needed.

#### System Prompt with Destination Context

To give the AI knowledge about your site's destinations, inject context into the system prompt:

```typescript
// app/api/chat/route.ts
import { db } from '@/lib/db';
import { destinations } from '@/lib/db/schema';

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  // Fetch destination data to give the AI context
  const popularDestinations = await db
    .select()
    .from(destinations)
    .limit(50);

  const destinationContext = popularDestinations
    .map(d => `- ${d.nameKo} (${d.name}): ${d.region}, ${d.category}`)
    .join('\n');

  const result = streamText({
    model: anthropic('claude-sonnet-4-5-20250514'),
    system: `You are a travel planning assistant for a Korean travel website.

Here are the destinations available on our platform:
${destinationContext}

When users ask about destinations, prefer suggesting ones from our platform.
Always provide the destination name in both Korean and English.`,
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
```

#### AI SDK v6 Key Changes (Late 2025)

Important changes from earlier versions:
- `generateObject` and `streamObject` are **deprecated**; use `generateText`/`streamText` with the `output` property instead
- New **Agent abstraction** (`ToolLoopAgent`) for building reusable agents
- `stopWhen: stepCountIs(N)` replaces `maxSteps` for multi-step tool calling
- `sendMessage` replaces `handleSubmit` in `useChat`
- Message parts use `part.type === 'text'` instead of `message.content`
- The **Vercel AI Gateway** is the default provider (use `gateway('anthropic/claude-sonnet-4.5')` syntax), but direct provider imports still work

---

### 7.3 Agent Architecture for Travel Planning

#### What Tools Should the Agent Have?

For a travel planning agent, define these tools that the AI can call:

```typescript
// lib/ai/tools.ts
import { tool } from 'ai';
import { z } from 'zod';

export const travelTools = {
  // 1. Search destinations from your database
  searchDestinations: tool({
    description: 'Search for travel destinations by region, category, or keyword. Use this when the user asks about where to go or wants destination suggestions.',
    inputSchema: z.object({
      query: z.string().describe('Search keyword'),
      region: z.string().optional().describe('Region filter (e.g., 제주, 강원도, Japan)'),
      category: z.string().optional().describe('Category: nature, culture, food, beach, mountain'),
      type: z.enum(['domestic', 'international']).optional(),
    }),
    execute: async ({ query, region, category, type }) => {
      // Query your Supabase database
      const results = await searchDestinationsFromDB({ query, region, category, type });
      return results;
    },
  }),

  // 2. Get weather for a destination
  getWeather: tool({
    description: 'Get current weather and forecast for a destination. Use when planning trip dates or packing.',
    inputSchema: z.object({
      location: z.string().describe('City or destination name'),
      dates: z.string().optional().describe('Travel dates (YYYY-MM-DD format)'),
    }),
    execute: async ({ location, dates }) => {
      // Call weather API (기상청 for domestic, OpenWeatherMap for international)
      const weather = await fetchWeatherData(location, dates);
      return weather;
    },
  }),

  // 3. Create a structured itinerary
  createItinerary: tool({
    description: 'Generate a structured day-by-day travel itinerary. Use when the user wants a complete trip plan.',
    inputSchema: z.object({
      destination: z.string().describe('Main destination'),
      days: z.number().describe('Number of days'),
      interests: z.array(z.string()).describe('User interests: culture, food, nature, shopping, etc.'),
      budget: z.enum(['budget', 'moderate', 'luxury']).optional(),
      travelers: z.number().optional().describe('Number of travelers'),
    }),
    execute: async ({ destination, days, interests, budget, travelers }) => {
      // Return structured data that can be rendered as itinerary cards
      // The AI fills this in based on its knowledge + destination data
      return {
        destination,
        days,
        budget,
        travelers,
        // The AI will generate the actual itinerary content
        generatedByTool: true,
      };
    },
  }),

  // 4. Estimate trip budget
  estimateBudget: tool({
    description: 'Calculate an estimated budget breakdown for a trip. Use when the user asks about costs.',
    inputSchema: z.object({
      destination: z.string(),
      days: z.number(),
      travelers: z.number().default(1),
      style: z.enum(['budget', 'moderate', 'luxury']).default('moderate'),
    }),
    execute: async ({ destination, days, travelers, style }) => {
      // Return structured budget data
      const budget = await calculateBudgetEstimate(destination, days, travelers, style);
      return budget;
    },
  }),

  // 5. Find restaurants
  searchRestaurants: tool({
    description: 'Search for restaurants near a destination. Use when the user asks for food recommendations.',
    inputSchema: z.object({
      location: z.string().describe('Area or destination'),
      cuisine: z.string().optional().describe('Cuisine type'),
      priceRange: z.enum(['cheap', 'moderate', 'expensive']).optional(),
    }),
    execute: async ({ location, cuisine, priceRange }) => {
      // Query TourAPI or your database for restaurants
      const restaurants = await searchRestaurantsFromDB({ location, cuisine, priceRange });
      return restaurants;
    },
  }),

  // 6. Get currency exchange rate
  getExchangeRate: tool({
    description: 'Get current currency exchange rate from KRW. Use for international destination budget planning.',
    inputSchema: z.object({
      currency: z.string().describe('Target currency code (e.g., USD, JPY, EUR)'),
    }),
    execute: async ({ currency }) => {
      const rate = await fetchExchangeRate('KRW', currency);
      return rate;
    },
  }),

  // 7. Save to planner
  addToPlanner: tool({
    description: 'Save a destination or activity to the user\'s trip planner. Use when the user wants to save a suggestion.',
    inputSchema: z.object({
      tripId: z.string().optional(),
      itemName: z.string(),
      itemType: z.enum(['destination', 'restaurant', 'activity', 'accommodation']),
      day: z.number().optional(),
      notes: z.string().optional(),
    }),
    execute: async ({ tripId, itemName, itemType, day, notes }) => {
      // Save to Supabase
      const saved = await saveToPlannerDB({ tripId, itemName, itemType, day, notes });
      return { success: true, message: `${itemName} added to your planner` };
    },
  }),
};
```

#### Agent Architecture with Multi-Step Tool Calling

```typescript
// app/api/chat/route.ts
import { streamText, UIMessage, convertToModelMessages, stepCountIs } from 'ai';
import { anthropic } from '@ai-sdk/anthropic';
import { travelTools } from '@/lib/ai/tools';

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: anthropic('claude-sonnet-4-5-20250514'),
    system: TRAVEL_AGENT_SYSTEM_PROMPT,
    messages: await convertToModelMessages(messages),
    tools: travelTools,
    // Allow up to 5 tool calls per response (e.g., search + weather + budget)
    stopWhen: stepCountIs(5),
    // Callback for each completed step
    onStepFinish({ text, toolCalls, toolResults, usage }) {
      // Log usage for cost tracking
      console.log('Step usage:', usage);
    },
  });

  return result.toUIMessageStreamResponse();
}
```

#### Agent Decision Flow

```
User: "부산 3일 여행 계획해줘" (Plan a 3-day Busan trip)

Step 1: AI decides to call searchDestinations({ query: "부산", type: "domestic" })
  → Returns: Busan attractions, beaches, temples from your DB

Step 2: AI decides to call getWeather({ location: "부산" })
  → Returns: Current weather and forecast

Step 3: AI decides to call estimateBudget({ destination: "부산", days: 3 })
  → Returns: Structured budget breakdown

Step 4: AI generates a comprehensive text response combining all tool results
  → Streams: Day-by-day itinerary with weather context and budget estimate

Total: 4 steps, AI autonomously decided which tools to call and in what order
```

#### Structured Output for Itineraries

Use the `output` property to get typed, structured responses alongside text:

```typescript
import { streamText, convertToModelMessages } from 'ai';
import { z } from 'zod';

const itinerarySchema = z.object({
  destination: z.string(),
  totalDays: z.number(),
  days: z.array(z.object({
    dayNumber: z.number(),
    theme: z.string(),
    activities: z.array(z.object({
      time: z.string(),
      name: z.string(),
      nameKo: z.string().optional(),
      description: z.string(),
      category: z.enum(['sightseeing', 'food', 'activity', 'transport', 'accommodation']),
      estimatedCost: z.number().optional(),
      duration: z.string().optional(),
      location: z.object({
        lat: z.number(),
        lng: z.number(),
      }).optional(),
    })),
  })),
  estimatedTotalCost: z.number().optional(),
  tips: z.array(z.string()).optional(),
});

const result = streamText({
  model: anthropic('claude-sonnet-4-5-20250514'),
  system: TRAVEL_AGENT_SYSTEM_PROMPT,
  messages: await convertToModelMessages(messages),
  output: itinerarySchema,  // AI SDK v6: structured output via streamText
});
```

#### Conversation Context Management

The `useChat` hook automatically maintains conversation history. For longer conversations, manage context size:

```typescript
// Option 1: Use Anthropic's built-in context management
const result = streamText({
  model: anthropic('claude-sonnet-4-5-20250514'),
  messages: await convertToModelMessages(messages),
  providerOptions: {
    anthropic: {
      contextManagement: {
        edits: [{
          // Automatically summarize old tool results when context gets large
          type: 'clear_tool_uses_20250919',
          trigger: { type: 'input_tokens', value: 50000 },
          keep: { type: 'tool_uses', value: 5 },
        }]
      }
    }
  },
});

// Option 2: Manual context window management
// Trim older messages when conversation gets long
function trimMessages(messages: UIMessage[], maxTokenEstimate: number = 30000): UIMessage[] {
  // Keep system context + last N messages
  const estimatedTokens = messages.reduce((sum, m) => {
    const text = m.parts?.map(p => p.type === 'text' ? p.text : '').join('') || '';
    return sum + text.length / 4; // Rough estimate: 1 token ≈ 4 chars
  }, 0);

  if (estimatedTokens > maxTokenEstimate) {
    // Keep first message (context) and last 10 messages
    return [messages[0], ...messages.slice(-10)];
  }
  return messages;
}
```

---

### 7.4 Cost Management for a Hobby Project

#### Estimated Cost Per Conversation

| Scenario | Model | Est. Tokens | Est. Cost |
|---|---|---|---|
| Simple Q&A (5 turns) | Gemini 2.5 Flash | ~5,000 | ~$0.003 |
| Simple Q&A (5 turns) | Claude Haiku 4.5 | ~5,000 | ~$0.03 |
| Destination suggestion (10 turns) | Claude Sonnet 4.5 | ~15,000 | ~$0.27 |
| Full itinerary planning (15 turns + tools) | Claude Sonnet 4.5 | ~25,000 | ~$0.45 |
| Full itinerary planning (15 turns + tools) | Gemini 2.5 Pro | ~25,000 | ~$0.28 |
| Complex multi-city planning (20+ turns) | Claude Sonnet 4.5 | ~40,000 | ~$0.72 |

**Rule of thumb**: A typical travel planning conversation costs $0.10 - $0.50 with Claude Sonnet 4.5.

At 100 conversations/month, expect **$10-50/month** with Claude Sonnet. With Gemini 2.5 Flash, the same volume would cost **$0.30-3/month**.

#### Cost Reduction Strategies

**1. Model Routing (most impactful)**

Use a cheap model for simple tasks, expensive model only when needed:

```typescript
// app/api/chat/route.ts
import { anthropic } from '@ai-sdk/anthropic';
import { google } from '@ai-sdk/google';

function selectModel(messages: UIMessage[]) {
  const lastMessage = messages[messages.length - 1];
  const text = lastMessage.parts?.find(p => p.type === 'text')?.text || '';

  // Use cheap model for simple greetings, clarifications, FAQ
  const simplePatterns = /^(안녕|hello|hi|감사|thanks|네|yes|아니|no|뭐|what)/i;
  if (simplePatterns.test(text) || text.length < 20) {
    return google('gemini-2.5-flash');
  }

  // Use capable model for actual planning
  return anthropic('claude-sonnet-4-5-20250514');
}
```

**2. Prompt Caching (up to 90% input cost reduction)**

Cache your system prompt and tool definitions:

```typescript
const result = streamText({
  model: anthropic('claude-sonnet-4-5-20250514'),
  messages: [
    {
      role: 'system',
      content: TRAVEL_AGENT_SYSTEM_PROMPT, // This large prompt gets cached
      providerOptions: {
        anthropic: {
          cacheControl: { type: 'ephemeral', ttl: '1h' },
        },
      },
    },
    ...await convertToModelMessages(messages),
  ],
});
```

With caching: cache reads cost only **10%** of normal input token price. For a system prompt of ~2,000 tokens, subsequent calls within the TTL window pay only ~$0.0003 instead of $0.003 for those tokens.

**3. Rate Limiting**

```typescript
// middleware.ts or in the API route
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, '1h'), // 10 requests per hour per user
  analytics: true,
});

// In your API route:
export async function POST(req: Request) {
  const ip = req.headers.get('x-forwarded-for') ?? 'anonymous';
  const { success, limit, remaining } = await ratelimit.limit(ip);

  if (!success) {
    return new Response('Rate limit exceeded. Please try again later.', {
      status: 429,
      headers: { 'X-RateLimit-Limit': limit.toString(), 'X-RateLimit-Remaining': remaining.toString() },
    });
  }
  // ... proceed with AI call
}
```

For a hobby project without Upstash, a simpler in-memory approach:

```typescript
// lib/rate-limit.ts
const requests = new Map<string, number[]>();

export function checkRateLimit(userId: string, maxRequests = 20, windowMs = 3600000): boolean {
  const now = Date.now();
  const userRequests = requests.get(userId) || [];
  const recentRequests = userRequests.filter(t => now - t < windowMs);

  if (recentRequests.length >= maxRequests) return false;

  recentRequests.push(now);
  requests.set(userId, recentRequests);
  return true;
}
```

**4. Response Caching for Common Queries**

Cache popular destination queries to avoid repeated AI calls:

```typescript
// lib/ai/cache.ts
const responseCache = new Map<string, { response: string; timestamp: number }>();
const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours

export function getCachedResponse(query: string): string | null {
  const normalized = query.toLowerCase().trim();
  const cached = responseCache.get(normalized);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.response;
  }
  return null;
}

// Common queries like "제주도 추천" or "서울 맛집" can be pre-cached
```

**5. Token Budget per Request**

Limit the maximum response length:

```typescript
const result = streamText({
  model: anthropic('claude-sonnet-4-5-20250514'),
  maxTokens: 2000,  // Cap output at ~1,500 words
  messages: await convertToModelMessages(messages),
});
```

**6. Monthly Budget Monitoring**

```typescript
// lib/ai/usage-tracker.ts
let monthlyTokensUsed = { input: 0, output: 0 };
const MONTHLY_BUDGET_LIMIT = 5.00; // $5/month budget

function estimateCost(inputTokens: number, outputTokens: number): number {
  // Claude Sonnet 4.5 pricing
  return (inputTokens / 1_000_000) * 3 + (outputTokens / 1_000_000) * 15;
}

// In onStepFinish callback:
onStepFinish({ usage }) {
  monthlyTokensUsed.input += usage.promptTokens;
  monthlyTokensUsed.output += usage.completionTokens;

  const cost = estimateCost(monthlyTokensUsed.input, monthlyTokensUsed.output);
  if (cost > MONTHLY_BUDGET_LIMIT) {
    // Switch to cheaper model or disable AI chat
    console.warn(`Monthly AI budget exceeded: $${cost.toFixed(2)}`);
  }
}
```

#### Cost Summary for Hobby Project

| Strategy | Expected Savings |
|---|---|
| Model routing (cheap model for simple tasks) | 40-60% |
| Prompt caching (system prompt + tools) | 20-40% on input tokens |
| Rate limiting (10-20 req/hr per user) | Prevents runaway costs |
| Response caching (popular queries) | 10-30% |
| Max token limits | Prevents unexpectedly long responses |

**Realistic monthly cost for a hobby project**: $2-10/month with moderate usage (50-200 conversations).

---

### 7.5 UI Patterns for AI Chat in a Travel App

#### Chat Interface Approaches

**Option A: Sidebar Chat Panel (Recommended for MVP)**

The chat slides in from the right side, overlaying the map. This maintains the map-first design philosophy while providing easy access to the AI assistant.

```
┌──────────────────────────────────────────────────────────┐
│  [Map View - Full Width]                    [💬 AI Chat] │
│                                              ┌──────────┐│
│    Map with destination markers              │ Chat     ││
│                                              │ Panel    ││
│                                              │          ││
│    ① 성산일출봉                               │ AI: 제주 ││
│    ② 협재해수욕장                             │ 여행을   ││
│                                              │ 도와     ││
│                                              │ 드릴까요? ││
│                                              │          ││
│                                              │ [입력...]││
│                                              └──────────┘│
└──────────────────────────────────────────────────────────┘
```

**Option B: Dedicated Chat Page**

A full-page chat experience at `/chat` or `/planner/ai`.

**Option C: Bottom Sheet Chat (Mobile)**

On mobile, the chat appears as a bottom sheet that can be dragged up, consistent with the existing mobile map UX pattern.

#### Rendering Structured AI Responses with Generative UI

Instead of displaying raw text, render tool results as interactive React components:

```typescript
// components/chat/ChatMessage.tsx
'use client';

import { UIMessage } from 'ai';
import { ItineraryCard } from './ItineraryCard';
import { DestinationCard } from './DestinationCard';
import { BudgetBreakdown } from './BudgetBreakdown';
import { WeatherWidget } from './WeatherWidget';

export function ChatMessage({ message }: { message: UIMessage }) {
  return (
    <div className="space-y-3">
      {message.parts.map((part, i) => {
        // Regular text
        if (part.type === 'text') {
          return <p key={i} className="whitespace-pre-wrap">{part.text}</p>;
        }

        // Tool result: render as a rich UI component
        if (part.type === 'tool-searchDestinations') {
          if (part.status === 'output-available') {
            return (
              <div key={i} className="grid grid-cols-1 gap-2">
                {part.output.map((dest: any) => (
                  <DestinationCard
                    key={dest.id}
                    name={dest.name}
                    nameKo={dest.nameKo}
                    region={dest.region}
                    rating={dest.rating}
                    image={dest.image}
                    onAddToPlanner={() => handleAddToPlanner(dest)}
                  />
                ))}
              </div>
            );
          }
          if (part.status === 'input-available') {
            return <div key={i} className="animate-pulse">여행지 검색 중...</div>;
          }
        }

        if (part.type === 'tool-createItinerary') {
          if (part.status === 'output-available') {
            return <ItineraryCard key={i} itinerary={part.output} />;
          }
        }

        if (part.type === 'tool-estimateBudget') {
          if (part.status === 'output-available') {
            return <BudgetBreakdown key={i} budget={part.output} />;
          }
        }

        if (part.type === 'tool-getWeather') {
          if (part.status === 'output-available') {
            return <WeatherWidget key={i} weather={part.output} />;
          }
        }

        return null;
      })}
    </div>
  );
}
```

#### Example UI Components for Tool Results

**Destination Suggestion Card:**

```typescript
// components/chat/DestinationCard.tsx
export function DestinationCard({ name, nameKo, region, rating, image, onAddToPlanner }) {
  return (
    <div className="flex gap-3 rounded-lg border p-3 hover:bg-gray-50">
      <img src={image} alt={name} className="w-20 h-20 rounded-lg object-cover" />
      <div className="flex-1">
        <h4 className="font-semibold">{nameKo || name}</h4>
        {nameKo && <p className="text-sm text-gray-500">{name}</p>}
        <p className="text-sm text-gray-600">{region}</p>
        <div className="flex items-center gap-1 mt-1">
          <span className="text-yellow-500">★</span>
          <span className="text-sm">{rating}</span>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <button onClick={onAddToPlanner}
          className="text-xs bg-blue-500 text-white px-2 py-1 rounded">
          + 일정에 추가
        </button>
        <a href={`/destinations/${name}`}
          className="text-xs text-blue-500 underline text-center">
          상세보기
        </a>
      </div>
    </div>
  );
}
```

**Itinerary Day Card:**

```typescript
// components/chat/ItineraryCard.tsx
export function ItineraryCard({ itinerary }) {
  return (
    <div className="rounded-lg border overflow-hidden">
      <div className="bg-blue-500 text-white p-3">
        <h3 className="font-bold">{itinerary.destination} {itinerary.totalDays}일 일정</h3>
      </div>
      {itinerary.days.map(day => (
        <div key={day.dayNumber} className="border-b last:border-0 p-3">
          <h4 className="font-semibold text-blue-600">
            Day {day.dayNumber}: {day.theme}
          </h4>
          <ul className="mt-2 space-y-2">
            {day.activities.map((activity, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-sm text-gray-500 w-14 shrink-0">
                  {activity.time}
                </span>
                <div>
                  <span className="font-medium">{activity.nameKo || activity.name}</span>
                  <p className="text-sm text-gray-600">{activity.description}</p>
                  {activity.estimatedCost && (
                    <span className="text-xs text-green-600">
                      ~₩{activity.estimatedCost.toLocaleString()}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="p-3 bg-gray-50 flex justify-between items-center">
        <span className="text-sm text-gray-600">
          예상 총 비용: ₩{itinerary.estimatedTotalCost?.toLocaleString()}
        </span>
        <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm">
          플래너에 저장
        </button>
      </div>
    </div>
  );
}
```

#### Inline Actions from Chat

Allow users to act on AI suggestions directly within the chat:

| Action | Trigger | What It Does |
|---|---|---|
| **Add to Planner** | Button on destination/activity cards | Calls `addToPlanner` tool, saves to user's trip |
| **View on Map** | Button on destination cards | Pans the map to the suggested location |
| **Save Itinerary** | Button on itinerary card | Saves the generated itinerary to user's planner |
| **Get More Details** | Link on destination card | Navigates to the destination detail page |
| **Modify Suggestion** | Reply in chat | User can refine ("더 저렴한 곳은?", "맛집 더 추천해줘") |

#### Quick Action Buttons / Suggested Prompts

Show pre-built prompts to help users get started:

```typescript
const suggestedPrompts = [
  { text: '제주도 3일 여행 일정 추천', icon: '🏝️' },
  { text: '서울 맛집 베스트 10', icon: '🍜' },
  { text: '일본 도쿄 4박5일 예산', icon: '💰' },
  { text: '이번 주말 가볼만한 곳', icon: '📍' },
  { text: '부산 가족여행 코스', icon: '👨‍👩‍👧‍👦' },
];
```

---

### 7.6 Complete Implementation Checklist

#### Phase 1 (MVP AI Chat)
- [ ] Install Vercel AI SDK (`ai`, `@ai-sdk/react`, `@ai-sdk/anthropic`)
- [ ] Set up API route (`/api/chat/route.ts`) with `streamText`
- [ ] Create basic chat UI with `useChat` hook
- [ ] Write travel-focused system prompt
- [ ] Add 2-3 basic tools (searchDestinations, getWeather, estimateBudget)
- [ ] Implement rate limiting (in-memory for MVP)
- [ ] Add chat sidebar/panel to the map layout
- [ ] Test with Korean and English queries

#### Phase 2 (Enhanced AI)
- [ ] Add Generative UI (render tool results as React components)
- [ ] Implement model routing (cheap model for simple, capable for complex)
- [ ] Add prompt caching for cost optimization
- [ ] Create structured itinerary output with save-to-planner action
- [ ] Add more tools (searchRestaurants, getExchangeRate, addToPlanner)
- [ ] Implement conversation context management
- [ ] Add suggested prompt buttons
- [ ] Mobile bottom-sheet chat UX

#### Phase 3 (Advanced AI)
- [ ] Full Agent abstraction with ToolLoopAgent
- [ ] Multi-step autonomous planning (search → weather → itinerary → budget)
- [ ] Response caching for popular queries
- [ ] Usage analytics and cost monitoring dashboard
- [ ] Streaming React Server Components for tool results
- [ ] Conversation history persistence (save/load past chats)
- [ ] Personalization based on user's saved destinations and past trips

---

### 7.7 Recommended Stack for AI Features

```
AI Framework:       Vercel AI SDK v6+ (ai, @ai-sdk/react)
Primary AI Model:   Claude Sonnet 4.5 (@ai-sdk/anthropic)
Cheap Model:        Gemini 2.5 Flash (@ai-sdk/google)
Schema Validation:  Zod (already in project stack)
Rate Limiting:      In-memory (MVP) → Upstash (production)
Cost Target:        $5-10/month for hobby usage
```

### Sources

#### AI Provider Pricing
- [Claude API Pricing](https://platform.claude.com/docs/en/about-claude/pricing)
- [Anthropic Claude API Pricing 2026 - MetaCTO](https://www.metacto.com/blogs/anthropic-api-pricing-a-full-breakdown-of-costs-and-integration)
- [OpenAI API Pricing](https://openai.com/api/pricing/)
- [ChatGPT API Pricing 2026 - IntuitionLabs](https://intuitionlabs.ai/articles/chatgpt-api-pricing-2026-token-costs-limits)
- [Google Gemini API Pricing 2026 - MetaCTO](https://www.metacto.com/blogs/the-true-cost-of-google-gemini-a-guide-to-api-pricing-and-integration)
- [AI API Pricing Comparison 2026 - IntuitionLabs](https://intuitionlabs.ai/articles/ai-api-pricing-comparison-grok-gemini-openai-claude)

#### Vercel AI SDK
- [Vercel AI SDK Documentation](https://ai-sdk.dev/docs/introduction)
- [AI SDK Getting Started: Next.js App Router](https://ai-sdk.dev/docs/getting-started/nextjs-app-router)
- [AI SDK Core: Tool Calling](https://ai-sdk.dev/docs/ai-sdk-core/tools-and-tool-calling)
- [AI SDK Providers: Anthropic](https://ai-sdk.dev/providers/ai-sdk-providers/anthropic)
- [AI SDK 6 Announcement - Vercel Blog](https://vercel.com/blog/ai-sdk-6)
- [AI SDK UI: Generative User Interfaces](https://ai-sdk.dev/docs/ai-sdk-ui/generative-user-interfaces)
- [How to Build AI Agents with Vercel - Vercel KB](https://vercel.com/kb/guide/how-to-build-ai-agents-with-vercel-and-the-ai-sdk)
- [AI SDK GitHub Repository](https://github.com/vercel/ai)

#### Agent Architecture
- [Building AI Agent Workflows with Vercel AI SDK - Callstack](https://www.callstack.com/blog/building-ai-agent-workflows-with-vercels-ai-sdk-a-practical-guide)
- [AI Trip Planning Apps System Design - Coaxsoft](https://coaxsoft.com/blog/guide-to-ai-trip-planning-apps)
- [Agentic AI Design Patterns 2026](https://medium.com/@dewasheesh.rana/agentic-ai-design-patterns-2026-ed-e3a5125162c5)
- [Google Cloud: Choose AI Agent Design Pattern](https://docs.google.com/architecture/choose-design-pattern-agentic-ai-system)
- [Vercel Academy: Multi-Step & Generative UI](https://vercel.com/academy/ai-sdk/multi-step-and-generative-ui)

#### Cost Management
- [LLM API Token Caching: 90% Cost Reduction - Towards AI](https://pub.towardsai.net/llm-api-token-caching-the-90-cost-reduction-feature-when-building-ai-applications-06c4e58b01b3)
- [Claude Prompt Caching Guide](https://platform.claude.com/docs/en/build-with-claude/prompt-caching)
- [AI API Cost Management Best Practices 2025 - Skywork](https://skywork.ai/blog/ai-api-cost-throughput-pricing-token-math-budgets-2025/)
- [AI API Pricing Guide 2026 - AnyAPI](https://anyapi.ai/blog/ai-api-pricing-guide-2026-cost-comparison-and-how-to-optimize-your-spending)

#### UI Patterns
- [Generative UI Chatbot Template - Vercel](https://vercel.com/templates/next.js/rsc-genui)
- [Vercel AI Chatbot Template - GitHub](https://github.com/vercel/ai-chatbot)
- [System Prompts with Vercel AI SDK - AI Hero](https://www.aihero.dev/system-prompts-with-vercel-ai-sdk)
- [Chat UI Design Trends 2025 - MultitaskAI](https://multitaskai.com/blog/chat-ui-design/)
- [Generative UI Guide 2025 - Mockplus](https://www.mockplus.com/blog/post/gui-guide)
