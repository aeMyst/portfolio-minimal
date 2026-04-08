import { skillGroups } from "../data/Content.ts";

export default function Skills() {
  return (
    <div className="container section-pad">
      <p className="section-label reveal">Skills</p>
      <h2 className="section-title reveal">
        Tools of the <em>craft</em>
      </h2>

      <div className="skills-grid">
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
  );
}
