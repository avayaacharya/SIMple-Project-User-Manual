import { useState, useEffect, useCallback } from 'react';
import type { Module, TreeNode } from '../data/types';

interface TreeNavProps {
  modules: Module[];
  activeId: string | null;
  onSelect: (id: string) => void;
}

function highlightText(text: string, query: string): React.ReactNode {
  if (!query) return text;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="highlight">{text.slice(idx, idx + query.length)}</mark>
      {text.slice(idx + query.length)}
    </>
  );
}

function nodeMatchesQuery(node: TreeNode, query: string): boolean {
  if (!query) return true;
  if (node.label.toLowerCase().includes(query.toLowerCase())) return true;
  if (node.children) return node.children.some(c => nodeMatchesQuery(c, query));
  return false;
}

interface TreeNodeViewProps {
  node: TreeNode;
  depth: number;
  activeId: string | null;
  onSelect: (id: string) => void;
  query: string;
  forceOpen: boolean;
}

function TreeNodeView({ node, depth, activeId, onSelect, query, forceOpen }: TreeNodeViewProps) {
  const isLeaf = node.isLeaf || !node.children;
  const [open, setOpen] = useState(depth === 0);

  useEffect(() => {
    if (forceOpen) setOpen(true);
  }, [forceOpen]);

  // Auto-expand if a child is active
  useEffect(() => {
    if (!isLeaf && node.children) {
      const hasActive = (nodes: TreeNode[]): boolean =>
        nodes.some(n => n.id === activeId || (!n.isLeaf && n.children ? hasActive(n.children) : false));
      if (hasActive(node.children)) setOpen(true);
    }
  }, [activeId]);

  const matches = nodeMatchesQuery(node, query);
  if (!matches) return null;

  const indentPx = 14 + depth * 16;

  if (isLeaf) {
    return (
      <div
        className={`tree-item${activeId === node.id ? ' active' : ''}`}
        style={{ '--indent': `${indentPx}px` } as React.CSSProperties}
        onClick={() => onSelect(node.id)}
        onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelect(node.id); } }}
        role="treeitem"
        aria-selected={activeId === node.id}
        tabIndex={0}
      >
        <span className="tree-item-label">
          {highlightText(node.label, query)}
        </span>
      </div>
    );
  }

  return (
    <div className="tree-module" role="treeitem" aria-expanded={open}>
      <div
        className="tree-module-header"
        style={{ paddingLeft: `${indentPx}px` }}
        onClick={() => setOpen(v => !v)}
        onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(v => !v); } }}
        tabIndex={0}
      >
        <span className="tree-item-label">
          {highlightText(node.label, query)}
        </span>
        <span className={`tree-arrow${open ? ' open' : ''}`}>▶</span>
      </div>
      <div className={`tree-children${open ? ' open' : ''}`} role="group">
        {node.children!.map(child => (
          <TreeNodeView
            key={child.id}
            node={child}
            depth={depth + 1}
            activeId={activeId}
            onSelect={onSelect}
            query={query}
            forceOpen={forceOpen}
          />
        ))}
      </div>
    </div>
  );
}

interface ModuleTreeProps {
  module: Module;
  activeId: string | null;
  onSelect: (id: string) => void;
  query: string;
}

function ModuleTree({ module, activeId, onSelect, query }: ModuleTreeProps) {
  const [open, setOpen] = useState(true);
  const hasActiveSection = activeId ? Object.keys(module.sections).includes(activeId) : false;
  const forceOpen = !!query;

  useEffect(() => {
    if (hasActiveSection) setOpen(true);
  }, [hasActiveSection]);

  const moduleMatches = module.tree.some(n => nodeMatchesQuery(n, query));
  if (query && !moduleMatches) return null;

  return (
    <div className="tree-module" role="treeitem" aria-expanded={open}>
      <div
        className="tree-module-header"
        onClick={() => setOpen(v => !v)}
        onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(v => !v); } }}
        tabIndex={0}
        style={{ paddingLeft: '14px' }}
      >
        <span className="tree-icon">{module.icon}</span>
        <span className="tree-item-label" style={{ fontWeight: 700, fontSize: '13px' }}>
          {highlightText(module.title, query)}
        </span>
        <span className={`tree-arrow${open ? ' open' : ''}`}>▶</span>
      </div>
      <div className={`tree-children${open ? ' open' : ''}`} role="group">
        {module.tree.map(node => (
          <TreeNodeView
            key={node.id}
            node={node}
            depth={1}
            activeId={activeId}
            onSelect={onSelect}
            query={query}
            forceOpen={forceOpen}
          />
        ))}
      </div>
    </div>
  );
}

export default function TreeNav({ modules, activeId, onSelect }: TreeNavProps) {
  const [query, setQuery] = useState('');

  const hasResults = !query || modules.some(m =>
    m.tree.some(n => nodeMatchesQuery(n, query)) ||
    m.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <nav className="left-panel" id="tree-nav" aria-label="Navegação do manual">
      <div className="search-box-wrap">
        <input
          type="search"
          className="search-box"
          placeholder="Pesquisar no manual..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          aria-label="Pesquisar secções"
        />
      </div>
      {!hasResults && (
        <div className="no-results" role="status">Nenhum resultado encontrado.</div>
      )}
      <div className="tree-container" role="tree">
        {modules.map(mod => (
          <ModuleTree
            key={mod.id}
            module={mod}
            activeId={activeId}
            onSelect={onSelect}
            query={query}
          />
        ))}
      </div>
    </nav>
  );
}
