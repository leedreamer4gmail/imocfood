import React, { useState } from 'react';

const Home: React.FC = () => {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

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
        padding: '30px 40px',
        display: 'flex',
        justifyContent: 'center',
        gap: '60px',
        borderBottom: '1px solid #f0f0f0',
        backgroundColor: '#fff'
      }}>
        {['主页', '产品', '服务', '联系'].map((item) => (
          <button
            key={item}
            onMouseEnter={() => setHoveredMenu(item)}
            onMouseLeave={() => setHoveredMenu(null)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              color: hoveredMenu === item ? '#a72027' : '#333',
              transition: 'color 0.3s ease',
              padding: '0'
            }}
          >
            {item}
          </button>
        ))}
      </nav>

      {/* Main Content */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '60px 40px',
        textAlign: 'center'
      }}>
        {/* Logo with Reflection */}
        <div style={{
          marginBottom: '60px',
          position: 'relative'
        }}>
          {/* Main Logo */}
          <div style={{
            fontSize: '120px',
            fontWeight: '700',
            letterSpacing: '8px',
            color: '#a72027',
            marginBottom: '20px',
            textShadow: '0 4px 12px rgba(167, 32, 39, 0.2)'
          }}>
            IMOC
          </div>

          {/* Reflection Effect */}
          <div style={{
            fontSize: '120px',
            fontWeight: '700',
            letterSpacing: '8px',
            color: '#a72027',
            opacity: 0.15,
            transform: 'scaleY(-1)',
            marginTop: '-40px',
            filter: 'blur(2px)'
          }}>
            IMOC
          </div>
        </div>

        {/* Company Description */}
        <div style={{
          maxWidth: '700px',
          lineHeight: '1.8',
          fontSize: '15px',
          color: '#666',
          marginTop: '40px'
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

          <p>
            <strong>欢迎加入 IMOC 联盟，一起为全球消费者带来更好的肉制品体验。</strong>
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        padding: '30px 40px',
        textAlign: 'center',
        borderTop: '1px solid #f0f0f0',
        backgroundColor: '#fff',
        fontSize: '12px',
        color: '#999'
      }}>
        <p>© 2026 IMOC - International Meat Open-source Community</p>
        <p>All rights reserved</p>
      </footer>
    </div>
  );
};

export default Home;
