import Reveal from "./Reveal";
import CountUp from "./CountUp";
import { Play } from "./Icons";

export default function About() {
  return (
    <section className="about wrap" id="about">
      <div className="about-head">
        <div>
          <span className="kicker">About Me</span>
          <Reveal as="h2">
            Design and development are not just my job — they&apos;re how I think.
          </Reveal>
        </div>
        <Reveal as="p" className="sec-sub" style={{ marginTop: "auto" }}>
          From Figma frames to production code, I care about the small details that make a
          product feel effortless to use.
        </Reveal>
      </div>
      <div className="about-body">
        <Reveal className="ph video-ph">
          <span>intro video — drop clip</span>
          <div className="play"><Play /></div>
        </Reveal>
        <Reveal className="stats">
          <div className="stat">
            <CountUp to={10} />
            <p>Projects shipped across web, mobile and enterprise platforms.</p>
          </div>
          <div className="stat">
            <CountUp to={2} />
            <p>Years building responsive interfaces and full-stack products for real clients.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
