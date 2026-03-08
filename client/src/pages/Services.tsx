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
              我们提供的服务
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
                fontSize: '20px',
                fontWeight: '600',
                marginBottom: '40px',
                textAlign: 'center',
                margin: '0 0 40px 0',
              }}
            >
              具体服务详情，请联系市场部
            </h3>

            {/* WeChat QR Code */}
            <div
              style={{
                textAlign: 'center',
                marginBottom: '40px',
              }}
            >
              <img
                src={marketingQrUrl}
                alt="Marketing Department WeChat"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                  border: '2px solid #a72027',
                  padding: '8px',
                  backgroundColor: '#ffffff',
                  marginBottom: '16px',
                }}
              />
              <p
                style={{
                  marginTop: '0',
                  color: '#666666',
                  fontSize: '13px',
                }}
              >
                扫描微信二维码咨询
              </p>
            </div>

            {/* Contact Details */}
            <div
              style={{
                fontSize: '14px',
                color: '#666666',
                width: '100%',
                textAlign: 'center',
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
