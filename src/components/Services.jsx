import { SectionHeader } from "./SectionHeader.jsx";
import { services } from "../data/portfolio.js";

export function Services() {
  return (
    <section className="section-shell" id="services">
      <SectionHeader
        title="Services"
        subtitle="Des prestations utiles pour concevoir, ameliorer et developper des produits digitaux."
      />

      <div className="services-grid">
        {services.map(({ title, description, icon: Icon }) => (
          <article className="service-card" key={title}>
            <Icon size={34} />
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
