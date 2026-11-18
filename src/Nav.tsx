import { GITHUB_ORG, META, type Lang } from './i18n';
import './follow.css';

export function Nav({ lang, onChange }: { lang: Lang; onChange: (l: Lang) => void }) {
  const m = META[lang];
  return (
    <nav aria-label="Main">
      <div className="brandwrap">
        <a className="brand" href="/" aria-label="Architecture as Code">
          <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="AaC" height="26" />
        </a>
        <span className="expansion">{m.expansion}</span>
        <a className="follow" href={GITHUB_ORG} target="_blank" rel="noopener noreferrer" aria-label={m.follow}>
          <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-1.96c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
          </svg>
          <span className="follow-label">{m.follow}</span>
        </a>
      </div>
      <div className="links">
        <a href="#" aria-current="page">
          Manifesto
        </a>
        <a className="asl" href="https://asl.architectureascode.dev" target="_blank" rel="noopener">
          ASL
          <svg
            className="ext"
            viewBox="0 0 24 24"
            width="14"
            height="14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M7 17 17 7M8 7h9v9" />
          </svg>
          <span className="sr">{m.newTab}</span>
        </a>
        <span className="lang" role="group" aria-label="Language / Idioma">
          <button type="button" lang="en" aria-pressed={lang === 'en'} onClick={() => onChange('en')}>
            EN
          </button>
          <button type="button" lang="pt-BR" aria-pressed={lang === 'pt'} onClick={() => onChange('pt')}>
            PT
          </button>
        </span>
      </div>
    </nav>
  );
}
