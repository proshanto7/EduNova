import { CONTACT_SOCIAL_LINKS } from "@/data/contact";

export default function ContactSocial() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold text-(--text-primary) md:text-3xl">
          Follow Us
        </h2>

        <p className="mt-2 text-(--text-secondary)">
          Stay connected and get the latest updates on our social channels.
        </p>

        <div className="mt-6 flex items-center justify-center gap-4">
          {CONTACT_SOCIAL_LINKS.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-(--border) text-(--text-muted) transition-colors hover:border-(--accent) hover:text-(--accent)"
              >
                <Icon size={18} strokeWidth={1.75} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}