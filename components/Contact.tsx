"use client";

import { motion, type Variants } from "framer-motion";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { personalInfo } from "@/lib/data";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Contact() {
  const links = [
    {
      icon: <Mail size={15} />,
      label: "Email",
      href: `mailto:${personalInfo.email}`,
      display: personalInfo.email,
    },
    {
      icon: <LinkedInIcon size={15} />,
      label: "LinkedIn",
      href: `https://${personalInfo.linkedin}`,
      display: personalInfo.linkedin,
    },
    {
      icon: <GitHubIcon size={15} />,
      label: "GitHub",
      href: `https://${personalInfo.github}`,
      display: personalInfo.github,
    },
  ];

  return (
    <section id="contact" className="py-28">
      <div className="section-container">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16 text-center"
        >
          <p className="section-eyebrow mb-3">Contact</p>
          <h2 className="section-title" style={{ fontSize: "clamp(24px, 3.5vw, 38px)" }}>
            Get In Touch
          </h2>
          <div className="divider mt-4" />
        </motion.div>

        {/* Copy */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-10"
        >
          <p
            className="mx-auto mb-6"
            style={{
              color: "var(--text-secondary)",
              fontFamily: "var(--font-sans)",
              lineHeight: 1.8,
              fontSize: "15px",
              maxWidth: "480px",
            }}
          >
            I&apos;m on co-op for July–December 2026. If you&apos;re working on
            something at the edge of finance and technology — or just want to
            talk engineering — reach out.
          </p>

          {/* Availability badge */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded"
            style={{
              border: "1px solid rgba(34,197,94,0.2)",
              background: "rgba(34,197,94,0.05)",
            }}
          >
            <span
              className="status-dot w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: "#22c55e" }}
            />
            <span
              className="font-mono text-[11px]"
              style={{ color: "#22c55e", opacity: 0.85, letterSpacing: "0.06em" }}
            >
              CO-OP · JUL–DEC 2026
            </span>
          </div>
        </motion.div>

        {/* Link cards — centered column */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-3 max-w-md mx-auto"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="card flex items-center gap-4 px-5 py-4 group transition-colors duration-150"
              style={{ textDecoration: "none" }}
            >
              <span
                className="flex-shrink-0 transition-colors duration-150"
                style={{ color: "var(--text-muted)" }}
              >
                {link.icon}
              </span>
              <div className="min-w-0 flex-1">
                <p className="mono-label mb-0.5">{link.label}</p>
                <p
                  className="text-[13px] truncate transition-colors duration-150 group-hover:text-white"
                  style={{
                    color: "var(--text-secondary)",
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  {link.display}
                </p>
              </div>
              <span
                className="flex-shrink-0 font-mono text-[11px] opacity-0 group-hover:opacity-40 transition-opacity duration-150"
                style={{ color: "var(--text-primary)" }}
              >
                ↗
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
