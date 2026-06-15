import { ArrowUpRight, GitHub, LinkedIn, Behance } from "./Icons";

const EMAIL = "chamanadithya@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/chaman-adithya-6747342b9";
const GITHUB = "https://github.com/chamanadithya";
const BEHANCE = "https://www.behance.net/chamanadithya2003";

export default function Contact() {
  return (
    <section className="contact wrap" id="contact">
      <div className="contact-card">
        <div className="contact-top">
          <h2>Let&apos;s Connect<br />There</h2>
          <a className="contact-cta" href={`mailto:${EMAIL}`}>
            Hire Me Now!
            <span className="circ"><ArrowUpRight /></span>
          </a>
        </div>
        <div className="contact-foot">
          <div className="foot-brand">
            <div className="brand"><span className="mark">C</span>Chaman Adithya</div>
            <p>
              UI/UX &amp; Frontend Developer building thoughtful digital products with design
              and code. Open to freelance projects and internships.
            </p>
          </div>
          <div className="foot-col">
            <h4>Email</h4>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
          <div className="foot-col">
            <h4>Connect</h4>
            <a href={LINKEDIN} target="_blank" rel="noopener">LinkedIn</a>
            <a href={GITHUB} target="_blank" rel="noopener">GitHub</a>
            <a href={BEHANCE} target="_blank" rel="noopener">Behance</a>
          </div>
          <div className="foot-col">
            <h4>Explore</h4>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#work">Work</a>
          </div>
        </div>
        <div className="contact-bottom">
          <p>© 2026 Chaman Adithya. All rights reserved.</p>
          <div className="socials">
            <a href={GITHUB} target="_blank" rel="noopener" aria-label="GitHub"><GitHub /></a>
            <a href={LINKEDIN} target="_blank" rel="noopener" aria-label="LinkedIn"><LinkedIn /></a>
            <a href={BEHANCE} target="_blank" rel="noopener" aria-label="Behance"><Behance /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
