import React, { useState } from 'react';
import { trpc } from '../lib/trpc';
import { useAuth } from '../_core/hooks/useAuth';
import { getLoginUrl } from '../const';

type ArticleForm = {
  titleZh: string;
  contentZh: string;
  summaryZh: string;
  author: string;
  category: string;
  coverImageUrl: string;
  published: boolean;
};

const emptyForm: ArticleForm = {
  titleZh: '',
  contentZh: '',
  summaryZh: '',
  author: '',
  category: '',
  coverImageUrl: '',
  published: false,
};

type View = 'list' | 'create' | 'edit';

export default function AdminNews() {
  const { user, loading: authLoading } = useAuth();
  const [view, setView] = useState<View>('list');
  const [editId, setEditId] = useState<string | null>(null);
  const [form, setForm] = useState<ArticleForm>(emptyForm);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const utils = trpc.useUtils();

  const { data: articles, isLoading } = trpc.news.adminList.useQuery(undefined, {
    enabled: user?.role === 'admin',
  });

  const createMutation = trpc.news.create.useMutation({
    onSuccess: () => {
      utils.news.adminList.invalidate();
      utils.news.list.invalidate();
      setMessage({ type: 'success', text: '文章已创建，英文翻译已自动生成！' });
      setForm(emptyForm);
      setView('list');
    },
    onError: (err) => {
      setMessage({ type: 'error', text: `创建失败：${err.message}` });
    },
  });

  const updateMutation = trpc.news.update.useMutation({
    onSuccess: () => {
      utils.news.adminList.invalidate();
      utils.news.list.invalidate();
      setMessage({ type: 'success', text: '文章已更新，英文翻译已自动重新生成！' });
      setView('list');
    },
    onError: (err) => {
      setMessage({ type: 'error', text: `更新失败：${err.message}` });
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
      setMessage({ type: 'success', text: '文章已删除' });
    },
  });

  // Auth check
  if (authLoading) {
    return (
      <div style={{ padding: '60px', textAlign: 'center', color: '#666' }}>
        正在验证身份...
      </div>
    );
  }

  if (!user) {
    return (
      <div style={{ padding: '60px', textAlign: 'center' }}>
        <p style={{ marginBottom: '20px', color: '#666' }}>请先登录以访问管理后台</p>
        <a
          href={getLoginUrl()}
          style={{
            backgroundColor: '#a72027',
            color: '#fff',
            padding: '10px 24px',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: '600',
          }}
        >
          登录
        </a>
      </div>
    );
  }

  if (user.role !== 'admin') {
    return (
      <div style={{ padding: '60px', textAlign: 'center', color: '#666' }}>
        <p>您没有管理员权限。</p>
        <p style={{ fontSize: '14px', marginTop: '8px' }}>当前账号：{user.name || user.openId}</p>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage(null);
    try {
      if (view === 'create') {
        await createMutation.mutateAsync({
          titleZh: form.titleZh,
          contentZh: form.contentZh,
          summaryZh: form.summaryZh || undefined,
          author: form.author || undefined,
          category: form.category || undefined,
          coverImageUrl: form.coverImageUrl || undefined,
          published: form.published,
        });
      } else if (view === 'edit' && editId !== null) {
        await updateMutation.mutateAsync({
          id: editId,
          titleZh: form.titleZh,
          contentZh: form.contentZh,
          summaryZh: form.summaryZh || undefined,
          author: form.author || undefined,
          category: form.category || undefined,
          coverImageUrl: form.coverImageUrl || undefined,
          published: form.published,
          retranslate: true,
        });
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = (article: NonNullable<typeof articles>[0]) => {
    setEditId(article.id);
    setForm({
      titleZh: article.titleZh,
      contentZh: article.contentZh,
      summaryZh: article.summaryZh ?? '',
      author: article.author ?? '',
      category: article.category ?? '',
      coverImageUrl: article.coverImageUrl ?? '',
      published: article.published,
    });
    setView('edit');
    setMessage(null);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('确定要删除这篇文章吗？')) {
      deleteMutation.mutate({ id });
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '10px 14px',
    border: '1px solid #ddd',
    borderRadius: '6px',
    fontSize: '15px',
    outline: 'none',
    boxSizing: 'border-box',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    marginBottom: '6px',
    fontWeight: '600',
    color: '#333',
    fontSize: '14px',
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <h1 style={{ fontSize: '24px', fontWeight: '700', color: '#a72027', margin: 0 }}>
            新闻管理后台
          </h1>
          <p style={{ color: '#666', fontSize: '14px', marginTop: '4px' }}>
            管理员：{user.name || user.openId}
          </p>
        </div>
        {view === 'list' && (
          <button
            onClick={() => { setView('create'); setForm(emptyForm); setMessage(null); }}
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
            ＋ 新建文章
          </button>
        )}
        {(view === 'create' || view === 'edit') && (
          <button
            onClick={() => { setView('list'); setMessage(null); }}
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
            ← 返回列表
          </button>
        )}
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

      {/* Article List */}
      {view === 'list' && (
        <div>
          {isLoading ? (
            <p style={{ color: '#666', textAlign: 'center', padding: '40px' }}>加载中...</p>
          ) : !articles || articles.length === 0 ? (
            <div
              style={{
                textAlign: 'center',
                padding: '60px',
                border: '2px dashed #e0e0e0',
                borderRadius: '12px',
                color: '#999',
              }}
            >
              <p style={{ fontSize: '18px', marginBottom: '8px' }}>暂无文章</p>
              <p style={{ fontSize: '14px' }}>点击"新建文章"开始创作</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {articles.map((article) => (
                <div
                  key={article.id}
                  style={{
                    border: '1px solid #e0e0e0',
                    borderRadius: '10px',
                    padding: '20px',
                    backgroundColor: '#fff',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                        <h3 style={{ margin: 0, fontSize: '17px', fontWeight: '600', color: '#222' }}>
                          {article.titleZh}
                        </h3>
                        <span
                          style={{
                            fontSize: '12px',
                            padding: '2px 8px',
                            borderRadius: '20px',
                            backgroundColor: article.published ? '#dcfce7' : '#fef9c3',
                            color: article.published ? '#166534' : '#854d0e',
                            fontWeight: '500',
                          }}
                        >
                          {article.published ? '已发布' : '草稿'}
                        </span>
                        {article.category && (
                          <span
                            style={{
                              fontSize: '12px',
                              padding: '2px 8px',
                              borderRadius: '20px',
                              backgroundColor: '#f0f0f0',
                              color: '#555',
                            }}
                          >
                            {article.category}
                          </span>
                        )}
                      </div>
                      {article.titleEn && (
                        <p style={{ margin: '0 0 6px', fontSize: '13px', color: '#888', fontStyle: 'italic' }}>
                          {article.titleEn}
                        </p>
                      )}
                      {article.summaryZh && (
                        <p style={{ margin: '0 0 8px', fontSize: '14px', color: '#555' }}>
                          {article.summaryZh}
                        </p>
                      )}
                      <p style={{ margin: 0, fontSize: '12px', color: '#aaa' }}>
                        {article.author && `作者：${article.author} · `}
                        {new Date(article.createdAt).toLocaleDateString('zh-CN')}
                      </p>
                    </div>
                    <div style={{ display: 'flex', gap: '8px', marginLeft: '16px', flexShrink: 0 }}>
                      <button
                        onClick={() => togglePublishMutation.mutate({ id: article.id, published: !article.published })}
                        style={{
                          padding: '6px 12px',
                          borderRadius: '5px',
                          border: '1px solid #a72027',
                          backgroundColor: 'transparent',
                          color: '#a72027',
                          cursor: 'pointer',
                          fontSize: '13px',
                        }}
                      >
                        {article.published ? '取消发布' : '发布'}
                      </button>
                      <button
                        onClick={() => handleEdit(article)}
                        style={{
                          padding: '6px 12px',
                          borderRadius: '5px',
                          border: '1px solid #666',
                          backgroundColor: 'transparent',
                          color: '#444',
                          cursor: 'pointer',
                          fontSize: '13px',
                        }}
                      >
                        编辑
                      </button>
                      <button
                        onClick={() => handleDelete(article.id)}
                        style={{
                          padding: '6px 12px',
                          borderRadius: '5px',
                          border: '1px solid #dc2626',
                          backgroundColor: 'transparent',
                          color: '#dc2626',
                          cursor: 'pointer',
                          fontSize: '13px',
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
      )}

      {/* Create / Edit Form */}
      {(view === 'create' || view === 'edit') && (
        <form onSubmit={handleSubmit}>
          <div
            style={{
              backgroundColor: '#fff',
              border: '1px solid #e0e0e0',
              borderRadius: '12px',
              padding: '32px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            }}
          >
            <h2 style={{ margin: '0 0 24px', fontSize: '20px', color: '#222' }}>
              {view === 'create' ? '新建文章' : '编辑文章'}
            </h2>

            <div style={{ marginBottom: '20px' }}>
              <label style={labelStyle}>
                标题（中文）<span style={{ color: '#a72027' }}>*</span>
              </label>
              <input
                type="text"
                value={form.titleZh}
                onChange={(e) => setForm({ ...form, titleZh: e.target.value })}
                placeholder="请输入文章标题"
                required
                style={inputStyle}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={labelStyle}>摘要（中文，可选）</label>
              <input
                type="text"
                value={form.summaryZh}
                onChange={(e) => setForm({ ...form, summaryZh: e.target.value })}
                placeholder="简短描述文章内容（显示在列表页）"
                style={inputStyle}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={labelStyle}>
                正文内容（中文）<span style={{ color: '#a72027' }}>*</span>
              </label>
              <p style={{ fontSize: '12px', color: '#888', marginBottom: '6px' }}>
                支持 Markdown 格式。英文版将自动翻译生成。
              </p>
              <textarea
                value={form.contentZh}
                onChange={(e) => setForm({ ...form, contentZh: e.target.value })}
                placeholder="请输入文章正文内容..."
                required
                rows={12}
                style={{
                  ...inputStyle,
                  resize: 'vertical',
                  fontFamily: 'inherit',
                  lineHeight: '1.6',
                }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
              <div>
                <label style={labelStyle}>作者（可选）</label>
                <input
                  type="text"
                  value={form.author}
                  onChange={(e) => setForm({ ...form, author: e.target.value })}
                  placeholder="如：IMOC 编辑部"
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>分类标签（可选）</label>
                <input
                  type="text"
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  placeholder="如：公司动态、产品资讯"
                  style={inputStyle}
                />
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={labelStyle}>封面图片 URL（可选）</label>
              <input
                type="url"
                value={form.coverImageUrl}
                onChange={(e) => setForm({ ...form, coverImageUrl: e.target.value })}
                placeholder="https://..."
                style={inputStyle}
              />
            </div>

            <div style={{ marginBottom: '28px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <input
                type="checkbox"
                id="published"
                checked={form.published}
                onChange={(e) => setForm({ ...form, published: e.target.checked })}
                style={{ width: '18px', height: '18px', cursor: 'pointer' }}
              />
              <label htmlFor="published" style={{ ...labelStyle, margin: 0, cursor: 'pointer' }}>
                立即发布（勾选后文章将对外公开显示）
              </label>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                type="submit"
                disabled={submitting}
                style={{
                  backgroundColor: submitting ? '#ccc' : '#a72027',
                  color: '#fff',
                  border: 'none',
                  padding: '12px 28px',
                  borderRadius: '6px',
                  cursor: submitting ? 'not-allowed' : 'pointer',
                  fontWeight: '600',
                  fontSize: '15px',
                }}
              >
                {submitting ? '正在保存并翻译...' : view === 'create' ? '创建文章' : '保存修改'}
              </button>
              <button
                type="button"
                onClick={() => { setView('list'); setMessage(null); }}
                style={{
                  backgroundColor: 'transparent',
                  color: '#666',
                  border: '1px solid #ddd',
                  padding: '12px 24px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '15px',
                }}
              >
                取消
              </button>
            </div>

            {submitting && (
              <p style={{ marginTop: '12px', fontSize: '13px', color: '#888' }}>
                ⏳ 正在调用 AI 自动翻译英文版本，请稍候（约 5-15 秒）...
              </p>
            )}
          </div>
        </form>
      )}
    </div>
  );
}
