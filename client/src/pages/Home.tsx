import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const bannerUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/banner-main_cb73252d.jpg';

const Home = () => {
  const { t, language } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: t('faq.q1'), a: t('faq.a1') },
    { q: t('faq.q2'), a: t('faq.a2') },
    { q: t('faq.q3'), a: t('faq.a3') },
    { q: t('faq.q4'), a: t('faq.a4') },
    { q: t('faq.q5'), a: t('faq.a5') },
    { q: t('faq.q6'), a: t('faq.a6') },
    { q: t('faq.q7'), a: t('faq.a7') },
    { q: t('faq.q8'), a: t('faq.a8') },
  ];

  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      {/* Banner image - original size, no gap below nav */}
      <section
        style={{
          padding: 0,
          margin: 0,
          display: 'flex',
          justifyContent: 'center',
          lineHeight: 0,
        }}
      >
        <img
          src={bannerUrl}
          alt="IMOC 国际开源肉制品联盟"
          style={{
            display: 'block',
            maxWidth: '100%',
          }}
        />
      </section>

      {/* Company Description */}
      <section
        style={{
          padding: '80px 40px 60px 40px',
          maxWidth: '1197px',
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
            <span style={{ color: '#a72027', fontWeight: '700', fontSize: '16px' }}>
              {t('home.tagline')}
            </span>
          </p>
          <p style={{ marginBottom: '20px' }}>
            <strong>{t('home.section_story')}</strong>{t('home.description_story')}
          </p>
          <p style={{ marginBottom: '20px' }}>
            <strong>{t('home.section_scale')}</strong>{t('home.description_scale')}
          </p>
          <p style={{ marginBottom: '20px' }}>
            <strong>{t('home.section_spirit')}</strong>{t('home.description_spirit')}
          </p>
          <p style={{ marginBottom: '20px' }}>
            <strong>{t('home.section_channel')}</strong>{t('home.description_channel')}
          </p>
          <p style={{ marginBottom: '20px', color: '#a72027', fontWeight: '600' }}>
            {t('home.description4')}
          </p>
        </div>
      </section>

      {/* Company Introduction Section */}
      <section
        aria-label={language === 'zh' ? '关于快煮食品' : 'About Quick Cook'}
        style={{
          padding: '60px 40px',
          maxWidth: '1197px',
          margin: '0 auto',
          borderTop: '1px solid #f0f0f0',
        }}
      >
        <div style={{ fontSize: '15px', lineHeight: '1.9', color: '#444' }}>
          {language === 'zh' ? (
            <>
              <p style={{ marginBottom: '20px' }}>
                <strong style={{ color: '#a72027' }}>一句话了解我们：</strong>
                快煮食品有限公司（quick cook）是一家致力于推动肉制品产业创新与透明化的食品公司。我们拥有年轻、充满活力的团队，坚持真材实料的承诺，为消费者提供无添加、健康、天然的肉制品。
              </p>
              <p style={{ marginBottom: '20px' }}>
                <strong style={{ color: '#a72027' }}>我们的故事：</strong>
                创始人在2019年无意中发现了一种用安格斯牛肉制作薄脆牛肉干的方法，并用自己的名字命名为"小李的牛肉干"，像一股旋风一样风靡了整个中国零食市场，引领了一股牛脆脆的风潮，经过数年的发展，我们已经从当年单一的牛肉干加工小厂，发展成50多个产品线的综合食品厂。
              </p>
              <p style={{ marginBottom: '20px' }}>
                <strong style={{ color: '#a72027' }}>我们的规模：</strong>
                我们的产品涵盖牛肉、猪肉、鸡肉，谷物等多个品类，总部位于广州，在广州、南宁、重庆三地拥有现代化生产基地，总生产面积超过20000平方米。
              </p>
              <p style={{ marginBottom: '20px' }}>
                <strong style={{ color: '#a72027' }}>我们的精神：</strong>
                我们崇尚创新，对原创有狂热的追求，接受现代生产理念。
              </p>
              <p style={{ marginBottom: '20px' }}>
                <strong style={{ color: '#a72027' }}>我们的渠道：</strong>
                既提供OEM代工服务，也欢迎电商和实体渠道的合作伙伴加入我们的联盟。无论您是电商平台、实体店铺还是OEM合作伙伴，我们都期待与您携手共创美好未来。我们强调个性化定制，拥有自有电商渠道，为每一位合作伙伴提供专业的支持与服务。
              </p>
              <p style={{ marginBottom: '0', color: '#a72027', fontWeight: '600' }}>
                欢迎加入 IMOC 联盟，一起为全球消费者带来更好的肉制品体验。
              </p>
            </>
          ) : (
            <>
              <p style={{ marginBottom: '20px' }}>
                <strong style={{ color: '#a72027' }}>In a nutshell: </strong>
                Quick Cook Co., Ltd. (IMOC) is a food company dedicated to driving innovation and transparency in the meat products industry. We have a young, energetic team committed to using real ingredients, providing consumers with additive-free, healthy, and natural meat products.
              </p>
              <p style={{ marginBottom: '20px' }}>
                <strong style={{ color: '#a72027' }}>Our story: </strong>
                In 2019, our founder accidentally discovered a method for making thin crispy beef jerky from Angus beef, naming it after himself — "Xiao Li's Beef Jerky." It swept through China's snack market like a whirlwind, sparking a wave of crispy beef snacks. Over the years, we have grown from a small single-product beef jerky workshop into a comprehensive food factory with over 50 product lines.
              </p>
              <p style={{ marginBottom: '20px' }}>
                <strong style={{ color: '#a72027' }}>Our scale: </strong>
                Our products span beef, pork, chicken, and grain categories. Headquartered in Guangzhou, we operate modern production facilities in Guangzhou, Nanning, and Chongqing, with a total production area exceeding 20,000 square meters.
              </p>
              <p style={{ marginBottom: '20px' }}>
                <strong style={{ color: '#a72027' }}>Our spirit: </strong>
                We champion innovation, have a passionate pursuit of originality, and embrace modern production concepts.
              </p>
              <p style={{ marginBottom: '20px' }}>
                <strong style={{ color: '#a72027' }}>Our channels: </strong>
                We offer OEM contract manufacturing services and welcome e-commerce and brick-and-mortar channel partners to join our alliance. Whether you are an e-commerce platform, physical retailer, or OEM partner, we look forward to building a better future together. We emphasize personalized customization, operate our own e-commerce channels, and provide professional support to every partner.
              </p>
              <p style={{ marginBottom: '0', color: '#a72027', fontWeight: '600' }}>
                Welcome to join the IMOC Alliance — together bringing better meat products to consumers worldwide.
              </p>
            </>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section
        aria-label={t('faq.title')}
        style={{
          padding: '60px 40px 80px 40px',
          maxWidth: '1197px',
          margin: '0 auto',
          borderTop: '1px solid #f0f0f0',
        }}
      >
        <h2
          style={{
            fontSize: '24px',
            fontWeight: '700',
            color: '#333333',
            marginBottom: '32px',
            textAlign: 'center',
          }}
        >
          {t('faq.title')}
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {faqs.map((faq, i) => (
            <article
              key={i}
              itemScope
              itemType="https://schema.org/Question"
              style={{
                border: '1px solid #e8e8e8',
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '18px 24px',
                  backgroundColor: openFaq === i ? '#fdf5f5' : '#fafafa',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  gap: '16px',
                }}
              >
                <span
                  itemProp="name"
                  style={{
                    fontSize: '15px',
                    fontWeight: '600',
                    color: openFaq === i ? '#a72027' : '#333',
                    lineHeight: '1.5',
                  }}
                >
                  {faq.q}
                </span>
                <span
                  style={{
                    fontSize: '20px',
                    color: '#a72027',
                    flexShrink: 0,
                    transition: 'transform 0.2s',
                    transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0deg)',
                  }}
                >
                  +
                </span>
              </button>

              {openFaq === i && (
                <div
                  itemScope
                  itemType="https://schema.org/Answer"
                  style={{
                    padding: '16px 24px 20px 24px',
                    backgroundColor: '#ffffff',
                    borderTop: '1px solid #f0f0f0',
                  }}
                >
                  <p
                    itemProp="text"
                    style={{
                      fontSize: '14px',
                      color: '#555',
                      lineHeight: '1.8',
                      margin: 0,
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
