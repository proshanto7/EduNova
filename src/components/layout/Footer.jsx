import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FOOTER_DATA } from "@/data/footer";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
<footer className="border-t border-(--border) bg-(--footer-bg)">
        {/* Newsletter Strip */}
      <div className="border-b border-(--border) px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
          <div>
            <h3 className="text-lg font-bold text-(--text-primary)">
              Subscribe to our newsletter
            </h3>

            <p className="mt-1 text-sm text-(--text-secondary)">
              Get the latest courses and updates delivered to your inbox.
            </p>
          </div>

          <form className="flex w-full max-w-sm items-center gap-2 sm:w-auto">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="h-11 w-full rounded-full border border-(--border-light) bg-(--background-input) px-4 text-sm text-(--text-primary) outline-none placeholder:text-(--text-placeholder) focus:border-(--accent)/45 focus:ring-4 focus:ring-(--accent)/10"
            />

            <button
              type="submit"
              aria-label="Subscribe"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-(--accent) text-(--accent-text) transition-opacity hover:opacity-90"
            >
              <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="px-6 py-14">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="font-serif text-xl tracking-[0.15em] text-(--text-primary)"
            >
              {FOOTER_DATA.brand.name}
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-(--text-secondary)">
              {FOOTER_DATA.brand.description}
            </p>

            {/* Social Links */}
            <div className="mt-5 flex items-center gap-3">
              {FOOTER_DATA.social.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-(--border) text-(--text-muted) transition-colors hover:border-(--accent) hover:text-(--accent)"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-(--text-primary)">
              Quick Links
            </h4>

            <ul className="mt-4 space-y-2.5">
              {FOOTER_DATA.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-(--text-secondary) transition-colors hover:text-(--accent)"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-(--text-primary)">
              Categories
            </h4>

            <ul className="mt-4 space-y-2.5">
              {FOOTER_DATA.categories.map((category) => (
                <li key={category.href}>
                  <Link
                    href={category.href}
                    className="text-sm text-(--text-secondary) transition-colors hover:text-(--accent)"
                  >
                    {category.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-(--text-primary)">
              Contact
            </h4>

            <ul className="mt-4 space-y-3">
              {FOOTER_DATA.contact.map((item) => {
                const Icon = item.icon;
                const isExternal = item.href.startsWith("http");

                return (
                  <li key={item.text}>
                    <a
                      href={item.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={
                        isExternal
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group flex items-start gap-2.5 text-sm text-(--text-secondary) transition-colors hover:text-(--accent)"
                    >
                      <Icon />

                      <span>{item.text}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-(--border) px-6 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-xs text-(--text-muted)">
            © {year} {FOOTER_DATA.brand.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            {FOOTER_DATA.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs text-(--text-muted) transition-colors hover:text-(--accent)"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}