# IMOC Website TODO

## Completed Features
- [x] Basic 5-page website (Home, Products, Services, Contact, News)
- [x] Bilingual support (Chinese/English) with language toggle
- [x] SEO/GEO optimization with 219 keyword matrix
- [x] Structured data (Organization, Product, LocalBusiness)
- [x] Sitemap.xml and robots.txt
- [x] Navigation menu centered, language toggle on right
- [x] Services page translation fixes
- [x] Contact page with QR codes and addresses
- [x] Products page with 4 animal characters
- [x] Backend upgrade to web-db-user (tRPC + database)
- [x] Database schema: news_articles table
- [x] tRPC news router with CRUD operations
- [x] Auto-translation from Chinese to English via LLM
- [x] Admin CMS interface (/admin/news) for managing articles
- [x] News page updated to fetch from database
- [x] Unit tests for news router (12 tests passing)

## Pending
- [x] Set admin role for website owner in database (auto via OWNER_OPEN_ID)
- [x] Push to GitHub and deploy to Vercel
- [x] Migrate news storage from MySQL to Chroma Cloud v2 API
- [x] Fix Vercel 404 by adapting to serverless functions
- [x] Add CHROMA_API_KEY and CHROMA_TENANT env vars
- [x] All 13 tests passing with Chroma mock
- [ ] Add CHROMA_API_KEY and CHROMA_TENANT to Vercel environment variables
- [ ] Add image upload support to CMS (optional)
- [ ] Add rich text editor to CMS (optional)

## Auth Replacement (Manus OAuth → Simple Password Auth)
- [x] Create simple username-only admin login (no Manus OAuth dependency)
- [x] Hardcode admin username 'leedreamer' in code (no env var override risk)
- [x] Create AdminLogin.tsx login page with username form
- [x] Issue JWT session cookie on successful login (self-contained, no manus.im)
- [x] Update AdminNews.tsx to use new auth check (/api/admin/me)
- [x] Create /api/admin/login, /api/admin/me, /api/admin/logout endpoints
- [x] Remove Manus OAuth redirect from frontend
- [ ] Test full login → CMS → publish flow on Vercel production
