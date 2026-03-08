import React from 'react';

const Contact = () => {
  const contacts = [
    {
      name: '李梦',
      title: '销售经理',
      phone: '+86 138-0013-8888',
      email: 'limeng@imoc.com',
      wechat: 'limeng_imoc',
    },
    {
      name: '梁平',
      title: '市场部',
      phone: '+86 138-0013-8889',
      email: 'liangping@imoc.com',
      wechat: 'liangping_market',
    },
    {
      name: '王刚',
      title: '运营总监',
      phone: '+86 138-0013-8890',
      email: 'wanggang@imoc.com',
      wechat: 'wanggang_ops',
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
              {/* Avatar Placeholder */}
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#a72027',
                  borderRadius: '50%',
                  margin: '0 auto 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontSize: '32px',
                  fontWeight: '600',
                }}
              >
                {contact.name.charAt(0)}
              </div>

              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#333333',
                  margin: '0 0 5px 0',
                }}
              >
                {contact.name}
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  color: '#a72027',
                  margin: '0 0 20px 0',
                  fontWeight: '500',
                }}
              >
                {contact.title}
              </p>

              <div
                style={{
                  fontSize: '13px',
                  color: '#666666',
                  lineHeight: '1.8',
                }}
              >
                <p style={{ margin: '8px 0' }}>
                  📞 <a href={`tel:${contact.phone}`} style={{ color: '#a72027', textDecoration: 'none' }}>
                    {contact.phone}
                  </a>
                </p>
                <p style={{ margin: '8px 0' }}>
                  📧 <a href={`mailto:${contact.email}`} style={{ color: '#a72027', textDecoration: 'none' }}>
                    {contact.email}
                  </a>
                </p>
                <p style={{ margin: '8px 0' }}>
                  💬 WeChat: <span style={{ fontWeight: '500' }}>{contact.wechat}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
