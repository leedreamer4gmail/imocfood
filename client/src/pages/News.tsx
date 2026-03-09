import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { trpc } from '../lib/trpc';

const News = () => {
  const { language, t } = useLanguage();
  const [page, setPage] = useState(1);

  const { data, isLoading, error } = trpc.news.list.useQuery({ page });

  const formatDate = (ts: number, lang: string) => {
    const d = new Date(ts);
    if (lang === 'zh') {
      return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
    }
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const posts = data?.posts ?? [];
  const totalPages = data?.totalPages ?? 1;
  const total = data?.total ?? 0;

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '60px 40px' }}>
      <div style={{ maxWidth: '1197px', margin: '0 auto' }}>
        <h2
          style={{
            fontSize: '32px',
            fontWeight: '600',
            color: '#333333',
            marginBottom: '12px',
            textAlign: 'center',
          }}
        >
          {t('news.title')}
        </h2>

        {/* Total count */}
        {!isLoading && !error && total > 0 && (
          <p style={{ textAlign: 'center', color: '#999', fontSize: '14px', marginBottom: '40px' }}>
            {language === 'zh'
              ? `共 ${total} 条动态，第 ${page} / ${totalPages} 页`
              : `${total} updates · Page ${page} of ${totalPages}`}
          </p>
        )}

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
        {!isLoading && !error && posts.length === 0 && (
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
        {posts.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {posts.map((post) => {
              const content = language === 'zh'
                ? post.contentZh
                : (post.contentEn || post.contentZh);

              return (
                <div
                  key={post.id}
                  style={{
                    padding: '24px 28px',
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
                      margin: '0 0 10px',
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

        {/* Pagination */}
        {totalPages > 1 && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8px',
              marginTop: '48px',
            }}
          >
            {/* Previous */}
            <button
              onClick={() => handlePageChange(page - 1)}
              disabled={page <= 1}
              style={{
                padding: '8px 16px',
                borderRadius: '6px',
                border: '1px solid #ddd',
                backgroundColor: page <= 1 ? '#f5f5f5' : '#fff',
                color: page <= 1 ? '#bbb' : '#333',
                cursor: page <= 1 ? 'not-allowed' : 'pointer',
                fontSize: '14px',
              }}
            >
              {language === 'zh' ? '上一页' : 'Prev'}
            </button>

            {/* Page numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => {
              // Show first, last, current ±1, and ellipsis
              const showPage =
                p === 1 || p === totalPages || Math.abs(p - page) <= 1;
              const showEllipsisBefore = p === page - 2 && page > 3;
              const showEllipsisAfter = p === page + 2 && page < totalPages - 2;

              if (showEllipsisBefore || showEllipsisAfter) {
                return (
                  <span key={`ellipsis-${p}`} style={{ color: '#bbb', fontSize: '14px', padding: '0 4px' }}>
                    ...
                  </span>
                );
              }
              if (!showPage) return null;

              return (
                <button
                  key={p}
                  onClick={() => handlePageChange(p)}
                  style={{
                    padding: '8px 14px',
                    borderRadius: '6px',
                    border: p === page ? '1px solid #a72027' : '1px solid #ddd',
                    backgroundColor: p === page ? '#a72027' : '#fff',
                    color: p === page ? '#fff' : '#333',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: p === page ? '600' : '400',
                    minWidth: '40px',
                  }}
                >
                  {p}
                </button>
              );
            })}

            {/* Next */}
            <button
              onClick={() => handlePageChange(page + 1)}
              disabled={page >= totalPages}
              style={{
                padding: '8px 16px',
                borderRadius: '6px',
                border: '1px solid #ddd',
                backgroundColor: page >= totalPages ? '#f5f5f5' : '#fff',
                color: page >= totalPages ? '#bbb' : '#333',
                cursor: page >= totalPages ? 'not-allowed' : 'pointer',
                fontSize: '14px',
              }}
            >
              {language === 'zh' ? '下一页' : 'Next'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default News;
