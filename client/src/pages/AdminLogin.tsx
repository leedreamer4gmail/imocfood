import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface AdminLoginProps {
  onLoginSuccess: () => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { language } = useLanguage();

  // OTP dialog state
  const [showOtpDialog, setShowOtpDialog] = useState(false);
  const [challenge, setChallenge] = useState('');
  const [maskedPhone, setMaskedPhone] = useState('');
  const [otpDigits, setOtpDigits] = useState(['', '', '', '', '', '']);
  const [otpError, setOtpError] = useState('');
  const [otpLoading, setOtpLoading] = useState(false);
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Auto-focus first OTP input when dialog opens
  useEffect(() => {
    if (showOtpDialog) {
      setTimeout(() => otpRefs.current[0]?.focus(), 50);
    }
  }, [showOtpDialog]);

  // Step 1: Validate username and request OTP
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
        // Username verified — show OTP dialog
        setChallenge(data.challenge);
        setMaskedPhone(data.maskedPhone ?? '');
        setOtpDigits(['', '', '', '', '', '']);
        setOtpError('');
        setShowOtpDialog(true);
      } else {
        setError(data.error ?? '登录失败');
      }
    } catch {
      setError('网络错误，请重试');
    } finally {
      setLoading(false);
    }
  };

  // Handle individual OTP digit input
  const handleOtpChange = (index: number, value: string) => {
    const digit = value.replace(/\D/g, '').slice(-1);
    const next = [...otpDigits];
    next[index] = digit;
    setOtpDigits(next);
    setOtpError('');
    if (digit && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otpDigits[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleOtpPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    if (pasted.length > 0) {
      e.preventDefault();
      const next = ['', '', '', '', '', ''];
      for (let i = 0; i < pasted.length; i++) next[i] = pasted[i];
      setOtpDigits(next);
      otpRefs.current[Math.min(pasted.length, 5)]?.focus();
    }
  };

  // Step 2: Verify OTP
  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const otp = otpDigits.join('');
    if (otp.length < 6) {
      setOtpError(language === 'zh' ? '请输入完整的6位验证码' : 'Please enter the complete 6-digit code');
      return;
    }
    setOtpError('');
    setOtpLoading(true);

    try {
      const res = await fetch('/api/admin/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ challenge, otp }),
      });

      const data = await res.json();

      if (res.ok && data.ok) {
        setShowOtpDialog(false);
        onLoginSuccess();
      } else {
        setOtpError(data.error ?? '验证失败');
      }
    } catch {
      setOtpError('网络错误，请重试');
    } finally {
      setOtpLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setOtpDigits(['', '', '', '', '', '']);
    setOtpError('');
    setOtpLoading(true);
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ username }),
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        setChallenge(data.challenge);
      }
    } catch {
      // silently ignore
    } finally {
      setOtpLoading(false);
      setTimeout(() => otpRefs.current[0]?.focus(), 50);
    }
  };

  return (
    <>
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
                ? (language === 'zh' ? '发送验证码...' : 'Sending code...')
                : (language === 'zh' ? '获取验证码' : 'Get verification code')
              }
            </button>
          </form>
        </div>
      </div>

      {/* OTP verification dialog overlay */}
      {showOtpDialog && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(0,0,0,0.45)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
          }}
          onClick={(e) => { if (e.target === e.currentTarget) setShowOtpDialog(false); }}
        >
          <div
            style={{
              backgroundColor: '#fff',
              borderRadius: '12px',
              padding: '36px 32px',
              width: '100%',
              maxWidth: '380px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
              textAlign: 'center',
            }}
          >
            {/* Icon */}
            <div style={{ fontSize: '36px', marginBottom: '12px' }}>📱</div>

            <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#333', margin: '0 0 8px 0' }}>
              {language === 'zh' ? '手机号码验证' : 'Phone Verification'}
            </h2>

            <p style={{ fontSize: '13px', color: '#666', margin: '0 0 24px 0', lineHeight: '1.6' }}>
              {language === 'zh'
                ? `验证码已发送${maskedPhone ? '至 ' + maskedPhone : ''}，请查看 Vercel 函数日志获取验证码`
                : `Verification code sent${maskedPhone ? ' to ' + maskedPhone : ''}. Check Vercel function logs for the code.`}
            </p>

            <form onSubmit={handleOtpSubmit}>
              {/* 6-digit OTP input */}
              <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '20px' }}>
                {otpDigits.map((digit, i) => (
                  <input
                    key={i}
                    ref={(el) => {
                      otpRefs.current[i] = el;
                    }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(i, e.target.value)}
                    onKeyDown={(e) => handleOtpKeyDown(i, e)}
                    onPaste={handleOtpPaste}
                    style={{
                      width: '44px',
                      height: '52px',
                      textAlign: 'center',
                      fontSize: '22px',
                      fontWeight: '700',
                      border: `2px solid ${otpError ? '#ffcdd2' : digit ? '#a72027' : '#ddd'}`,
                      borderRadius: '8px',
                      outline: 'none',
                      color: '#333',
                      transition: 'border-color 0.15s',
                      boxSizing: 'border-box',
                    }}
                    onFocus={(e) => {
                      if (!otpError) e.target.style.borderColor = '#a72027';
                    }}
                    onBlur={(e) => {
                      if (!digit) e.target.style.borderColor = '#ddd';
                    }}
                  />
                ))}
              </div>

              {otpError && (
                <div style={{
                  marginBottom: '14px',
                  padding: '8px 12px',
                  backgroundColor: '#fff2f2',
                  border: '1px solid #ffcdd2',
                  borderRadius: '6px',
                  color: '#c62828',
                  fontSize: '13px',
                }}>
                  {otpError}
                </div>
              )}

              <button
                type="submit"
                disabled={otpLoading || otpDigits.join('').length < 6}
                style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: otpLoading || otpDigits.join('').length < 6 ? '#ccc' : '#a72027',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '15px',
                  fontWeight: '600',
                  cursor: otpLoading || otpDigits.join('').length < 6 ? 'not-allowed' : 'pointer',
                  marginBottom: '12px',
                }}
              >
                {otpLoading
                  ? (language === 'zh' ? '验证中...' : 'Verifying...')
                  : (language === 'zh' ? '验证' : 'Verify')
                }
              </button>

              <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                <button
                  type="button"
                  onClick={handleResendOtp}
                  disabled={otpLoading}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#a72027',
                    fontSize: '13px',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    padding: '4px',
                  }}
                >
                  {language === 'zh' ? '重新发送' : 'Resend'}
                </button>
                <span style={{ color: '#ddd', lineHeight: '24px' }}>|</span>
                <button
                  type="button"
                  onClick={() => setShowOtpDialog(false)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#999',
                    fontSize: '13px',
                    cursor: 'pointer',
                    padding: '4px',
                  }}
                >
                  {language === 'zh' ? '取消' : 'Cancel'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminLogin;
