export interface Section {
  title: string;
  content: string;
  parent?: string;
}

export interface Module {
  id: string;
  title: string;
  icon: string;
  sections: Record<string, Section>;
  tree: TreeNode[];
}

export interface TreeNode {
  id: string;
  label: string;
  children?: TreeNode[];
  isLeaf?: boolean;
}

export interface User {
  name: string;
  modules: string[];
}

export const USERS: Record<string, { password: string; name: string; modules: string[] }> = {
  'EMP001': { password: 'senha123', name: 'Ravi Shankar',  modules: ['hr', 'contracts'] },
  'EMP002': { password: 'senha123', name: 'Priya Menon',   modules: ['hr'] },
  'EMP003': { password: 'senha123', name: 'Arjun Das',     modules: ['contracts'] },
};
