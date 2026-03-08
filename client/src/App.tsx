import React, { useState } from 'react';
import Home from './pages/Home';
import Products from './pages/Products';
import Services from './pages/Services';
import Contact from './pages/Contact';
import News from './pages/News';

type Page = 'home' | 'products' | 'services' | 'contact' | 'news';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const menuItems = [
    { id: 'home', label: '主页' },
    { id: 'products', label: '我们的产品' },
    { id: 'services', label: '提供服务' },
    { id: 'contact', label: '联系我们' },
    { id: 'news', label: '最新动态' },
  ];

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
          gap: '40px',
          height: '70px',
          alignItems: 'center',
        }}
      >
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
      </nav>

      {/* Page Content */}
      <main>
        {currentPage === 'home' && <Home />}
        {currentPage === 'products' && <Products />}
        {currentPage === 'services' && <Services />}
        {currentPage === 'contact' && <Contact />}
        {currentPage === 'news' && <News />}
      </main>

      {/* Footer */}
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
    </div>
  );
}
