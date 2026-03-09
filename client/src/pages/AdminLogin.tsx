import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface AdminLoginProps {
  onLoginSuccess: () => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { language } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ username }),
      });

      const data = await res.json();

      if (res.ok && data.ok) {
        onLoginSuccess();
      } else {
        setError(data.error ?? '登录失败');
      }
    } catch {
      setError('网络错误，请重试');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f5f5f5',
    }}>
      <div style={{
        backgroundColor: '#fff',
        borderRadius: '8px',
        padding: '48px 40px',
        width: '100%',
        maxWidth: '400px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
      }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/85413465/Dn3NKGa7uppqoDB4SUPuXq/logoweb_eed8c41b.jpg"
            alt="IMOC"
            style={{ height: '60px', objectFit: 'contain' }}
          />
          <p style={{ marginTop: '12px', color: '#666', fontSize: '14px' }}>
            {language === 'zh' ? '管理员登录' : 'Admin Login'}
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontSize: '14px',
              color: '#333',
              fontWeight: '500',
            }}>
              {language === 'zh' ? '用户名' : 'Username'}
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder={language === 'zh' ? '请输入用户名' : 'Enter username'}
              autoComplete="username"
              style={{
                width: '100%',
                padding: '10px 14px',
                border: '1px solid #ddd',
                borderRadius: '6px',
                fontSize: '15px',
                outline: 'none',
                boxSizing: 'border-box',
                transition: 'border-color 0.2s',
              }}
              onFocus={(e) => (e.target.style.borderColor = '#a72027')}
              onBlur={(e) => (e.target.style.borderColor = '#ddd')}
            />
          </div>

          {error && (
            <div style={{
              marginBottom: '16px',
              padding: '10px 14px',
              backgroundColor: '#fff2f2',
              border: '1px solid #ffcdd2',
              borderRadius: '6px',
              color: '#c62828',
              fontSize: '14px',
            }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading || !username.trim()}
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: loading || !username.trim() ? '#ccc' : '#a72027',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              fontSize: '15px',
              fontWeight: '600',
              cursor: loading || !username.trim() ? 'not-allowed' : 'pointer',
              transition: 'background-color 0.2s',
            }}
          >
            {loading
              ? (language === 'zh' ? '登录中...' : 'Logging in...')
              : (language === 'zh' ? '登录' : 'Login')
            }
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
