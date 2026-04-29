"use client";

import { motion, type Variants } from "framer-motion";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { personalInfo } from "@/lib/data";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

interface ContactRow {
  icon: React.ReactNode;
  label: string;
  href: string;
  display: string;
}

export default function Contact() {
  const contactRows: ContactRow[] = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      href: `mailto:${personalInfo.email}`,
      display: personalInfo.email,
    },
    {
      icon: <LinkedInIcon size={20} />,
      label: "LinkedIn",
      href: `https://${personalInfo.linkedin}`,
      display: personalInfo.linkedin,
    },
    {
      icon: <GitHubIcon size={20} />,
      label: "GitHub",
      href: `https://${personalInfo.github}`,
      display: personalInfo.github,
    },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="section-container">
        {/* Section heading */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16"
        >
          <p className="section-label mb-3">Contact</p>
          <h2
            className="font-mono font-bold text-white mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
          >
            Get In Touch
          </h2>
          <div className="accent-bar" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: copy */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p
              className="leading-relaxed text-[17px] mb-8"
              style={{
                color: "var(--text-secondary)",
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              I&apos;m on co-op for July–December 2026. If you&apos;re working on
              something at the edge of finance and technology — or just want to
              talk engineering — reach out.
            </p>

            {/* Availability badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm"
              style={{
                background: "rgba(34,197,94,0.08)",
                border: "1px solid rgba(34,197,94,0.25)",
                color: "#22c55e",
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              <span className="green-dot w-2 h-2 rounded-full shrink-0" style={{ background: "#22c55e" }} />
              Co-op · Jul–Dec 2026
            </div>
          </motion.div>

          {/* Right: contact card */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="glass-card p-6 md:p-8 mb-5">
              <div className="flex flex-col gap-5">
                {contactRows.map((row) => (
                  <motion.a
                    key={row.label}
                    href={row.href}
                    target={row.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={row.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="flex items-center gap-4 group"
                    whileHover={{ x: 4 }}
                    transition={{ type: "tween", duration: 0.15 }}
                  >
                    <span
                      style={{ color: "var(--accent-primary)" }}
                      className="shrink-0"
                    >
                      {row.icon}
                    </span>
                    <span
                      className="text-sm transition-colors duration-200 group-hover:text-[var(--accent-primary)]"
                      style={{
                        color: "var(--text-primary)",
                        fontFamily: "var(--font-dm-sans)",
                      }}
                    >
                      {row.display}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* CTA button */}
            <motion.a
              href={`mailto:${personalInfo.email}`}
              className="btn-secondary w-full justify-center"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Say Hello →
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
