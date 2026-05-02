"use client";

import { motion, type Variants } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import { projects } from "@/lib/data";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Projects() {
  return (
    <section id="projects" className="py-28">
      <div className="section-container">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16"
        >
          <p className="section-eyebrow mb-3">Projects</p>
          <h2 className="section-title" style={{ fontSize: "clamp(24px, 3.5vw, 38px)" }}>
            What I&apos;ve Built
          </h2>
          <div className="divider mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.48, delay: i * 0.1, ease: "easeOut" as const }}
              className="card card-hover flex flex-col p-7"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h3
                    className="font-mono font-bold mb-1"
                    style={{ color: "var(--text-primary)", fontSize: "14px", letterSpacing: "-0.01em" }}
                  >
                    {project.name}
                  </h3>
                  <p className="mono-label">{project.date}</p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0 mt-0.5">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-150 hover:text-white"
                    style={{ color: "var(--text-muted)" }}
                    aria-label="GitHub"
                  >
                    <GitHubIcon size={16} />
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors duration-150 hover:text-white"
                      style={{ color: "var(--text-muted)" }}
                      aria-label="Live demo"
                    >
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p
                className="text-sm leading-relaxed mb-4"
                style={{
                  color: "var(--text-secondary)",
                  fontFamily: "var(--font-dm-sans)",
                  lineHeight: 1.65,
                }}
              >
                {project.description}
              </p>

              {/* Bullets */}
              <ul className="space-y-1.5 mb-5 flex-1">
                {project.bullets.map((b, bi) => (
                  <li
                    key={bi}
                    className="flex gap-2.5 text-[13px] leading-relaxed"
                    style={{ color: "var(--text-secondary)", fontFamily: "var(--font-dm-sans)" }}
                  >
                    <span
                      className="mt-2 flex-shrink-0 w-1 h-1 rounded-full"
                      style={{ background: "var(--text-muted)" }}
                    />
                    {b}
                  </li>
                ))}
              </ul>

              {/* Tech */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tech.map((t) => (
                  <span key={t} className="tech-pill">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
