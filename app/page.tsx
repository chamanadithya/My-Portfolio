import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
// import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        {/* <About /> */}
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="legal">Designed &amp; built by Chaman Adithya · 2026</footer>
    </>
  );
}
