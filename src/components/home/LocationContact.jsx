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
            CONTACT CARD
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

            {/* Date */}
            <div className="mb-3.5">
              <label
                htmlFor="date"
                className="mb-1.5 block text-[10px] text-(--text-muted)"
              >
                {LOCATION_CONTACT_DATA.form.date.label}
              </label>

              <input
                id="date"
                name="date"
                type="date"
                required
                className="[&::-webkit-calendar-picker-indicator]:invert h-10.5 w-full rounded-[3px] border border-(--border-light) bg-(--background-input) px-3.25 text-[11px] text-(--text-light) outline-none focus:border-(--accent)/45 focus:ring-4 focus:ring-(--accent)/5"
              />
            </div>

            {/* Time + Party */}
            <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-3.25">
              {/* Time */}
              <div className="mb-3.5">
                <label
                  htmlFor="time"
                  className="mb-1.5 block text-[10px] text-(--text-muted)"
                >
                  {LOCATION_CONTACT_DATA.form.time.label}
                </label>

                <input
                  id="time"
                  name="time"
                  type="time"
                  required
                  className="[&::-webkit-calendar-picker-indicator]:invert h-10.5 w-full rounded-[3px] border border-(--border-light) bg-(--background-input) px-3.25 text-[11px] text-(--text-light) outline-none focus:border-(--accent)/45 focus:ring-4 focus:ring-(--accent)/5"
                />
              </div>

              {/* Party */}
              <div className="mb-3.5">
                <label
                  htmlFor="party"
                  className="mb-1.5 block text-[10px] text-(--text-muted)"
                >
                  {LOCATION_CONTACT_DATA.form.party.label}
                </label>

                <select
                  id="party"
                  name="party"
                  defaultValue={LOCATION_CONTACT_DATA.form.party.defaultValue}
                  required
                  className="h-10.5 w-full cursor-pointer rounded-[3px] border border-(--border-light) bg-(--background-input) px-3.25 text-[11px] text-(--text-light) outline-none focus:border-(--accent)/45 focus:ring-4 focus:ring-(--accent)/5"
                >
                  {LOCATION_CONTACT_DATA.form.party.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Party Size */}
            <div className="mb-3.5">
              <label
                htmlFor="partySize"
                className="mb-1.5 block text-[10px] text-(--text-muted)"
              >
                {LOCATION_CONTACT_DATA.form.partySize.label}
              </label>

              <input
                id="partySize"
                name="partySize"
                type="number"
                min={LOCATION_CONTACT_DATA.form.partySize.min}
                required
                className="h-10.5 w-full rounded-[3px] border border-(--border-light) bg-(--background-input) px-3.25 text-[11px] text-(--text-light) outline-none focus:border-(--accent)/45 focus:ring-4 focus:ring-(--accent)/5"
              />
            </div>

            {/* Contact Button */}
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
