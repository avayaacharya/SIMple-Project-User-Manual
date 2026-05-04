import { useState, useRef, useEffect } from 'react';
import { USERS } from '../data/types';

interface LoginPageProps {
  onLogin: (userId: string, name: string, modules: string[]) => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const userRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (loading) return;
    setError('');

    const user = USERS[userId.trim().toUpperCase()];
    if (!user || user.password !== password) {
      setError('ID ou senha inválidos. Tente novamente.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      onLogin(userId.trim().toUpperCase(), user.name, user.modules);
    }, 800);
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSubmit();
  };

  return (
    <div className="login-bg">
      <div className="login-card" role="main">
        <div className="login-logo" aria-hidden="true">CSM</div>
        <h1 className="login-title">SIMple Project — Manual do Utilizador</h1>
        <p className="login-subtitle">Aceda ao portal com o seu ID de funcionário</p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="userId" className="form-label">ID do Funcionário</label>
            <input
              id="userId"
              ref={userRef}
              type="text"
              className="form-input"
              placeholder="Ex: EMP001"
              value={userId}
              onChange={e => setUserId(e.target.value)}
              onKeyDown={handleKey}
              autoComplete="username"
              aria-required="true"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">Senha</label>
            <div className="password-wrapper">
              <input
                id="password"
                type={showPw ? 'text' : 'password'}
                className="form-input"
                style={{ paddingRight: '44px' }}
                placeholder="Introduza a sua senha"
                value={password}
                onChange={e => setPassword(e.target.value)}
                onKeyDown={handleKey}
                autoComplete="current-password"
                aria-required="true"
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPw(v => !v)}
                aria-label={showPw ? 'Ocultar senha' : 'Mostrar senha'}
              >
                {showPw ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          {error && (
            <div className="error-msg" role="alert" aria-live="polite">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="btn-primary"
            disabled={loading}
            aria-busy={loading}
          >
            {loading ? (
              <>
                <span className="spinner" aria-hidden="true" />
                A autenticar...
              </>
            ) : 'Iniciar Sessão'}
          </button>
        </form>

        <p className="login-footer">© 2025 CSM Technologies — Projeto SIMple</p>
      </div>
    </div>
  );
}
