import React, { useState } from 'react';

const Home: React.FC = () => {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>('home');

  const menuItems = ['主页', '联系我们', '我们的产品'];
  const redColor = '#a72027';

  const renderContent = () => {
    switch (activeSection) {
      case 'contact':
        return (
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '60px 40px',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: '32px',
              fontWeight: '700',
              marginBottom: '40px',
              color: '#333'
            }}>联系我们</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '40px',
              marginTop: '40px'
            }}>
              <div>
                <h3 style={{ color: redColor, marginBottom: '15px' }}>电话</h3>
                <p style={{ color: '#666', lineHeight: '1.8' }}>
                  +86 20 XXXX XXXX<br/>
                  +86 135 XXXX XXXX
                </p>
              </div>
              <div>
                <h3 style={{ color: redColor, marginBottom: '15px' }}>邮箱</h3>
                <p style={{ color: '#666', lineHeight: '1.8' }}>
                  info@imocfood.com<br/>
                  business@imocfood.com
                </p>
              </div>
              <div>
                <h3 style={{ color: redColor, marginBottom: '15px' }}>地址</h3>
                <p style={{ color: '#666', lineHeight: '1.8' }}>
                  广州市 XX 区 XX 路<br/>
                  总部：广州 | 生产基地：南宁、重庆
                </p>
              </div>
            </div>
          </div>
        );
      case 'products':
        return (
          <div style={{
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '60px 40px'
          }}>
            <h2 style={{
              fontSize: '32px',
              fontWeight: '700',
              marginBottom: '40px',
              textAlign: 'center',
              color: '#333'
            }}>我们的产品</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '40px'
            }}>
              {[
                { name: '牛肉干', desc: '精选优质牛肉，传统工艺，真材实料' },
                { name: '猪肉干', desc: '纯正猪肉制品，无添加，健康美味' },
                { name: '鸡腿', desc: '新鲜鸡肉制品，营养丰富，天然健康' }
              ].map((product, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '30px',
                    border: `2px solid ${redColor}`,
                    borderRadius: '8px',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 8px 24px rgba(167, 32, 39, 0.15)`;
                    e.currentTarget.style.transform = 'translateY(-5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <h3 style={{ fontSize: '24px', color: redColor, marginBottom: '15px' }}>
                    {product.name}
                  </h3>
                  <p style={{ color: '#666', lineHeight: '1.6' }}>
                    {product.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return (
          <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '60px 40px',
            textAlign: 'center'
          }}>
            {/* Logo */}
            <div style={{
              marginBottom: '60px',
              fontSize: '14px',
              color: '#999',
              marginTop: '-40px'
            }}>
              <div style={{
                fontSize: '72px',
                fontWeight: '700',
                color: redColor,
                letterSpacing: '4px',
                marginBottom: '10px',
                textShadow: '0 4px 12px rgba(167, 32, 39, 0.15)'
              }}>
                IMOC®
              </div>
              <div style={{
                fontSize: '14px',
                color: redColor,
                letterSpacing: '2px',
                marginBottom: '5px',
                fontWeight: '500'
              }}>
                international meat open-source community
              </div>
              <div style={{
                fontSize: '16px',
                color: '#666',
                fontWeight: '500',
                letterSpacing: '2px'
              }}>
                国际并源肉制品联盟
              </div>
            </div>

            {/* Description */}
            <div style={{
              maxWidth: '700px',
              lineHeight: '1.9',
              fontSize: '15px',
              color: '#555'
            }}>
              <p style={{ marginBottom: '20px' }}>
                <strong>IMOC（国际开源肉制品联盟）</strong>是一家致力于推动全球肉制品产业创新与透明化的食品公司。我们拥有年轻、充满活力的团队，坚持真材实料的承诺，为消费者提供无添加、健康、天然的肉制品。
              </p>

              <p style={{ marginBottom: '20px' }}>
                我们的产品涵盖牛肉干、猪肉干、鸡腿等多个品类，总部位于广州，在广州、南宁、重庆三地拥有现代化生产基地。我们崇尚创新，接受现代生产理念，既提供OEM代工服务，也欢迎电商和实体渠道的合作伙伴加入我们的联盟。
              </p>

              <p style={{ marginBottom: '20px' }}>
                无论您是电商平台、实体店铺还是OEM合作伙伴，我们都期待与您携手共创美好未来。我们强调个性化定制，拥有自有电商渠道，为每一位合作伙伴提供专业的支持与服务。
              </p>

              <p style={{ color: redColor, fontWeight: '600' }}>
                欢迎加入 IMOC 联盟，一起为全球消费者带来更好的肉制品体验。
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <div style={{
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: '#fff',
      color: '#333',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Navigation */}
      <nav style={{
        padding: '20px 40px',
        display: 'flex',
        justifyContent: 'center',
        gap: '50px',
        borderBottom: '1px solid #f0f0f0',
        backgroundColor: '#fff',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        {menuItems.map((item) => (
          <button
            key={item}
            onClick={() => {
              if (item === '主页') setActiveSection('home');
              if (item === '联系我们') setActiveSection('contact');
              if (item === '我们的产品') setActiveSection('products');
            }}
            onMouseEnter={() => setHoveredMenu(item)}
            onMouseLeave={() => setHoveredMenu(null)}
            style={{
              background: hoveredMenu === item ? redColor : 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontSize: '15px',
              fontWeight: '500',
              color: hoveredMenu === item ? '#fff' : '#333',
              padding: '10px 20px',
              borderRadius: '4px',
              transition: 'all 0.3s ease'
            }}
          >
            {item}
          </button>
        ))}
      </nav>

      {/* Main Content */}
      {activeSection === 'home' ? (
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '60px 40px'
        }}>
          {renderContent()}
        </div>
      ) : (
        renderContent()
      )}

      {/* Footer */}
      <footer style={{
        padding: '40px',
        textAlign: 'center',
        borderTop: '1px solid #f0f0f0',
        backgroundColor: '#f9f9f9',
        fontSize: '13px',
        color: '#999'
      }}>
        <p style={{ marginBottom: '10px' }}>
          © 2026 IMOC - International Meat Open-source Community
        </p>
        <p style={{ marginBottom: '10px' }}>
          国际并源肉制品联盟 | 总部：广州 | 生产基地：南宁、重庆
        </p>
        <p>
          All rights reserved | 版权所有
        </p>
      </footer>
    </div>
  );
};

export default Home;
