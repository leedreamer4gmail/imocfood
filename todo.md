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
- [x] Test full login → CMS → publish flow on Vercel production (all APIs verified working)

## New Changes (2026-03-09)
- [x] Fix Chroma 422 error (added dummy embeddings [0.0] to all add/update calls)
- [x] Simplify news CMS to single text input (remove title/author/category fields)
- [x] Replace homepage logo+chanpin images with 版头.jpg
- [x] Add 小版头.jpg banner below nav on all non-home pages
- [x] Fix 版头.jpg and 小版头.jpg to display at original size (not stretched full-width)
- [x] Add pagination to public news page (20 per page, with page number controls)
- [x] Add bulkDelete tRPC procedure for batch deletion
- [x] Redesign admin CMS as compact list (one row per post, checkbox + status dot + content preview + date + delete button)
- [x] Add bulk delete toolbar with select-all checkbox

## Layout Fixes (2026-03-09 batch 2)
- [x] Constrain all page content width to 1197px (matching banner width)
- [x] Services page: 2/3 left + 1/3 right column split with red divider
- [x] Contact page: 2/3 left (info+locations) + 1/3 right (QR codes) with red divider
- [x] Products page: 2/3 left + 1/3 right column split
- [x] Home page description section max-width set to 1197px
- [x] News page max-width set to 1197px
- [x] Fix news page navigation jitter: scroll to top on nav click, min-height on main
