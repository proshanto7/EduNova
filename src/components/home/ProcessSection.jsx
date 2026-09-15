"use client";

import { motion } from "framer-motion";
import { PROCESS_DATA } from "@/data/home";

export default function ProcessSection() {
  return (
    <section className="bg-(--background) px-6 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center md:mb-14"
        >
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-(--text-primary)">
            Our Process
          </h2>
          <div className="mx-auto mt-2 h-0.5 w-8 bg-(--accent)" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — mobile: left aligned, desktop: centered */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
            className="absolute left-5 top-0 h-full w-px bg-(--border) md:left-1/2 md:-translate-x-1/2"
          />

          {/* Top dot */}
          <span className="absolute -top-1.5 left-5 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-(--accent) md:left-1/2" />

          {PROCESS_DATA.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <div key={step.step} className="relative py-8 first:pt-0 md:py-10">
                {/* Node dot */}
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="absolute left-5 top-8 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-(--accent) bg-(--background) md:left-1/2 md:top-10"
                />

                {/* Mobile layout — left aligned, icon inline */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5 }}
                  className="pl-12 md:hidden"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-(--stat-icon-bg)">
                      <Icon
                        size={18}
                        className="text-(--stat-icon-color)"
                        strokeWidth={1.75}
                      />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-(--accent)">
                        {step.step}
                      </p>
                      <h3 className="text-sm font-bold text-(--text-primary)">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-(--text-muted)">
                    {step.description}
                  </p>
                </motion.div>

                {/* Desktop layout — zigzag */}
                <div className="hidden md:grid md:grid-cols-2 md:items-center md:gap-6">
                  {isEven ? (
                    <>
                      <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5 }}
                        className="md:pr-12 md:text-right"
                      >
                        <StepText step={step} align="right" />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, scale: 0.6 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.4, delay: 0.15 }}
                        className="flex justify-start md:pl-12"
                      >
                        <IconBadge Icon={Icon} />
                      </motion.div>
                    </>
                  ) : (
                    <>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.6 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.4, delay: 0.15 }}
                        className="flex justify-end md:pr-12"
                      >
                        <IconBadge Icon={Icon} />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5 }}
                        className="md:pl-12 md:text-left"
                      >
                        <StepText step={step} align="left" />
                      </motion.div>
                    </>
                  )}
                </div>
              </div>
            );
          })}

          {/* Bottom dot */}
          <span className="absolute -bottom-1.5 left-5 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-(--accent) md:left-1/2" />
        </div>
      </div>
    </section>
  );
}

function StepText({ step, align }) {
  return (
    <>
      <p className="text-lg font-bold text-(--accent)">{step.step}</p>
      <h3 className="mt-1 text-base font-bold text-(--text-primary)">
        {step.title}
      </h3>
      <div
        className={`mt-3 h-px w-full bg-(--border) ${
          align === "right" ? "md:ml-auto" : ""
        }`}
      />
      <p className="mt-3 text-xs leading-relaxed text-(--text-muted)">
        {step.description}
      </p>
    </>
  );
}

function IconBadge({ Icon }) {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-(--stat-icon-bg)">
      <Icon size={22} className="text-(--stat-icon-color)" strokeWidth={1.75} />
    </div>
  );
}