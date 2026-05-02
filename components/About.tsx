"use client";

import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const stats = [
  { value: "3+", label: "Years building" },
  { value: "5+", label: "Technologies" },
  { value: "Jul–Dec 2026", label: "Next co-op" },
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
          className="mb-16"
        >
          <p className="section-eyebrow mb-3">About</p>
          <h2 className="section-title" style={{ fontSize: "clamp(24px, 3.5vw, 38px)" }}>
            Who I Am
          </h2>
          <div className="divider mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Bio */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-3"
          >
            <p
              style={{
                color: "var(--text-secondary)",
                fontFamily: "var(--font-sans)",
                fontSize: "15px",
                lineHeight: 1.8,
              }}
            >
              Computer Science and Business Administration student at
              Northeastern University, concentrating in Finance. I design and
              ship full-stack systems at the intersection of software and
              financial data — from production risk dashboards processing live
              market feeds to low-level C/C++ sensor pipelines with zero
              failures across 50+ test cycles. My work is defined by technical
              rigor, end-to-end ownership, and a rare fluency across both the
              engineering stack and the financial domain.
            </p>
          </motion.div>

          {/* Stats — ruled list, no cards */}
          <div className="lg:col-span-2">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.07, ease: "easeOut" as const }}
                className="flex items-baseline justify-between py-4"
                style={{
                  borderBottom: "1px solid var(--border-subtle)",
                  borderTop: i === 0 ? "1px solid var(--border-subtle)" : undefined,
                }}
              >
                <span
                  className="font-mono text-[11px] uppercase"
                  style={{ color: "var(--text-muted)", letterSpacing: "0.1em" }}
                >
                  {stat.label}
                </span>
                <span
                  className="font-mono font-bold"
                  style={{
                    fontSize: stat.value.length > 6 ? "14px" : "18px",
                    color: "var(--text-primary)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {stat.value}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
