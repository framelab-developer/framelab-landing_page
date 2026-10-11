import { ArrowUpRight, Mail, MapPin, MessageCircle } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageProvider";
import { getWhatsAppUrl, site } from "../../config/site";
import { SectionHeading } from "../ui/SectionHeading";
export function Contact() {
  const { t } = useLanguage();
  const whatsapp = getWhatsAppUrl(t.common.message);
  const socialLinks = Object.entries(site.socials).filter(([, url]) =>
    /^https:\/\//.test(url),
  );
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-grid">
        <div>
          <SectionHeading {...t.contact} />
          {whatsapp ? (
            <a
              className="button whatsapp-button"
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={20} />
              {t.common.whatsapp}
              <ArrowUpRight size={19} />
            </a>
          ) : (
            <p className="contact-pending">{t.common.pending}</p>
          )}
          <p className="contact-hint">{t.contact.availability}</p>
        </div>
        <div className="contact-details">
          <div className="contact-location">
            <span className="icon-box">
              <MapPin size={23} />
            </span>
            <div>
              <p className="card-tag">{t.contact.locationLabel}</p>
              <h3>{site.location}</h3>
            </div>
          </div>
          {site.email && (
            <a className="contact-email" href={`mailto:${site.email}`}>
              <Mail size={19} />
              {site.email}
              <ArrowUpRight size={17} />
            </a>
          )}
          {socialLinks.length > 0 && (
            <div className="social-links">
              <p className="card-tag">{t.common.socials}</p>
              {socialLinks.map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {name}
                  <ArrowUpRight size={15} />
                </a>
              ))}
            </div>
          )}
          <div className="contact-coordinate" aria-hidden="true">
            <span>EC / QUITO</span>
            <span>↗</span>
          </div>
        </div>
      </div>
    </section>
  );
}
