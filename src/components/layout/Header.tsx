import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageProvider";
import { Brand } from "../ui/Brand";

export function Header() {
  const { t, language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  const links = ["about", "products", "services", "ai"] as const;
  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    const closeOnOutside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    };
    const resize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutside);
    window.addEventListener("resize", resize);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutside);
      window.removeEventListener("resize", resize);
    };
  }, [open]);
  return (
    <>
      <a className="skip-link" href="#main">
        {t.common.skip}
      </a>
      <header className="site-header" ref={header}>
        <div className="container header-inner">
          <a href="#home" aria-label="FrameLab" onClick={() => setOpen(false)}>
            <Brand />
          </a>
          <nav
            className="desktop-nav"
            aria-label={
              language === "es" ? "Navegación principal" : "Main navigation"
            }
          >
            {links.map((key) => (
              <a key={key} href={`#${key}`}>
                {t.nav[key]}
                {key === "ai" && <span className="nav-ai-dot" />}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <div
              className="language-toggle"
              role="group"
              aria-label={t.common.language}
            >
              {(["es", "en"] as const).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  aria-pressed={language === lang}
                  onClick={() => setLanguage(lang)}
                  lang={lang}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
            <a className="button button-small header-contact" href="#contact">
              {t.nav.contact}
              <ArrowUpRight size={15} />
            </a>
            <button
              className="menu-toggle"
              ref={menuButton}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={open ? t.common.close : t.common.menu}
              onClick={() => setOpen(!open)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          hidden={!open}
          aria-label={
            language === "es" ? "Navegación móvil" : "Mobile navigation"
          }
        >
          {[...links, "contact" as const].map((key) => (
            <a key={key} href={`#${key}`} onClick={() => setOpen(false)}>
              {t.nav[key]}
              <ArrowUpRight size={16} />
            </a>
          ))}
        </nav>
      </header>
    </>
  );
}
