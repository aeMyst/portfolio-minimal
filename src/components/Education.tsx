import { useState } from "react";
import { courses } from "../data/Content.ts";

export default function Education() {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className="container section-pad">
      <p className="section-label reveal">Education</p>
      <h2 className="section-title reveal">
        Academic <em>foundation</em>
      </h2>

      <div className="edu-card reveal">
        <div className="edu-logo">
          {imgFailed ? (
            <span className="edu-logo-fallback">U of C</span>
          ) : (
            <img
              src="https://petertran-portfolio.com/assets/uofc.jpg"
              alt="University of Calgary"
              onError={() => setImgFailed(true)}
            />
          )}
        </div>
        <div>
          <h3 className="edu-school">University of Calgary</h3>
          <p className="edu-degree">Bachelor of Science, Computer Science</p>
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
  );
}
