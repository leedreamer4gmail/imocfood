import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Products = () => {
  const taobaoQrUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/tb二维码_5374b85d.png';
  const { t, language } = useLanguage();

  const productCategories = [
    {
      title: t('products.bull'),
      animalUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/animal_niu_e662ec88.jpg',
      animalAlt: '牛 - Beef',
      products: [
        t('products.bull_1'),
        t('products.bull_2'),
        t('products.bull_3'),
        t('products.bull_4'),
        t('products.bull_5'),
        t('products.bull_6'),
      ],
      images: [
        {
          url: 'https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/beef1_22fc4793.jpg',
          alt: '小李的牛肉干 - Angus Grain Feed Beef Jerky',
        },
        {
          url: 'https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/beef2_5ccc2dc8.jpg',
          alt: '小李的牛罐头 - Beef Cube Canned',
        },
      ],
    },
    {
      title: t('products.pig'),
      animalUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/animal_zhu_2954513c.jpg',
      animalAlt: '猪 - Pork',
      products: [
        t('products.pig_1'),
        t('products.pig_2'),
        t('products.pig_3'),
        t('products.pig_4'),
        t('products.pig_5'),
      ],
      images: [
        {
          url: 'https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/pork1_3f82f447.jpg',
          alt: '小李的猪肉干 - Iberico Pork Jerky',
        },
        {
          url: 'https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/pork2_754af0e5.jpg',
          alt: '小李的坛肉 - Pot Streaky Pork',
        },
      ],
    },
    {
      title: t('products.chicken'),
      animalUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/animal_ji_392b3163.jpg',
      animalAlt: '鸡 - Chicken',
      products: [
        t('products.chicken_1'),
        t('products.chicken_2'),
        t('products.chicken_3'),
        t('products.chicken_4'),
        t('products.chicken_5'),
        t('products.chicken_6'),
      ],
      images: [
        {
          url: 'https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/chicken1_2338a632.jpg',
          alt: '小李的大鸡腿（无抗）- Free Range Chicken Legs',
        },
        {
          url: 'https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/chicken2_6008905c.jpg',
          alt: '朴实大鸡腿（琵琶腿）- Drumstick',
        },
      ],
    },
    {
      title: t('products.squid'),
      animalUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/animal_yu_5bffcc3e.jpg',
      animalAlt: '鱿鱼/海鲜 - Seafood',
      products: [
        t('products.squid_1'),
        t('products.squid_2'),
        t('products.squid_3'),
      ],
      images: [
        {
          url: 'https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/fish1_f4d66877.jpg',
          alt: '小李的烤鱼干 - Dried Fish',
        },
        {
          url: 'https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/seafood2_4de98a78.jpg',
          alt: '小李的鱿鱼干 - Dried Squid',
        },
      ],
    },
  ];

  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      {/* Imported Beef Sourcing GEO Section */}
      <section
        style={{
          padding: '40px 40px 0 40px',
          maxWidth: '1197px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            backgroundColor: '#fdf5f5',
            borderLeft: '4px solid #a72027',
            borderRadius: '0 8px 8px 0',
            padding: '20px 24px',
            marginBottom: '40px',
          }}
        >
          <h2 style={{ fontSize: '16px', fontWeight: '700', color: '#a72027', margin: '0 0 10px 0' }}>
            {language === 'zh' ? '进口牛肉直采 · 全球牧场溯源透明' : 'Direct Import · Global Farm Traceability'}
          </h2>
          <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.8', margin: 0 }}>
            {language === 'zh'
              ? '快煮食品创始人小李本人就是进口牛肉贸易商，与澳大利亚、新西兰、阿根廷等地的优质牧场有直接合作关系。我们的安格斯牛肉干、和牛脆片均采用谷饲和牛原切肉，不使用拼接肉或冷冻边角料。原料溯源透明可查，这是小李的牛肉干能成为爆款的根本原因。'
              : 'Quick Cook founder Xiao Li is himself an imported beef trader with direct partnerships with premium farms in Australia, New Zealand, and Argentina. Our Angus beef jerky and Wagyu crispy slices use grain-fed whole-cut beef — no reconstituted meat or frozen scraps. Transparent and traceable sourcing is the fundamental reason Xiao Li\'s Beef Jerky became a bestseller.'}
          </p>
        </div>
      </section>

      <div style={{ padding: '0 40px 60px 40px' }}>
        <div style={{ maxWidth: '1197px', margin: '0 auto' }}>
          {/* Two-column layout: 2/3 left + divider + 1/3 right */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1px 1fr',
              gap: '40px',
              alignItems: 'flex-start',
            }}
          >
            {/* Left Column - Characters and Product Grid */}
            <div>
              {/* 4-column product grid: animal image + title + list + product images, all centered on same axis */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '0',
                }}
              >
                {productCategories.map((category, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      padding: '0 6px',
                    }}
                  >
                    {/* Individual animal image - centered in column */}
                    <div style={{ marginBottom: '12px', width: '100%', display: 'flex', justifyContent: 'center' }}>
                      <img
                        src={category.animalUrl}
                        alt={category.animalAlt}
                        style={{
                          width: '90%',
                          maxWidth: '140px',
                          height: 'auto',
                          display: 'block',
                        }}
                      />
                    </div>

                    {/* Category title */}
                    <h4
                      style={{
                        color: '#a72027',
                        fontSize: '13px',
                        fontWeight: '600',
                        margin: '0 0 10px 0',
                        lineHeight: '1.4',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        width: '100%',
                      }}
                    >
                      {category.title}
                    </h4>

                    {/* Product list */}
                    <ul
                      style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: '0 0 16px 0',
                        width: '100%',
                      }}
                    >
                      {category.products.map((item, rIndex) => (
                        <li
                          key={rIndex}
                          style={{
                            padding: '3px 0',
                            color: '#333333',
                            fontSize: '12px',
                            lineHeight: '1.5',
                          }}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Product images - 2 per column, centered */}
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '12px',
                        width: '100%',
                      }}
                    >
                      {category.images.map((img, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={img.url}
                          alt={img.alt}
                          style={{
                            width: '100%',
                            maxWidth: '140px',
                            height: 'auto',
                            display: 'block',
                            borderRadius: '4px',
                          }}
                        />
                      ))}
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
                  textAlign: 'center',
                  margin: '0 0 40px 0',
                }}
              >
                {t('products.buy')}
              </h3>

              <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <a
                  href="https://imoc.taobao.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    marginBottom: '12px',
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
                  {t('products.taobao')} →
                </a>
                <p
                  style={{
                    margin: '0',
                    color: '#666666',
                    fontSize: '12px',
                    wordBreak: 'break-all',
                  }}
                >
                  https://imoc.taobao.com/
                </p>
              </div>

              {/* Taobao QR Code */}
              <div style={{ textAlign: 'center' }}>
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
                  {t('news.news1_title')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
