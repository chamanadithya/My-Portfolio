import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="hero wrap">
      <div className="hero-grid">
        <div className="hero-top">
          <div className="ph hero-portrait"><span>portrait — drop photo</span></div>
        </div>
        <h1>UI/UX &amp;<br />Frontend<br />Developer</h1>
        <div className="hero-foot">
          <Reveal as="p" className="hero-intro">
            I&apos;m <strong>Chaman Adithya</strong> — a UI/UX designer and frontend developer
            who also builds full-stack apps and WordPress sites. Currently studying Computer
            Science at the University of Westminster, I love solving real problems through
            thoughtful design and clean code.
          </Reveal>
          <Reveal as="p" className="hero-meta">
            Available for freelance &amp; internships<br />Based in Sri Lanka · Remote-friendly
          </Reveal>
        </div>
      </div>
    </section>
  );
}
