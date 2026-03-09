import React, { useState, useEffect } from 'react';
import { trpc } from '../lib/trpc';
import AdminLogin from './AdminLogin';

export default function AdminNews() {
  const [adminUser, setAdminUser] = useState<{ username: string } | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [content, setContent] = useState('');
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const utils = trpc.useUtils();

  // Check admin auth via /api/admin/me endpoint
  useEffect(() => {
    fetch('/api/admin/me', { credentials: 'include' })
      .then((r) => r.json())
      .then((data) => {
        if (data.ok) setAdminUser({ username: data.username });
        else setAdminUser(null);
      })
      .catch(() => setAdminUser(null))
      .finally(() => setAuthLoading(false));
  }, []);

  const handleLoginSuccess = () => {
    setAuthLoading(true);
    fetch('/api/admin/me', { credentials: 'include' })
      .then((r) => r.json())
      .then((data) => {
        if (data.ok) setAdminUser({ username: data.username });
      })
      .finally(() => setAuthLoading(false));
  };

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST', credentials: 'include' });
    setAdminUser(null);
  };

  const { data: posts, isLoading } = trpc.news.adminList.useQuery(undefined, {
    enabled: !!adminUser,
  });

  const createMutation = trpc.news.create.useMutation({
    onSuccess: () => {
      utils.news.adminList.invalidate();
      utils.news.list.invalidate();
      setMessage({ type: 'success', text: '发布成功！英文翻译已自动生成。' });
      setContent('');
      setShowForm(false);
    },
    onError: (err) => {
      setMessage({ type: 'error', text: `发布失败：${err.message}` });
    },
  });

  const togglePublishMutation = trpc.news.togglePublish.useMutation({
    onSuccess: () => {
      utils.news.adminList.invalidate();
      utils.news.list.invalidate();
    },
  });

  const deleteMutation = trpc.news.delete.useMutation({
    onSuccess: () => {
      utils.news.adminList.invalidate();
      utils.news.list.invalidate();
      setMessage({ type: 'success', text: '已删除' });
    },
    onError: (err) => {
      setMessage({ type: 'error', text: `删除失败：${err.message}` });
    },
  });

  if (authLoading) {
    return (
      <div style={{ padding: '60px', textAlign: 'center', color: '#666' }}>
        正在验证身份...
      </div>
    );
  }

  if (!adminUser) {
    return <AdminLogin onLoginSuccess={handleLoginSuccess} />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;
    setMessage(null);
    createMutation.mutate({ contentZh: content.trim(), published: true });
  };

  const handleDelete = (id: string) => {
    if (window.confirm('确定要删除这条动态吗？')) {
      deleteMutation.mutate({ id });
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <h1 style={{ fontSize: '24px', fontWeight: '700', color: '#a72027', margin: 0 }}>
            最新动态管理
          </h1>
          <p style={{ color: '#666', fontSize: '14px', marginTop: '4px' }}>
            管理员：{adminUser.username}
          </p>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          {!showForm && (
            <button
              onClick={() => { setShowForm(true); setMessage(null); }}
              style={{
                backgroundColor: '#a72027',
                color: '#fff',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '15px',
              }}
            >
              ＋ 发布动态
            </button>
          )}
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: 'transparent',
              color: '#999',
              border: '1px solid #ddd',
              padding: '10px 16px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px',
            }}
          >
            退出登录
          </button>
        </div>
      </div>

      {/* Status message */}
      {message && (
        <div
          style={{
            padding: '12px 16px',
            borderRadius: '6px',
            marginBottom: '24px',
            backgroundColor: message.type === 'success' ? '#f0fdf4' : '#fef2f2',
            color: message.type === 'success' ? '#166534' : '#991b1b',
            border: `1px solid ${message.type === 'success' ? '#bbf7d0' : '#fecaca'}`,
          }}
        >
          {message.text}
        </div>
      )}

      {/* Publish Form */}
      {showForm && (
        <div
          style={{
            border: '1px solid #e0e0e0',
            borderRadius: '10px',
            padding: '24px',
            marginBottom: '32px',
            backgroundColor: '#fafafa',
          }}
        >
          <h2 style={{ margin: '0 0 16px', fontSize: '18px', color: '#333' }}>发布新动态</h2>
          <form onSubmit={handleSubmit}>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="输入动态内容（中文），系统将自动翻译为英文..."
              rows={6}
              style={{
                width: '100%',
                padding: '12px 14px',
                border: '1px solid #ddd',
                borderRadius: '6px',
                fontSize: '15px',
                lineHeight: '1.6',
                resize: 'vertical',
                boxSizing: 'border-box',
                outline: 'none',
                fontFamily: 'inherit',
              }}
              onFocus={(e) => (e.target.style.borderColor = '#a72027')}
              onBlur={(e) => (e.target.style.borderColor = '#ddd')}
            />
            <div style={{ display: 'flex', gap: '10px', marginTop: '16px' }}>
              <button
                type="submit"
                disabled={createMutation.isPending || !content.trim()}
                style={{
                  backgroundColor: createMutation.isPending || !content.trim() ? '#ccc' : '#a72027',
                  color: '#fff',
                  border: 'none',
                  padding: '10px 24px',
                  borderRadius: '6px',
                  cursor: createMutation.isPending || !content.trim() ? 'not-allowed' : 'pointer',
                  fontWeight: '600',
                  fontSize: '15px',
                }}
              >
                {createMutation.isPending ? '发布中...' : '发布'}
              </button>
              <button
                type="button"
                onClick={() => { setShowForm(false); setContent(''); setMessage(null); }}
                style={{
                  backgroundColor: 'transparent',
                  color: '#666',
                  border: '1px solid #ddd',
                  padding: '10px 20px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '15px',
                }}
              >
                取消
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Posts List */}
      {isLoading ? (
        <p style={{ color: '#666', textAlign: 'center', padding: '40px' }}>加载中...</p>
      ) : !posts || posts.length === 0 ? (
        <div
          style={{
            textAlign: 'center',
            padding: '60px',
            border: '2px dashed #e0e0e0',
            borderRadius: '12px',
            color: '#999',
          }}
        >
          <p style={{ fontSize: '18px', marginBottom: '8px' }}>暂无动态</p>
          <p style={{ fontSize: '14px' }}>点击"发布动态"开始发布</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {posts.map((post) => (
            <div
              key={post.id}
              style={{
                border: '1px solid #e0e0e0',
                borderRadius: '10px',
                padding: '20px',
                backgroundColor: '#fff',
                boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: '0 0 8px', fontSize: '15px', lineHeight: '1.7', color: '#333' }}>
                    {post.contentZh}
                  </p>
                  {post.contentEn && (
                    <p style={{ margin: '0 0 8px', fontSize: '13px', lineHeight: '1.6', color: '#888', fontStyle: 'italic' }}>
                      {post.contentEn}
                    </p>
                  )}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '10px' }}>
                    <span style={{ fontSize: '12px', color: '#aaa' }}>
                      {new Date(post.createdAt).toLocaleString('zh-CN')}
                    </span>
                    <span
                      style={{
                        fontSize: '12px',
                        padding: '2px 8px',
                        borderRadius: '20px',
                        backgroundColor: post.published ? '#dcfce7' : '#fef9c3',
                        color: post.published ? '#166534' : '#854d0e',
                        fontWeight: '500',
                      }}
                    >
                      {post.published ? '已发布' : '草稿'}
                    </span>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
                  <button
                    onClick={() => togglePublishMutation.mutate({ id: post.id, published: !post.published })}
                    style={{
                      padding: '6px 12px',
                      borderRadius: '6px',
                      border: '1px solid #ddd',
                      backgroundColor: 'transparent',
                      cursor: 'pointer',
                      fontSize: '13px',
                      color: '#555',
                    }}
                  >
                    {post.published ? '取消发布' : '发布'}
                  </button>
                  <button
                    onClick={() => handleDelete(post.id)}
                    style={{
                      padding: '6px 12px',
                      borderRadius: '6px',
                      border: '1px solid #fecaca',
                      backgroundColor: 'transparent',
                      cursor: 'pointer',
                      fontSize: '13px',
                      color: '#dc2626',
                    }}
                  >
                    删除
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
