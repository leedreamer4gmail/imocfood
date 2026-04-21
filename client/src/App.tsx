import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Products from './pages/Products';
import Services from './pages/Services';
import Contact from './pages/Contact';
import News from './pages/News';
import AdminNews from './pages/AdminNews';
import OEM from './pages/OEM';
import Dropshipping from './pages/Dropshipping';
import Factory from './pages/Factory';
import B2BKnowledge from './pages/B2BKnowledge';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

type Page = 'home' | 'products' | 'services' | 'contact' | 'news' | 'admin' | 'oem' | 'dropshipping' | 'factory' | 'b2b';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  // Support URL paths for direct navigation
  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/admin/news' || path === '/admin') {
      setCurrentPage('admin');
    } else if (path === '/oem') {
      setCurrentPage('oem');
    } else if (path === '/dropshipping') {
      setCurrentPage('dropshipping');
    } else if (path === '/b2b' || path === '/b2b-knowledge') {
      setCurrentPage('b2b');
    }
  }, []);

  const menuItems = [
    { id: 'home', label: t('nav.home') },
    { id: 'products', label: t('nav.products') },
    { id: 'services', label: t('nav.services') },
    { id: 'factory', label: t('nav.factory') },
    { id: 'contact', label: t('nav.contact') },
    { id: 'news', label: t('nav.news') },
  ];

  // Dynamic page title and meta description for SEO
  useEffect(() => {
    const pageMeta: Record<Page, { title: string; description: string }> = {
      home: {
        title: 'IMOC牛肉干-薄片牛肉干-和牛脆片-OEM代工-国际开源肉制品联盟',
        description: 'IMOC国际开源肉制品联盟 - 专业提供薄片牛肉干、和牛脆片、谷饲牛肉干等高品质肉制品。提供OEM代工、一件代发、出口等服务。',
      },
      products: {
        title: 'IMOC产品列表 - 牛肉干、猪肉干、鸡肉干、海鲜干 | IMOC Food',
        description: 'IMOC全系列肉制品：牛肉干、和牛脆片、薄片牛肉干、猪肉干、鸡肉干、海鲜干，全部采用高品质原料，无添加天然健康。',
      },
      services: {
        title: '提供服务 - OEM代工/一件代发/大宗订货/来料加工 | IMOC Food',
        description: 'IMOC提供大宗订货、来料加工、OEM贴牌、一件代发、平台佣金五大服务，全面满足超市、电商、网红等各类客户需求。',
      },
      contact: {
        title: '联系我们 - 李梦/潘海露/姚嘉琳 | IMOC Food',
        description: 'IMOC联系方式：原料采购联系李梦(leedreamer4@gmail.com)，OEM合作联系潘海露，大宗发货联系姚嘉琳(yjl_yao@126.com)。广州、南宁、重庆均设生产基地。',
      },
      news: {
        title: '最新动态 - IMOC公司动态与行业资讯 | IMOC Food',
        description: 'IMOC最新动态：公司新闻、产品发布、合作公告、行业资讯。了解IMOC国际开源肉制品联盟的最新动向。',
      },
      admin: {
        title: '管理后台 | IMOC Food',
        description: 'IMOC管理后台',
      },
      oem: {
        title: 'OEM代工服务 - 牛肉干定制生产 | IMOC Food',
        description: 'IMOC提供OEM全流程代工服务，包括配方研发、包装定制、质量认证和物流支持，专注于牛肉干等肉制品定制生产。',
      },
      dropshipping: {
        title: '一件代发服务 - 电商卖家首选 | IMOC Food',
        description: 'IMOC一件代发：您接单我们发货，省心省力。稳定的产品质量和可靠的物流配送，适合各类电商卖家。',
      },
      factory: {
        title: '工厂资质 - FSSC22000 & HACCP认证 | IMOC Food',
        description: '重庆快煮食品有限公司持有FSSC22000食品安全体系认证和HACCP危害分析关键控制点认证，生产许可证SC10450015550244，占地6000平方米，员工100人。',
      },
      b2b: {
        title: '牛肉干代工/OEM/ODM/贴牌生产知识库 | IMOC Food',
        description: 'IMOC B2B代工知识库：牛肉干代工、牛肉干OEM、进口牛肉干贴牌、薄脆牛肉干工厂、食品ODM代工、休闲食品代工、零食贴牌生产、牛肉干供应链全解析。',
      },
    };
    const meta = pageMeta[currentPage];
    if (meta) {
      document.title = meta.title;
      const descEl = document.querySelector('meta[name="description"]');
      if (descEl) descEl.setAttribute('content', meta.description);
      const ogTitleEl = document.querySelector('meta[property="og:title"]');
      if (ogTitleEl) ogTitleEl.setAttribute('content', meta.title);
      const ogDescEl = document.querySelector('meta[property="og:description"]');
      if (ogDescEl) ogDescEl.setAttribute('content', meta.description);
    }
  }, [currentPage]);

  const navigate = (page: Page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
      {/* Navigation */}
      <nav
        style={{
          position: 'sticky' as const,
          top: 0,
          zIndex: 1000,
          backgroundColor: 'rgba(255, 255, 255, 0.97)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(167, 32, 39, 0.1)',
        }}
      >
        {/* Desktop nav */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '70px',
            padding: '0 40px',
            position: 'relative',
          }}
          className="desktop-nav"
        >
          <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(item.id as Page)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '16px',
                  fontWeight: currentPage === item.id ? '600' : '400',
                  color: currentPage === item.id ? '#a72027' : '#333333',
                  cursor: 'pointer',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  transition: 'all 0.3s ease',
                  backgroundColor: currentPage === item.id ? 'rgba(167, 32, 39, 0.1)' : 'transparent',
                  whiteSpace: 'nowrap' as const,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#a72027';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    currentPage === item.id ? 'rgba(167, 32, 39, 0.1)' : 'transparent';
                  e.currentTarget.style.color = currentPage === item.id ? '#a72027' : '#333333';
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Language Switcher - desktop */}
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', position: 'absolute', right: '40px' }}>
            <button
              onClick={() => setLanguage('zh')}
              style={{
                background: language === 'zh' ? '#a72027' : 'transparent',
                color: language === 'zh' ? '#ffffff' : '#333333',
                border: '1px solid #a72027',
                padding: '6px 12px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: language === 'zh' ? '600' : '400',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap' as const,
              }}
            >
              中文
            </button>
            <button
              onClick={() => setLanguage('en')}
              style={{
                background: language === 'en' ? '#a72027' : 'transparent',
                color: language === 'en' ? '#ffffff' : '#333333',
                border: '1px solid #a72027',
                padding: '6px 12px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: language === 'en' ? '600' : '400',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap' as const,
              }}
            >
              English
            </button>
          </div>
        </div>

        {/* Mobile nav bar */}
        <div
          className="mobile-nav"
          style={{
            display: 'none',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '56px',
            padding: '0 16px',
          }}
        >
          {/* Current page label */}
          <span style={{ fontSize: '16px', fontWeight: '600', color: '#a72027' }}>
            {menuItems.find(m => m.id === currentPage)?.label || 'IMOC'}
          </span>

          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            {/* Language switcher - mobile */}
            <button
              onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
              style={{
                background: 'transparent',
                color: '#a72027',
                border: '1px solid #a72027',
                padding: '4px 8px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '12px',
                fontWeight: '600',
              }}
            >
              {language === 'zh' ? 'EN' : '中文'}
            </button>

            {/* Hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px',
                display: 'flex',
                flexDirection: 'column' as const,
                gap: '5px',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              aria-label="Toggle menu"
            >
              <span style={{
                display: 'block',
                width: '22px',
                height: '2px',
                backgroundColor: '#a72027',
                transition: 'all 0.3s ease',
                transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
              }} />
              <span style={{
                display: 'block',
                width: '22px',
                height: '2px',
                backgroundColor: '#a72027',
                transition: 'all 0.3s ease',
                opacity: mobileMenuOpen ? 0 : 1,
              }} />
              <span style={{
                display: 'block',
                width: '22px',
                height: '2px',
                backgroundColor: '#a72027',
                transition: 'all 0.3s ease',
                transform: mobileMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
              }} />
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div
            className="mobile-dropdown"
            style={{
              backgroundColor: '#ffffff',
              borderTop: '1px solid rgba(167, 32, 39, 0.1)',
              padding: '8px 0',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}
          >
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(item.id as Page)}
                style={{
                  display: 'block',
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  fontSize: '16px',
                  fontWeight: currentPage === item.id ? '600' : '400',
                  color: currentPage === item.id ? '#a72027' : '#333333',
                  cursor: 'pointer',
                  padding: '14px 24px',
                  textAlign: 'left' as const,
                  backgroundColor: currentPage === item.id ? 'rgba(167, 32, 39, 0.06)' : 'transparent',
                  borderLeft: currentPage === item.id ? '3px solid #a72027' : '3px solid transparent',
                  transition: 'all 0.2s ease',
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-nav { display: flex !important; }
        }
        @media (min-width: 769px) {
          .desktop-nav { display: flex !important; }
          .mobile-nav { display: none !important; }
          .mobile-dropdown { display: none !important; }
        }
      `}</style>

      {/* Small banner for non-home pages (directly below nav, no gap) */}
      {currentPage !== 'home' && currentPage !== 'admin' && (
        <div style={{ display: 'flex', justifyContent: 'center', padding: 0, margin: 0, lineHeight: 0 }}>
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/banner-small_6cba063a.jpg"
            alt="IMOC international meat open-source community 国际开源肉制品联盟"
            style={{ display: 'block', maxWidth: '100%' }}
          />
        </div>
      )}

      {/* Page Content */}
      <main style={{ margin: 0, padding: 0, minHeight: '60vh' }}>
        {currentPage === 'home' && <Home />}
        {currentPage === 'products' && <Products />}
        {currentPage === 'services' && <Services />}
        {currentPage === 'contact' && <Contact />}
        {currentPage === 'news' && <News />}
        {currentPage === 'oem' && <OEM />}
        {currentPage === 'dropshipping' && <Dropshipping />}
        {currentPage === 'factory' && <Factory />}
        {currentPage === 'admin' && <AdminNews />}
        {currentPage === 'b2b' && <B2BKnowledge />}
      </main>

      {/* Footer - hide on admin page */}
      {currentPage !== 'admin' && (
        <footer
          style={{
            backgroundColor: '#f5f5f5',
            borderTop: '1px solid #e0e0e0',
            padding: '40px',
            textAlign: 'center',
            color: '#666666',
            fontSize: '14px',
            marginTop: '60px',
          }}
        >
          <p style={{ margin: '10px 0' }}>© 2026 IMOC International Meat Open-source Community. All rights reserved.</p>
          <p style={{ margin: '10px 0' }}>国际开源肉制品联盟 版权所有</p>
          <p style={{ margin: '10px 0', fontSize: '12px' }}>
            总部地址：广州 | 生产基地：广州、南宁、重庆
          </p>
        </footer>
      )}
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
