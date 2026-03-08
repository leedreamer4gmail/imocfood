import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const News = () => {
  const today = new Date();
  const dateString = `${today.getFullYear()}年${today.getMonth() + 1}月${today.getDate()}日`;
  const { t } = useLanguage();

  const news = [
    {
      date: dateString,
      title: '🚀 IMOC Official Website Launch',
      description:
        'The official website of the International Meat Open-Source Community is now live! We are committed to providing high-quality meat products to consumers worldwide. We welcome partners to join our alliance.',
      category: 'Company News',
    },
    {
      date: dateString,
      title: '📦 New Product Launch Coming Soon',
      description:
        'Stay tuned for our upcoming new product series. We are developing more innovative meat products to bring you a fresh culinary experience.',
      category: 'Product News',
    },
    {
      date: dateString,
      title: '🤝 Inviting Partners to Collaborate',
      description:
        'Whether you are an e-commerce platform, retail store, or OEM partner, we look forward to working with you to create a better future. Please contact our marketing department for more collaboration opportunities.',
      category: 'Partnership Invitation',
    },
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '60px 40px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2
          style={{
            fontSize: '32px',
            fontWeight: '600',
            color: '#333333',
            marginBottom: '50px',
            textAlign: 'center',
          }}
        >
          {t('news.title')}
        </h2>

        {/* News List */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
          }}
        >
          {news.map((item, index) => (
            <div
              key={index}
              style={{
                padding: '30px',
                backgroundColor: '#fafafa',
                borderRadius: '8px',
                border: '2px solid transparent',
                borderLeft: '4px solid #a72027',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(167, 32, 39, 0.15)';
                e.currentTarget.style.transform = 'translateX(8px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '12px',
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: '18px',
                      fontWeight: '600',
                      color: '#333333',
                      margin: '0 0 8px 0',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '12px',
                      color: '#999999',
                      margin: '0',
                    }}
                  >
                    {item.date}
                  </p>
                </div>
                <span
                  style={{
                    display: 'inline-block',
                    padding: '4px 12px',
                    backgroundColor: '#a72027',
                    color: '#ffffff',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontWeight: '500',
                    whiteSpace: 'nowrap',
                    marginLeft: '20px',
                  }}
                >
                  {item.category}
                </span>
              </div>
              <p
                style={{
                  fontSize: '14px',
                  color: '#666666',
                  lineHeight: '1.6',
                  margin: '0',
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
};

export default News;
