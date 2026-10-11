import { ArrowDown, ArrowUpRight, Check, Cpu } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageProvider";
import { Illustration } from "../ui/Illustration";
export function Hero() {
  const { t } = useLanguage();
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">
            <span className="status-dot" />
            {t.hero.eyebrow}
          </p>
          <h1 lang="en">
            {t.hero.line1}
            <br />
            <span>{t.hero.line2}</span>
          </h1>
          <p className="hero-description">{t.hero.description}</p>
          <div className="hero-actions">
            <a className="button" href="#products">
              {t.common.explore}
              <ArrowUpRight size={18} />
            </a>
            <a className="button button-outline" href="#contact">
              {t.common.contact}
              <ArrowUpRight size={18} />
            </a>
          </div>
          <p className="hero-note">
            <span />
            {t.hero.note}
          </p>
        </div>
        <div className="hero-visual">
          <div className="hero-visual-grid" aria-hidden="true" />
          <div className="visual-topline">
            <span>
              <Cpu size={13} /> FRAMELAB / CUSTOM BUILDS
            </span>
            <span className="visual-cross">+</span>
          </div>
          <div className="hero-computer">
            <Illustration kind="pc" label={t.hero.visual} />
          </div>
          <div className="component-label" aria-hidden="true">
            <span className="status-dot" />
            CUSTOM BUILT
            <span className="label-line" />
          </div>
          <div className="visual-caption">
            <p>{t.hero.tag}</p>
            <h2>{t.hero.visualTitle}</h2>
            <span>{t.hero.visualSub}</span>
          </div>
          <span className="visual-corner corner-tl" aria-hidden="true" />
          <span className="visual-corner corner-br" aria-hidden="true" />
        </div>
      </div>
      <div className="container hero-bottom">
        <div>
          {t.hero.bottom.map((item) => (
            <span key={item}>
              <Check size={15} />
              {item}
            </span>
          ))}
        </div>
        <a href="#about" aria-label={t.nav.about}>
          <ArrowDown size={18} />
        </a>
      </div>
    </section>
  );
}
