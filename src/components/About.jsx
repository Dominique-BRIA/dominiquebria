import { Download } from "lucide-react";
import { about, profile } from "../data/portfolio.js";
import { SectionHeader } from "./SectionHeader.jsx";

export function About() {
  return (
    <section className="about section-shell" id="about">
      <SectionHeader title="About Me" subtitle={about.eyebrow} />

      <div className="about-layout">
        <div className="about-photo">
          <img src={profile.aboutPhoto} alt={`${profile.name} portrait`} />
        </div>

        <div className="about-content">
          <p>{about.text}</p>
          <a className="button button-primary" href={profile.cvUrl} download>
            <Download size={16} />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
