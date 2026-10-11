import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageProvider";
import { SectionHeading } from "../ui/SectionHeading";
import { Illustration } from "../ui/Illustration";
import { getWhatsAppUrl } from "../../config/site";
const kinds = ["pc", "chip", "monitor", "security"] as const;
export function Products() {
  const { t, language } = useLanguage();
  return (
    <section id="products" className="section products-section">
      <div className="container">
        <div className="heading-row">
          <SectionHeading {...t.products} />
          <span className="section-side-label">HARDWARE / FRAMELAB</span>
        </div>
        <div className="product-grid">
          {t.products.items.map((item, index) => {
            const message =
              language === "es"
                ? `Hola FrameLab, me gustaría recibir asesoría sobre ${item.title}.`
                : `Hi FrameLab, I would like advice on ${item.title}.`;
            const url = getWhatsAppUrl(message);
            return (
              <article className="product-card" key={item.title}>
                <div className="product-art">
                  <span className="art-number">0{index + 1}</span>
                  <Illustration kind={kinds[index]} label={item.title} />
                </div>
                <div className="product-body">
                  <p className="card-tag">{item.tag}</p>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <a
                    href={url ?? "#contact"}
                    target={url ? "_blank" : undefined}
                    rel={url ? "noopener noreferrer" : undefined}
                    aria-label={`${t.products.cardCta}: ${item.title}`}
                  >
                    <span>{t.products.cardCta}</span>
                    <ArrowUpRight size={19} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
