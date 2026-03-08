import React from 'react';

const Contact = () => {
  const lmQrUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/lm二维码_7265883d.jpg';
  const phlQrUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/market二维码_989005d0.jpg';

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
      city: '广州',
      address: '广东省广州市荔湾区逢西大街4号',
    },
    {
      city: '南宁',
      address: '广西省南宁市兴宁区金桥农批市场加工1号楼2楼',
    },
    {
      city: '重庆',
      address: '重庆市梁平区预制菜产业园区4号楼4楼',
    },
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '60px 40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2
          style={{
            fontSize: '32px',
            fontWeight: '600',
            color: '#333333',
            marginBottom: '50px',
            textAlign: 'center',
          }}
        >
          联系我们
        </h2>

        {/* Contact Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            marginBottom: '60px',
          }}
        >
          {contacts.map((contact, index) => (
            <div
              key={index}
              style={{
                padding: '30px',
                backgroundColor: '#fafafa',
                borderRadius: '8px',
                border: '2px solid transparent',
                transition: 'all 0.3s ease',
                textAlign: 'center',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#a72027';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(167, 32, 39, 0.15)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#333333',
                  margin: '0 0 15px 0',
                }}
              >
                {contact.name}
              </h3>

              <div
                style={{
                  fontSize: '13px',
                  color: '#666666',
                  lineHeight: '1.8',
                  marginBottom: '20px',
                }}
              >
                {contact.email && (
                  <p style={{ margin: '8px 0' }}>
                    📧 <a href={`mailto:${contact.email}`} style={{ color: '#a72027', textDecoration: 'none' }}>
                      {contact.email}
                    </a>
                  </p>
                )}
              </div>

              {/* WeChat QR Code */}
              {contact.qrUrl && (
                <div
                  style={{
                    marginTop: '20px',
                    paddingTop: '20px',
                    borderTop: '1px solid #e0e0e0',
                  }}
                >
                  <img
                    src={contact.qrUrl}
                    alt={`${contact.name} WeChat QR Code`}
                    style={{
                      maxWidth: '150px',
                      height: 'auto',
                      borderRadius: '4px',
                    }}
                  />
                  <p
                    style={{
                      fontSize: '12px',
                      color: '#999999',
                      margin: '8px 0 0 0',
                    }}
                  >
                    微信二维码
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Locations Section - Simple Text Format */}
        <div
          style={{
            paddingTop: '40px',
            borderTop: '2px solid #e0e0e0',
          }}
        >
          <h3
            style={{
              fontSize: '24px',
              fontWeight: '600',
              color: '#333333',
              marginBottom: '30px',
              textAlign: 'center',
            }}
          >
            地址
          </h3>

          <div
            style={{
              maxWidth: '600px',
              margin: '0 auto',
              fontSize: '14px',
              lineHeight: '2',
              color: '#333333',
            }}
          >
            {locations.map((location, index) => (
              <p key={index} style={{ margin: '0' }}>
                <span style={{ fontWeight: '700', color: '#a72027' }}>
                  {location.city}
                </span>
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
