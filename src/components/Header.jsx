import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems, profile } from "../data/portfolio.js";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="logo" href="#home" onClick={() => setOpen(false)}>
        <img src={profile.logoMark} alt={`${profile.name} logo`} />
      </a>

      <button
        className="nav-toggle"
        type="button"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      <nav className={open ? "main-nav is-open" : "main-nav"}>
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="button button-primary header-action" href="#contact">
        Hire Me
      </a>
    </header>
  );
}
