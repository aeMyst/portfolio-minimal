import peter1 from "../assets/aboutme/peter_tran_1.jpg";
import family from "../assets/aboutme/family.jpg";
import bike from "../assets/aboutme/bike.jpg";

export default function About() {
  return (
    <div className="container section-pad">
      <p className="section-label reveal">About</p>
      <h2 className="section-title reveal">
        Turning ideas into
        <br />
        <em>polished products</em>
      </h2>

      <div className="about-grid">
        <div className="about-text">
          <p className="about-para">
            I'm a passionate <strong>Computer Science student</strong> at the
            University of Calgary with aspirations to become a professional Data
            Analyst and Developer. I love bringing ideas to life; there's
            nothing more rewarding than turning a concept into a polished,
            useful final product.
          </p>
          <p className="about-para">
            As an <strong>AI Analytics CO-OP Student</strong> at Enbridge, I
            develop AI-powered analytics solutions and intelligent agents to
            support business decision-making. I also maintain governance
            platforms and collaborate with stakeholders to enable the
            responsible adoption of AI technologies across the organization.
          </p>
          <p className="about-para">
            Outside of work, I'm an avid <strong>motorcyclist</strong>, a
            traveler who's visited Mexico, the US, and counting with Singapore
            and China next on the list as well as a gamer who believes
            technology has the power to bring communities together.
          </p>
        </div>

        <div className="about-photos about-photos-reveal">
          <div className="photo-placeholder">
            <img
              src={peter1}
              alt="Peter Tran"
              className="photo-img"
              loading="lazy"
              decoding="async"
              style={{ objectPosition: "center center" }}
            />
          </div>
          <div className="photo-placeholder">
            <img
              src={family}
              alt="Family"
              className="photo-img"
              loading="lazy"
              decoding="async"
              style={{ objectPosition: "center 75%" }}
            />
          </div>
          <div className="photo-placeholder">
            <img
              src={bike}
              alt="Motorcycle"
              className="photo-img"
              loading="lazy"
              decoding="async"
              style={{ objectPosition: "center 50%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
