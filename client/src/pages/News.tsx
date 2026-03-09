import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { trpc } from '../lib/trpc';

const News = () => {
  const { language, t } = useLanguage();

  const { data: posts, isLoading, error } = trpc.news.list.useQuery();

  const formatDate = (ts: number, lang: string) => {
    const d = new Date(ts);
    if (lang === 'zh') {
      return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
    }
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '60px 40px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
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
            {language === 'zh' ? '加载失败，请稍后再试' : 'Failed to load. Please try again.'}
          </div>
        )}

        {/* Empty state */}
        {!isLoading && !error && posts && posts.length === 0 && (
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
              {language === 'zh' ? '暂无最新动态' : 'No updates yet'}
            </p>
            <p style={{ fontSize: '14px' }}>
              {language === 'zh' ? '敬请期待' : 'Stay tuned for updates'}
            </p>
          </div>
        )}

        {/* Posts List */}
        {posts && posts.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {posts.map((post) => {
              const content = language === 'zh'
                ? post.contentZh
                : (post.contentEn || post.contentZh);

              return (
                <div
                  key={post.id}
                  style={{
                    padding: '28px 30px',
                    backgroundColor: '#fafafa',
                    borderRadius: '8px',
                    borderLeft: '4px solid #a72027',
                  }}
                >
                  <p
                    style={{
                      fontSize: '15px',
                      color: '#333',
                      lineHeight: '1.8',
                      margin: '0 0 12px',
                      whiteSpace: 'pre-wrap',
                    }}
                  >
                    {content}
                  </p>
                  <p style={{ fontSize: '12px', color: '#aaa', margin: 0 }}>
                    {formatDate(post.createdAt, language)}
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
