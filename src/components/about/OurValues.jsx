import { VALUES_DATA } from "@/data/about";

export default function OurValues() {
  return (
    <section className="border-y border-(--border) bg-(--background-card) px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-(--text-primary) md:text-4xl">
            What drives us
          </h2>
          <p className="mt-3 text-(--text-secondary)">
            Three principles guide everything we build.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {VALUES_DATA.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="rounded-2xl border border-(--border) bg-background p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-(--stat-icon-bg)">
                  <Icon
                    size={26}
                    className="text-(--stat-icon-color)"
                    strokeWidth={1.75}
                  />
                </div>
                <h3 className="mt-4 text-lg font-bold text-(--text-primary)">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-(--text-secondary)">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}