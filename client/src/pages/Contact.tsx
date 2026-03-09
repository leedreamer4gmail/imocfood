import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const lmQrUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/lm二维码_7265883d.jpg';
  const phlQrUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/market二维码_989005d0.jpg';
  const { t } = useLanguage();

  const contacts = [
    {
      name: '李梦',
      email: 'leedreamer4@gmail.com',
      qrUrl: lmQrUrl,
    },
    {
      name: '潘海露',
      email: '',
      qrUrl: phlQrUrl,
    },
  ];

  const locations = [
    {
      city: t('contact.guangzhou'),
      address: t('contact.guangzhou_addr'),
    },
    {
      city: t('contact.nanning'),
      address: t('contact.nanning_addr'),
    },
    {
      city: t('contact.chongqing'),
      address: t('contact.chongqing_addr'),
    },
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '60px 40px' }}>
      <div style={{ maxWidth: '1197px', margin: '0 auto' }}>
        {/* Two-column layout: 2/3 left + divider + 1/3 right */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1px 1fr',
            gap: '40px',
            alignItems: 'flex-start',
          }}
        >
          {/* Left Column - Contact info + Locations (2/3) */}
          <div>
            <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#333333', margin: '0 0 40px 0' }}>
              {t('contact.title')}
            </h2>

            {/* Contact persons */}
            <div style={{ marginBottom: '40px' }}>
              {contacts.map((contact, index) => (
                <div
                  key={index}
                  style={{
                    marginBottom: '20px',
                    paddingBottom: '20px',
                    borderBottom: index < contacts.length - 1 ? '1px solid #e0e0e0' : 'none',
                    fontSize: '14px',
                  }}
                >
                  <p style={{ fontWeight: '600', color: '#333', margin: '0 0 6px 0', fontSize: '15px' }}>
                    {contact.name}
                  </p>
                  {contact.email && (
                    <p style={{ margin: '0', color: '#666' }}>
                      📧{' '}
                      <a href={`mailto:${contact.email}`} style={{ color: '#a72027', textDecoration: 'none' }}>
                        {contact.email}
                      </a>
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Locations */}
            <div style={{ paddingTop: '30px', borderTop: '2px solid #e0e0e0' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#333333', margin: '0 0 20px 0' }}>
                {t('contact.address')}
              </h3>
              <div style={{ fontSize: '14px', lineHeight: '2', color: '#333333' }}>
                {locations.map((location, index) => (
                  <p key={index} style={{ margin: '0' }}>
                    <span style={{ fontWeight: '700', color: '#a72027' }}>{location.city}</span>
                    ：{location.address}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Red Divider Line */}
          <div style={{ backgroundColor: '#a72027', height: '100%', minHeight: '400px' }} />

          {/* Right Column - QR Codes (1/3) */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px' }}>
            <h3 style={{ color: '#a72027', fontSize: '18px', fontWeight: '600', margin: '0', textAlign: 'center' }}>
              {t('contact.wechat')}
            </h3>
            {contacts.map((contact, index) => (
              contact.qrUrl ? (
                <div key={index} style={{ textAlign: 'center' }}>
                  <p style={{ fontWeight: '600', color: '#333', margin: '0 0 10px 0', fontSize: '14px' }}>
                    {contact.name}
                  </p>
                  <img
                    src={contact.qrUrl}
                    alt={`${contact.name} WeChat QR Code`}
                    style={{ maxWidth: '100%', height: 'auto', borderRadius: '4px' }}
                  />
                  <p style={{ fontSize: '12px', color: '#999', margin: '6px 0 0 0' }}>
                    {t('contact.wechat')}
                  </p>
                </div>
              ) : null
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
