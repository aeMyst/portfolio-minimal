import { useState } from "react";
import { projects } from "../data/Content";

import imgDashboard from "../assets/projects/dsmlcdashboard.png";
import imgPetpals from "../assets/projects/petpals.png";
import imgRevrentals from "../assets/projects/revrentals.png";
import imgcampusync from "../assets/projects/campusync.png";
import imgfleurish from "../assets/projects/fleurish.png";

const PROJECT_IMAGES: Record<string, string> = {
  dashboard: imgDashboard,
  petpals: imgPetpals,
  revrentals: imgRevrentals,
  fleurish: imgfleurish,
  campusync: imgcampusync,
};

function ProjectImage({ imgKey, alt }: { imgKey: string; alt: string }) {
  const [failed, setFailed] = useState(false);
  const src = PROJECT_IMAGES[imgKey];

  if (failed || !src) {
    return (
      <div className="project-img-placeholder">
        <span>{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
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
              <ProjectImage imgKey={p.imgKey} alt={p.imgAlt} />
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
