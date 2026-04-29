import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-8"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        fontFamily: "var(--font-dm-sans)",
      }}
    >
      <div className="section-container">
        <div className="flex flex-col items-center gap-4">
          {/* Icon row */}
          <div className="flex items-center gap-5">
            <a
              href={`https://${personalInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-colors duration-200 hover:text-[var(--accent-primary)]"
              style={{ color: "var(--text-muted)" }}
            >
              <GitHubIcon size={20} />
            </a>
            <a
              href={`https://${personalInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors duration-200 hover:text-[var(--accent-primary)]"
              style={{ color: "var(--text-muted)" }}
            >
              <LinkedInIcon size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="transition-colors duration-200 hover:text-[var(--accent-primary)]"
              style={{ color: "var(--text-muted)" }}
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Credit text */}
          <p
            className="text-sm text-center"
            style={{ color: "var(--text-muted)" }}
          >
            Designed &amp; Built by Vaydeesh Desai · {year}
          </p>
        </div>
      </div>
    </footer>
  );
}
