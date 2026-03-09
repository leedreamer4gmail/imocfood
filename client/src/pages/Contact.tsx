import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

// ============================================================
// 联系人信息 - 在这里修改电话、邮箱、照片等
// Contact info - edit phone, email, photo here
// ============================================================
const CONTACTS = [
  {
    name: '李梦',
    title: '市场总监',
    photo: '', // 留空显示占位框，或填入照片URL
    email: 'leedreamer4@gmail.com',
    phone: '13800138000',
    qrUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/lm二维码_7265883d.jpg',
  },
  {
    name: '潘海露',
    title: '市场部',
    photo: '', // 留空显示占位框，或填入照片URL
    email: '',
    phone: '',
    qrUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/market二维码_989005d0.jpg',
  },
];
// ============================================================

const Contact = () => {
  const { t } = useLanguage();

  const locations = [
    { city: t('contact.guangzhou'), address: t('contact.guangzhou_addr') },
    { city: t('contact.nanning'), address: t('contact.nanning_addr') },
    { city: t('contact.chongqing'), address: t('contact.chongqing_addr') },
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '60px 40px' }}>
      <div style={{ maxWidth: '1197px', margin: '0 auto' }}>

        <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#333333', margin: '0 0 40px 0' }}>
          {t('contact.title')}
        </h2>

        {/* Contact Cards - horizontal row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '30px',
            marginBottom: '60px',
          }}
        >
          {CONTACTS.map((contact, index) => (
            <div
              key={index}
              style={{
                flex: '1 1 280px',
                maxWidth: '320px',
                border: '2px solid #e0e0e0',
                borderRadius: '8px',
                overflow: 'hidden',
                backgroundColor: '#fafafa',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#a72027';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(167, 32, 39, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e0e0e0';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* 16:9 Photo area */}
              <div
                style={{
                  width: '100%',
                  paddingTop: '56.25%', /* 16:9 ratio */
                  position: 'relative',
                  backgroundColor: '#a72027',
                  overflow: 'hidden',
                }}
              >
                {contact.photo ? (
                  <img
                    src={contact.photo}
                    alt={contact.name}
                    style={{
                      position: 'absolute',
                      top: 0, left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                ) : (
                  <div
                    style={{
                      position: 'absolute',
                      top: 0, left: 0,
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                      color: 'rgba(255,255,255,0.6)',
                      fontSize: '13px',
                    }}
                  >
                    <div style={{ fontSize: '36px', marginBottom: '8px' }}>👤</div>
                    <span>{contact.name}</span>
                  </div>
                )}
              </div>

              {/* Card body */}
              <div style={{ padding: '20px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#333', margin: '0 0 4px 0' }}>
                  {contact.name}
                </h3>
                {contact.title && (
                  <p style={{ fontSize: '13px', color: '#a72027', margin: '0 0 14px 0' }}>
                    {contact.title}
                  </p>
                )}

                {contact.email && (
                  <p style={{ fontSize: '13px', color: '#555', margin: '0 0 6px 0' }}>
                    Email:{' '}
                    <a href={`mailto:${contact.email}`} style={{ color: '#a72027', textDecoration: 'none' }}>
                      {contact.email}
                    </a>
                  </p>
                )}

                {contact.phone && (
                  <p style={{ fontSize: '13px', color: '#555', margin: '0 0 14px 0' }}>
                    phone: {contact.phone}
                  </p>
                )}

                {/* WeChat QR */}
                {contact.qrUrl && (
                  <div style={{ marginTop: '14px', paddingTop: '14px', borderTop: '1px solid #e0e0e0' }}>
                    <p style={{ fontSize: '12px', color: '#999', margin: '0 0 8px 0' }}>微信：</p>
                    <img
                      src={contact.qrUrl}
                      alt={`${contact.name} WeChat`}
                      style={{ width: '100%', maxWidth: '160px', height: 'auto', borderRadius: '4px' }}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Locations */}
        <div style={{ paddingTop: '40px', borderTop: '2px solid #e0e0e0' }}>
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
    </div>
  );
};

export default Contact;
