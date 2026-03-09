import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const bannerUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/bantou_new_6cf15ca7.jpg';

const Home = () => {
  const { t } = useLanguage();

  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      {/* Banner image - original size, no gap below nav */}
      <section
        style={{
          padding: 0,
          margin: 0,
          display: 'flex',
          justifyContent: 'center',
          lineHeight: 0,
        }}
      >
        <img
          src={bannerUrl}
          alt="IMOC 国际开源肉制品联盟"
          style={{
            display: 'block',
            maxWidth: '100%',
          }}
        />
      </section>

      {/* Company Description */}
      <section
        style={{
          padding: '80px 40px 60px 40px',
          maxWidth: '1197px',
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
