import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageProvider";
import { getWhatsAppUrl, site } from "../../config/site";
import { Brand } from "../ui/Brand";
export function Footer() {
  const { t } = useLanguage();
  const whatsapp = getWhatsAppUrl(t.common.message);
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div>
            <a href="#home" aria-label="FrameLab">
              <Brand />
            </a>
            <p>{t.footer.description}</p>
          </div>
          <nav aria-label="Footer">
            {(["about", "products", "services", "ai"] as const).map((key) => (
              <a href={`#${key}`} key={key}>
                {t.nav[key]}
              </a>
            ))}
          </nav>
          <div className="footer-contact">
            <span>{site.location}</span>
            {whatsapp && (
              <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                WhatsApp
                <ArrowUpRight size={14} />
              </a>
            )}
            {site.email && <a href={`mailto:${site.email}`}>{site.email}</a>}
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} FrameLab. {t.footer.rights}
          </p>
          <span lang="en">{t.footer.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
