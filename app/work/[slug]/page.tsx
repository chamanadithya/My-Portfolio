import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import ProjectArt from "@/components/ProjectArt";
import { PROJECTS, getProject } from "@/lib/data";
import { ArrowUpRight } from "@/components/Icons";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const p = getProject(params.slug);
  if (!p) return { title: "Project not found" };
  return {
    title: `${p.title} — Chaman Adithya`,
    description: p.desc,
  };
}

export default function ProjectPage({ params }: Params) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const idx = PROJECTS.findIndex((p) => p.slug === project.slug);
  const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  return (
    <>
      <Nav />
      <main className="detail wrap">
        <Link href="/#work" className="detail-back">
          <span className="arr">←</span> Back to work
        </Link>

        <header className="detail-head">
          <span className="kicker">{project.category}</span>
          <Reveal as="h1">{project.title}</Reveal>
          <Reveal as="p" className="detail-lead">{project.desc}</Reveal>
          <div className="detail-actions">
            {project.liveUrl && (
              <a className="btn" href={project.liveUrl} target="_blank" rel="noopener">
                View live <ArrowUpRight />
              </a>
            )}
            {project.repoUrl && (
              <a className="btn ghost" href={project.repoUrl} target="_blank" rel="noopener">
                View code <ArrowUpRight />
              </a>
            )}
          </div>
        </header>

        <Reveal><ProjectArt kind={project.art} cover={project.cover} alt={project.title} className="detail-cover" /></Reveal>

        <div className="detail-body">
          <div className="detail-main">
            <section className="detail-block">
              <h2>Overview</h2>
              <p>{project.overview}</p>
            </section>
            <section className="detail-block">
              <h2>What I worked on</h2>
              <ul className="detail-list">
                {project.contributions.map((c, i) => <li key={i}>{c}</li>)}
              </ul>
            </section>
          </div>

          <aside className="detail-aside">
            <div className="aside-row">
              <span className="aside-k">Role</span>
              <span className="aside-v">{project.role}</span>
            </div>
            <div className="aside-row">
              <span className="aside-k">Timeline</span>
              <span className="aside-v">{project.year}</span>
            </div>
            <div className="aside-row">
              <span className="aside-k">Type</span>
              <span className="aside-v">{project.category}</span>
            </div>
            <div className="aside-row">
              <span className="aside-k">Stack</span>
              <div className="aside-tags">
                {project.tags.map((t) => <span key={t}>{t}</span>)}
              </div>
            </div>
          </aside>
        </div>

        <section className="detail-gallery">
          {project.gallery.map((g, i) => (
            <Reveal key={i}>
              <ProjectArt kind={g.kind} className={`gallery-item${i === 0 ? " wide" : ""}`} />
            </Reveal>
          ))}
        </section>

        <nav className="detail-nav">
          <Link href={`/work/${prev.slug}`} className="detail-nav-link prev">
            <span className="dn-k">← Previous</span>
            <span className="dn-t">{prev.title}</span>
          </Link>
          <Link href={`/work/${next.slug}`} className="detail-nav-link next">
            <span className="dn-k">Next →</span>
            <span className="dn-t">{next.title}</span>
          </Link>
        </nav>
      </main>

      <footer className="legal">Designed &amp; built by Chaman Adithya · 2026</footer>
    </>
  );
}
