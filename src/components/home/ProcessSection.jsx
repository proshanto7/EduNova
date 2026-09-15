"use client";

import { motion } from "framer-motion";
import { PROCESS_DATA } from "@/data/home";

export default function ProcessSection() {
  return (
    <section className="bg-background px-6 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-(--text-primary)">
            Our Process
          </h2>
          <div className="mx-auto mt-2 h-0.5 w-8 bg-(--accent)" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
            className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-(--border)"
          />

          {/* Top dot */}
          <span className="absolute -top-1.5 left-1/2 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-(--accent)" />

          {PROCESS_DATA.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <div key={step.step} className="relative py-10 first:pt-0">
                {/* Node dot */}
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="absolute left-1/2 top-10 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-(--accent) bg-background"
                />

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-center">
                  {isEven ? (
                    <>
                      {/* Text — left side */}
                      <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5 }}
                        className="text-center md:pr-12 md:text-right"
                      >
                        <StepText step={step} align="right" />
                      </motion.div>

                      {/* Icon — right side */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.6 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.4, delay: 0.15 }}
                        className="hidden justify-start md:flex md:pl-12"
                      >
                        <IconBadge Icon={Icon} />
                      </motion.div>
                    </>
                  ) : (
                    <>
                      {/* Icon — left side */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.6 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.4, delay: 0.15 }}
                        className="hidden justify-end md:flex md:pr-12"
                      >
                        <IconBadge Icon={Icon} />
                      </motion.div>

                      {/* Text — right side */}
                      <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5 }}
                        className="text-center md:pl-12 md:text-left"
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
          <span className="absolute -bottom-1.5 left-1/2 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-(--accent)" />
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