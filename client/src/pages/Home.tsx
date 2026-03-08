import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        borderBottom: '1px solid #e5e7eb',
        zIndex: 50
      }}>
        <div style={{
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '0 2rem',
          height: '5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/logo_59d46cac.jpg"
              alt="IMOC"
              style={{ height: '3rem', width: '3rem', objectFit: 'contain' }}
            />
            <div style={{ display: 'none' }}>
              <p style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#111827' }}>IMOC</p>
              <p style={{ fontSize: '0.75rem', color: '#6b7280' }}>Open-source Community</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div style={{
            display: 'none',
            alignItems: 'center',
            gap: '2rem'
          }}>
            <a href="#about" style={{ color: '#374151', textDecoration: 'none', fontWeight: 500 }}>关于</a>
            <a href="#products" style={{ color: '#374151', textDecoration: 'none', fontWeight: 500 }}>产品</a>
            <a href="#services" style={{ color: '#374151', textDecoration: 'none', fontWeight: 500 }}>服务</a>
            <a href="#contact" style={{ color: '#374151', textDecoration: 'none', fontWeight: 500 }}>联系</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#111827'
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div style={{
            backgroundColor: 'white',
            borderTop: '1px solid #e5e7eb',
            padding: '1rem'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a href="#about" style={{ color: '#374151', textDecoration: 'none', fontWeight: 500 }}>关于</a>
              <a href="#products" style={{ color: '#374151', textDecoration: 'none', fontWeight: 500 }}>产品</a>
              <a href="#services" style={{ color: '#374151', textDecoration: 'none', fontWeight: 500 }}>服务</a>
              <a href="#contact" style={{ color: '#374151', textDecoration: 'none', fontWeight: 500 }}>联系</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Full Screen */}
      <section style={{
        paddingTop: '5rem',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom right, #f9fafb, #f3f4f6)'
        }} />
        
        {/* Content */}
        <div style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '0 1rem',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'center'
        }}>
          {/* Left: Text Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <h1 style={{
                fontSize: '3.75rem',
                fontWeight: 'bold',
                color: '#111827',
                lineHeight: 1.2,
                marginBottom: '1rem',
                fontFamily: "'Playfair Display', serif"
              }}>
                国际开源肉制品联盟
              </h1>
              <p style={{
                fontSize: '1.5rem',
                color: '#4b5563',
                fontWeight: 300
              }}>
                International Meat Open-source Community
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p style={{
                fontSize: '1.125rem',
                color: '#1f2937',
                lineHeight: 1.5
              }}>
                无添加 · 健康 · 天然 · 创新
              </p>
              <p style={{
                color: '#4b5563',
                lineHeight: 1.5,
                maxWidth: '28rem'
              }}>
                我们致力于推动全球肉制品行业的创新与透明化。通过开放合作、技术共享和品质坚守，为消费者提供最好的肉制品。
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingTop: '1rem' }}>
              <a 
                href="#products"
                style={{
                  padding: '0.75rem 2rem',
                  backgroundColor: '#111827',
                  color: 'white',
                  fontWeight: 600,
                  textDecoration: 'none',
                  textAlign: 'center',
                  borderRadius: '0.5rem',
                  cursor: 'pointer'
                }}
              >
                探索产品
              </a>
              <a 
                href="#contact"
                style={{
                  padding: '0.75rem 2rem',
                  border: '2px solid #111827',
                  color: '#111827',
                  fontWeight: 600,
                  textDecoration: 'none',
                  textAlign: 'center',
                  borderRadius: '0.5rem',
                  cursor: 'pointer'
                }}
              >
                联系我们
              </a>
            </div>

            {/* Key Features */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
              paddingTop: '2rem'
            }}>
              <div>
                <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.25rem' }}>生产基地</p>
                <p style={{ fontSize: '1.125rem', fontWeight: 600, color: '#111827' }}>广州 · 南宁 · 重庆</p>
              </div>
              <div>
                <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.25rem' }}>核心优势</p>
                <p style={{ fontSize: '1.125rem', fontWeight: 600, color: '#111827' }}>年轻 · 创新 · 开放</p>
              </div>
            </div>
          </div>

          {/* Right: Product Images */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1.5rem'
          }}>
            {/* Beef Jerky */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
              borderRadius: '1rem',
              padding: '1.5rem',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
            }}>
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/牛肉干_b2c53b7a.jpg"
                alt="牛肉干"
                style={{ height: '10rem', width: '10rem', objectFit: 'contain', marginBottom: '1rem' }}
              />
              <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#111827' }}>牛肉干</h3>
              <p style={{ fontSize: '0.875rem', color: '#6b7280', textAlign: 'center', marginTop: '0.5rem' }}>精选优质 · 传统工艺</p>
            </div>

            {/* Pork Jerky */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
              borderRadius: '1rem',
              padding: '1.5rem',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
            }}>
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/猪肉干_2c50d54a.jpg"
                alt="猪肉干"
                style={{ height: '10rem', width: '10rem', objectFit: 'contain', marginBottom: '1rem' }}
              />
              <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#111827' }}>猪肉干</h3>
              <p style={{ fontSize: '0.875rem', color: '#6b7280', textAlign: 'center', marginTop: '0.5rem' }}>焦香鲜嫩 · 天然调味</p>
            </div>

            {/* Chicken Jerky */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
              borderRadius: '1rem',
              padding: '1.5rem',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              gridColumn: '1 / -1'
            }}>
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/鸡肉干_3d206ea4.jpg"
                alt="鸡肉干"
                style={{ height: '10rem', width: '10rem', objectFit: 'contain', marginBottom: '1rem' }}
              />
              <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#111827' }}>鸡肉干</h3>
              <p style={{ fontSize: '0.875rem', color: '#6b7280', textAlign: 'center', marginTop: '0.5rem' }}>低脂高蛋白 · 健康选择</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" style={{
        padding: '5rem 0',
        backgroundColor: '#f9fafb'
      }}>
        <div style={{
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <h2 style={{
            fontSize: '2.25rem',
            fontWeight: 'bold',
            color: '#111827',
            marginBottom: '4rem',
            textAlign: 'center',
            fontFamily: "'Playfair Display', serif"
          }}>我们的产品</h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                name: '牛肉干',
                image: 'https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/牛肉干_b2c53b7a.jpg',
                desc: '精选优质牛肉，采用传统工艺与现代技术相结合'
              },
              {
                name: '猪肉干',
                image: 'https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/猪肉干_2c50d54a.jpg',
                desc: '新鲜猪肉，精心腌制烘烤，焦香鲜嫩'
              },
              {
                name: '鸡肉干',
                image: 'https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/鸡肉干_3d206ea4.jpg',
                desc: '低脂肪高蛋白，营养丰富，健康首选'
              }
            ].map((product, idx) => (
              <div key={idx} style={{
                backgroundColor: 'white',
                borderRadius: '1rem',
                overflow: 'hidden',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
              }}>
                <div style={{
                  height: '16rem',
                  backgroundColor: '#f3f4f6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden'
                }}>
                  <img 
                    src={product.image}
                    alt={product.name}
                    style={{ height: '100%', width: '100%', objectFit: 'contain', padding: '1rem' }}
                  />
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '0.75rem' }}>{product.name}</h3>
                  <p style={{ color: '#4b5563' }}>{product.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={{
        padding: '5rem 0',
        backgroundColor: 'white'
      }}>
        <div style={{
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <h2 style={{
            fontSize: '2.25rem',
            fontWeight: 'bold',
            color: '#111827',
            marginBottom: '4rem',
            textAlign: 'center',
            fontFamily: "'Playfair Display', serif"
          }}>我们的服务</h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem'
          }}>
            <div style={{
              backgroundColor: '#f9fafb',
              borderRadius: '1rem',
              padding: '2rem'
            }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '1rem' }}>零售服务</h3>
              <p style={{ color: '#4b5563', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                我们通过多渠道零售模式，让消费者轻松获得高品质肉制品。线上电商和线下实体店，我们都致力于提供最便捷的购物体验。
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#1f2937' }}>
                <li>✓ 线上电商渠道</li>
                <li>✓ 线下实体合作</li>
                <li>✓ 便捷配送服务</li>
              </ul>
            </div>

            <div style={{
              backgroundColor: '#f9fafb',
              borderRadius: '1rem',
              padding: '2rem'
            }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '1rem' }}>OEM 加工服务</h3>
              <p style={{ color: '#4b5563', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                为全球合作伙伴提供专业的 OEM 加工服务。定制配方、小批量生产或大规模代工，我们都能提供完整解决方案。
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#1f2937' }}>
                <li>✓ 定制配方开发</li>
                <li>✓ 灵活生产规模</li>
                <li>✓ 专业技术支持</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{
        padding: '5rem 0',
        backgroundColor: '#111827',
        color: 'white'
      }}>
        <div style={{
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <h2 style={{
            fontSize: '2.25rem',
            fontWeight: 'bold',
            marginBottom: '4rem',
            textAlign: 'center',
            fontFamily: "'Playfair Display', serif"
          }}>联系我们</h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem'
          }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>联系方式</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <p style={{ color: '#9ca3af', fontSize: '0.875rem', marginBottom: '0.5rem' }}>总部</p>
                  <p style={{ fontSize: '1.125rem', fontWeight: 600 }}>广州</p>
                </div>
                <div>
                  <p style={{ color: '#9ca3af', fontSize: '0.875rem', marginBottom: '0.5rem' }}>生产基地</p>
                  <p style={{ fontSize: '1.125rem', fontWeight: 600 }}>南宁 · 重庆</p>
                </div>
                <div>
                  <p style={{ color: '#9ca3af', fontSize: '0.875rem', marginBottom: '0.5rem' }}>邮箱</p>
                  <p style={{ fontSize: '1.125rem', fontWeight: 600 }}>contact@imocfood.com</p>
                </div>
                <div>
                  <p style={{ color: '#9ca3af', fontSize: '0.875rem', marginBottom: '0.5rem' }}>微信</p>
                  <p style={{ fontSize: '1.125rem', fontWeight: 600 }}>IMOC_Official</p>
                </div>
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>为什么选择 IMOC</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  '开放的合作生态',
                  '专业的技术支持',
                  '全球的市场机会',
                  '年轻化的团队',
                  '创新的生产理念',
                  '真材实料的承诺'
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.125rem' }}>
                    <span style={{ width: '0.5rem', height: '0.5rem', backgroundColor: 'white', borderRadius: '50%' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{
            borderTop: '1px solid #374151',
            marginTop: '4rem',
            paddingTop: '2rem',
            textAlign: 'center',
            color: '#9ca3af'
          }}>
            <p>&copy; 2026 IMOC - International Meat Open-source Community. All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
