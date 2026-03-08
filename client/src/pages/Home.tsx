import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Home = () => {
  const logoUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/logoweb_eed8c41b.jpg';
  const productImageUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/chanpin_e5ff5e4d.jpg';
  const { t } = useLanguage();

  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      {/* Logo Section */}
      <section
        style={{
          padding: '60px 40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={logoUrl}
          alt="IMOC Logo"
          style={{
            maxWidth: '400px',
            width: '100%',
            height: 'auto',
            marginBottom: '80px',
          }}
        />

        {/* Products Image - Full Width */}
        <img
          src={productImageUrl}
          alt="Products"
          style={{
            width: '100%',
            maxWidth: '1200px',
            height: 'auto',
            display: 'block',
          }}
        />
      </section>

      {/* Company Description */}
      <section
        style={{
          padding: '80px 40px 60px 40px',
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            fontSize: '16px',
            lineHeight: '1.8',
            color: '#333333',
            textAlign: 'left',
          }}
        >
          <p style={{ marginBottom: '20px' }}>
            <span style={{ color: '#a72027', fontWeight: '700', fontSize: '16px' }}>
              {t('home.title')}
            </span>
          </p>
          <p style={{ marginBottom: '20px' }}>
            {t('home.description')}
          </p>
          <p style={{ marginBottom: '20px' }}>
            {t('home.description2')}
          </p>
          <p style={{ marginBottom: '20px' }}>
            {t('home.description3')}
          </p>
          <p style={{ marginBottom: '20px', color: '#a72027', fontWeight: '600' }}>
            {t('home.description4')}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
