import Reveal from "./Reveal";
import { SKILLS } from "@/lib/data";
import { ArrowUpRight } from "./Icons";

export default function Skills() {
  return (
    <section className="skills wrap" id="skills">
      <div className="skills-grid">
        <div className="skills-intro">
          <span className="kicker">Skills</span>
          <Reveal as="h2">A comprehensive look at what I work with</Reveal>
          <Reveal as="p" className="sec-sub">
            Four areas where I spend most of my time — from interface design to shipping
            full-stack features.
          </Reveal>
        </div>
        <div className="cards">
          {SKILLS.map((s, i) => (
            <Reveal className={`card${s.dark ? " dark" : ""}`} key={i}>
              <div className="arrow"><ArrowUpRight /></div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <div className="tags">
                {s.tags.map((t) => <span key={t}>{t}</span>)}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
