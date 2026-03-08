import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Services = () => {
  const marketingQrUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/市场部微信_f2920d6e.jpg';
  const { t } = useLanguage();

  const services = [
    {
      title: t('services.service1'),
      description: 'OEM manufacturing services with customization support',
    },
    {
      title: t('services.service2'),
      description: 'Strategic brand partnerships and collaboration opportunities',
    },
    {
      title: t('services.service3'),
      description: 'Complete e-commerce channel support and logistics',
    },
    {
      title: t('services.service4'),
      description: 'Comprehensive quality assurance and certification',
    },
    {
      title: t('services.service5'),
      description: 'Reliable logistics and distribution network',
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
          {/* Left Column - Services List */}
          <div>
            <h2
              style={{
                fontSize: '24px',
                fontWeight: '600',
                color: '#333333',
                marginBottom: '40px',
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
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                    }}
                  >
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
                      <h4
                        style={{
                          color: '#333333',
                          fontSize: '15px',
                          fontWeight: '600',
                          margin: '0 0 8px 0',
                        }}
                      >
                        {service.title}
                      </h4>
                      <p
                        style={{
                          color: '#666666',
                          fontSize: '13px',
                          lineHeight: '1.6',
                          margin: 0,
                        }}
                      >
                        {service.description}
                      </p>
                    </div>
                  </div>
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

          {/* Right Column - Contact Information */}
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
                fontSize: '18px',
                fontWeight: '600',
                marginBottom: '30px',
                textAlign: 'center',
                margin: '0 0 30px 0',
              }}
            >
              {t('services.contact')}
            </h3>

            {/* WeChat QR Code */}
            <div
              style={{
                textAlign: 'center',
              }}
            >
              <img
                src={marketingQrUrl}
                alt="Marketing Department WeChat"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
