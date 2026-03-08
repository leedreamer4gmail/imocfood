import React from 'react';

const Home = () => {
  const logoUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/logoweb_eed8c41b.jpg';
  const productImageUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/chanpin_e5ff5e4d.jpg';

  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      {/* Logo Section */}
      <section
        style={{
          padding: '60px 40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '400px',
        }}
      >
        <img
          src={logoUrl}
          alt="IMOC Logo"
          style={{
            maxWidth: '400px',
            width: '100%',
            height: 'auto',
            marginBottom: '40px',
          }}
        />
      </section>

      {/* Products Preview */}
      <section
        style={{
          padding: '40px 40px 20px 40px',
          backgroundColor: '#fafafa',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '70px',
            overflow: 'hidden',
            borderRadius: '8px',
            marginBottom: '0',
          }}
        >
          <img
            src={productImageUrl}
            alt="Products"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              imageRendering: 'crisp-edges',
            }}
          />
        </div>
      </section>

      {/* Company Description */}
      <section
        style={{
          padding: '60px 40px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            fontSize: '16px',
            lineHeight: '1.8',
            color: '#333333',
            textAlign: 'left',
          }}
        >
          <p style={{ marginBottom: '20px' }}>
            IMOC（国际开源肉制品联盟）是一家致力于推动全球肉制品产业创新与透明化的食品公司。我们拥有年轻、充满活力的团队，坚持真材实料的承诺，为消费者提供无添加、健康、天然的肉制品。
          </p>
          <p style={{ marginBottom: '20px' }}>
            我们的产品涵盖牛肉、猪肉、鸡肉等多个品类，总部位于广州，在广州、南宁、重庆三地拥有现代化生产基地。我们崇尚创新，接受现代生产理念，既提供OEM代工服务，也欢迎电商和实体渠道的合作伙伴加入我们的联盟。
          </p>
          <p style={{ marginBottom: '20px' }}>
            无论您是电商平台、实体店铺还是OEM合作伙伴，我们都期待与您携手共创美好未来。我们强调个性化定制，拥有自有电商渠道，为每一位合作伙伴提供专业的支持与服务。
          </p>
          <p style={{ marginBottom: '20px', color: '#a72027', fontWeight: '600' }}>
            欢迎加入 IMOC 联盟，一起为全球消费者带来更好的肉制品体验。
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
