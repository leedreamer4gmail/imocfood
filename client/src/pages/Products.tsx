import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Products = () => {
  const characterImageUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/4man_b5b08e13.jpg';
  const taobaoQrUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/tb二维码_5374b85d.png';
  const { t } = useLanguage();

  const productCategories = [
    {
      title: t('products.bull'),
      products: [
        t('products.bull_1'),
        t('products.bull_2'),
        t('products.bull_3'),
        t('products.bull_4'),
        t('products.bull_5'),
        t('products.bull_6'),
      ],
    },
    {
      title: t('products.pig'),
      products: [
        t('products.pig_1'),
        t('products.pig_2'),
        t('products.pig_3'),
        t('products.pig_4'),
        t('products.pig_5'),
      ],
    },
    {
      title: t('products.chicken'),
      products: [
        t('products.chicken_1'),
        t('products.chicken_2'),
        t('products.chicken_3'),
        t('products.chicken_4'),
        t('products.chicken_5'),
        t('products.chicken_6'),
      ],
    },
    {
      title: t('products.squid'),
      products: [
        t('products.squid_1'),
        t('products.squid_2'),
        t('products.squid_3'),
      ],
    },
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '60px 40px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Two-column layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1px 1fr',
            gap: '60px',
            alignItems: 'flex-start',
          }}
        >
          {/* Left Column - Characters and Responsibilities */}
          <div>
            {/* Character Image */}
            <div
              style={{
                marginBottom: '40px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <img
                src={characterImageUrl}
                alt="Product Characters"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                }}
              />
            </div>

            {/* Character Responsibilities - 4 columns in a row */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '20px',
                fontSize: '13px',
              }}
            >
              {productCategories.map((category, index) => (
                <div
                  key={index}
                  style={{
                    textAlign: 'center',
                  }}
                >
                  <h4
                    style={{
                      color: '#a72027',
                      fontSize: '13px',
                      fontWeight: '600',
                      marginBottom: '12px',
                      margin: '0 0 12px 0',
                      lineHeight: '1.4',
                    }}
                  >
                    {category.title}
                  </h4>
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      textAlign: 'center',
                      fontSize: '13px',
                    }}
                  >
                    {category.products.map((item, rIndex) => (
                      <li
                        key={rIndex}
                        style={{
                          padding: '4px 0',
                          color: '#333333',
                          fontSize: '13px',
                        }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Red Divider Line */}
          <div
            style={{
              backgroundColor: '#a72027',
              height: '100%',
              minHeight: '600px',
            }}
          />

          {/* Right Column - Purchase Information */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}
          >
            <h3
              style={{
                color: '#a72027',
                fontSize: '20px',
                fontWeight: '600',
                marginBottom: '40px',
                textAlign: 'center',
                margin: '0 0 40px 0',
              }}
            >
              {t('products.buy')}
            </h3>

            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <a
                href="https://imoc.taobao.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  marginBottom: '12px',
                  textDecoration: 'none',
                  color: '#ffffff',
                  fontSize: '16px',
                  fontWeight: '600',
                  padding: '12px 32px',
                  backgroundColor: '#a72027',
                  borderRadius: '6px',
                  transition: 'all 0.3s ease',
                  border: 'none',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#8a1a20';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#a72027';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                {t('products.taobao')} →
              </a>
              <p
                style={{
                  margin: '0',
                  color: '#666666',
                  fontSize: '12px',
                  wordBreak: 'break-all',
                }}
              >
                https://imoc.taobao.com/
              </p>
            </div>

            {/* Taobao QR Code */}
            <div
              style={{
                textAlign: 'center',
              }}
            >
              <img
                src={taobaoQrUrl}
                alt="Taobao QR Code"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                  marginBottom: '16px',
                }}
              />
              <p
                style={{
                  marginTop: '0',
                  color: '#666666',
                  fontSize: '13px',
                }}
              >
                {t('news.news1_title')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
