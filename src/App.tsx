import { ThemeProvider } from "./context/ThemeContext";
import { useGsapReveal } from "./hooks/Usegsapreveal";
import Cursor from "./components/Cursor";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function Portfolio() {
  useGsapReveal();
  return (
    <>
      <Cursor />
      <Nav />
      <Hero />

      <section id="about" style={{ padding: 0, background: "var(--navy)" }}>
        <About />
      </section>

      <div className="divider" />

      <section
        id="skills"
        style={{ padding: 0, background: "var(--navy-mid)" }}
      >
        <Skills />
      </section>

      <div className="divider" />

      <section id="projects" style={{ padding: 0, background: "var(--navy)" }}>
        <Projects />
      </section>

      <div className="divider" />

      <section
        id="experience"
        style={{ padding: 0, background: "var(--navy-mid)" }}
      >
        <Experience />
      </section>

      <div className="divider" />

      <section id="education" style={{ padding: 0, background: "var(--navy)" }}>
        <Education />
      </section>

      <section id="contact" style={{ padding: 0, background: "var(--navy)" }}>
        <Contact />
      </section>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  );
}
