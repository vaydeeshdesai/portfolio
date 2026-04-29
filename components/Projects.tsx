"use client";

import { motion, type Variants } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import { projects } from "@/lib/data";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        {/* Section heading */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16"
        >
          <p className="section-label mb-3">Projects</p>
          <h2
            className="font-mono font-bold text-white mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
          >
            What I&apos;ve Built
          </h2>
          <div className="accent-bar" />
        </motion.div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{
                y: -4,
                borderColor: "rgba(0,212,255,0.5)",
                boxShadow:
                  "0 0 40px rgba(0,212,255,0.12), inset 0 1px 0 rgba(255,255,255,0.06)",
              }}
              transition={{ type: "tween", duration: 0.2 }}
              className="glass-card overflow-hidden flex flex-col"
            >
              {/* Top accent bar */}
              <div
                className="h-0.5 w-full"
                style={{
                  background:
                    "linear-gradient(90deg, var(--accent-primary), transparent)",
                }}
              />

              <div className="p-6 md:p-8 flex flex-col flex-1">
                {/* Title + date */}
                <div className="mb-4">
                  <h3
                    className="font-mono font-bold text-white mb-1"
                    style={{ fontSize: "18px", letterSpacing: "-0.01em" }}
                  >
                    {project.name}
                  </h3>
                  <p
                    className="text-sm"
                    style={{
                      color: "var(--text-muted)",
                      fontFamily: "var(--font-dm-sans)",
                    }}
                  >
                    {project.date}
                  </p>
                </div>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{
                    color: "var(--text-secondary)",
                    fontFamily: "var(--font-dm-sans)",
                  }}
                >
                  {project.description}
                </p>

                {/* Bullets */}
                <ul className="mb-5 space-y-1.5 flex-1">
                  {project.bullets.map((bullet, bi) => (
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
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-pill">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 mt-auto">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, color: "#00D4FF" }}
                    style={{ color: "var(--text-muted)" }}
                    className="transition-colors duration-200"
                    aria-label="GitHub repository"
                  >
                    <GitHubIcon size={20} />
                  </motion.a>
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15, color: "#00D4FF" }}
                      style={{ color: "var(--text-muted)" }}
                      className="transition-colors duration-200"
                      aria-label="Live demo"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
