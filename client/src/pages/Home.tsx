import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const bannerUrl = 'https://files.manuscdn.com/user_upload_by_module/session_file/85413465/JbqMiNTZHKOoBiXa.jpg';

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
          overflow: 'hidden',
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
            maxWidth: '100%',   // 手机端缩放适应
            flexShrink: 0,      // 桌面端不压缩
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
