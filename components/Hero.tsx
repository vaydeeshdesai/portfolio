"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, FileText, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { personalInfo } from "@/lib/data";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section
      className="relative flex items-center"
      style={{ minHeight: "100vh", paddingTop: "56px" }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="section-container w-full py-28"
      >
        {/* Status row */}
        <motion.div variants={item} className="flex items-center gap-2 mb-10">
          <span
            className="status-dot w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ background: "#22c55e" }}
          />
          <span className="mono-label">{personalInfo.coopAvailability}</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="font-mono font-bold text-white mb-5"
          style={{
            fontSize: "clamp(38px, 6vw, 72px)",
            letterSpacing: "-0.03em",
            lineHeight: 1.02,
          }}
        >
          Vaydeesh Desai
        </motion.h1>

        {/* Role — accent, no glow */}
        <motion.p
          variants={item}
          className="font-mono mb-5"
          style={{
            fontSize: "clamp(15px, 1.8vw, 20px)",
            color: "var(--accent-primary)",
            letterSpacing: "0em",
            opacity: 0.85,
          }}
        >
          Software Engineer · CS + Finance @ Northeastern
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={item}
          style={{
            color: "var(--text-secondary)",
            maxWidth: 500,
            fontSize: "clamp(14px, 1.4vw, 15px)",
            fontFamily: "var(--font-dm-sans)",
            lineHeight: 1.7,
            marginBottom: "2.5rem",
          }}
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="flex flex-wrap items-center gap-3 mb-12">
          <button
            className="btn-primary"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Work <ArrowRight size={13} />
          </button>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <FileText size={13} /> Resume
          </a>
        </motion.div>

        {/* Social row */}
        <motion.div variants={item} className="flex items-center gap-6">
          {[
            { href: `https://${personalInfo.github}`, icon: <GitHubIcon size={15} />, label: "GitHub" },
            { href: `https://${personalInfo.linkedin}`, icon: <LinkedInIcon size={15} />, label: "LinkedIn" },
            { href: `mailto:${personalInfo.email}`, icon: <Mail size={15} />, label: personalInfo.email },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="flex items-center gap-2 text-[12px] transition-colors duration-150 hover:text-white"
              style={{ color: "var(--text-muted)", fontFamily: "var(--font-dm-sans)" }}
            >
              {icon}
              <span className="hidden sm:inline">{label}</span>
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom divider */}
      <div
        className="absolute bottom-0 inset-x-0 h-px"
        style={{ background: "var(--border-subtle)" }}
      />
    </section>
  );
}
