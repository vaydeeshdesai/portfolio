"use client";

import { motion, type Variants } from "framer-motion";
import { education } from "@/lib/data";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Education() {
  return (
    <section id="education" className="py-28">
      <div className="section-container">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16"
        >
          <p className="section-eyebrow mb-3">Education</p>
          <h2 className="section-title" style={{ fontSize: "clamp(24px, 3.5vw, 38px)" }}>
            Academic Background
          </h2>
          <div className="divider mt-4" />
        </motion.div>

        {/* Main card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="card p-8 mb-6 max-w-3xl"
        >
          <div className="flex flex-col sm:flex-row gap-6">
            {/* NU mark */}
            <div
              className="flex-shrink-0 w-10 h-10 rounded flex items-center justify-center font-mono font-bold text-white text-sm"
              style={{ background: "#CC0000" }}
            >
              N
            </div>

            <div className="flex-1 min-w-0">
              <p
                className="font-mono font-bold mb-0.5"
                style={{ color: "var(--text-primary)", fontSize: "16px" }}
              >
                {education.university}
              </p>
              <p
                className="text-sm mb-1"
                style={{ color: "var(--text-secondary)", fontFamily: "var(--font-dm-sans)" }}
              >
                {education.college}
              </p>
              <p
                className="text-sm font-medium mb-1"
                style={{ color: "var(--accent-primary)", opacity: 0.85, fontFamily: "var(--font-dm-sans)" }}
              >
                {education.degree}
              </p>
              <p className="mono-label mb-5">
                {education.dates} · {education.location}
              </p>

              {/* GPA badge */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded mb-6"
                style={{
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "var(--accent-primary)", opacity: 0.8 }}
                />
                <span
                  className="font-mono text-[11px]"
                  style={{ color: "var(--text-secondary)", letterSpacing: "0.06em" }}
                >
                  {education.gpa}
                </span>
              </div>

              {/* Coursework */}
              <div>
                <p className="mono-label mb-3">Coursework</p>
                <div className="flex flex-wrap gap-1.5">
                  {education.courses.map((c) => (
                    <span key={c} className="tech-pill">{c}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="mono-label mb-3">Certifications</p>
          <div className="flex flex-wrap gap-2">
            {education.certifications.map((cert) => (
              <div
                key={cert.name}
                className="card flex items-center gap-3 px-4 py-3"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "var(--accent-primary)", opacity: 0.7 }}
                />
                <div>
                  <p
                    className="text-[13px] font-medium"
                    style={{ color: "var(--text-primary)", fontFamily: "var(--font-dm-sans)" }}
                  >
                    {cert.name}
                  </p>
                  <p className="mono-label mt-0.5">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
