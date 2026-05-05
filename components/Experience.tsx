"use client";

import { motion, type Variants } from "framer-motion";
import { experiences } from "@/lib/data";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Experience() {
  return (
    <section id="experience" className="py-28">
      <div
        className="absolute inset-x-0 h-px"
        style={{ background: "var(--border-subtle)" }}
      />
      <div className="section-container">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16 text-center"
        >
          <p className="section-eyebrow mb-3">Experience</p>
          <h2 className="section-title" style={{ fontSize: "clamp(24px, 3.5vw, 38px)" }}>
            Where I&apos;ve Worked
          </h2>
          <div className="divider mt-4" />
        </motion.div>

        {/* Entry list */}
        <div className="flex flex-col">
          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${i}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.48, delay: i * 0.1, ease: "easeOut" as const }}
              className="py-8 border-b"
              style={{ borderColor: "var(--border-subtle)" }}
            >
              <div className="grid md:grid-cols-4 gap-6">
                {/* Left meta */}
                <div className="md:col-span-1">
                  <p
                    className="font-mono text-[11px] mb-2"
                    style={{ color: "var(--text-muted)", letterSpacing: "0.05em" }}
                  >
                    {exp.date}
                  </p>
                  <p
                    className="font-mono text-[11px]"
                    style={{ color: "var(--text-muted)", letterSpacing: "0.03em" }}
                  >
                    {exp.location}
                  </p>
                </div>

                {/* Right content */}
                <div className="md:col-span-3">
                  <p
                    className="font-mono font-bold mb-1"
                    style={{ color: "var(--text-primary)", fontSize: "15px" }}
                  >
                    {exp.company}
                  </p>
                  <p
                    className="mb-4 text-sm"
                    style={{ color: "var(--accent-primary)", opacity: 0.8, fontFamily: "var(--font-sans)" }}
                  >
                    {exp.role}
                  </p>

                  <ul className="space-y-2 mb-5">
                    {exp.bullets.map((b, bi) => (
                      <li
                        key={bi}
                        className="flex gap-3 text-sm leading-relaxed"
                        style={{ color: "var(--text-secondary)", fontFamily: "var(--font-sans)" }}
                      >
                        <span
                          className="mt-2 flex-shrink-0 w-1 h-1 rounded-full"
                          style={{ background: "var(--text-muted)" }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span key={t} className="tech-pill">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
