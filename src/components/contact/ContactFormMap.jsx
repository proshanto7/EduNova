"use client";

import { useState } from "react";
import { CONTACT_FORM_DATA } from "@/data/contact";

export default function ContactFormMap() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    CONTACT_FORM_DATA.location.map.query,
  )}&output=embed`;

  return (
    <section className="mx-auto w-[calc(100%-48px)] max-w-295 py-10">
      <div className="grid gap-4.5 lg:grid-cols-[1.04fr_0.96fr]">
        {/* LOCATION CARD */}
        <div className="overflow-hidden rounded-[15px] border border-(--border) bg-(--background-card) shadow-[0_18px_50px_rgba(0,0,0,0.2)]">
          <div className="h-71.25 overflow-hidden bg-(--background-map) sm:h-75 lg:h-71.25">
            <iframe
              title={CONTACT_FORM_DATA.location.map.title}
              src={mapUrl}
              className="h-full w-full border-0 grayscale-[0.4] opacity-80"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="grid min-h-28 grid-cols-1 gap-5 border-t border-(--border) p-[21px_22px_23px] sm:grid-cols-2 sm:gap-7.5">
            <div>
              <h2 className="mb-2.5 font-serif text-[14px] font-normal text-(--secondary-light)">
                {CONTACT_FORM_DATA.location.openingHours.title}
              </h2>
              <p className="m-0 text-[11px] leading-[1.4] text-(--text-muted)">
                {CONTACT_FORM_DATA.location.openingHours.days}
              </p>
              <p className="m-0 text-[11px] leading-[1.4] text-(--text-muted)">
                {CONTACT_FORM_DATA.location.openingHours.time}
              </p>
            </div>

            <div>
              <h2 className="mb-2.5 font-serif text-[14px] font-normal text-(--secondary-light)">
                {CONTACT_FORM_DATA.location.address.title}
              </h2>
              <p className="m-0 text-[11px] leading-[1.4] text-(--text-muted)">
                {CONTACT_FORM_DATA.location.address.line1}
              </p>
              <p className="m-0 text-[11px] leading-[1.4] text-(--text-muted)">
                {CONTACT_FORM_DATA.location.address.line2}
              </p>
            </div>
          </div>
        </div>

        {/* CONTACT FORM CARD */}
        <div className="flex items-center overflow-hidden rounded-[15px] border border-(--border) bg-(--background-card) p-[23px_24px] shadow-[0_18px_50px_rgba(0,0,0,0.2)]">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-3.5">
              <label htmlFor="name" className="mb-1.5 block text-[10px] text-(--text-muted)">
                {CONTACT_FORM_DATA.form.name.label}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder={CONTACT_FORM_DATA.form.name.placeholder}
                required
                className="h-10.5 w-full rounded-[3px] border border-(--border-light) bg-(--background-input) px-3.25 text-[11px] text-(--text-light) outline-none placeholder:text-(--text-placeholder) focus:border-(--accent)/45 focus:ring-4 focus:ring-(--accent)/5"
              />
            </div>

            <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-3.25">
              <div className="mb-3.5">
                <label htmlFor="email" className="mb-1.5 block text-[10px] text-(--text-muted)">
                  {CONTACT_FORM_DATA.form.email.label}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={CONTACT_FORM_DATA.form.email.placeholder}
                  required
                  className="h-10.5 w-full rounded-[3px] border border-(--border-light) bg-(--background-input) px-3.25 text-[11px] text-(--text-light) outline-none placeholder:text-(--text-placeholder) focus:border-(--accent)/45 focus:ring-4 focus:ring-(--accent)/5"
                />
              </div>

              <div className="mb-3.5">
                <label htmlFor="phone" className="mb-1.5 block text-[10px] text-(--text-muted)">
                  {CONTACT_FORM_DATA.form.phone.label}
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder={CONTACT_FORM_DATA.form.phone.placeholder}
                  required
                  className="h-10.5 w-full rounded-[3px] border border-(--border-light) bg-(--background-input) px-3.25 text-[11px] text-(--text-light) outline-none placeholder:text-(--text-placeholder) focus:border-(--accent)/45 focus:ring-4 focus:ring-(--accent)/5"
                />
              </div>
            </div>

            <div className="mb-3.5">
              <label htmlFor="course" className="mb-1.5 block text-[10px] text-(--text-muted)">
                {CONTACT_FORM_DATA.form.course.label}
              </label>
              <select
                id="course"
                name="course"
                defaultValue={CONTACT_FORM_DATA.form.course.defaultValue}
                required
                className="h-10.5 w-full cursor-pointer rounded-[3px] border border-(--border-light) bg-(--background-input) px-3.25 text-[11px] text-(--text-light) outline-none focus:border-(--accent)/45 focus:ring-4 focus:ring-(--accent)/5"
              >
                {CONTACT_FORM_DATA.form.course.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3.5">
              <label htmlFor="message" className="mb-1.5 block text-[10px] text-(--text-muted)">
                {CONTACT_FORM_DATA.form.message.label}
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                placeholder={CONTACT_FORM_DATA.form.message.placeholder}
                required
                className="w-full resize-none rounded-[3px] border border-(--border-light) bg-(--background-input) px-3.25 py-2.5 text-[11px] text-(--text-light) outline-none placeholder:text-(--text-placeholder) focus:border-(--accent)/45 focus:ring-4 focus:ring-(--accent)/5"
              />
            </div>

            <button
              type="submit"
              className="mt-1.25 h-11.25 w-full rounded-full border-0 bg-(--accent) text-[11px] font-bold tracking-[0.04em] text-(--accent-text) transition-all duration-200 hover:-translate-y-px hover:bg-(--accent-hover) active:translate-y-0"
            >
              {CONTACT_FORM_DATA.form.button}
            </button>

            {submitted && (
              <p role="status" className="mt-3 text-center text-[11px] text-(--success)">
                {CONTACT_FORM_DATA.form.successMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}