"use client";

import { motion, type Variants } from "framer-motion";
import { skillGroups } from "@/lib/data";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-28">
      <div className="section-container">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16 text-center"
        >
          <p className="section-eyebrow mb-3">Skills</p>
          <h2 className="section-title" style={{ fontSize: "clamp(24px, 3.5vw, 38px)" }}>
            Technical Stack
          </h2>
          <div className="divider mt-4" />
        </motion.div>

        {/* Skill groups — centered 2-col grid */}
        <div className="grid sm:grid-cols-2 gap-px max-w-2xl mx-auto"
          style={{ border: "1px solid var(--border-subtle)", borderRadius: "10px", overflow: "hidden" }}
        >
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" as const }}
              className="p-6"
              style={{ background: "var(--bg-card)" }}
            >
              <p
                className="font-mono text-[11px] uppercase mb-4"
                style={{ color: "var(--text-muted)", letterSpacing: "0.12em" }}
              >
                {group.category}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span key={skill} className="tech-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
