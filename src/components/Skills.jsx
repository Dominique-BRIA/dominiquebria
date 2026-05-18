import { skills } from "../data/portfolio.js";

export function Skills() {
  return (
    <section className="skills section-shell" aria-label="Competences">
      {skills.map(({ name, level, icon: Icon }) => (
        <article className="skill-item" key={name}>
          <div
            className="skill-ring"
            style={{ "--skill-level": `${level * 3.6}deg` }}
          >
            <Icon size={28} />
          </div>
          <strong>{level}%</strong>
          <span>{name}</span>
        </article>
      ))}
    </section>
  );
}
