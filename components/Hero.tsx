"use client";

import dynamic from "next/dynamic";
import { motion, type Variants } from "framer-motion";
import { Mail, ChevronDown } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { personalInfo } from "@/lib/data";

// Dynamically import Typewriter to avoid SSR issues
const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });

// Dynamically import particles to avoid SSR issues
const ParticleBackground = dynamic(
  () => import("@/components/ParticleBackground"),
  { ssr: false }
);

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollDown = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Particle background */}
      <div className="absolute inset-0 z-0">
        <ParticleBackground />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Availability pill */}
        <motion.div variants={itemVariants}>
          <div
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full text-sm"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "var(--text-secondary)",
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            <span
              className="green-dot w-2 h-2 rounded-full"
              style={{ background: "#22c55e", flexShrink: 0 }}
            />
            {personalInfo.coopAvailability}
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="font-mono font-bold text-white text-glow mb-4"
          style={{
            fontSize: "clamp(42px, 7vw, 80px)",
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
          }}
        >
          {personalInfo.name}
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          variants={itemVariants}
          className="font-mono mb-6"
          style={{
            fontSize: "clamp(18px, 2.5vw, 26px)",
            color: "var(--accent-primary)",
            minHeight: "2em",
          }}
        >
          <Typewriter
            options={{
              strings: personalInfo.typewriterStrings,
              autoStart: true,
              loop: true,
              delay: 60,
              deleteSpeed: 40,
            }}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="mb-10 leading-relaxed"
          style={{
            color: "var(--text-secondary)",
            maxWidth: 500,
            fontSize: "clamp(15px, 1.8vw, 17px)",
            fontFamily: "var(--font-dm-sans)",
          }}
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-4 mb-10"
        >
          <motion.button
            className="btn-primary"
            onClick={scrollToProjects}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            View My Work
          </motion.button>
          <motion.a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            View Resume
          </motion.a>
        </motion.div>

        {/* Social icons */}
        <motion.div variants={itemVariants} className="flex items-center gap-6">
          <motion.a
            href={`https://${personalInfo.github}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#00D4FF" }}
            style={{ color: "var(--text-muted)" }}
            className="transition-colors duration-200"
            aria-label="GitHub"
          >
            <GitHubIcon size={24} />
          </motion.a>
          <motion.a
            href={`https://${personalInfo.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#00D4FF" }}
            style={{ color: "var(--text-muted)" }}
            className="transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={24} />
          </motion.a>
          <motion.a
            href={`mailto:${personalInfo.email}`}
            whileHover={{ scale: 1.2, color: "#00D4FF" }}
            style={{ color: "var(--text-muted)" }}
            className="transition-colors duration-200"
            aria-label="Email"
          >
            <Mail size={24} />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        style={{ color: "var(--text-muted)" }}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        whileHover={{ color: "var(--accent-primary)" }}
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </motion.button>
    </section>
  );
}
