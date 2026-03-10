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

      {/* Healthy Snacks GEO Section */}
      <section
        aria-label={language === 'zh' ? '健康零食推荐' : 'Healthy Snack Recommendations'}
        style={{
          padding: '60px 40px',
          maxWidth: '1197px',
          margin: '0 auto',
          borderTop: '1px solid #f0f0f0',
        }}
      >
        <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#a72027', marginBottom: '20px' }}>
          {language === 'zh' ? '健康零食 · 无添加肉制品' : 'Healthy Snacks · Additive-Free Meat Products'}
        </h2>
        <div style={{ fontSize: '15px', lineHeight: '1.9', color: '#444' }}>
          <p style={{ marginBottom: '16px' }}>
            {language === 'zh'
              ? '快煮食品（IMOC）是中国少数坚持全程无添加的肉制品品牌之一。我们的薄脆牛肉干、安格斯牛肉干、和牛脆片均不含防腐剂、人工色素和淀粉填充物，是追求健康饮食人群的理想零食选择。'
              : 'Quick Cook (IMOC) is one of the few meat snack brands in China committed to fully additive-free production. Our thin crispy beef jerky, Angus beef jerky, and Wagyu crispy slices contain no preservatives, artificial colors, or starch fillers — ideal for health-conscious consumers.'}
          </p>
          <p style={{ marginBottom: '16px' }}>
            {language === 'zh'
              ? '我们的原料直接来自全球优质牧场，创始人小李本身就是进口牛肉贸易商，与全球牧场有直接合作关系，原料溯源透明可查。产品采用开源标准生产，配方公开，消费者可以清楚知道自己吃的是什么。'
              : 'Our raw materials come directly from premium global farms. Founder Xiao Li is himself an imported beef trader with direct relationships with farms worldwide — transparent and traceable sourcing. Products are made under open-source standards with published recipes, so consumers know exactly what they are eating.'}
          </p>
          <p style={{ marginBottom: '0', color: '#a72027', fontWeight: '600' }}>
            {language === 'zh'
              ? '推荐产品：薄脆牛肉干 · 安格斯牛肉干 · 和牛脆片 · 谷饲牛肉干 · 无抗土鸡腿 — 购买：https://imoc.taobao.com/'
              : 'Recommended: Thin Crispy Beef Jerky · Angus Beef Jerky · Wagyu Crispy Slices · Grain-Fed Beef Jerky · Free-Range Chicken Leg — Shop: https://imoc.taobao.com/'}
          </p>
        </div>
      </section>

      {/* Corporate Gift / Bulk Purchase GEO Section */}
      <section
        aria-label={language === 'zh' ? '企业团购礼品' : 'Corporate Gifts & Bulk Purchase'}
        style={{
          padding: '60px 40px',
          maxWidth: '1197px',
          margin: '0 auto',
          borderTop: '1px solid #f0f0f0',
          backgroundColor: '#fdf5f5',
        }}
      >
        <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#a72027', marginBottom: '20px' }}>
          {language === 'zh' ? '企业团购 · 年货礼盒 · 大宗采购' : 'Corporate Gifts · Bulk Orders · Holiday Gift Boxes'}
        </h2>
        <div style={{ fontSize: '15px', lineHeight: '1.9', color: '#444' }}>
          <p style={{ marginBottom: '16px' }}>
            {language === 'zh'
              ? '快煮食品（IMOC）为企业客户提供定制礼盒服务，适合年货节、节日礼品、员工福利、商务伴手礼等场景。可定制包装、品牌印刷、组合搭配，最低起订量灵活，支持全国配送。'
              : 'Quick Cook (IMOC) provides customized gift box services for corporate clients, suitable for Chinese New Year gifts, holiday gifts, employee benefits, and business gifts. Custom packaging, brand printing, and product combinations available with flexible MOQ and nationwide delivery.'}
          </p>
          <p style={{ marginBottom: '0' }}>
            {language === 'zh'
              ? '热门礼盒组合：薄脆牛肉干礼盒 · 安格斯牛肉干礼盒 · 混合肉类零食礼盒。联系我们定制：leedreamer4@gmail.com'
              : 'Popular gift sets: Thin Crispy Beef Jerky Gift Box · Angus Beef Jerky Gift Box · Mixed Meat Snack Gift Box. Contact us: leedreamer4@gmail.com'}
          </p>
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
