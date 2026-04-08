import { experienceItems } from "../data/Content.ts";

export default function Experience() {
  return (
    <div className="container section-pad">
      <p className="section-label reveal">Experience</p>
      <h2 className="section-title reveal">
        Professional <em>journey</em>
      </h2>

      <div className="timeline">
        {experienceItems.map((item) => (
          <div key={item.role + item.company} className="timeline-item reveal">
            <div className="timeline-dot" />
            {item.upcoming && (
              <div className="timeline-upcoming">
                <div className="dot-pulse" />
                Upcoming
              </div>
            )}
            <p className="timeline-date">{item.date}</p>
            <h3 className="timeline-role">{item.role}</h3>
            <p className="timeline-company">{item.company}</p>
            <p className="timeline-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
