"use client";

import { motion, type Variants } from "framer-motion";
import { experiences } from "@/lib/data";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="section-container">
        {/* Section heading */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16"
        >
          <p className="section-label mb-3">Experience</p>
          <h2
            className="font-mono font-bold text-white mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
          >
            Where I&apos;ve Worked
          </h2>
          <div className="accent-bar" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-4 top-0 bottom-0 w-0.5 hidden md:block"
            style={{
              background:
                "linear-gradient(to bottom, var(--accent-primary), transparent)",
            }}
          />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${i}`}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="relative md:pl-14"
              >
                {/* Timeline dot */}
                <div
                  className="timeline-dot absolute left-2 top-6 w-3 h-3 rounded-full hidden md:block"
                  style={{
                    background: "var(--accent-primary)",
                    transform: "translateX(-50%)",
                    zIndex: 2,
                  }}
                />

                <div className="glass-card p-6 md:p-8">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3
                        className="font-mono font-bold text-white text-lg mb-1"
                        style={{ letterSpacing: "-0.01em" }}
                      >
                        {exp.company}
                      </h3>
                      <p
                        className="font-semibold text-sm"
                        style={{ color: "var(--accent-primary)" }}
                      >
                        {exp.role}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p
                        className="text-sm mb-1"
                        style={{
                          color: "var(--text-muted)",
                          fontFamily: "var(--font-dm-sans)",
                        }}
                      >
                        {exp.date}
                      </p>
                      <p
                        className="text-sm italic"
                        style={{
                          color: "var(--text-muted)",
                          fontFamily: "var(--font-dm-sans)",
                        }}
                      >
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="mb-5 space-y-2">
                    {exp.bullets.map((bullet, bi) => (
                      <li
                        key={bi}
                        className="flex gap-3 text-sm leading-relaxed"
                        style={{
                          color: "var(--text-secondary)",
                          fontFamily: "var(--font-dm-sans)",
                        }}
                      >
                        <span
                          className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full"
                          style={{ background: "var(--accent-primary)" }}
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="tech-pill">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
