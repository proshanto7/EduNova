"use client";

const MENU_IMAGES = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
    alt: "Gourmet food spread",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=400&h=400",
    alt: "Fresh salad with vegetables",
    span: "md:col-span-1",
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=400&h=400",
    alt: "Gourmet plated dish",
    span: "md:col-span-1",
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=400&h=400",
    alt: "Delicious appetizer",
    span: "md:col-span-1",
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=400&h=400",
    alt: "Creamy pasta dish",
    span: "md:col-span-1",
  },
];

export default function MenuHighlights() {
  return (
    <section className="relative py-20 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Section Title */}
        <h2 className="mb-16 text-center font-serif text-4xl tracking-wide text-[var(--text-primary)]">
          Full Menu Highlights
        </h2>

        {/* Image Grid */}
        <div className="grid auto-rows-62.5 gap-4 md:auto-rows-75 md:grid-cols-4">
          {MENU_IMAGES.map((item) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-xl border border-[rgba(255,255,255,0.1)] ${item.span}`}
            >
              {/* Gradient Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(232,216,189,0.1)] to-[rgba(36,37,34,0.5)]" />

              {/* Image */}
              <img
                src={item.image}
                alt={item.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(11,11,11,0.7)] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}