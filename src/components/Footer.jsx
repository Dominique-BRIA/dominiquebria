import { Mail, Phone } from "lucide-react";
import { navItems, profile, socials } from "../data/portfolio.js";

export function Footer() {
  return (
    <footer className="site-footer">
      <a className="logo" href="#home">
        <img src={profile.logoFull} alt={`${profile.name} logo`} />
      </a>

      <nav className="footer-nav">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="social-row">
        {socials.map(({ label, href, icon: Icon }) => (
          <a key={label} href={href} aria-label={label} target="_blank">
            <Icon size={17} />
          </a>
        ))}
      </div>

      <div className="footer-contact">
        <a href={`mailto:${profile.email}`}>
          <Mail size={15} />
          {profile.email}
        </a>
        <a href={`tel:${profile.phone.replaceAll(" ", "")}`}>
          <Phone size={15} />
          {profile.phone}
        </a>
      </div>

      <p>Designed by {profile.name} UI/UX designer</p>
    </footer>
  );
}
