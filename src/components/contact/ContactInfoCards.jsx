import { CONTACT_INFO_CARDS } from "@/data/contact";

export default function ContactInfoCards() {
  return (
    <section className="px-6 py-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACT_INFO_CARDS.map((card) => {
            const Icon = card.icon;

            return (
              <a
                key={card.label}
                href={card.href}
                target={
                  card.href.startsWith("http") ? "_blank" : undefined
                }
                rel={
                  card.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group flex flex-col items-center rounded-2xl border border-(--border) bg-(--background-card) p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-(--stat-icon-bg)">
                  <Icon
                    size={22}
                    className="text-(--stat-icon-color)"
                    strokeWidth={1.75}
                  />
                </div>

                {/* Label */}
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-(--text-muted)">
                  {card.label}
                </p>

                {/* Value */}
                <p className="mt-1 text-sm font-medium text-(--text-primary)">
                  {card.value}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}