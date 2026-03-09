import React, { useState, useEffect } from 'react';
import { trpc } from '../lib/trpc';
import AdminLogin from './AdminLogin';

export default function AdminNews() {
  const [adminUser, setAdminUser] = useState<{ username: string } | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [content, setContent] = useState('');
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const utils = trpc.useUtils();

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
      .then((data) => { if (data.ok) setAdminUser({ username: data.username }); })
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
      setMessage({ type: 'success', text: '发布成功！' });
      setContent('');
      setShowForm(false);
    },
    onError: (err) => {
      setMessage({ type: 'error', text: `发布失败：${err.message}` });
    },
  });

  const deleteMutation = trpc.news.delete.useMutation({
    onSuccess: () => {
      utils.news.adminList.invalidate();
      utils.news.list.invalidate();
    },
    onError: (err) => {
      setMessage({ type: 'error', text: `删除失败：${err.message}` });
    },
  });

  const bulkDeleteMutation = trpc.news.bulkDelete.useMutation({
    onSuccess: (data) => {
      utils.news.adminList.invalidate();
      utils.news.list.invalidate();
      setSelected(new Set());
      setMessage({ type: 'success', text: `已删除 ${data.deleted} 条动态` });
    },
    onError: (err) => {
      setMessage({ type: 'error', text: `批量删除失败：${err.message}` });
    },
  });

  if (authLoading) {
    return <div style={{ padding: '60px', textAlign: 'center', color: '#666' }}>正在验证身份...</div>;
  }

  if (!adminUser) {
    return <AdminLogin onLoginSuccess={handleLoginSuccess} />;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;
    setMessage(null);
    createMutation.mutate({ contentZh: content.trim(), published: true });
  };

  const toggleSelect = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleSelectAll = () => {
    if (!posts) return;
    if (selected.size === posts.length) {
      setSelected(new Set());
    } else {
      setSelected(new Set(posts.map((p) => p.id)));
    }
  };

  const handleBulkDelete = () => {
    if (selected.size === 0) return;
    if (!window.confirm(`确定要删除选中的 ${selected.size} 条动态吗？`)) return;
    setMessage(null);
    bulkDeleteMutation.mutate({ ids: Array.from(selected) });
  };

  const handleSingleDelete = (id: string) => {
    if (!window.confirm('确定要删除这条动态吗？')) return;
    setMessage(null);
    deleteMutation.mutate({ id });
  };

  const allSelected = posts && posts.length > 0 && selected.size === posts.length;
  const someSelected = selected.size > 0;

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '32px 20px' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <h1 style={{ fontSize: '22px', fontWeight: '700', color: '#a72027', margin: 0 }}>最新动态管理</h1>
          <p style={{ color: '#999', fontSize: '13px', marginTop: '4px' }}>管理员：{adminUser.username}</p>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          {!showForm && (
            <button
              onClick={() => { setShowForm(true); setMessage(null); }}
              style={{
                backgroundColor: '#a72027', color: '#fff', border: 'none',
                padding: '8px 18px', borderRadius: '6px', cursor: 'pointer',
                fontWeight: '600', fontSize: '14px',
              }}
            >
              ＋ 发布动态
            </button>
          )}
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: 'transparent', color: '#999',
              border: '1px solid #ddd', padding: '8px 14px',
              borderRadius: '6px', cursor: 'pointer', fontSize: '13px',
            }}
          >
            退出
          </button>
        </div>
      </div>

      {/* Status message */}
      {message && (
        <div style={{
          padding: '10px 14px', borderRadius: '6px', marginBottom: '16px',
          backgroundColor: message.type === 'success' ? '#f0fdf4' : '#fef2f2',
          color: message.type === 'success' ? '#166534' : '#991b1b',
          border: `1px solid ${message.type === 'success' ? '#bbf7d0' : '#fecaca'}`,
          fontSize: '14px',
        }}>
          {message.text}
        </div>
      )}

      {/* Publish Form */}
      {showForm && (
        <div style={{
          border: '1px solid #e0e0e0', borderRadius: '8px',
          padding: '20px', marginBottom: '24px', backgroundColor: '#fafafa',
        }}>
          <form onSubmit={handleSubmit}>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="输入动态内容（中文），系统将自动翻译为英文..."
              rows={5}
              style={{
                width: '100%', padding: '10px 12px',
                border: '1px solid #ddd', borderRadius: '6px',
                fontSize: '14px', lineHeight: '1.6', resize: 'vertical',
                boxSizing: 'border-box', outline: 'none', fontFamily: 'inherit',
              }}
              onFocus={(e) => (e.target.style.borderColor = '#a72027')}
              onBlur={(e) => (e.target.style.borderColor = '#ddd')}
            />
            <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
              <button
                type="submit"
                disabled={createMutation.isPending || !content.trim()}
                style={{
                  backgroundColor: createMutation.isPending || !content.trim() ? '#ccc' : '#a72027',
                  color: '#fff', border: 'none', padding: '8px 20px',
                  borderRadius: '6px', cursor: createMutation.isPending || !content.trim() ? 'not-allowed' : 'pointer',
                  fontWeight: '600', fontSize: '14px',
                }}
              >
                {createMutation.isPending ? '发布中...' : '发布'}
              </button>
              <button
                type="button"
                onClick={() => { setShowForm(false); setContent(''); setMessage(null); }}
                style={{
                  backgroundColor: 'transparent', color: '#666',
                  border: '1px solid #ddd', padding: '8px 16px',
                  borderRadius: '6px', cursor: 'pointer', fontSize: '14px',
                }}
              >
                取消
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Bulk action bar */}
      {posts && posts.length > 0 && (
        <div style={{
          display: 'flex', alignItems: 'center', gap: '12px',
          padding: '8px 12px', backgroundColor: '#f9f9f9',
          border: '1px solid #e8e8e8', borderRadius: '6px 6px 0 0',
          borderBottom: 'none',
        }}>
          <input
            type="checkbox"
            checked={!!allSelected}
            ref={(el) => { if (el) el.indeterminate = someSelected && !allSelected; }}
            onChange={toggleSelectAll}
            style={{ cursor: 'pointer', width: '15px', height: '15px' }}
          />
          <span style={{ fontSize: '13px', color: '#666', flex: 1 }}>
            {someSelected
              ? `已选 ${selected.size} 条`
              : `共 ${posts.length} 条动态`}
          </span>
          {someSelected && (
            <button
              onClick={handleBulkDelete}
              disabled={bulkDeleteMutation.isPending}
              style={{
                backgroundColor: '#dc2626', color: '#fff', border: 'none',
                padding: '5px 14px', borderRadius: '5px', cursor: 'pointer',
                fontSize: '13px', fontWeight: '500',
              }}
            >
              {bulkDeleteMutation.isPending ? '删除中...' : `删除选中 (${selected.size})`}
            </button>
          )}
        </div>
      )}

      {/* Posts List - compact table-like rows */}
      {isLoading ? (
        <p style={{ color: '#666', textAlign: 'center', padding: '40px' }}>加载中...</p>
      ) : !posts || posts.length === 0 ? (
        <div style={{
          textAlign: 'center', padding: '60px',
          border: '2px dashed #e0e0e0', borderRadius: '12px', color: '#999',
        }}>
          <p style={{ fontSize: '16px', marginBottom: '6px' }}>暂无动态</p>
          <p style={{ fontSize: '13px' }}>点击"发布动态"开始发布</p>
        </div>
      ) : (
        <div style={{
          border: '1px solid #e8e8e8', borderRadius: '0 0 6px 6px', overflow: 'hidden',
        }}>
          {posts.map((post, idx) => (
            <div
              key={post.id}
              style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                padding: '10px 12px',
                backgroundColor: selected.has(post.id) ? '#fff8f8' : (idx % 2 === 0 ? '#fff' : '#fafafa'),
                borderBottom: idx < posts.length - 1 ? '1px solid #f0f0f0' : 'none',
              }}
            >
              {/* Checkbox */}
              <input
                type="checkbox"
                checked={selected.has(post.id)}
                onChange={() => toggleSelect(post.id)}
                style={{ cursor: 'pointer', flexShrink: 0, width: '15px', height: '15px' }}
              />

              {/* Status dot */}
              <span
                title={post.published ? '已发布' : '草稿'}
                style={{
                  width: '8px', height: '8px', borderRadius: '50%', flexShrink: 0,
                  backgroundColor: post.published ? '#22c55e' : '#f59e0b',
                }}
              />

              {/* Content preview */}
              <span style={{
                flex: 1, fontSize: '13px', color: '#333',
                overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
              }}>
                {post.contentZh}
              </span>

              {/* Date */}
              <span style={{ fontSize: '12px', color: '#bbb', flexShrink: 0, minWidth: '80px', textAlign: 'right' }}>
                {new Date(post.createdAt).toLocaleDateString('zh-CN')}
              </span>

              {/* Delete button */}
              <button
                onClick={() => handleSingleDelete(post.id)}
                disabled={deleteMutation.isPending}
                style={{
                  backgroundColor: 'transparent', color: '#dc2626',
                  border: '1px solid #fecaca', padding: '3px 10px',
                  borderRadius: '4px', cursor: 'pointer', fontSize: '12px',
                  flexShrink: 0,
                }}
              >
                删除
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
