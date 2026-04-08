import resume from "../assets/resume/PeterTran_Resume.pdf";

export default function Contact() {
  return (
    <div className="contact-inner">
      <div className="contact-glow" />
      <h2 className="contact-title reveal">
        Reachout, let's
        <br />
        <em>connect.</em>
      </h2>
      <p className="contact-sub reveal">
        Open to internships, collaborations, and interesting conversations.
      </p>
      <div className="contact-actions reveal">
        <a href="mailto:panpetertran123@gmail.com" className="btn-primary">
          Get In Touch
        </a>
        <a
          href={resume}
          target="_blank"
          rel="noreferrer"
          className="btn-secondary"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}
