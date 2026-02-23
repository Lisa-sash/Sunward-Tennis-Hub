# Sunward Park Tennis Community Platform

## Overview
A web-based community platform for a tennis social group at Sunward Park, welcoming players of all skill levels. Features a hero section, about/schedule info, photo gallery, upcoming tournaments, and contact footer.

## Tech Stack
- Frontend: React + Vite + TailwindCSS + shadcn/ui
- Backend: Express.js (serves frontend only, no API/database)
- Routing: wouter (frontend)

## Project Structure
- `client/src/pages/home.tsx` - Main landing page
- `client/src/components/` - navbar, hero, about, gallery, tournaments, footer
- `client/src/data/content.ts` - Static data for tournaments and gallery images
- `server/index.ts` - Express server (serves Vite frontend only)
- `server/routes.ts` - Empty route handler (no API endpoints)
- `shared/schema.ts` - TypeScript interfaces for Tournament and GalleryImage
- `client/public/images/` - Static images for gallery and events

## Design
- Primary: #2E7D32 (tennis green), Accent: #FFB300 (tennis ball yellow), Chart-1/Sky: #1976D2
- Fonts: Poppins (headings), Open Sans (body)
- Single-page scrolling layout with smooth navigation
- Transparent navbar that transitions on scroll
- Gradient text effects, hover animations, subtle glow backgrounds

## Data
- All tournament and gallery data is hardcoded in `client/src/data/content.ts`
- No database or API endpoints - purely static frontend
