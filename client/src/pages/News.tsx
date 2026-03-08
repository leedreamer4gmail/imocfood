import React from 'react';

const News = () => {
  const today = new Date();
  const dateString = `${today.getFullYear()}年${today.getMonth() + 1}月${today.getDate()}日`;

  const news = [
    {
      date: dateString,
      title: '🚀 IMOC 官方网站正式上线',
      description:
        '国际开源肉制品联盟官方网站今日正式上线！我们致力于为全球消费者提供优质的肉制品，欢迎各位合作伙伴加入我们的联盟。',
      category: '公司动态',
    },
    {
      date: dateString,
      title: '📦 新产品上市预告',
      description:
        '敬请期待我们即将推出的新产品系列。我们正在研发更多创新的肉制品，为您带来全新的美食体验。',
      category: '产品动态',
    },
    {
      date: dateString,
      title: '🤝 诚邀合作伙伴',
      description:
        '无论您是电商平台、实体店铺还是OEM合作伙伴，我们都期待与您携手共创美好未来。欢迎联系我们的市场部了解更多合作机会。',
      category: '合作邀请',
    },
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '60px 40px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2
          style={{
            fontSize: '32px',
            fontWeight: '600',
            color: '#333333',
            marginBottom: '50px',
            textAlign: 'center',
          }}
        >
          最新动态
        </h2>

        {/* News List */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
          }}
        >
          {news.map((item, index) => (
            <div
              key={index}
              style={{
                padding: '30px',
                backgroundColor: '#fafafa',
                borderRadius: '8px',
                border: '2px solid transparent',
                borderLeft: '4px solid #a72027',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(167, 32, 39, 0.15)';
                e.currentTarget.style.transform = 'translateX(8px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '12px',
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: '18px',
                      fontWeight: '600',
                      color: '#333333',
                      margin: '0 0 8px 0',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '12px',
                      color: '#999999',
                      margin: '0',
                    }}
                  >
                    {item.date}
                  </p>
                </div>
                <span
                  style={{
                    display: 'inline-block',
                    padding: '4px 12px',
                    backgroundColor: '#a72027',
                    color: '#ffffff',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontWeight: '500',
                    whiteSpace: 'nowrap',
                    marginLeft: '20px',
                  }}
                >
                  {item.category}
                </span>
              </div>
              <p
                style={{
                  fontSize: '14px',
                  color: '#666666',
                  lineHeight: '1.6',
                  margin: '0',
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          style={{
            marginTop: '60px',
            padding: '40px',
            backgroundColor: '#fafafa',
            borderRadius: '8px',
            border: '2px solid #a72027',
            textAlign: 'center',
          }}
        >
          <h3
            style={{
              color: '#a72027',
              fontSize: '20px',
              fontWeight: '600',
              marginBottom: '20px',
            }}
          >
            想要了解更多最新动态？
          </h3>
          <p
            style={{
              color: '#666666',
              fontSize: '14px',
              marginBottom: '20px',
            }}
          >
            欢迎关注我们的微信公众号或联系市场部获取最新信息
          </p>
          <a
            href="#contact"
            style={{
              display: 'inline-block',
              padding: '12px 30px',
              backgroundColor: '#a72027',
              color: '#ffffff',
              textDecoration: 'none',
              borderRadius: '6px',
              fontWeight: '600',
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
            联系我们 →
          </a>
        </div>
      </div>
    </div>
  );
};

export default News;
