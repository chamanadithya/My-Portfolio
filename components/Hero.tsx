"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: EASE, delay },
  }),
};

const slideInRight = {
  hidden: { opacity: 0, x: 60, scale: 0.96 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.9, ease: EASE, delay: 0.1 },
  },
};

const h1Lines = ["UI/UX &", "Frontend", "Developer"];

export default function Hero() {
  return (
    <section className="hero wrap">
      <div className="hero-grid">

        {/* Portrait */}
        <div className="hero-top">
          <motion.div
            className="hero-portrait"
            style={{ overflow: "hidden", borderRadius: "14px", aspectRatio: "3/4" }}
            variants={slideInRight}
            initial="hidden"
            animate="show"
          >
            <img
              src="/portrait.jpg"
              alt="Chaman Adithya"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center", display: "block" }}
            />
          </motion.div>
        </div>

        {/* Headline — each line staggers in */}
        <h1 aria-label="UI/UX & Frontend Developer">
          {h1Lines.map((line, i) => (
            <span key={i} style={{ display: "block", overflow: "hidden" }}>
              <motion.span
                style={{ display: "block" }}
                variants={fadeUp}
                custom={0.15 + i * 0.12}
                initial="hidden"
                animate="show"
                dangerouslySetInnerHTML={{ __html: line }}
              />
            </span>
          ))}
        </h1>

        {/* Footer row */}
        <div className="hero-foot">
          <motion.p
            className="hero-intro"
            variants={fadeUp}
            custom={0.55}
            initial="hidden"
            animate="show"
          >
            I&apos;m <strong>Chaman Adithya</strong> — a UI/UX designer and frontend developer
            who also builds full-stack apps and WordPress sites. Currently studying Computer
            Science at the University of Westminster, I love solving real problems through
            thoughtful design and clean code.
          </motion.p>

          <motion.p
            className="hero-meta"
            variants={fadeUp}
            custom={0.72}
            initial="hidden"
            animate="show"
          >
            Available for freelance &amp; internships<br />Based in Sri Lanka · Remote-friendly
          </motion.p>
        </div>

      </div>
    </section>
  );
}
