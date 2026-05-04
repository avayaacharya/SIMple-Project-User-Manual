import { useState, useEffect, useCallback } from 'react';
import TreeNav from './TreeNav';
import ContentPanel from './ContentPanel';
import { hrModule } from '../data/hr-content';
import { contractsModule } from '../data/contracts-content';
import type { Module } from '../data/types';

const ALL_MODULES: Record<string, Module> = {
  hr: hrModule,
  contracts: contractsModule,
};

interface PortalProps {
  userName: string;
  userModules: string[];
  onLogout: () => void;
}

export default function Portal({ userName, userModules, onLogout }: PortalProps) {
  const modules = userModules.map(id => ALL_MODULES[id]).filter(Boolean);

  // Restore last active section from sessionStorage
  const storedActive = sessionStorage.getItem('csm-active-section');
  const defaultActive = storedActive && modules.some(m => m.sections[storedActive])
    ? storedActive
    : (modules[0] ? Object.keys(modules[0].sections)[1] || Object.keys(modules[0].sections)[0] : null);

  const [activeId, setActiveId] = useState<string | null>(defaultActive);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSelect = useCallback((id: string) => {
    setActiveId(id);
    sessionStorage.setItem('csm-active-section', id);
    setMenuOpen(false);
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('csm-active-section');
    onLogout();
  };

  const handlePrint = () => {
    window.print();
  };

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: MouseEvent) => {
      const nav = document.getElementById('tree-nav');
      const btn = document.getElementById('hamburger-btn');
      if (nav && !nav.contains(e.target as Node) && btn && !btn.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [menuOpen]);

  return (
    <div className="portal fade-in">
      {/* Skip link */}
      <a href="#main-content" className="skip-link">Saltar para o conteúdo</a>

      {/* Top Navbar */}
      <header className="navbar" role="banner">
        <div className="navbar-left">
          <button
            id="hamburger-btn"
            className="hamburger"
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            aria-controls="tree-nav"
          >
            <span />
            <span />
            <span />
          </button>
          <div className="navbar-logo" aria-hidden="true">CSM</div>
          <span className="navbar-title">SIMple — Manual do Utilizador</span>
        </div>
        <div className="navbar-right">
          <span className="user-badge" aria-label={`Utilizador: ${userName}`}>
            👤 {userName}
          </span>
          <button
            className="btn-logout"
            onClick={handleLogout}
            aria-label="Terminar sessão"
          >
            Terminar Sessão
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`mobile-overlay${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Body: sidebar + content */}
      <div className="portal-body">
        <div className={menuOpen ? 'open' : ''} style={{ display: 'contents' }}>
          <TreeNav
            modules={modules}
            activeId={activeId}
            onSelect={handleSelect}
          />
        </div>
        <ContentPanel
          modules={modules}
          activeId={activeId}
          onPrint={handlePrint}
        />
      </div>
    </div>
  );
}
