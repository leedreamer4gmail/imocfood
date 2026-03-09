import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Services = () => {
  const marketingQrUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/市场部微信_f2920d6e.jpg';
  const { t } = useLanguage();

  const services = [
    {
      title: t('services.service1'),
      description: t('services.service1_desc'),
    },
    {
      title: t('services.service2'),
      description: t('services.service2_desc'),
    },
    {
      title: t('services.service3'),
      description: t('services.service3_desc'),
    },
    {
      title: t('services.service4'),
      description: t('services.service4_desc'),
    },
    {
      title: t('services.service5'),
      description: t('services.service5_desc'),
    },
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '60px 20px' }}>
      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: 2fr 1px 1fr;
          gap: 40px;
          align-items: flex-start;
        }
        .services-divider {
          background-color: #a72027;
          height: 100%;
          min-height: 600px;
        }
        .services-contact-title {
          white-space: nowrap;
        }
        .services-qr img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
        }
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .services-divider {
            height: 2px !important;
            min-height: unset !important;
            width: 100% !important;
          }
          .services-qr img {
            width: 100% !important;
            max-width: 100% !important;
          }
        }
      `}</style>

      <div style={{ maxWidth: '1197px', margin: '0 auto' }}>
        <div className="services-grid">
          {/* Left Column - Services List */}
          <div>
            <h2
              style={{
                fontSize: '24px',
                fontWeight: '600',
                color: '#333333',
                margin: '0 0 40px 0',
              }}
            >
              {t('services.title')}
            </h2>

            <div style={{ fontSize: '14px' }}>
              {services.map((service, index) => (
                <div
                  key={index}
                  style={{
                    marginBottom: '30px',
                    paddingBottom: '30px',
                    borderBottom: index < services.length - 1 ? '1px solid #e0e0e0' : 'none',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        backgroundColor: '#a72027',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ffffff',
                        fontSize: '14px',
                        fontWeight: '600',
                        flexShrink: 0,
                      }}
                    >
                      {index + 1}
                    </div>
                    <div>
                      <h4 style={{ color: '#333333', fontSize: '15px', fontWeight: '600', margin: '0 0 8px 0' }}>
                        {service.title}
                      </h4>
                      <p style={{ color: '#666666', fontSize: '13px', margin: '0', lineHeight: '1.5' }}>
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Red Divider Line */}
          <div className="services-divider" />

          {/* Right Column - Contact Information */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
            <h3
              className="services-contact-title"
              style={{
                color: '#a72027',
                fontSize: '18px',
                fontWeight: '600',
                margin: '0 0 30px 0',
                textAlign: 'center',
              }}
            >
              {t('services.contact')}
            </h3>

            {/* WeChat QR Code */}
            <div className="services-qr" style={{ textAlign: 'center', width: '100%' }}>
              <img
                src={marketingQrUrl}
                alt="Marketing Department WeChat"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
