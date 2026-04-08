import { useState } from "react";
import { skillGroups, courses } from "../data/Content";
import uofc from "../assets/uofc.jpg";

export default function SkillsEducation() {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className="container section-pad">
      {/* ── Section header ───────────────────────────── */}
      <p className="section-label reveal">Skills &amp; Education</p>
      <h2 className="section-title reveal">
        Tools &amp; <em>foundation</em>
      </h2>

      {/* ── Two-column layout ────────────────────────── */}
      <div className="skills-edu-grid">
        {/* LEFT — Skills */}
        <div className="skills-edu-left">
          <p className="skills-edu-sub reveal">Technical Skills</p>
          <div className="skills-stack">
            {skillGroups.map((group) => (
              <div key={group.title} className="skill-group reveal">
                <p className="skill-group-title">{group.title}</p>
                <div className="skill-tags">
                  {group.tags.map((tag) => (
                    <span key={tag} className="skill-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Education */}
        <div className="skills-edu-right reveal">
          <p className="skills-edu-sub">Education</p>
          <div className="edu-card-inline">
            <div className="edu-logo">
              {imgFailed ? (
                <span className="edu-logo-fallback">U of C</span>
              ) : (
                <img
                  src={uofc}
                  alt="University of Calgary logo"
                  onError={() => setImgFailed(true)}
                />
              )}
            </div>
            <div className="edu-info">
              <h3 className="edu-school">University of Calgary</h3>
              <p className="edu-degree">
                Bachelor of Science, Computer Science
              </p>
            </div>
            <div className="edu-courses">
              <p className="courses-title">Highlighted Coursework</p>
              <div className="course-tags">
                {courses.map((c) => (
                  <span key={c} className="course-tag">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
