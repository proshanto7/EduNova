"use client";

import { useState } from "react";
import { LOCATION_CONTACT_DATA } from "@/data/home";

export default function LocationContact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    LOCATION_CONTACT_DATA.location.map.query,
  )}&output=embed`;

  return (
    <section className="mx-auto w-[calc(100%-48px)] max-w-295 py-20 md:py-22.5">
      {/* Header */}
      <div className="mb-8 grid items-end gap-5 lg:grid-cols-[1.04fr_0.96fr] lg:gap-4.5">
        {/* Left */}
        <div>
          <p className="mb-3 text-[11px] font-bold tracking-[0.2em] text-(--secondary)">
            {LOCATION_CONTACT_DATA.header.eyebrow}
          </p>

          <h1 className="font-serif text-[40px] font-normal leading-none tracking-[-0.04em] text-(--primary) sm:text-[48px] md:text-[56px] lg:text-[60px]">
            {LOCATION_CONTACT_DATA.header.title}
          </h1>
        </div>

        {/* Right */}
        <p className="m-0 max-w-none text-[13px] leading-[1.6] text-(--text-muted)">
          {LOCATION_CONTACT_DATA.header.description}
        </p>
      </div>

      {/* Main Content */}
      <div className="grid gap-4.5 lg:grid-cols-[1.04fr_0.96fr]">
        {/* =========================
            LOCATION CARD
        ========================== */}
        <div className="overflow-hidden rounded-[15px] border border-(--border) bg-(--background-card) shadow-[0_18px_50px_rgba(0,0,0,0.2)]">
          {/* Google Map */}
          <div className="h-71.25 overflow-hidden bg-(--background-map) sm:h-75 lg:h-71.25">
            <iframe
              title={LOCATION_CONTACT_DATA.location.map.title}
              src={mapUrl}
              className="h-full w-full border-0 grayscale-[0.4] opacity-80"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Location Details */}
          <div className="grid min-h-28 grid-cols-1 gap-5 border-t border-(--border) p-[21px_22px_23px] sm:grid-cols-2 sm:gap-7.5">
            {/* Opening Hours */}
            <div>
              <h2 className="mb-2.5 font-serif text-[14px] font-normal text-(--secondary-light)">
                {LOCATION_CONTACT_DATA.location.openingHours.title}
              </h2>

              <p className="m-0 text-[11px] leading-[1.4] text-(--text-muted)">
                {LOCATION_CONTACT_DATA.location.openingHours.days}
              </p>

              <p className="m-0 text-[11px] leading-[1.4] text-(--text-muted)">
                {LOCATION_CONTACT_DATA.location.openingHours.time}
              </p>
            </div>

            {/* Address */}
            <div>
              <h2 className="mb-2.5 font-serif text-[14px] font-normal text-(--secondary-light)">
                {LOCATION_CONTACT_DATA.location.address.title}
              </h2>

              <p className="m-0 text-[11px] leading-[1.4] text-(--text-muted)">
                {LOCATION_CONTACT_DATA.location.address.line1}
              </p>

              <p className="m-0 text-[11px] leading-[1.4] text-(--text-muted)">
                {LOCATION_CONTACT_DATA.location.address.line2}
              </p>
            </div>
          </div>
        </div>

        {/* =========================
            CONTACT FORM CARD
        ========================== */}
        <div className="flex items-center overflow-hidden rounded-[15px] border border-(--border) bg-(--background-card) p-[23px_24px] shadow-[0_18px_50px_rgba(0,0,0,0.2)]">
          <form onSubmit={handleSubmit} className="w-full">
            {/* Name */}
            <div className="mb-3.5">
              <label
                htmlFor="name"
                className="mb-1.5 block text-[10px] text-(--text-muted)"
              >
                {LOCATION_CONTACT_DATA.form.name.label}
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder={LOCATION_CONTACT_DATA.form.name.placeholder}
                required
                className="h-10.5 w-full rounded-[3px] border border-(--border-light) bg-(--background-input) px-3.25 text-[11px] text-(--text-light) outline-none placeholder:text-(--text-placeholder) focus:border-(--accent)/45 focus:ring-4 focus:ring-(--accent)/5"
              />
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-3.25">
              <div className="mb-3.5">
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-[10px] text-(--text-muted)"
                >
                  {LOCATION_CONTACT_DATA.form.email.label}
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={LOCATION_CONTACT_DATA.form.email.placeholder}
                  required
                  className="h-10.5 w-full rounded-[3px] border border-(--border-light) bg-(--background-input) px-3.25 text-[11px] text-(--text-light) outline-none placeholder:text-(--text-placeholder) focus:border-(--accent)/45 focus:ring-4 focus:ring-(--accent)/5"
                />
              </div>

              <div className="mb-3.5">
                <label
                  htmlFor="phone"
                  className="mb-1.5 block text-[10px] text-(--text-muted)"
                >
                  {LOCATION_CONTACT_DATA.form.phone.label}
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder={LOCATION_CONTACT_DATA.form.phone.placeholder}
                  required
                  className="h-10.5 w-full rounded-[3px] border border-(--border-light) bg-(--background-input) px-3.25 text-[11px] text-(--text-light) outline-none placeholder:text-(--text-placeholder) focus:border-(--accent)/45 focus:ring-4 focus:ring-(--accent)/5"
                />
              </div>
            </div>

            {/* Course of Interest */}
            <div className="mb-3.5">
              <label
                htmlFor="course"
                className="mb-1.5 block text-[10px] text-(--text-muted)"
              >
                {LOCATION_CONTACT_DATA.form.course.label}
              </label>

              <select
                id="course"
                name="course"
                defaultValue={LOCATION_CONTACT_DATA.form.course.defaultValue}
                required
                className="h-10.5 w-full cursor-pointer rounded-[3px] border border-(--border-light) bg-(--background-input) px-3.25 text-[11px] text-(--text-light) outline-none focus:border-(--accent)/45 focus:ring-4 focus:ring-(--accent)/5"
              >
                {LOCATION_CONTACT_DATA.form.course.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div className="mb-3.5">
              <label
                htmlFor="message"
                className="mb-1.5 block text-[10px] text-(--text-muted)"
              >
                {LOCATION_CONTACT_DATA.form.message.label}
              </label>

              <textarea
                id="message"
                name="message"
                rows={3}
                placeholder={LOCATION_CONTACT_DATA.form.message.placeholder}
                required
                className="w-full resize-none rounded-[3px] border border-(--border-light) bg-(--background-input) px-3.25 py-2.5 text-[11px] text-(--text-light) outline-none placeholder:text-(--text-placeholder) focus:border-(--accent)/45 focus:ring-4 focus:ring-(--accent)/5"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-1.25 h-11.25 w-full rounded-full border-0 bg-(--accent) text-[11px] font-bold tracking-[0.04em] text-(--accent-text) transition-all duration-200 hover:-translate-y-px hover:bg-(--accent-hover) active:translate-y-0"
            >
              {LOCATION_CONTACT_DATA.form.button}
            </button>

            {/* Success Message */}
            {submitted && (
              <p
                role="status"
                className="mt-3 text-center text-[11px] text-(--success)"
              >
                {LOCATION_CONTACT_DATA.form.successMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}