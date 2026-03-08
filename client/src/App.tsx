import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Products from './pages/Products';
import Services from './pages/Services';
import Contact from './pages/Contact';
import News from './pages/News';
import AdminNews from './pages/AdminNews';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

type Page = 'home' | 'products' | 'services' | 'contact' | 'news' | 'admin';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const { language, setLanguage, t } = useLanguage();

  // Support /admin/news URL path for admin access
  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/admin/news' || path === '/admin') {
      setCurrentPage('admin');
    }
  }, []);

  const menuItems = [
    { id: 'home', label: t('nav.home') },
    { id: 'products', label: t('nav.products') },
    { id: 'services', label: t('nav.services') },
    { id: 'contact', label: t('nav.contact') },
    { id: 'news', label: t('nav.news') },
  ];

  // make sure to consider if you need authentication for certain routes
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
      {/* Navigation */}
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(167, 32, 39, 0.1)',
          padding: '0 40px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '70px',
          position: 'relative',
        } as React.CSSProperties}
      >
        <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id as Page)}
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

        {/* Language Switcher */}
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
            }}
            onMouseEnter={(e) => {
              if (language !== 'zh') {
                e.currentTarget.style.backgroundColor = 'rgba(167, 32, 39, 0.1)';
              }
            }}
            onMouseLeave={(e) => {
              if (language !== 'zh') {
                e.currentTarget.style.backgroundColor = 'transparent';
              }
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
            }}
            onMouseEnter={(e) => {
              if (language !== 'en') {
                e.currentTarget.style.backgroundColor = 'rgba(167, 32, 39, 0.1)';
              }
            }}
            onMouseLeave={(e) => {
              if (language !== 'en') {
                e.currentTarget.style.backgroundColor = 'transparent';
              }
            }}
          >
            English
          </button>
        </div>
      </nav>

      {/* Page Content */}
      <main>
        {currentPage === 'home' && <Home />}
        {currentPage === 'products' && <Products />}
        {currentPage === 'services' && <Services />}
        {currentPage === 'contact' && <Contact />}
        {currentPage === 'news' && <News />}
        {currentPage === 'admin' && <AdminNews />}
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
