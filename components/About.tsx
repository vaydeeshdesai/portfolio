"use client";

import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const stats = [
  { value: "6+", label: "Years building" },
  { value: "3", label: "Roles & internships" },
  { value: "2", label: "Projects shipped" },
];

export default function About() {
  return (
    <section id="about" className="py-28">
      <div className="section-container">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16 text-center"
        >
          <p className="section-eyebrow mb-3">About</p>
          <h2 className="section-title" style={{ fontSize: "clamp(24px, 3.5vw, 38px)" }}>
            Who I Am
          </h2>
          <div className="divider mt-4" />
        </motion.div>

        {/* Bio */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mx-auto mb-16"
          style={{
            color: "var(--text-secondary)",
            fontFamily: "var(--font-sans)",
            fontSize: "15px",
            lineHeight: 1.8,
            maxWidth: "600px",
          }}
        >
          Computer Science and Business Administration student at Northeastern
          University, concentrating in Finance. I design and ship full-stack
          systems at the intersection of software and financial data — from
          production risk dashboards processing live market feeds to low-level
          C/C++ sensor pipelines with zero failures across 50+ test cycles.
        </motion.p>

        {/* Stats — centered row */}
        <div className="flex flex-wrap justify-center gap-0 max-w-lg mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.07, ease: "easeOut" as const }}
              className="flex flex-col items-center px-10 py-6"
              style={{
                borderLeft: i > 0 ? "1px solid var(--border-subtle)" : undefined,
              }}
            >
              <span
                className="font-mono font-bold mb-1"
                style={{ fontSize: "26px", color: "var(--text-primary)", letterSpacing: "-0.03em" }}
              >
                {stat.value}
              </span>
              <span
                className="font-mono text-[11px] uppercase"
                style={{ color: "var(--text-muted)", letterSpacing: "0.1em" }}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
