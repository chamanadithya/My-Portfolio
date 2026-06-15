import Reveal from "./Reveal";
import { EXPERIENCE } from "@/lib/data";

export default function Experience() {
  return (
    <section className="exp" id="experience">
      <div className="wrap exp-inner">
        <div className="exp-head">
          <div>
            <span className="kicker">Experience</span>
            <Reveal as="h2">A snapshot of my journey so far</Reveal>
          </div>
          <Reveal as="p" className="sec-sub" style={{ marginTop: "auto" }}>
            Internships, freelance work and the studies shaping how I design and build.
          </Reveal>
        </div>
        <div className="exp-list">
          {EXPERIENCE.map((e, i) => (
            <Reveal className="exp-row" key={i}>
              <div>
                <div className="exp-role">{e.role}</div>
                <div className="exp-org">{e.org}</div>
                <p className="exp-desc">{e.desc}</p>
              </div>
              <div className="exp-year">{e.year}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
