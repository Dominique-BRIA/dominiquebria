import { useMemo, useState } from "react";
import { projectCategories, projects } from "../data/portfolio.js";
import { SectionHeader } from "./SectionHeader.jsx";

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="section-shell" id="portfolio">
      <SectionHeader
        title="Portfolio"
        subtitle="Une selection de projets visuels et interfaces produits."
      />

      <div className="filter-row" aria-label="Filtres portfolio">
        {projectCategories.map((category) => (
          <button
            className={category === activeCategory ? "is-active" : ""}
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="portfolio-grid">
        {filteredProjects.map((project, index) => (
          <article className="project-card" key={`${project.title}-${index}`}>
            <img src={project.image} alt={project.title} />
            <div>
              <h3>{project.title}</h3>
              <span>{project.category}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
