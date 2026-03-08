import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { trpc } from '../lib/trpc';

const News = () => {
  const { language, t } = useLanguage();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const { data: articles, isLoading, error } = trpc.news.list.useQuery();

  const formatDate = (date: Date | string | number, lang: string) => {
    const d = new Date(date);
    if (lang === 'zh') {
      return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
    }
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '60px 40px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2
          style={{
            fontSize: '32px',
            fontWeight: '600',
            color: '#333333',
            marginBottom: '50px',
            textAlign: 'center',
          }}
        >
          {t('news.title')}
        </h2>

        {/* Loading state */}
        {isLoading && (
          <div style={{ textAlign: 'center', padding: '60px', color: '#999' }}>
            {language === 'zh' ? '加载中...' : 'Loading...'}
          </div>
        )}

        {/* Error state */}
        {error && (
          <div style={{ textAlign: 'center', padding: '60px', color: '#999' }}>
            {language === 'zh' ? '加载失败，请稍后再试' : 'Failed to load articles. Please try again.'}
          </div>
        )}

        {/* Empty state */}
        {!isLoading && !error && articles && articles.length === 0 && (
          <div
            style={{
              textAlign: 'center',
              padding: '80px 40px',
              border: '2px dashed #e0e0e0',
              borderRadius: '12px',
              color: '#999',
            }}
          >
            <p style={{ fontSize: '18px', marginBottom: '8px' }}>
              {language === 'zh' ? '暂无新闻动态' : 'No news articles yet'}
            </p>
            <p style={{ fontSize: '14px' }}>
              {language === 'zh' ? '敬请期待' : 'Stay tuned for updates'}
            </p>
          </div>
        )}

        {/* News List */}
        {articles && articles.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {articles.map((article) => {
              const title = language === 'zh' ? article.titleZh : (article.titleEn || article.titleZh);
              const summary = language === 'zh'
                ? (article.summaryZh || '')
                : (article.summaryEn || article.summaryZh || '');
              const content = language === 'zh'
                ? article.contentZh
                : (article.contentEn || article.contentZh);
              const category = article.category || (language === 'zh' ? '公司动态' : 'Company News');
              const isExpanded = expandedId === article.id;

              return (
                <div
                  key={article.id}
                  style={{
                    padding: '30px',
                    backgroundColor: '#fafafa',
                    borderRadius: '8px',
                    borderLeft: '4px solid #a72027',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(167, 32, 39, 0.15)';
                    e.currentTarget.style.transform = 'translateX(8px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                  onClick={() => setExpandedId(isExpanded ? null : article.id)}
                >
                  {/* Cover image */}
                  {article.coverImageUrl && (
                    <img
                      src={article.coverImageUrl}
                      alt={title}
                      style={{
                        width: '100%',
                        maxHeight: '300px',
                        objectFit: 'cover',
                        borderRadius: '6px',
                        marginBottom: '16px',
                      }}
                    />
                  )}

                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '12px',
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <h3
                        style={{
                          fontSize: '18px',
                          fontWeight: '600',
                          color: '#333333',
                          margin: '0 0 8px 0',
                        }}
                      >
                        {title}
                      </h3>
                      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                        <p style={{ fontSize: '12px', color: '#999999', margin: 0 }}>
                          {formatDate(article.createdAt, language)}
                        </p>
                        {article.author && (
                          <p style={{ fontSize: '12px', color: '#aaa', margin: 0 }}>
                            {language === 'zh' ? `作者：${article.author}` : `By ${article.author}`}
                          </p>
                        )}
                      </div>
                    </div>
                    <span
                      style={{
                        display: 'inline-block',
                        padding: '4px 12px',
                        backgroundColor: '#a72027',
                        color: '#ffffff',
                        borderRadius: '4px',
                        fontSize: '12px',
                        fontWeight: '500',
                        whiteSpace: 'nowrap',
                        marginLeft: '20px',
                        flexShrink: 0,
                      }}
                    >
                      {category}
                    </span>
                  </div>

                  {/* Summary or truncated content */}
                  {!isExpanded && (
                    <p
                      style={{
                        fontSize: '14px',
                        color: '#666666',
                        lineHeight: '1.6',
                        margin: '0 0 8px',
                      }}
                    >
                      {summary || content.slice(0, 200) + (content.length > 200 ? '...' : '')}
                    </p>
                  )}

                  {/* Expanded full content */}
                  {isExpanded && (
                    <div
                      style={{
                        fontSize: '15px',
                        color: '#444',
                        lineHeight: '1.8',
                        whiteSpace: 'pre-wrap',
                        marginTop: '8px',
                      }}
                    >
                      {content}
                    </div>
                  )}

                  {/* Read more / collapse toggle */}
                  <p
                    style={{
                      fontSize: '13px',
                      color: '#a72027',
                      margin: '8px 0 0',
                      fontWeight: '500',
                    }}
                  >
                    {isExpanded
                      ? (language === 'zh' ? '收起 ▲' : 'Collapse ▲')
                      : (language === 'zh' ? '阅读全文 ▼' : 'Read more ▼')}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default News;
