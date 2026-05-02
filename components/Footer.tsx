import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-10"
      style={{
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Left: wordmark */}
          <span
            className="font-mono font-bold text-[13px]"
            style={{ color: "var(--text-muted)", letterSpacing: "-0.01em" }}
          >
            VD
          </span>

          {/* Center: credit */}
          <p
            className="font-mono text-[11px] text-center"
            style={{ color: "var(--text-muted)", letterSpacing: "0.04em" }}
          >
            © {year} VAYDEESH DESAI
          </p>

          {/* Right: social icons */}
          <div className="flex items-center gap-5">
            <a
              href={`https://${personalInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-colors duration-150 hover:text-white"
              style={{ color: "var(--text-muted)" }}
            >
              <GitHubIcon size={16} />
            </a>
            <a
              href={`https://${personalInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors duration-150 hover:text-white"
              style={{ color: "var(--text-muted)" }}
            >
              <LinkedInIcon size={16} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="transition-colors duration-150 hover:text-white"
              style={{ color: "var(--text-muted)" }}
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
