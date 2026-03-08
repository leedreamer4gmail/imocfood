import React, { useState } from 'react';

const Home: React.FC = () => {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [logoScale, setLogoScale] = useState(1);

  const menuItems = ['主页', '联系我们', '我们的产品', '提供服务'];
  const redColor = '#a72027';
  const logoUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/logoweb_e85335f9.jpg';

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
      case 'services':
        return (
          <div style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '60px 40px'
          }}>
            <h2 style={{
              fontSize: '32px',
              fontWeight: '700',
              marginBottom: '40px',
              textAlign: 'center',
              color: '#333'
            }}>提供服务</h2>
            <div style={{
              display: 'grid',
              gap: '30px'
            }}>
              {[
                { num: '1', title: '来料加工', desc: '根据您的需求，我们提供专业的来料加工服务' },
                { num: '2', title: '代加工贴牌', desc: '为您的品牌提供专业的代加工和贴牌服务' },
                { num: '3', title: '现货发货', desc: '拥有充足库存，支持快速现货发货' },
                { num: '4', title: '一件代发', desc: '支持一件代发，方便您的电商业务' },
                { num: '5', title: '入驻平台', desc: '帮助您入驻各大电商平台' }
              ].map((service, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '25px',
                    border: `1px solid #e0e0e0`,
                    borderRadius: '8px',
                    display: 'flex',
                    gap: '20px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = redColor;
                    e.currentTarget.style.backgroundColor = '#fafafa';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e0e0e0';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <div style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: redColor,
                    color: '#fff',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    fontWeight: '700',
                    flexShrink: 0
                  }}>
                    {service.num}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '18px', color: '#333', marginBottom: '8px', fontWeight: '600' }}>
                      {service.title}
                    </h3>
                    <p style={{ color: '#666', lineHeight: '1.6', fontSize: '14px' }}>
                      {service.desc}
                    </p>
                  </div>
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
            padding: '60px 40px'
          }}>
            {/* Logo */}
            <div style={{
              marginBottom: '60px',
              display: 'flex',
              justifyContent: 'center'
            }}>
              <img
                src={logoUrl}
                alt="IMOC Logo"
                style={{
                  maxWidth: '500px',
                  height: 'auto',
                  transform: `scale(${logoScale})`,
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={() => setLogoScale(1.1)}
                onMouseLeave={() => setLogoScale(1)}
              />
            </div>

            {/* Description - Left Aligned */}
            <div style={{
              maxWidth: '900px',
              lineHeight: '1.9',
              fontSize: '15px',
              color: '#555',
              textAlign: 'left'
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
        zIndex: 100,
        flexWrap: 'wrap'
      }}>
        {menuItems.map((item) => (
          <button
            key={item}
            onClick={() => {
              if (item === '主页') setActiveSection('home');
              if (item === '联系我们') setActiveSection('contact');
              if (item === '我们的产品') setActiveSection('products');
              if (item === '提供服务') setActiveSection('services');
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
          justifyContent: 'center'
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
