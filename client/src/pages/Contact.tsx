import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('感谢您的留言！我们会尽快与您联系。');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

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

        {/* Contact Form */}
        <div
          style={{
            backgroundColor: '#fafafa',
            padding: '40px',
            borderRadius: '8px',
            border: '2px solid #a72027',
            maxWidth: '600px',
            margin: '0 auto',
          }}
        >
          <h3
            style={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#333333',
              marginBottom: '30px',
              textAlign: 'center',
            }}
          >
            或者留言给我们
          </h3>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '20px' }}>
              <label
                style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#333333',
                  marginBottom: '8px',
                }}
              >
                姓名
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  border: '1px solid #e0e0e0',
                  borderRadius: '6px',
                  fontSize: '14px',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.3s ease',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#a72027';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e0e0e0';
                }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label
                style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#333333',
                  marginBottom: '8px',
                }}
              >
                邮箱
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  border: '1px solid #e0e0e0',
                  borderRadius: '6px',
                  fontSize: '14px',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.3s ease',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#a72027';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e0e0e0';
                }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label
                style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#333333',
                  marginBottom: '8px',
                }}
              >
                电话
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  border: '1px solid #e0e0e0',
                  borderRadius: '6px',
                  fontSize: '14px',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.3s ease',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#a72027';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e0e0e0';
                }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label
                style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#333333',
                  marginBottom: '8px',
                }}
              >
                留言
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  border: '1px solid #e0e0e0',
                  borderRadius: '6px',
                  fontSize: '14px',
                  boxSizing: 'border-box',
                  fontFamily: 'inherit',
                  transition: 'border-color 0.3s ease',
                  resize: 'vertical',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#a72027';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e0e0e0';
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: '#a72027',
                color: '#ffffff',
                border: 'none',
                borderRadius: '6px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(167, 32, 39, 0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#8a1a1f';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(167, 32, 39, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#a72027';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(167, 32, 39, 0.3)';
              }}
            >
              发送留言
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
