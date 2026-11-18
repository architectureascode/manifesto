export type Lang = 'en' | 'pt';

export const META: Record<
  Lang,
  { title: string; desc: string; htmlLang: string; expansion: string; newTab: string; aslDocs: string; follow: string }
> = {
  en: {
    title: 'Manifesto · Architecture as Code',
    desc: 'Stop drawing architecture. Declare it. Why Architecture as Code matters, and how ASL makes it real.',
    htmlLang: 'en',
    expansion: 'Architecture as Code',
    newTab: '(opens in a new tab)',
    follow: 'Follow on GitHub',
    aslDocs: 'https://asl.architectureascode.dev',
  },
  pt: {
    title: 'Manifesto · Arquitetura como Código',
    desc: 'Pare de desenhar a arquitetura. Declare. Por que Arquitetura como Código importa e como a ASL torna isso real.',
    htmlLang: 'pt-BR',
    expansion: 'Arquitetura como Código',
    newTab: '(abre em uma nova aba)',
    follow: 'Seguir no GitHub',
    aslDocs: 'https://asl.architectureascode.dev/pt/docs/intro',
  },
};

export const GITHUB_ORG = 'https://github.com/architectureascode';

const STORAGE_KEY = 'manifesto.lang';

export function pickLang(): Lang {
  const q = /[?&]lang=(en|pt)/.exec(location.search);
  if (q) return q[1] as Lang;
  try {
    const s = localStorage.getItem(STORAGE_KEY);
    if (s === 'en' || s === 'pt') return s;
  } catch {
    /* storage unavailable */
  }
  return /^pt/i.test(navigator.language || '') ? 'pt' : 'en';
}

export function saveLang(l: Lang) {
  try {
    localStorage.setItem(STORAGE_KEY, l);
  } catch {
    /* storage unavailable */
  }
}
