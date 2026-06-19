import Link from "next/link";
import Reveal from "./Reveal";
import ProjectArt from "./ProjectArt";
import { PROJECTS } from "@/lib/data";
import { ArrowUpRight } from "./Icons";

export default function Projects() {
  return (
    <section className="work wrap" id="work">
      <div className="work-head">
        <div>
          <span className="kicker">Portfolio</span>
          <Reveal as="h2">Explore my work &amp; creative solutions</Reveal>
        </div>
        <Reveal as="p" className="sec-sub" style={{ marginBottom: 4 }}>
          A selection of products I&apos;ve designed and built — from mobile apps to
          full-stack systems.
        </Reveal>
      </div>
      <div className="work-grid">
        {PROJECTS.map((p, i) => (
          <Reveal as={Link} href={`/work/${p.slug}`} className="project" key={i}>
            <div className="thumb">
              <ProjectArt kind={p.art} cover={p.cover} alt={p.title} className="inner" />
              <div className="overlay">
                <div className="o-arrow"><ArrowUpRight /></div>
              </div>
            </div>
            <div className="meta">
              <h3>{p.title}</h3>
              <span className="yr">{p.year}</span>
            </div>
            <p className="pdesc">{p.desc}</p>
            <div className="ptags">
              {p.tags.map((t) => <span key={t}>{t}</span>)}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
