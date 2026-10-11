import {
  ArrowUpRight,
  Crosshair,
  Lightbulb,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { useLanguage } from "../../i18n/LanguageProvider";
import { SectionHeading } from "../ui/SectionHeading";
export function About() {
  const { t } = useLanguage();
  const icons = [MessageCircle, Crosshair, Lightbulb];
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          <div>
            <SectionHeading {...t.about} />
            <p className="about-text">{t.about.text}</p>
          </div>
          <div className="about-panel">
            <p className="eyebrow">{t.about.panelLabel}</p>
            <div className="orbital" aria-hidden="true">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="orbit-core">
                <img src="/brand/framelab-logo.webp" alt="" width="84" height="84" loading="lazy" decoding="async" />
              </div>
              <span className="orbit-point point-one" />
              <span className="orbit-point point-two" />
            </div>
            <h3>{t.about.panelTitle}</h3>
            <p>{t.about.panelSub}</p>
            <div className="about-panel-footer">
              <MapPin size={15} />
              <span>{t.about.panelFoot}</span>
              <ArrowUpRight size={17} />
            </div>
          </div>
        </div>
        <div className="about-values">
          {t.about.values.map((value, index) => {
            const Icon = icons[index];
            return (
              <div className="value" key={value.title}>
                <Icon size={21} />
                <div>
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
