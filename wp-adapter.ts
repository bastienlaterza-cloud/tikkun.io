// wp-adapter.ts
// Expose un global window.TikkunCore.layout() pour WordPress.
// NOTE: adapte l'import ci-dessous si le chemin diffère dans le repo.

import { generateLines } from './src/layout/generateLines'; // <-- ADAPTER ce chemin s'il n'existe pas

type Token = string[];
type VersesTokens = Token[];

// Wrapper : prend des tokens par verset (avec nikkoud/taamim) et renvoie des segments {v,from,to}
function layout(tokensWith: VersesTokens, options: {
  fontFamily?: string;
  fontSize?: number;
  direction?: 'rtl' | 'ltr';
}) {
  // Si l'API réelle attend d'autres options (largeur, règles…), passe-les ici.
  // À défaut, on appelle generateLines directement :
  // (si le dépôt exporte plutôt "layout()", remplace l'appel)
  const segs = generateLines(tokensWith, options);
  return segs;
}

// @ts-ignore
window.TikkunCore = { layout };
