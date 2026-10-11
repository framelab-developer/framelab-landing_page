import { ArrowUp, Check, Sparkles } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageProvider";
export function FrameLabAI() {
  const { t } = useLanguage();
  return (
    <section id="ai" className="section ai-section">
      <div className="container">
        <div className="ai-panel">
          <div className="ai-copy">
            <p className="eyebrow">
              <Sparkles size={15} />
              {t.ai.label}
            </p>
            <div className="ai-title">
              <h2>{t.ai.title}</h2>
              <span className="coming-soon">
                <span />
                {t.ai.status}
              </span>
            </div>
            <h3>{t.ai.subtitle}</h3>
            <p className="ai-description">{t.ai.description}</p>
            <p className="card-tag planned-label">{t.ai.planned}</p>
            <ul className="ai-features">
              {t.ai.features.map((feature) => (
                <li key={feature}>
                  <Check size={16} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="ai-concept">
            <div className="ai-concept-top">
              <span className="ai-symbol">
                <Sparkles size={22} />
              </span>
              <span>{t.ai.mockLabel}</span>
              <span className="concept-dots" aria-hidden="true">
                •••
              </span>
            </div>
            <div className="concept-content">
              <div className="sparkle-emblem">
                <Sparkles size={38} strokeWidth={1.3} />
              </div>
              <h4>{t.ai.mockPrompt}</h4>
              <p>{t.ai.mockText}</p>
              <div className="concept-chips">
                {t.ai.chips.map((chip) => (
                  <span key={chip}>{chip}</span>
                ))}
              </div>
              <div className="concept-input" aria-hidden="true">
                <span>FrameLab AI</span>
                <span>
                  <ArrowUp size={16} />
                </span>
              </div>
            </div>
            <p className="concept-foot">
              <span />
              {t.ai.mockFoot}
            </p>
          </div>
          <p className="ai-disclaimer">{t.ai.note}</p>
        </div>
      </div>
    </section>
  );
}
