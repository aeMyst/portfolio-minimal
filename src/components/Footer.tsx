export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p className="footer-copy">Peter Tran © {year} — All rights reserved</p>
      <div className="footer-links">
        <a href="https://github.com/aeMyst" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/petertran"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a href="mailto:your@email.com">Email</a>
      </div>
    </footer>
  );
}
