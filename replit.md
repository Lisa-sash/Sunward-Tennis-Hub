# Sunward Park Tennis Community Platform

## Overview
A web-based community platform for a tennis social group at Sunward Park, welcoming players of all skill levels. Features a hero section, about/schedule info, photo gallery, upcoming tournaments, and contact footer.

## Tech Stack
- Frontend: React + Vite + TailwindCSS + shadcn/ui
- Backend: Express.js
- Database: PostgreSQL with Drizzle ORM
- Routing: wouter (frontend), Express (backend API)

## Project Structure
- `client/src/pages/home.tsx` - Main landing page
- `client/src/components/` - navbar, hero, about, gallery, tournaments, footer
- `server/routes.ts` - API endpoints (/api/tournaments, /api/gallery)
- `server/storage.ts` - Database storage interface
- `server/seed.ts` - Seed data for tournaments and gallery
- `server/db.ts` - Database connection
- `shared/schema.ts` - Drizzle schemas for tournaments and gallery_images tables
- `client/public/images/` - Static images for gallery and events

## Design
- Primary: #2E7D32 (tennis green), Accent: #FFB300 (tennis ball yellow), Chart-1/Sky: #1976D2
- Fonts: Poppins (headings), Open Sans (body)
- Single-page scrolling layout with smooth navigation

## API Routes
- GET /api/tournaments - Returns all tournaments
- GET /api/gallery - Returns all gallery images
