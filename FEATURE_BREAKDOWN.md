# Travel Information Website - Comprehensive Feature Breakdown
# 여행 정보 웹사이트 - 종합 기능 명세서

> Last Updated: 2026-02-14
> Structure: Domestic (Korea) + International Travel
> Core Paradigm: Map-based Interactive UI

---

## Table of Contents

1. [Site Architecture Overview](#1-site-architecture-overview)
2. [여행지 정보 (Travel Destination Info)](#2-여행지-정보-travel-destination-info)
3. [여행 플래너 (Travel Planner)](#3-여행-플래너-travel-planner)
4. [커뮤니티 (Community)](#4-커뮤니티-community)
5. [지도 기반 UI (Map-based UI)](#5-지도-기반-ui-map-based-ui)
6. [API Reference & Data Sources](#6-api-reference--data-sources)
7. [Priority Roadmap (MVP / Phase 2 / Phase 3)](#7-priority-roadmap)

---

## 1. Site Architecture Overview

```
/
├── / (Landing)                    → Full-screen map with search overlay
├── /domestic                      → 국내여행 (Korean Domestic Travel)
│   ├── /domestic/destinations     → 여행지 정보
│   ├── /domestic/planner          → 여행 플래너
│   └── /domestic/community        → 커뮤니티
├── /international                 → 해외여행 (International Travel)
│   ├── /international/destinations → 여행지 정보
│   ├── /international/planner     → 여행 플래너
│   └── /international/community   → 커뮤니티
├── /map                           → Full-screen map explorer
├── /profile                       → User profile & saved items
└── /auth                          → Login / Register
```

### Navigation Philosophy
- The **map is the homepage**. Users land on a full-screen interactive map.
- Toggle between 국내 (Domestic) / 해외 (International) mode at the top level.
- Sidebar panels slide in from the left with destination details, planner tools, or community content.
- The map is never fully hidden; it remains the spatial anchor for all content.

---

## 2. 여행지 정보 (Travel Destination Info)

### 2.1 Data to Include Per Destination

#### Domestic (국내) Destination Page
| Data Category         | Details                                                                 |
|----------------------|-------------------------------------------------------------------------|
| **기본 정보 (Basic)**   | Name, region (시/도, 시/군/구), address, coordinates, category           |
| **날씨 (Weather)**      | Current conditions, 7-day forecast, monthly climate averages            |
| **관광지 (Attractions)**| Tourist spots, cultural sites, natural landmarks, nearby attractions    |
| **음식점 (Restaurants)**| Local restaurants, regional specialties (향토음식), price ranges         |
| **숙박 (Accommodation)**| Hotels, pensions, guesthouses, glamping, hanok stays                    |
| **축제/행사 (Events)**  | Seasonal festivals, local events, performances with date ranges         |
| **교통 (Transport)**    | How to get there (bus, train, car), local transit options               |
| **반려동물 (Pet-friendly)**| Pet-friendly venues, accommodations, restaurants                     |
| **이미지 갤러리**        | Representative photos, user-contributed photos                         |

#### International (해외) Destination Page
| Data Category         | Details                                                                 |
|----------------------|-------------------------------------------------------------------------|
| **기본 정보 (Basic)**   | Country, city, coordinates, language, time zone difference from KST     |
| **날씨 (Weather)**      | Current conditions, 7-15 day forecast, best months to visit            |
| **환율 (Currency)**     | Current exchange rate (KRW base), historical trend chart, conversion calculator |
| **비자 (Visa)**         | Visa requirements for Korean passport holders, processing time, documents needed |
| **안전 정보 (Safety)**  | MOFA travel advisories (1-4 level), local emergency numbers            |
| **항공 (Flights)**      | Estimated flight prices, direct/connecting options, duration            |
| **관광지 (Attractions)**| Major sightseeing spots, UNESCO sites, hidden gems                     |
| **음식점 (Restaurants)**| Local cuisine, recommended restaurants, Halal/vegetarian options        |
| **숙박 (Accommodation)**| Hotels, hostels, Airbnb-style listings, price ranges                   |
| **실용 정보 (Practical)**| Plugs/voltage, tipping culture, local etiquette, SIM/WiFi options     |

### 2.2 Destination Page Structure

```
┌─────────────────────────────────────────────────┐
│  [Hero Image / Carousel]                        │
│  Destination Name                 ★ 4.5 (234)   │
│  Region/Country  |  Category Tags               │
├─────────────────────────────────────────────────┤
│  [Tab Navigation]                               │
│  개요 | 관광지 | 맛집 | 숙소 | 축제 | 교통 | 날씨  │
├───────────────────────┬─────────────────────────┤
│                       │                         │
│  Content Panel        │  Sticky Map Panel       │
│  (scrollable)         │  (shows markers for     │
│                       │   current tab content)  │
│  - Info cards         │                         │
│  - Lists              │  Markers update as      │
│  - Reviews            │  user scrolls/switches  │
│                       │  tabs                   │
├───────────────────────┴─────────────────────────┤
│  Related Destinations (horizontal scroll)        │
│  Community Posts About This Destination          │
└─────────────────────────────────────────────────┘
```

### 2.3 Domestic-Specific: KTO & Korean Public Data APIs

**Primary Source: 한국관광공사 TourAPI (KorService1)**
- Endpoint: `http://apis.data.go.kr/B551011/KorService1/`
- Registration: Free at [data.go.kr](https://data.go.kr)
- Data coverage: ~260,000 records across 15 service types
- Response formats: JSON, XML

| TourAPI Service Operation       | Description                              | Use Case                    |
|--------------------------------|------------------------------------------|-----------------------------|
| `areaCode`                     | 지역코드 조회                             | Build region filter/selector |
| `categoryCode`                 | 서비스 분류코드 조회                       | Category-based navigation    |
| `areaBasedList`                | 지역기반 관광정보 목록                     | List destinations by region  |
| `locationBasedList`            | 위치기반 관광정보 목록                     | Map-radius search            |
| `searchKeyword`                | 키워드 검색                               | Search bar functionality     |
| `searchFestival`               | 행사/축제 정보                            | Events calendar & listing    |
| `searchStay`                   | 숙박 정보                                | Accommodation listings       |
| `detailCommon`                 | 공통정보 조회                             | Destination detail pages     |
| `detailIntro`                  | 소개정보 조회                             | Extended descriptions        |
| `detailInfo`                   | 반복정보 조회                             | Facilities, rooms, menus     |
| `detailImage`                  | 이미지정보 조회                           | Photo galleries              |
| `detailPetTour`                | 반려동물 동반여행 정보                     | Pet-friendly filter          |

**Additional Korean Public Data APIs:**
| API Source                      | Data Provided                           | Portal                      |
|--------------------------------|------------------------------------------|-----------------------------|
| 한국관광공사 다국어 API          | English/Chinese/Japanese tourism info    | data.go.kr                  |
| 관광지별 연관 관광지 정보        | Related destination recommendations      | data.go.kr                  |
| 외교부 해외안전여행              | Travel advisories by country (1-4 level) | 0404.go.kr                  |
| 국토교통부 관광지 API            | National land/geography data            | data.go.kr                  |
| 기상청 날씨 API                 | Korean weather forecasts                 | data.go.kr                  |
| 한국공항공사 항공 API            | Domestic flight info                    | data.go.kr                  |

---

## 3. 여행 플래너 (Travel Planner)

### 3.1 Itinerary Builder (일정 만들기)

#### Core Features
| Feature                        | Description                                                              |
|-------------------------------|--------------------------------------------------------------------------|
| **Trip Creation**              | Set destination, travel dates, number of travelers, trip title           |
| **Day-by-Day Timeline**        | Vertical timeline view for each day; morning/afternoon/evening slots     |
| **Add Places**                 | Search destinations/restaurants/attractions and add to itinerary         |
| **Drag & Drop Reorder**        | Drag items to reorder within a day or move between days                  |
| **Time Allocation**            | Set start time and estimated duration for each activity                  |
| **Map Route View**             | See all day's activities plotted on map with route lines                 |
| **Route Optimization**         | Suggest optimal ordering to minimize travel time between stops           |
| **Notes per Item**             | Add personal notes, confirmation numbers, contact info                  |
| **Auto-fill from Destinations**| Click "Add to Planner" from any destination page                        |

#### Advanced Features
| Feature                        | Description                                                              |
|-------------------------------|--------------------------------------------------------------------------|
| **Collaborative Planning**     | Share trip with link; multiple users can edit simultaneously             |
| **Template Itineraries**       | Pre-built popular itineraries (e.g., "Seoul 3-Day Culture Trip")        |
| **AI Suggestions**             | Recommend next activities based on current itinerary and preferences     |
| **Clone & Modify**             | Copy community-shared itineraries and customize them                    |
| **Transport Between Stops**    | Show estimated transit time (driving/walking/public transit)            |
| **Weather Overlay**            | Show forecasted weather for each day of the trip                        |

#### Planner UI Layout
```
┌──────────────────────────────────────────────────────┐
│  Trip: 제주도 3박 4일  |  2026.03.15 - 03.18  |  2명  │
├──────────────┬───────────────────────────────────────┤
│  Day Tabs    │                                       │
│  ┌─────────┐ │          Interactive Map               │
│  │ Day 1   │ │   (shows today's route with markers)  │
│  │ 03/15   │ │                                       │
│  ├─────────┤ │      ① → ② → ③ → ④                  │
│  │ Day 2   │ │                                       │
│  │ 03/16   │ │   Route lines connect each stop       │
│  ├─────────┤ │   Color-coded by day                  │
│  │ Day 3   │ │                                       │
│  │ 03/17   │ ├───────────────────────────────────────┤
│  ├─────────┤ │  Timeline (draggable items)           │
│  │ Day 4   │ │  ┌────────────────────────────────┐   │
│  │ 03/18   │ │  │ 09:00 ① 성산일출봉        ≡   │   │
│  └─────────┘ │  │ 11:30 ② 섭지코지          ≡   │   │
│              │  │ 13:00 ③ 해녀의집 (lunch)   ≡   │   │
│  [+ Add Day] │  │ 15:00 ④ 만장굴            ≡   │   │
│              │  │ [+ Add Activity]               │   │
│              │  └────────────────────────────────┘   │
├──────────────┴───────────────────────────────────────┤
│  Budget Summary: ₩450,000 / ₩600,000 budget          │
└──────────────────────────────────────────────────────┘
```

### 3.2 Budget Calculator (예산 계산기)

| Feature                        | Description                                                              |
|-------------------------------|--------------------------------------------------------------------------|
| **Budget Categories**          | Transport, Accommodation, Food, Activities, Shopping, Misc              |
| **Per-item Cost Entry**        | Add cost to each itinerary item or standalone expenses                  |
| **Currency Support**           | Enter amounts in local currency; auto-convert to KRW                    |
| **Split by Person**            | Divide costs among travelers; track who paid what                       |
| **Running Total**              | Real-time budget vs. actual spending tracker                            |
| **Category Pie Chart**         | Visual breakdown of spending by category                                |
| **Daily Budget View**          | See spending by day overlaid on itinerary                               |
| **Pre-trip Estimates**         | Average costs for the destination (sourced from community data)         |
| **Export to Spreadsheet**      | Download budget as CSV/Excel                                            |

### 3.3 Checklist / Packing List (체크리스트)

| Feature                        | Description                                                              |
|-------------------------------|--------------------------------------------------------------------------|
| **Default Templates**          | Pre-built packing lists by trip type (beach, city, hiking, business)    |
| **Weather-based Suggestions**  | Suggest items based on destination weather forecast                     |
| **Custom Items**               | Add/remove items freely; create custom categories                       |
| **Progress Indicator**         | "12/20 items packed" progress bar                                       |
| **Shared Checklist**           | Group travelers can divide packing responsibilities                    |
| **Pre-departure Checklist**    | Passport, visa, insurance, reservations, chargers, medication           |
| **Country-specific Items**     | Auto-add items like power adapters, voltage converters per destination  |

### 3.4 Map Route Planning (경로 계획)

| Feature                        | Description                                                              |
|-------------------------------|--------------------------------------------------------------------------|
| **Multi-stop Routes**          | Plot routes with multiple waypoints on the map                          |
| **Transport Mode Selection**   | Car, public transit, walking, bicycle per segment                       |
| **Distance & Duration**        | Show total distance and estimated travel time per segment               |
| **Directions Integration**     | Link out to Kakao Map / Naver Map / Google Maps for turn-by-turn       |
| **Domestic Transit**           | KTX/SRT train routes, express bus routes, domestic flight options       |
| **International Routes**       | Airport-to-hotel, city-to-city within destination                      |
| **Save Route to Itinerary**    | Save planned route directly into the day's schedule                    |

---

## 4. 커뮤니티 (Community)

### 4.1 Post Types (게시물 유형)

| Post Type                      | Description                                           | Key Fields                     |
|-------------------------------|-------------------------------------------------------|--------------------------------|
| **여행 후기 (Travel Review)**   | Full trip reports with ratings                        | Title, destination tags, rating (1-5), trip dates, photos, body text |
| **여행 팁 (Travel Tips)**       | Short practical advice                                | Title, category tag, destination, tip body, helpful count |
| **질문 & 답변 (Q&A)**           | Questions and threaded answers                        | Question title, destination, status (open/answered/closed), accepted answer |
| **포토 갤러리 (Photo Gallery)** | Photo-focused posts                                   | Photos (multiple), destination tag, caption, camera/phone info |
| **여행 일정 공유 (Itinerary Share)** | Share planner itineraries publicly               | Linked itinerary, summary, cost breakdown, recommendations |
| **동행 구하기 (Travel Buddy)**  | Find travel companions                                | Destination, dates, group size, preferences, contact method |

### 4.2 User Features (사용자 기능)

| Feature                        | Description                                                              |
|-------------------------------|--------------------------------------------------------------------------|
| **User Profile**               | Display name, profile photo, bio, travel stats (countries visited, trips planned) |
| **Travel Map**                 | Personal map showing all visited destinations (auto-generated from reviews) |
| **Badges & Levels**            | Earned through activity: reviews written, helpful votes, destinations visited |
| **Bookmarks (저장)**           | Save destinations, posts, and itineraries to personal collections       |
| **Collections (컬렉션)**       | Organize bookmarks into themed lists ("Japan Cafes", "Jeju Must-Visit")  |
| **Likes (좋아요)**             | Like posts, photos, and reviews                                         |
| **Follow System**              | Follow other users; see their new posts in a feed                       |
| **Notification Center**        | Alerts for replies, likes, follows, and trip reminders                  |
| **Travel Stats Dashboard**     | Countries visited, cities explored, total trip days, money spent         |

### 4.3 Comment / Reply System (댓글 시스템)

| Feature                        | Description                                                              |
|-------------------------------|--------------------------------------------------------------------------|
| **Threaded Replies**           | Nested replies up to 2 levels deep (comment > reply > reply)            |
| **Likes on Comments**          | Upvote helpful comments                                                 |
| **Author Highlighting**        | Original post author's comments are visually distinct                   |
| **Mention System (@)**         | Tag other users in comments; triggers notification                      |
| **Photo in Comments**          | Attach images to comments                                               |
| **Edit & Delete**              | Edit within 30 min; delete anytime (shows "[deleted]")                  |
| **Report & Moderation**        | Flag inappropriate content; admin review queue                          |
| **Best Answer (Q&A)**          | Question asker can mark one answer as "best answer"                     |

### 4.4 Content Moderation

| Feature                        | Description                                                              |
|-------------------------------|--------------------------------------------------------------------------|
| **Spam Filter**                | Auto-detect promotional/spam content                                    |
| **Profanity Filter**           | Korean + English profanity detection                                    |
| **Report System**              | Users report content with reason codes                                  |
| **Admin Dashboard**            | Review reported content, ban users, manage flags                        |
| **Rate Limiting**              | Prevent post flooding (max N posts per hour)                            |

---

## 5. 지도 기반 UI (Map-based UI)

### 5.1 Map as Central Navigation Paradigm

**Design Principle:** The map is not a feature -- it IS the interface. Every piece of content has a spatial component.

| Concept                        | Implementation                                                           |
|-------------------------------|--------------------------------------------------------------------------|
| **Map-first Landing**          | Homepage is a full-screen map; search bar overlaid on top               |
| **Sidebar Panel Pattern**      | Clicking a marker/region opens a slide-in panel (left side) with details |
| **Persistent Map**             | Map stays visible even when browsing lists, posts, or planner           |
| **Split View**                 | Desktop: map (right 50%) + content panel (left 50%)                     |
| **Mobile: Bottom Sheet**       | On mobile, content slides up from bottom over the map                   |
| **Contextual Markers**         | Map markers change based on active section (destinations/restaurants/hotels) |
| **Map URL State**              | Map center, zoom, and active filters are stored in the URL for sharing  |

### 5.2 Marker Clustering & Display

| Feature                        | Description                                                              |
|-------------------------------|--------------------------------------------------------------------------|
| **Cluster Aggregation**        | Group nearby markers at low zoom levels; show count badge               |
| **Smooth Expansion**           | Click cluster to zoom in; spiderfy if markers overlap at max zoom       |
| **Category Markers**           | Different icons/colors per category: 관광지(blue), 맛집(orange), 숙소(purple), 축제(red) |
| **Selected State**             | Active marker enlarges and gets a highlight ring                        |
| **Hover Preview**              | Hovering a marker shows a mini-card with photo + name + rating          |
| **List-Map Sync**              | Hovering a list item highlights the corresponding marker and vice versa |
| **Heatmap Mode**               | Toggle to see popularity density (based on review count/rating)         |

### 5.3 Custom Map Styles

| Style Option                   | Description                                                              |
|-------------------------------|--------------------------------------------------------------------------|
| **Light Theme (Default)**      | Clean, minimal base map with muted colors; content markers stand out    |
| **Dark Theme**                 | For night mode users; dark basemap with bright markers                  |
| **Satellite View**             | Toggle to satellite imagery for terrain exploration                     |
| **Terrain View**               | Elevation and topographic data for hiking/outdoor trips                 |
| **Custom POI Visibility**      | Hide/show default POI labels; only show our curated markers             |
| **Regional Boundaries**        | Show 시/도 and 시/군/구 boundary lines for domestic; country borders for intl |

### 5.4 Map Integration with Other Features

| Integration Point              | How It Works                                                             |
|-------------------------------|--------------------------------------------------------------------------|
| **Destination Pages**          | Right-side sticky map shows the destination + nearby attractions        |
| **Search Results**             | Results appear as both a list and map markers simultaneously            |
| **Planner Day View**           | Map shows that day's itinerary route with numbered markers              |
| **Community Posts**             | Posts tagged with location appear as markers on community map view      |
| **User Travel Map**            | Profile page shows a world/Korea map with all visited places            |
| **Filter Controls**            | Map-overlay filter chips: category, rating, price range, open now       |
| **Radius Search**              | Draw a circle on the map to find everything within N km                 |
| **Region Click Navigation**    | Click a region (e.g., 강원도) on the map to browse that region's content |

### 5.5 Map Library Recommendation

| Library / Service        | Free Tier                          | Best For                      | Korean Map Support |
|-------------------------|------------------------------------|-------------------------------|--------------------|
| **Kakao Map API**        | Free (unlimited basic use)         | Domestic Korea features       | Excellent (native) |
| **Leaflet + OpenStreetMap** | Completely free (open source)   | International map views       | Good               |
| **Mapbox GL JS**         | 50,000 loads/month free            | Custom styling, 3D terrain    | Good               |
| **Google Maps Platform** | $200/month credit (~28K loads)     | Global coverage, Places API   | Good               |

**Recommended Strategy:**
- **Domestic (국내):** Use **Kakao Map API** -- best Korean address data, road view, transit integration, and it is free.
- **International (해외):** Use **Mapbox GL JS** or **Leaflet** -- better global coverage, custom styling, generous free tier.
- Implement a map abstraction layer so both map providers share the same component interface.

---

## 6. API Reference & Data Sources

### 6.1 Korean Government & Public APIs (Free)

| API                              | Provider          | Data                              | Cost     | Endpoint / Portal                |
|---------------------------------|-------------------|-----------------------------------|----------|----------------------------------|
| TourAPI (KorService1)            | 한국관광공사       | 260K tourism records, 15 services | Free     | apis.data.go.kr/B551011/KorService1 |
| Multilingual TourAPI             | 한국관광공사       | EN/CN/JP tourism info             | Free     | data.go.kr                       |
| Related Destinations API         | 한국관광공사       | Destination recommendations       | Free     | data.go.kr                       |
| 기상청 단기예보 API               | 기상청            | Korean weather forecasts           | Free     | data.go.kr                       |
| 해외안전여행 정보                  | 외교부            | Travel advisories (levels 1-4)     | Free     | 0404.go.kr                       |
| 국토교통부 관광지                  | 국토교통부        | Land/geography data                | Free     | data.go.kr                       |
| 항공정보 API                      | 한국공항공사       | Domestic flight info               | Free     | data.go.kr                       |

### 6.2 Weather APIs

| API                     | Free Tier                        | Features                                    |
|------------------------|----------------------------------|---------------------------------------------|
| **Visual Crossing**     | 1,000 requests/day               | 15-day forecast, 50-year history, alerts    |
| **OpenWeatherMap**      | 1,000 calls/day, 60/min          | Current, hourly, daily forecast, weather maps |
| **기상청 API**           | Unlimited (public data)          | Korean-specific, short-term forecasts       |

**Recommendation:** Use 기상청 API for domestic Korean weather; Visual Crossing or OpenWeatherMap for international destinations.

### 6.3 Currency Exchange APIs

| API                     | Free Tier                        | Features                                    |
|------------------------|----------------------------------|---------------------------------------------|
| **Frankfurter**         | Completely free, no key needed   | ECB rates, historical data, 30+ currencies  |
| **ExchangeRate-API**    | Free (no key), rate-limited      | 150+ currencies, daily updates              |
| **Fixer.io**            | 100 requests/month (free plan)   | 170 currencies, hourly updates              |
| **한국은행 API**         | Free (public data)               | Official KRW exchange rates                 |

**Recommendation:** Frankfurter for real-time conversion (free, no key); 한국은행 API for official KRW-based rates.

### 6.4 Flight & Transport APIs

| API                     | Free Tier                        | Features                                    |
|------------------------|----------------------------------|---------------------------------------------|
| **Amadeus Self-Service**| 1,000-10,000 calls/month (test)  | Flight search, hotel search, POI, trip tools |
| **Travelpayouts**       | Free (affiliate model)           | Flight price trends, popular destinations   |
| **Skyscanner API**      | Free (partner approval needed)   | Flight search and redirect                  |
| **한국공항공사 API**     | Free (public data)               | Domestic Korean flight schedules            |

**Recommendation:** Amadeus test environment for MVP flight search; Travelpayouts for price trends and affiliate revenue.

### 6.5 Map APIs

| API                     | Free Tier                        | Features                                    |
|------------------------|----------------------------------|---------------------------------------------|
| **Kakao Map API**       | Free                             | Korean maps, geocoding, road view, transit  |
| **Leaflet + OSM**       | Completely free                  | Open source, extensible, marker clustering  |
| **Mapbox GL JS**        | 50,000 loads/month               | Custom styles, 3D, geocoding, directions    |
| **Google Maps Platform**| $200/month credit                | Places, directions, street view             |

### 6.6 Other Useful APIs

| API                     | Free Tier                        | Use Case                                    |
|------------------------|----------------------------------|---------------------------------------------|
| **Unsplash API**        | 50 requests/hour                 | Destination stock photos                    |
| **REST Countries**      | Completely free                  | Country info (capital, language, timezone)   |
| **Google Translate API**| Paid ($20/1M chars)              | Content translation                         |
| **Papago API (Naver)**  | 10,000 chars/day free            | Korean-centric translation                  |

---

## 7. Priority Roadmap

### MVP (Phase 1) - Core Experience
> Goal: Launchable product with map-based browsing, basic destination info, and simple planning.
> Timeline: ~3-4 months

#### Map & Navigation
- [ ] Full-screen map landing page with domestic/international toggle
- [ ] Kakao Map integration for domestic; Leaflet/Mapbox for international
- [ ] Basic marker display for destinations (categorized by type)
- [ ] Marker clustering at low zoom levels
- [ ] Click marker to open destination sidebar panel
- [ ] Region-based browsing (click 시/도 or country to drill down)
- [ ] Search bar with autocomplete (destination name search)

#### Destination Info (여행지 정보)
- [ ] Destination detail pages with tabbed layout (overview, attractions, food, stay)
- [ ] KTO TourAPI integration: areaBasedList, searchKeyword, detailCommon, detailIntro, detailImage
- [ ] Weather widget: current conditions + 7-day forecast (기상청 for domestic, OpenWeatherMap for international)
- [ ] Currency converter widget for international destinations (Frankfurter API)
- [ ] Basic safety/visa info for international destinations (static data initially)
- [ ] Photo gallery from TourAPI images
- [ ] Responsive design (desktop split-view, mobile bottom-sheet)

#### Travel Planner (여행 플래너) - Basic
- [ ] Create a trip (destination, dates, travelers)
- [ ] Day-by-day timeline view
- [ ] Add places to itinerary from destination pages ("Add to Planner" button)
- [ ] Drag & drop to reorder activities within/between days
- [ ] View day's itinerary on map with numbered markers and route lines
- [ ] Simple budget tracker: add costs per item, see running total by category
- [ ] Basic packing checklist with default templates (beach, city, hiking)

#### User System
- [ ] Email/password registration and login
- [ ] Social login (Kakao, Google)
- [ ] Basic user profile (name, photo, bio)
- [ ] Bookmark destinations and save itineraries

#### Community - Minimal
- [ ] Travel review posts (text + photos + destination tag + rating)
- [ ] Browse reviews by destination
- [ ] Simple comment system (flat, not threaded)
- [ ] Like posts

---

### Phase 2 - Enhanced Features
> Goal: Richer planning tools, fuller community, more data integrations.
> Timeline: ~2-3 months after MVP

#### Map Enhancements
- [ ] Category-specific marker icons and color coding
- [ ] Hover preview cards on markers (thumbnail + name + rating)
- [ ] List-map synchronization (hover list item highlights marker)
- [ ] Filter chips overlay (category, rating, price range)
- [ ] Satellite and terrain view toggles
- [ ] Custom map styles (light/dark theme)
- [ ] Map URL state persistence (shareable map views)

#### Destination Info Enhancements
- [ ] Festival/event calendar with TourAPI searchFestival integration
- [ ] Accommodation listings with TourAPI searchStay
- [ ] Pet-friendly venue filter with detailPetTour
- [ ] Location-based search (locationBasedList) -- "things near me"
- [ ] Related destinations recommendations
- [ ] Flight price estimates (Amadeus API test tier)
- [ ] International: detailed visa info pages per country (curated content)
- [ ] International: safety advisory integration (외교부 0404 data)
- [ ] Practical info pages (plugs, tipping, etiquette -- curated per country)

#### Planner Enhancements
- [ ] Time allocation per activity (start time + duration)
- [ ] Transport mode between stops (car/transit/walk) with estimated time
- [ ] Route optimization suggestion (minimize travel time)
- [ ] Currency-aware budget calculator (enter in local currency, auto-convert to KRW)
- [ ] Budget category breakdown pie chart
- [ ] Weather overlay on itinerary days
- [ ] Shareable trip link (read-only sharing)
- [ ] Pre-departure checklist with country-specific items
- [ ] Export itinerary as PDF

#### Community Expansion
- [ ] All post types: reviews, tips, Q&A, photo gallery, itinerary share
- [ ] Threaded comment/reply system (2 levels deep)
- [ ] @ mention system with notifications
- [ ] User badges and activity levels
- [ ] Collections (organize bookmarks into themed lists)
- [ ] Follow system (follow users, see their posts)
- [ ] Notification center (replies, likes, follows)
- [ ] Search and filter community posts by destination, type, date
- [ ] Sort posts by: newest, most liked, most helpful

---

### Phase 3 - Advanced & Social
> Goal: AI features, real-time collaboration, social features, monetization hooks.
> Timeline: ~3-4 months after Phase 2

#### Map Advanced
- [ ] Heatmap mode (popularity density based on reviews/visits)
- [ ] Radius search (draw circle, find everything within N km)
- [ ] 3D terrain view for hiking/nature destinations (Mapbox GL)
- [ ] Offline map caching for trip mode (PWA)
- [ ] User contribution layer (user-added pins for hidden gems)
- [ ] Real-time crowd indicators (busy/quiet based on community data)

#### Destination Info Advanced
- [ ] AI-generated destination summaries (aggregate from reviews)
- [ ] "Best time to visit" analysis based on weather + festival data
- [ ] Price trend charts for flights and accommodations
- [ ] Comparison tool (compare two destinations side by side)
- [ ] Nearby destination clusters ("While you're in 강원도, also visit...")
- [ ] Multi-language support for destination pages (Papago API)
- [ ] User-contributed tips attached to specific destinations

#### Planner Advanced
- [ ] Collaborative real-time editing (multiple users edit same trip)
- [ ] AI itinerary suggestions ("Plan my 3-day trip to Busan")
- [ ] Template itineraries from popular community-shared trips
- [ ] Clone & customize community itineraries
- [ ] Integration with booking platforms (deep links to hotels, flights)
- [ ] Trip cost splitting among travelers (who paid what)
- [ ] Daily budget alerts and spending tracking during trip
- [ ] Offline access to itinerary (PWA/service worker)
- [ ] Post-trip expense report generation

#### Community Advanced
- [ ] Travel buddy matching (동행 구하기)
- [ ] Personal travel map on profile (world map of visited places)
- [ ] Travel stats dashboard (countries, cities, days, spending)
- [ ] Photo contests by destination or theme
- [ ] Verified reviewer program
- [ ] Content moderation: spam filter, profanity filter, report system, admin dashboard
- [ ] SEO-optimized community content for organic traffic
- [ ] RSS feed for new content by destination

#### Platform & Monetization
- [ ] Progressive Web App (PWA) with offline support
- [ ] Push notifications (trip reminders, new replies, travel alerts)
- [ ] Affiliate links for hotels/flights (Travelpayouts, Amadeus)
- [ ] Premium features tier (unlimited trips, AI planner, ad-free)
- [ ] Destination-sponsored content (clearly labeled)
- [ ] Analytics dashboard for content performance

---

## Appendix A: Tech Stack Recommendation

| Layer              | Technology                                    | Rationale                                |
|-------------------|-----------------------------------------------|------------------------------------------|
| **Frontend**       | Next.js (React) + TypeScript                  | SSR for SEO, app router, React ecosystem |
| **Styling**        | Tailwind CSS + shadcn/ui                      | Rapid UI development, consistent design  |
| **State Mgmt**     | Zustand or Jotai                              | Lightweight, good for map state          |
| **Maps (Domestic)**| Kakao Map API                                 | Best Korean map data, free               |
| **Maps (Intl)**    | Leaflet + Mapbox GL JS                        | Open source + custom styling             |
| **Drag & Drop**    | @dnd-kit/core                                 | Accessible, performant, React-native     |
| **Backend**        | Next.js API Routes or Nest.js                 | Full-stack JS, good API structure        |
| **Database**       | PostgreSQL + PostGIS                          | Spatial queries for location data        |
| **ORM**            | Prisma                                        | Type-safe, great DX, migration support   |
| **Auth**           | NextAuth.js (Auth.js)                         | Kakao/Google social login support        |
| **File Storage**   | AWS S3 / Cloudflare R2                        | User-uploaded photos                     |
| **Cache**          | Redis                                         | API response caching, session store      |
| **Search**         | Meilisearch or Elasticsearch                  | Full-text search for destinations/posts  |
| **Deployment**     | Vercel or AWS                                 | Edge functions, CDN, auto-scaling        |

## Appendix B: Database Schema Overview (Key Entities)

```
User
  ├── id, email, name, profileImage, bio, createdAt
  ├── has many: Trip, Post, Comment, Bookmark, Follow

Destination
  ├── id, name, nameKo, type (domestic/international)
  ├── country, region, city, address
  ├── latitude, longitude, geometry (PostGIS)
  ├── category, tags[], averageRating
  ├── has many: Attraction, Restaurant, Accommodation, Event

Trip (Planner)
  ├── id, userId, title, destinationId
  ├── startDate, endDate, travelerCount, status
  ├── isPublic, shareLink
  ├── has many: TripDay → TripItem
  ├── has many: BudgetItem

TripItem
  ├── id, tripDayId, destinationId/attractionId
  ├── startTime, duration, orderIndex
  ├── notes, cost, category

Post
  ├── id, userId, type (review/tip/qna/photo/itinerary/buddy)
  ├── title, body, destinationId, rating
  ├── likeCount, commentCount, viewCount
  ├── has many: Comment, PostImage, PostTag

Comment
  ├── id, postId, userId, parentCommentId (for threading)
  ├── body, likeCount, isBestAnswer

Bookmark
  ├── id, userId, targetType (destination/post/trip)
  ├── targetId, collectionId
```

---

## Appendix C: Key UX Principles

1. **Map-first, always.** Every screen should maintain spatial context. Users should never feel "lost" from the map.
2. **Progressive disclosure.** Show summary first (marker > card > sidebar > full page). Do not overwhelm with data upfront.
3. **Seamless domestic/international switch.** Both modes share the same UI patterns; only the data sources and map providers change.
4. **Mobile-native feel.** Bottom sheet pattern for mobile map interaction. Swipe gestures. Touch-friendly markers.
5. **Korean language first.** All UI in Korean by default; English as secondary. API data served in Korean where available.
6. **Offline resilience.** Cache critical trip data locally. Planner should work offline via service worker.
7. **Community content enriches data.** User reviews, photos, and tips appear alongside API-sourced data on destination pages. The line between "official" and "community" content should be clear but seamlessly integrated.
