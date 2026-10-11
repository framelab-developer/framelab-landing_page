import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { en, es } from "./dictionaries";
import type { Dictionary } from "./dictionaries";

type Language = "es" | "en";
const LanguageContext = createContext<{
  language: Language;
  setLanguage: (value: Language) => void;
  t: Dictionary;
} | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    try {
      return localStorage.getItem("framelab-language") === "en" ? "en" : "es";
    } catch {
      return "es";
    }
  });
  const t = language === "es" ? es : en;
  useEffect(() => {
    try {
      localStorage.setItem("framelab-language", language);
    } catch {
      /* Browsing without storage still supports language switching. */
    }
    document.documentElement.lang = language;
    document.title = t.seo.title;
    const tags = [
      ["name", "description", t.seo.description],
      ["property", "og:title", t.seo.title],
      ["property", "og:description", t.seo.description],
      ["property", "og:locale", language === "es" ? "es_EC" : "en_US"],
      [
        "property",
        "og:locale:alternate",
        language === "es" ? "en_US" : "es_EC",
      ],
      ["name", "twitter:title", t.seo.title],
      ["name", "twitter:description", t.seo.description],
    ];
    for (const [attribute, key, value] of tags)
      document
        .querySelector(`meta[${attribute}="${key}"]`)
        ?.setAttribute("content", value);
  }, [language, t]);
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage requires LanguageProvider");
  return context;
}
