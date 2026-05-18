import { Download } from "lucide-react";
import { profile, socials, stats } from "../data/portfolio.js";

export function Hero() {
  return (
    <section className="hero section-shell" id="home">
      <div className="hero-copy">
        <p className="eyebrow">{profile.intro}</p>
        <h1>
          <span>{profile.name}</span>
          {profile.role}
        </h1>
        <p className="hero-tagline">{profile.tagline}</p>

        <div className="social-row" aria-label="Liens sociaux">
          {socials.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} aria-label={label} target="_blank">
              <Icon size={17} />
            </a>
          ))}
        </div>

        <div className="hero-actions">
          <a className="button button-primary" href="#contact">
            Hire Me
          </a>
          <a className="button button-ghost" href={profile.cvUrl} download>
            <Download size={16} />
            Download CV
          </a>
        </div>

        <div className="stats-grid">
          {stats.map((stat) => (
            <article key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </div>

      <div className="hero-visual" aria-label={`Photo de ${profile.name}`}>
        <img src={profile.photo} alt={profile.name} />
      </div>
    </section>
  );
}
