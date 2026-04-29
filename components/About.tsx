"use client";

import { motion, type Variants } from "framer-motion";

interface StatCard {
  value: string;
  label: string;
}

const stats: StatCard[] = [
  { value: "3.93", label: "GPA · Dean's List" },
  { value: "3+", label: "Years Building" },
  { value: "5+", label: "Technologies" },
  { value: "Jul–Dec 2026", label: "Next Co-op" },
];

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="section-container">
        {/* Section heading */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16"
        >
          <p className="section-label mb-3">About Me</p>
          <h2
            className="font-mono font-bold text-white mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
          >
            Who I Am
          </h2>
          <div className="accent-bar" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p
              className="leading-relaxed text-[17px]"
              style={{
                color: "var(--text-secondary)",
                fontFamily: "var(--font-dm-sans)",
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

          {/* Right: 2×2 stat grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="glass-card p-6 text-center"
              >
                <p
                  className="font-mono font-bold mb-1 text-glow"
                  style={{
                    fontSize: stat.value.length > 6 ? "20px" : "32px",
                    color: "var(--accent-primary)",
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "13px",
                    fontFamily: "var(--font-dm-sans)",
                  }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
