import React from 'react';

const Contact = () => {
  const lmQrUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/lm二维码_7265883d.jpg';

  const contacts = [
    {
      name: '李梦',
      email: 'leedreamer4@gmail.com',
      qrUrl: lmQrUrl,
    },
    {
      name: '梁平',
      email: 'liangping@imoc.com',
      qrUrl: null, // 用户后续补充
    },
    {
      name: '王刚',
      email: 'wanggang@imoc.com',
      qrUrl: null, // 用户后续补充
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
                <p style={{ margin: '8px 0' }}>
                  📧 <a href={`mailto:${contact.email}`} style={{ color: '#a72027', textDecoration: 'none' }}>
                    {contact.email}
                  </a>
                </p>
              </div>

              {/* WeChat QR Code */}
              {contact.qrUrl ? (
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
              ) : (
                <div
                  style={{
                    marginTop: '20px',
                    paddingTop: '20px',
                    borderTop: '1px solid #e0e0e0',
                    fontSize: '12px',
                    color: '#999999',
                  }}
                >
                  微信二维码待补充
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Locations Section */}
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
            集团地址
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '30px',
            }}
          >
            {locations.map((location, index) => (
              <div
                key={index}
                style={{
                  padding: '20px',
                  backgroundColor: '#fafafa',
                  borderRadius: '8px',
                  border: '1px solid #e0e0e0',
                  textAlign: 'center',
                }}
              >
                <h4
                  style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#a72027',
                    margin: '0 0 10px 0',
                  }}
                >
                  {location.city}
                </h4>
                <p
                  style={{
                    fontSize: '13px',
                    color: '#666666',
                    margin: '0',
                    lineHeight: '1.6',
                  }}
                >
                  {location.address}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
