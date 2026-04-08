import { useState } from "react";
import { projects } from "../data/Content.ts";

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="project-img-placeholder">
        <span>{alt}</span>
      </div>
    );
  }
  return (
    <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
  );
}

export default function Projects() {
  return (
    <div className="container section-pad">
      <p className="section-label reveal">Projects</p>
      <h2 className="section-title reveal">
        Selected <em>work</em>
      </h2>

      <div className="projects-grid">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            className={`project-card reveal${p.featured ? " featured" : ""}`}
          >
            <div className="project-img">
              <ProjectImage src={p.imgSrc} alt={p.imgAlt} />
            </div>
            <div className="project-body">
              <div className="project-tech-row">
                {p.tech.map((t) => (
                  <span key={t} className="project-tech">
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <span className="project-link">
                View on GitHub <span className="project-link-arrow">→</span>
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
