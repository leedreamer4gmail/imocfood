import React from 'react';

const Products = () => {
  const characterImageUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/4man2_e5619181.jpg';
  const taobaoQrUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/tb二维码_a748285a.jpg';

  const productCategories = [
    {
      name: '茫然牛负责管理',
      products: ['牛肉干', '牛腱子', '牛罐头', '牛孖筋', '牛肉酱', '兼管羊肉'],
    },
    {
      name: '社恐猪负责管理',
      products: ['猪肉干', '猪罐头', '绵绵肉', '猪谈肉', '糯糯肉粽'],
    },
    {
      name: '呆滞鸡负责管理',
      products: ['无抗土鸡腿', '农家土鸡腿', '朴实鸡腿', '鸡肉罐头', '鸡肉干', '鸡肉丸'],
    },
    {
      name: '好嗨鱿负责管理',
      products: ['烤鱿鱼干', '烤虾干', '烤鱼干'],
    },
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '60px 40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Character Image */}
        <div
          style={{
            marginBottom: '60px',
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

        {/* Product Categories Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px',
            marginBottom: '60px',
          }}
        >
          {productCategories.map((category, index) => (
            <div
              key={index}
              style={{
                padding: '30px',
                backgroundColor: '#fafafa',
                borderRadius: '8px',
                border: '1px solid #e0e0e0',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(167, 32, 39, 0.15)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <h3
                style={{
                  color: '#a72027',
                  fontSize: '18px',
                  fontWeight: '600',
                  marginBottom: '20px',
                  borderBottom: '2px solid #a72027',
                  paddingBottom: '10px',
                }}
              >
                {category.name}
              </h3>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                }}
              >
                {category.products.map((product, pIndex) => (
                  <li
                    key={pIndex}
                    style={{
                      padding: '8px 0',
                      color: '#333333',
                      fontSize: '14px',
                      borderBottom: pIndex < category.products.length - 1 ? '1px solid #e0e0e0' : 'none',
                    }}
                  >
                    • {product}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Taobao Section */}
        <div
          style={{
            backgroundColor: '#fafafa',
            padding: '40px',
            borderRadius: '8px',
            textAlign: 'center',
            border: '2px solid #a72027',
          }}
        >
          <h3
            style={{
              color: '#a72027',
              fontSize: '24px',
              fontWeight: '600',
              marginBottom: '30px',
            }}
          >
            您可以来这里直接购买我们的产品
          </h3>
          <a
            href="https://imoc.taobao.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              marginBottom: '30px',
              textDecoration: 'none',
              color: '#a72027',
              fontSize: '16px',
              fontWeight: '600',
              padding: '12px 24px',
              border: '2px solid #a72027',
              borderRadius: '6px',
              transition: 'all 0.3s ease',
              backgroundColor: '#ffffff',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#a72027';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.color = '#a72027';
            }}
          >
            访问淘宝店铺 →
          </a>

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
                src={taobaoQrUrl}
                alt="Taobao QR Code"
                style={{
                  width: '150px',
                  height: '150px',
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
                扫描二维码进入淘宝店铺
              </p>
            </div>
            <div
              style={{
                fontSize: '14px',
                color: '#666666',
                maxWidth: '300px',
              }}
            >
              <p style={{ margin: '0 0 10px 0' }}>🛍️ 正品保证</p>
              <p style={{ margin: '0 0 10px 0' }}>📦 快速发货</p>
              <p style={{ margin: '0 0 10px 0' }}>💯 质量优选</p>
              <p style={{ margin: '0' }}>🎁 优惠活动</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
