import { useState, useEffect } from 'react';
import LoginPage from './components/LoginPage';
import Portal from './components/Portal';

interface AuthState {
  userId: string;
  name: string;
  modules: string[];
}

function getStoredAuth(): AuthState | null {
  try {
    const raw = sessionStorage.getItem('csm-auth');
    if (!raw) return null;
    return JSON.parse(raw) as AuthState;
  } catch {
    return null;
  }
}

export default function App() {
  const [auth, setAuth] = useState<AuthState | null>(getStoredAuth);

  const handleLogin = (userId: string, name: string, modules: string[]) => {
    const state: AuthState = { userId, name, modules };
    sessionStorage.setItem('csm-auth', JSON.stringify(state));
    setAuth(state);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('csm-auth');
    setAuth(null);
  };

  if (!auth) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <Portal
      userName={auth.name}
      userModules={auth.modules}
      onLogout={handleLogout}
    />
  );
}
