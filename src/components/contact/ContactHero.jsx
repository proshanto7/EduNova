export default function ContactHero() {
  return (
    <section className="border-b border-(--border) px-6 py-14">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-(--accent)">
          Get In Touch
        </p>
        <h1 className="text-3xl font-bold text-(--text-primary) md:text-4xl">
          Contact Us
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-(--text-secondary)">
          We&apos;d love to hear from you. Reach out with any questions,
          feedback, or just to say hello.
        </p>
      </div>
    </section>
  );
}