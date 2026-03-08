import React from 'react';

const Products = () => {
  const characterImageUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/4man_b5b08e13.jpg';
  const taobaoQrUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/tb二维码_5374b85d.png';

  const productCategories = [
    {
      character: '牛',
      title: '茫然牛负责管理',
      products: ['牛肉干', '牛腱子', '牛罐头', '牛孖筋', '牛肉酱', '兼管羊肉'],
    },
    {
      character: '猪',
      title: '社恐猪负责管理',
      products: ['猪肉干', '猪罐头', '绵绵肉', '猪谈肉', '糯糯肉粽'],
    },
    {
      character: '鸡',
      title: '呆滞鸡负责管理',
      products: ['无抗土鸡腿', '农家土鸡腿', '朴实鸡腿', '鸡肉罐头', '鸡肉干', '鸡肉丸'],
    },
    {
      character: '鱿鱼',
      title: '好嗨鱿负责管理',
      products: ['烤鱿鱼干', '烤虾干', '烤鱼干'],
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
          {/* Left Column - Characters and Responsibilities */}
          <div>
            {/* Character Image */}
            <div
              style={{
                marginBottom: '40px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <img
                src={characterImageUrl}
                alt="Product Characters"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                }}
              />
            </div>

            {/* Character Responsibilities Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '30px',
                fontSize: '13px',
              }}
            >
              {productCategories.map((category, index) => (
                <div
                  key={index}
                  style={{
                    textAlign: 'center',
                  }}
                >
                  <h4
                    style={{
                      color: '#a72027',
                      fontSize: '14px',
                      fontWeight: '600',
                      marginBottom: '8px',
                      margin: '0 0 8px 0',
                    }}
                  >
                    {category.title}
                  </h4>
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      textAlign: 'left',
                    }}
                  >
                    {category.products.map((item, rIndex) => (
                      <li
                        key={rIndex}
                        style={{
                          padding: '4px 0',
                          color: '#333333',
                          fontSize: '12px',
                        }}
                      >
                        • {item}
                      </li>
                    ))}
                  </ul>
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

          {/* Right Column - Purchase Information */}
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
              直接购买我们的产品
            </h3>

            <a
              href="https://imoc.taobao.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                marginBottom: '40px',
                textDecoration: 'none',
                color: '#ffffff',
                fontSize: '16px',
                fontWeight: '600',
                padding: '12px 32px',
                backgroundColor: '#a72027',
                borderRadius: '6px',
                transition: 'all 0.3s ease',
                border: 'none',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#8a1a20';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#a72027';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              访问淘宝店铺 →
            </a>

            {/* Taobao QR Code */}
            <div
              style={{
                textAlign: 'center',
              }}
            >
              <img
                src={taobaoQrUrl}
                alt="Taobao QR Code"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '8px',
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
                扫描二维码进入淘宝店铺
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
