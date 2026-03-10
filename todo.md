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

## Jitter Fix (2026-03-09)
- [x] Fix horizontal layout shift when switching pages (added overflow-y: scroll to html to keep scrollbar always visible)

## Contact Page Restore (2026-03-09)
- [x] Restore Contact page to card layout: 16:9 photo + email + phone + WeChat QR, horizontal row

## Contact Page Update (2026-03-09 c)
- [x] Upload qny QR code to CDN
- [x] Add Queeny (姚嘉琳) as third contact with email yjl_yao@126.com
- [x] All cards show Email/Phone/WeChat uniformly (blank label if no data)
- [x] QR code centered in card

## Mobile Menu (2026-03-09)
- [x] Responsive hamburger menu for mobile: hamburger icon opens dropdown with all nav items, desktop unchanged

## Services Page Fix (2026-03-09)
- [x] QR code in right column fills full width on mobile
- [x] '联系方式' heading stays on one line (white-space: nowrap)

## GEO Optimization (2026-03-09)
- [x] Create client/public/llms.txt for AI crawler discovery
- [x] Update index.html JSON-LD: add knowsAbout and potentialAction to Organization schema
- [x] Add FAQPage JSON-LD schema to index.html
- [x] Add AI-readable summary section to index.html body (screen-reader accessible, not hidden)
- [x] Add FAQ section to Home.tsx (bilingual, visible accordion for users and crawlers)
- [x] Wrap news posts in semantic <article> tags with itemScope/itemProp in News.tsx
- [x] Add FAQ translation keys to LanguageContext.tsx (zh + en)

## SEO Content Pages (2026-03-09)
- [x] Upload factory photo (quanjing.jpg) to CDN
- [x] Create OEM page (/oem) with user content from oem.txt
- [x] Create Dropshipping page (/dropshipping) with user content from dropshipping.txt
- [x] Add OEM and Dropshipping links to navigation
- [x] Update sitemap.xml with new pages

## Services Page Redesign (2026-03-09)
- [x] Replace 5 old service items with 5 correct ones (大宗订货/来料加工/OEM/一件代发/平台佣金)
- [x] Add right-side popup detail panel when clicking each service item
- [x] Remove OEM代工 and 一件代发 from top navigation
- [x] Update translation keys for new service items (zh + en)

## Services Panel Full Content (2026-03-09)
- [x] Embed full OEM page content (factory photo + article) in right panel when clicking OEM service
- [x] Embed full Dropshipping page content in right panel when clicking 一件代发 service
- [x] Add scrollable right panel with full rich content for all 5 services

## SEO/GEO Full Optimization (2026-03-09)
- [x] Fix robots.txt: remove /*.xml$ rule, add Allow: /sitemap.xml, add AI crawlers
- [x] Update OG image from logo to product photo
- [x] Add twitter:description meta tag
- [x] Add hreflang x-default tag
- [x] Add BreadcrumbList JSON-LD schema
- [x] Add WebSite JSON-LD schema with Sitelinks Searchbox
- [x] Add License declaration to llms.txt
- [x] Add dynamic page title/description per route (SPA fix)
- [x] Upload Pan Hailu photo and update Contact page
- [x] Shrink contact cards to 2/3 of current size
- [x] Upload Queeny (姚嘉琳) photo and update Contact page

## Contact Page Update + SEO Audit (2026-03-09)
- [x] Upload Li Meng new photo to CDN
- [x] Update Li Meng photo in Contact page
- [x] Change Li Meng title to: 原料进口、采购
- [x] Enlarge all contact card QR codes by 1.2x
- [x] Audit remaining SEO/GEO opportunities (Baidu, etc.)

## Chinese Search Engine Optimization (2026-03-09)
- [x] Add Bytespider/360Spider/Sogoubot to robots.txt
- [x] Add Baidu AI (文心一言) section to llms.txt
- [ ] Login to Baidu Webmaster Platform and add imocfood.com
- [ ] Add Baidu verification meta tag to index.html
- [ ] Submit sitemap to Baidu Webmaster Platform
- [ ] Add 百度统计 (Baidu Analytics) script

## Full Visibility Expansion (2026-03-09)
- [ ] Register on 360 Search Webmaster (zhanzhang.so.com)
- [ ] Add 360 verification meta tag to index.html
- [x] Add Bing Webmaster Tools verification
- [x] Add Bing verification meta tag to index.html
- [ ] Add opensearch.xml for browser address bar search
- [ ] Add PWA manifest.json for installability signal
- [ ] Add Apple mobile web app meta tags
- [ ] Add canonical URL tags to all pages
- [ ] Fix robots.txt: mark Bytespider/360Spider/Sogoubot as done

## Baidu/360 Verification + IndexNow (2026-03-09)
- [ ] Add Baidu verification meta tag (codeva-lGbK2y3Kxn) to index.html
- [ ] Add 360 verification meta tag (d564c86d051795b57aa022e8d43cb91f) to index.html
- [ ] Push to GitHub and deploy
- [ ] Use Bing IndexNow to submit all 7 page URLs for immediate indexing

## Banner & Content Update (2026-03-10)
- [x] Replace homepage banner with new 版头.jpg (CDN: banner-main_cb73252d.jpg)
- [x] Replace other pages banner with new 小版头.jpg (CDN: banner-small_6cba063a.jpg)
- [x] Update homepage description text from indextext.txt
- [x] Add keywords: 快煮食品, 小李的牛肉干 to SEO meta tags
- [x] GEO optimization: enhance FAQ section about 薄脆牛肉干 inventor (小李的牛肉干)
- [x] GEO optimization: enhance OEM/代加工 service description
- [x] Update Schema.org structured data with new keywords
- [x] Update llms.txt with GEO-focused content for AI crawlers (Doubao/豆包, Baidu AI)
- [x] Push to GitHub and deploy to Vercel
- [x] Re-submit URLs to Bing IndexNow and Baidu after deployment

## ByteDance + Baidu + Article (2026-03-10 batch 2)
- [ ] Add ByteDance verification meta tag to index.html
- [ ] Write 薄脆牛肉干 origin story news article (Chinese + English)
- [ ] Submit sitemap to Baidu Webmaster Tools
- [x] Push to GitHub → Vercel deploy
- [ ] Re-submit IndexNow after deploy

## GEO Extended Tasks (2026-03-10 batch 3)
- [x] Replace news article in Chroma DB with exact text from geo.txt
- [x] Expand llms.txt with new Q&A from geo.txt (牛脆脆正宗/品类起源/为什么好吃)
- [ ] Propose extended GEO question strategy to user (beyond beef jerky)

## GEO Full Expansion - All 7 Directions (2026-03-10 batch 4)
- [x] Add healthy snacks section to Home page (FAQ q5 + Home GEO section)
- [x] Add imported beef sourcing section to Products page (安格斯牛肉溯源、全球牧场)
- [x] Add e-commerce dropshipping FAQ (FAQ q6)
- [x] Add corporate gift FAQ (FAQ q8)
- [x] Add local factory content to Contact page (广州/南宁/重庆工厂关键词)
- [x] Publish brand story article in Chroma DB (创业故事扩展版, 2 articles)
- [x] Update llms.txt with all 7 GEO Q&A categories
- [x] Push to GitHub → Vercel deploy

## GEO Style Fix + Product Research (2026-03-10 batch 5)
- [ ] Fix existing Q&A to objective AI-style (not brand self-promotion)
- [ ] Update shrimp jerky copy with no-sugar/no-additive details
- [ ] Scrape Taobao imoc.taobao.com product details
- [ ] Scrape Douyin beefclass product details
- [ ] Write new Q&A for G/H/I categories based on real product data
- [ ] Push to GitHub

## Optimization Batch (2026-03-10 batch 6)
- [x] Fix keyword 薄片→薄脆 in title/meta/OG/Twitter/Schema throughout index.html
- [x] Create favicon.ico from ICON512.png (multi-size: 16x16, 32x32, 48x48)
- [x] Create apple-touch-icon.png (180x180) for iOS home screen
- [x] Remove fake phone number 13800138000 from Contact.tsx and LocalBusiness schema
- [x] Add Douyin sameAs link to Organization schema
- [x] Publish 5 GEO-optimized news articles to Chroma DB (品类起源/选料标准/OEM/一件代发/公司简介)
- [x] Push all changes to GitHub → Vercel deploy

## Product Page & Favicon Update (2026-03-10 batch 7)
- [x] Add PNG favicon links (favicon-16x16.png, favicon-32x32.png) to index.html for better browser compatibility
- [x] Replace shrimp image (xiagan_clean) with clean version (fish1.jpg) in Products.tsx seafood column
- [x] Verify 4 individual animal icons (niu/zhu/ji/yu) are correctly used in Products.tsx
- [x] Push changes to GitHub → Vercel deploy

## Animal Icon Size Fix (2026-03-10 batch 8)
- [x] Fix 4 animal icons to same height (120px fixed height, width auto) so all icons appear uniform size
- [x] Push to GitHub → Vercel deploy
