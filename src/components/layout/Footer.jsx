import Link from "next/link";
import { SOCIAL_LINKS, NAV_LINKS, EVENT_LINKS } from "@/data/home";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-(--border-light) px-6 py-14 md:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Top row: Logo + Nav columns + Social icons */}
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          {/* Logo + tagline */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2 text-(--nav-logo)">
              <span className="text-lg">&#10022;</span>
              <span className="text-lg font-serif tracking-wide">
                THE PALATE
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-(--text-muted)">
              Sensual feeling since all-over convention, gestures dominions
              &ndash; alla legibly resented.
            </p>
          </div>

          {/* Nav columns */}
          <div className="flex flex-wrap gap-10 sm:gap-16">
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-(--nav-text) transition-colors hover:text-(--nav-text-hover)"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <nav className="flex flex-col gap-3">
              <span className="mb-1 text-sm font-medium text-(--text-primary)">
                Private Events
              </span>
              {EVENT_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-(--nav-text) transition-colors hover:text-(--nav-text-hover)"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social icons */}
          <div className="flex h-fit gap-3">
            {SOCIAL_LINKS.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-(--nav-circle-border) bg-(--nav-circle-bg) text-(--nav-circle-text) transition-colors hover:bg-(--nav-circle-hover)"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row: copyright */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-(--border-light) pt-6 text-xs text-(--text-muted) sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} The Palate. All rights reserved.
          </p>
          <p>Crafted with care.</p>
        </div>
      </div>
    </footer>
  );
}
