import React from 'react';

const Services = () => {
  const marketingQrUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/市场部微信_12157f5e.jpg';

  const services = [
    {
      title: '大宗订货',
      description: '支持大批量订单，提供优惠价格和专业的物流配送方案',
    },
    {
      title: '来料加工',
      description: '接收客户提供的原料，按照要求进行专业加工处理',
    },
    {
      title: 'OEM代工',
      description: '为品牌方提供完整的代工服务，支持定制化生产',
    },
    {
      title: '一件代发',
      description: '电商卖家无需囤货，我们负责打包和物流配送',
    },
    {
      title: '平台佣金',
      description: '支持入驻各大电商平台，提供完整的平台运营支持',
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
          我们提供的服务
        </h2>

        {/* Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            marginBottom: '60px',
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                padding: '30px',
                backgroundColor: '#fafafa',
                borderRadius: '8px',
                border: '2px solid transparent',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
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
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#a72027',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontSize: '24px',
                  fontWeight: '600',
                  marginBottom: '20px',
                }}
              >
                {index + 1}
              </div>
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#333333',
                  marginBottom: '12px',
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  color: '#666666',
                  lineHeight: '1.6',
                  margin: 0,
                }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div
          style={{
            backgroundColor: '#fafafa',
            padding: '40px',
            borderRadius: '8px',
            border: '2px solid #a72027',
            textAlign: 'center',
          }}
        >
          <h3
            style={{
              color: '#a72027',
              fontSize: '22px',
              fontWeight: '600',
              marginBottom: '30px',
            }}
          >
            具体服务详情，请直接联系市场部
          </h3>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '40px',
              flexWrap: 'wrap',
            }}
          >
            <div
              style={{
                textAlign: 'center',
              }}
            >
              <img
                src={marketingQrUrl}
                alt="Marketing Department WeChat"
                style={{
                  width: '180px',
                  height: '180px',
                  borderRadius: '8px',
                  border: '2px solid #a72027',
                  padding: '8px',
                  backgroundColor: '#ffffff',
                }}
              />
              <p
                style={{
                  marginTop: '12px',
                  color: '#666666',
                  fontSize: '12px',
                }}
              >
                扫描微信二维码咨询
              </p>
            </div>

            <div
              style={{
                fontSize: '14px',
                color: '#666666',
                maxWidth: '300px',
                textAlign: 'left',
              }}
            >
              <p style={{ margin: '0 0 15px 0', fontWeight: '600', color: '#333333' }}>
                市场部负责人：梁平
              </p>
              <p style={{ margin: '0 0 10px 0' }}>📍 地址：重庆</p>
              <p style={{ margin: '0 0 10px 0' }}>💬 微信：扫描二维码</p>
              <p style={{ margin: '0' }}>⏰ 工作时间：周一至周五 9:00-18:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
