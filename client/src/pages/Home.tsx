import React, { useState } from 'react';

const Home: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveMenu(sectionId);
      setMobileMenuOpen(false);
    }
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", color: '#333' }}>
      {/* Navigation */}
      <nav style={{
        position: 'sticky',
        top: 0,
        backgroundColor: '#fff',
        borderBottom: '1px solid #f0f0f0',
        zIndex: 1000,
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '70px'
        }}>
          {/* Logo */}
          <div style={{
            fontSize: '24px',
            fontWeight: 'bold',
            letterSpacing: '2px'
          }}>
            <span style={{ color: '#a72027' }}>IMOC</span>
          </div>

          {/* Desktop Menu */}
          <div style={{
            display: 'none',
            '@media (min-width: 768px)': { display: 'flex' },
            gap: '40px',
            alignItems: 'center'
          }} className="desktop-menu">
            {['home', 'products', 'services', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: activeMenu === item ? '600' : '400',
                  color: activeMenu === item ? '#a72027' : '#666',
                  textTransform: 'capitalize',
                  transition: 'color 0.3s ease',
                  padding: '8px 0',
                  borderBottom: activeMenu === item ? '2px solid #a72027' : 'none'
                }}
              >
                {item === 'home' ? '主页' : item === 'products' ? '产品' : item === 'services' ? '服务' : '联系'}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'flex',
              '@media (min-width: 768px)': { display: 'none' },
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '24px'
            }}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            padding: '20px 40px',
            borderTop: '1px solid #f0f0f0',
            backgroundColor: '#fff'
          }}>
            {['home', 'products', 'services', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '14px',
                  color: '#666',
                  textTransform: 'capitalize',
                  textAlign: 'left'
                }}
              >
                {item === 'home' ? '主页' : item === 'products' ? '产品' : item === 'services' ? '服务' : '联系'}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" style={{
        padding: '100px 40px',
        textAlign: 'center',
        backgroundColor: '#fff',
        minHeight: '600px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <h1 style={{
          fontSize: '56px',
          fontWeight: '700',
          marginBottom: '20px',
          lineHeight: '1.2',
          maxWidth: '800px'
        }}>
          真材实料，<span style={{ color: '#a72027' }}>健康生活</span>
        </h1>
        <p style={{
          fontSize: '18px',
          color: '#999',
          marginBottom: '40px',
          maxWidth: '600px',
          lineHeight: '1.6'
        }}>
          国际开源肉制品联盟，致力于为全球消费者提供无添加、天然、创新的肉制品
        </p>
        <button
          onClick={() => scrollToSection('products')}
          style={{
            padding: '14px 40px',
            backgroundColor: '#a72027',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(167, 32, 39, 0.3)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 6px 16px rgba(167, 32, 39, 0.4)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(167, 32, 39, 0.3)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          探索产品
        </button>
      </section>

      {/* About Section */}
      <section style={{
        padding: '80px 40px',
        backgroundColor: '#fafafa',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginBottom: '60px'
        }}>
          {[
            { icon: '🌿', title: '无添加', desc: '拒绝人工添加剂，只用天然食材' },
            { icon: '💪', title: '健康营养', desc: '精选优质原料，营养价值高' },
            { icon: '🔬', title: '创新工艺', desc: '采用现代生产理念，品质有保障' },
            { icon: '🌍', title: '全球视野', desc: '开放合作，欢迎OEM和电商伙伴' }
          ].map((item, idx) => (
            <div key={idx} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>{item.icon}</div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px' }}>{item.title}</h3>
              <p style={{ color: '#999', fontSize: '14px', lineHeight: '1.6' }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div style={{
          backgroundColor: '#fff',
          padding: '40px',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
        }}>
          <h2 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '20px' }}>关于 IMOC</h2>
          <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '15px', fontSize: '15px' }}>
            IMOC（国际开源肉制品联盟）是一家致力于推动全球肉制品产业创新与透明化的食品公司。我们拥有年轻、充满活力的团队，坚持真材实料的承诺，为消费者提供无添加、健康、天然的肉制品。
          </p>
          <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '15px', fontSize: '15px' }}>
            我们的产品涵盖牛肉干、猪肉干、鸡腿等多个品类，总部位于广州，在广州、南宁、重庆三地拥有现代化生产基地。我们欢迎电商和实体渠道的合作伙伴加入我们的联盟，共同为消费者创造更好的产品体验。
          </p>
          <p style={{ color: '#666', lineHeight: '1.8', fontSize: '15px' }}>
            <strong>生产基地：</strong>广州 · 南宁 · 重庆 | <strong>核心理念：</strong>年轻 · 创新 · 开放
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" style={{
        padding: '80px 40px',
        backgroundColor: '#fff',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '36px',
          fontWeight: '600',
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          产品系列
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px'
        }}>
          {[
            { name: '牛肉干', desc: '精选优质牛肉，采用传统工艺，口感鲜香浓郁', features: ['高蛋白', '低脂肪', '天然风味'] },
            { name: '猪肉干', desc: '选用新鲜猪肉，焦香爽脆，是休闲零食的绝佳选择', features: ['焦香爽脆', '营养丰富', '便携装'] },
            { name: '鸡腿', desc: '嫩滑多汁的鸡腿，经过精心腌制和烘烤', features: ['鲜嫩多汁', '低卡路里', '高品质'] }
          ].map((product, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#fafafa',
                padding: '30px',
                borderRadius: '8px',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                border: '1px solid #f0f0f0'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#a72027',
                borderRadius: '50%',
                margin: '0 auto 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: '32px'
              }}>
                {idx === 0 ? '🥩' : idx === 1 ? '🍖' : '🍗'}
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px' }}>{product.name}</h3>
              <p style={{ color: '#999', fontSize: '14px', lineHeight: '1.6', marginBottom: '20px' }}>
                {product.desc}
              </p>
              <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
                {product.features.map((feature, i) => (
                  <span
                    key={i}
                    style={{
                      backgroundColor: '#fff',
                      color: '#a72027',
                      padding: '6px 12px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: '500',
                      border: '1px solid #a72027'
                    }}
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={{
        padding: '80px 40px',
        backgroundColor: '#fafafa',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '36px',
          fontWeight: '600',
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          服务范围
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px'
        }}>
          {[
            { num: '01', title: '来料加工', desc: '提供专业的来料加工服务' },
            { num: '02', title: '代加工贴牌', desc: '支持OEM和私人品牌代工' },
            { num: '03', title: '现货发货', desc: '库存充足，快速发货' },
            { num: '04', title: '一件代发', desc: '支持一件代发，无需囤货' },
            { num: '05', title: '平台入驻', desc: '协助入驻各大电商平台' }
          ].map((service, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#fff',
                padding: '30px 20px',
                borderRadius: '8px',
                textAlign: 'center',
                border: '1px solid #f0f0f0',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#a72027';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(167, 32, 39, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#f0f0f0';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{
                fontSize: '32px',
                fontWeight: '700',
                color: '#a72027',
                marginBottom: '12px'
              }}>
                {service.num}
              </div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>{service.title}</h3>
              <p style={{ color: '#999', fontSize: '13px' }}>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{
        padding: '80px 40px',
        backgroundColor: '#fff',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '36px',
          fontWeight: '600',
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          联系我们
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          textAlign: 'center'
        }}>
          <div>
            <div style={{ fontSize: '40px', marginBottom: '16px' }}>📞</div>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>电话</h3>
            <p style={{ color: '#666', fontSize: '14px' }}>+86 20 XXXX XXXX</p>
          </div>
          <div>
            <div style={{ fontSize: '40px', marginBottom: '16px' }}>📧</div>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>邮箱</h3>
            <p style={{ color: '#666', fontSize: '14px' }}>contact@imocfood.com</p>
          </div>
          <div>
            <div style={{ fontSize: '40px', marginBottom: '16px' }}>📍</div>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>总部地址</h3>
            <p style={{ color: '#666', fontSize: '14px' }}>广州市 · 南宁市 · 重庆市</p>
          </div>
        </div>

        <div style={{
          marginTop: '60px',
          padding: '40px',
          backgroundColor: '#fafafa',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '20px' }}>扫描二维码联系我们</h3>
          <div style={{
            display: 'inline-block',
            width: '150px',
            height: '150px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid #a72027'
          }}>
            <span style={{ color: '#999', fontSize: '12px' }}>微信二维码</span>
          </div>
          <p style={{ color: '#999', fontSize: '12px', marginTop: '16px' }}>长按识别二维码，加入 IMOC 联盟</p>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '60px 40px',
        backgroundColor: '#a72027',
        color: '#fff',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '32px', fontWeight: '600', marginBottom: '20px' }}>
          欢迎加入 IMOC 联盟
        </h2>
        <p style={{ fontSize: '16px', marginBottom: '30px', opacity: 0.9 }}>
          无论您是电商平台、实体店铺还是OEM合作伙伴，我们都期待与您携手共创美好未来
        </p>
        <button
          style={{
            padding: '14px 40px',
            backgroundColor: '#fff',
            color: '#a72027',
            border: 'none',
            borderRadius: '4px',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.3)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          立即合作
        </button>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '40px',
        backgroundColor: '#1a1a1a',
        color: '#999',
        textAlign: 'center',
        fontSize: '13px'
      }}>
        <p style={{ marginBottom: '10px' }}>© 2026 IMOC - International Meat Open-source Community</p>
        <p>All rights reserved | 粤ICP备XXXXX号</p>
      </footer>
    </div>
  );
};

export default Home;
