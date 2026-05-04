import { useEffect, useRef, useState } from 'react';
import type { Module } from '../data/types';

function upgradeFigures(html: string): string {
  return html.replace(
    /<div class="figure-placeholder">([^<]+)<\/div>/g,
    (_match, caption: string) => `
      <div class="figure-placeholder">
        <span class="figure-placeholder-tag">FIGURA</span>
        <span class="figure-placeholder-label">${caption.trim()}</span>
      </div>`
  );
}

interface ContentPanelProps {
  modules: Module[];
  activeId: string | null;
  onPrint: () => void;
}

function buildBreadcrumb(modules: Module[], activeId: string | null): string[] {
  if (!activeId) return [];
  for (const mod of modules) {
    if (mod.sections[activeId]) {
      const sec = mod.sections[activeId];
      const parts = [mod.title, sec.title];
      if (sec.parent) {
        // Find the parent section title
        const parentSec = Object.values(mod.sections).find(s => s.title === sec.parent);
        if (parentSec) {
          return [mod.title, sec.parent, sec.title];
        }
      }
      return parts;
    }
  }
  return [];
}

export default function ContentPanel({ modules, activeId, onPrint }: ContentPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [showTop, setShowTop] = useState(false);

  // Scroll to top on section change
  useEffect(() => {
    panelRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeId]);

  // Show "back to top" after 200px scroll
  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    const onScroll = () => setShowTop(el.scrollTop > 200);
    el.addEventListener('scroll', onScroll);
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => panelRef.current?.scrollTo({ top: 0, behavior: 'smooth' });

  const breadcrumb = buildBreadcrumb(modules, activeId);

  // Find active section content
  let content = '';
  let sectionTitle = '';
  if (activeId) {
    for (const mod of modules) {
      if (mod.sections[activeId]) {
        content = mod.sections[activeId].content;
        sectionTitle = mod.sections[activeId].title;
        break;
      }
    }
  }

  return (
    <div className="content-panel" ref={panelRef} id="main-content" tabIndex={-1}>
      <div className="content-inner">
        {/* Breadcrumb */}
        {breadcrumb.length > 0 && (
          <nav className="breadcrumb" aria-label="Navegação">
            {breadcrumb.map((crumb, i) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                {i > 0 && <span className="breadcrumb-sep">›</span>}
                <span className={i === breadcrumb.length - 1 ? '' : 'breadcrumb-link'}>
                  {crumb}
                </span>
              </span>
            ))}
          </nav>
        )}

        {/* Toolbar */}
        <div className="content-toolbar">
          <span />
          {activeId && (
            <button className="btn-print" onClick={onPrint} aria-label="Imprimir secção atual">
              🖨️ Imprimir Secção
            </button>
          )}
        </div>

        {/* Content */}
        {content ? (
          <>
            <div
              className="content-body"
              dangerouslySetInnerHTML={{ __html: upgradeFigures(content) }}
            />
            <footer className="doc-footer">
              CSM Technologies &nbsp;|&nbsp; Documento CSM/QT/01/01 &nbsp;|&nbsp; Rev 1.0 &nbsp;|&nbsp; Projeto SIMple
            </footer>
          </>
        ) : (
          <div style={{ textAlign: 'center', color: 'var(--csm-muted)', marginTop: '80px' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>📖</div>
            <h2 style={{ color: 'var(--csm-blue)', marginBottom: '8px', fontSize: '20px' }}>
              Bem-vindo ao Manual do Utilizador
            </h2>
            <p>Selecione uma secção no painel esquerdo para visualizar o seu conteúdo.</p>
          </div>
        )}
      </div>

      {/* Back to top */}
      <button
        className={`back-to-top${showTop ? '' : ' hidden'}`}
        onClick={scrollTop}
        aria-label="Voltar ao topo"
        title="Voltar ao Topo"
      >
        ↑
      </button>
    </div>
  );
}
