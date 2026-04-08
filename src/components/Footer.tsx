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
          href="https://www.linkedin.com/in/peter-tran-portal/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/peterthetran/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
        <a href="mailto:your@email.com">Email</a>
      </div>
    </footer>
  );
}
