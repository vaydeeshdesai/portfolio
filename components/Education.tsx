"use client";

import { motion, type Variants } from "framer-motion";
import { education } from "@/lib/data";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 relative"
      style={{
        background:
          "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(0,212,255,0.05) 0%, transparent 70%)",
      }}
    >
      <div className="section-container">
        {/* Section heading */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16"
        >
          <p className="section-label mb-3">Education</p>
          <h2
            className="font-mono font-bold text-white mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
          >
            Academic Background
          </h2>
          <div className="accent-bar" />
        </motion.div>

        {/* Main education card */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="glass-card p-8 md:p-10 max-w-3xl mx-auto mb-10"
        >
          <div className="flex flex-col sm:flex-row gap-6">
            {/* NU logo placeholder */}
            <div className="flex items-start gap-4">
              <div
                className="shrink-0 w-14 h-14 rounded-full flex items-center justify-center font-mono font-bold text-white text-xl"
                style={{ background: "#CC0000" }}
              >
                N
              </div>
              {/* Vertical accent line */}
              <div
                className="hidden sm:block w-px self-stretch"
                style={{ background: "var(--glass-border)" }}
              />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3
                className="font-mono font-bold text-white mb-1"
                style={{ fontSize: "22px" }}
              >
                {education.university}
              </h3>
              <p
                className="mb-2 text-sm"
                style={{
                  color: "var(--text-secondary)",
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                {education.college}
              </p>
              <p
                className="font-semibold mb-2 text-sm"
                style={{
                  color: "var(--accent-primary)",
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                {education.degree}
              </p>
              <p
                className="text-sm mb-4"
                style={{
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                {education.dates} · {education.location}
              </p>

              {/* GPA badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-full mb-5 text-sm font-semibold"
                style={{
                  border: "1px solid rgba(0,212,255,0.4)",
                  color: "var(--accent-primary)",
                  background: "rgba(0,212,255,0.06)",
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                {education.gpa}
              </div>

              {/* Coursework */}
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ color: "var(--text-muted)" }}
                >
                  Relevant Coursework
                </p>
                <div className="flex flex-wrap gap-2">
                  {education.courses.map((course) => (
                    <span key={course} className="tech-pill">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--text-muted)" }}
          >
            Certifications
          </p>
          <div className="flex flex-wrap gap-3">
            {education.certifications.map((cert) => (
              <div
                key={cert.name}
                className="glass-card px-5 py-3 flex items-center gap-3"
              >
                <div
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ background: "var(--accent-primary)" }}
                />
                <div>
                  <p
                    className="text-sm font-medium text-white"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {cert.name}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {cert.issuer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
