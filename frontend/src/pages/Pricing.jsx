import { Check } from "lucide-react";
import { motion } from "framer-motion";
import PricingForm from "../components/PricingForm";

const considerations = [
  "Do you want to manage all HR processes, payroll, and operations from a single platform, or focus on select modules first?",
  "Are you scaling a small team, or managing a mid-sized to large enterprise with complex workflows?",
  "Do you need standard workflows, or customized processes, approvals, and reporting for your organization?",
];

const leftReveal = {
  hidden: { opacity: 0, x: -64 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.62, ease: "easeOut" },
  },
};

const rightReveal = {
  hidden: { opacity: 0, x: 64 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.62, ease: "easeOut", delay: 0.08 },
  },
};

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative z-45 bg-white pb-16 pt-[calc(var(--navbar-height)+1.5rem)] sm:pb-24 sm:pt-[calc(var(--navbar-height)+2rem)]"
    >
      <div className="page-shell">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-12">
          <motion.div
            className="max-w-2xl"
            variants={leftReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">
              + Plans
            </p>

            <h1 className="text-balance text-[clamp(2rem,4.5vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em] text-slate-900">
              Flexible Pricing
            </h1>

            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
              We understand that pricing is an important consideration when
              evaluating ERP solutions. Our goal is to provide flexible, tailored
              pricing that aligns with your organization&apos;s needs and ensures a
              strong ROI. To build a custom plan, consider the following:
            </p>

            <ul className="mt-7 space-y-4">
              {considerations.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-teal-700"
                    strokeWidth={2.4}
                    aria-hidden
                  />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-base leading-relaxed text-slate-600 sm:text-lg">
              Our team will work with you to design a plan that fits your
              organization&apos;s size, needs, and growth goals.
            </p>
          </motion.div>

          <motion.div
            variants={rightReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <PricingForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
