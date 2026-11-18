import { useEffect, useState } from 'react';
import { META, pickLang, saveLang, type Lang } from './i18n';
import { Nav } from './Nav';
import { HeroEn, HeroPt, ManifestoEn, ManifestoPt } from './content';

export default function App() {
  const [lang, setLang] = useState<Lang>(pickLang);

  useEffect(() => {
    const m = META[lang];
    document.documentElement.lang = m.htmlLang;
    document.title = m.title;
    document.querySelector('meta[name=description]')?.setAttribute('content', m.desc);
  }, [lang]);

  const choose = (l: Lang) => {
    setLang(l);
    saveLang(l);
  };

  return (
    <>
      <Nav lang={lang} onChange={choose} />
      <header className="hero">
        <div className="hero-inner" lang={META[lang].htmlLang}>
          {lang === 'en' ? <HeroEn /> : <HeroPt />}
        </div>
      </header>
      <main>{lang === 'en' ? <ManifestoEn /> : <ManifestoPt />}</main>
    </>
  );
}
