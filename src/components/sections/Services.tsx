import { Check, Cpu, ShieldCheck, Wrench } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageProvider";
import { SectionHeading } from "../ui/SectionHeading";
const icons = [Cpu, Wrench, ShieldCheck];
export function Services() {
  const { t } = useLanguage();
  return (
    <section id="services" className="section">
      <div className="container">
        <SectionHeading {...t.services} />
        <div className="service-grid">
          {t.services.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <article className="service-card" key={item.title}>
                <div className="service-top">
                  <span className="icon-box">
                    <Icon size={25} />
                  </span>
                  <span>0{index + 1}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <ul>
                  {item.features.map((feature) => (
                    <li key={feature}>
                      <Check size={14} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
