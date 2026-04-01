import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import CTAButton from "../components/CTAButton";

const features = [
  {
    title: "Payroll Management",
    description:
      "Run payroll seamlessly with flexible salary structures, pay grades, and configurable earnings and deductions. Generate payslips and track payments with complete accuracy.",
    height: "h-[180px] sm:h-[210px]",
    gridClass: "lg:col-span-4",
  },
  {
    title: "Payroll Analytics & Records",
    description:
      "Gain insights into payroll trends with detailed analytics and maintain a searchable master ledger for complete visibility into employee compensation history.",
    height: "h-[180px] sm:h-[210px]",
    gridClass: "lg:col-span-4",
  },
  {
    title: "Compliance & Audit",
    description:
      "Ensure compliance with built-in audit logs, categorized tracking, and secure records. Maintain transparency with traceable changes and audit-ready data.",
    height: "h-[200px] sm:h-[240px]",
    gridClass: "lg:col-span-5",
  },
  {
    title: "Loans & Financial Support",
    description:
      "Manage employee loans and salary advances with structured workflows, approvals, and seamless integration into payroll processing.",
    height: "h-[200px] sm:h-[240px]",
    gridClass: "lg:col-span-3",
  },
  {
    title: "Reporting & Exports",
    description:
      "Generate detailed reports and export-ready data for compliance needs, including APIT, EPF, and ETF, along with comprehensive analytics dashboards.",
    height: "h-[220px] sm:h-[280px]",
    gridClass: "lg:col-span-8",
  },
];

const leftReveal = {
  hidden: { opacity: 0, x: -56 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const rightReveal = {
  hidden: { opacity: 0, x: 56 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function PayrollFeatures() {
  return (
    <div className="min-h-screen bg-[#020b09]">
      <Navbar />
      <main className="pb-16 pt-[calc(var(--navbar-height)+2rem)] sm:pb-20">
        <div className="page-shell">
          <section className="relative mt-7 overflow-hidden rounded-3xl px-6 py-10 text-center sm:px-10 sm:py-14">
            <p className="relative mb-5 text-xs font-medium uppercase tracking-[0.18em] text-erp-accent">
              💰 Payroll & Compliance
            </p>
            <h1 className="relative text-balance text-[clamp(1.85rem,4.5vw,4.6rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-white sm:text-[clamp(2.4rem,5.6vw,4.6rem)] sm:leading-[1.04]">
              Automate payroll and stay compliant
            </h1>
            <p className="relative mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-erp-text-muted sm:mt-6 sm:text-base md:text-lg">
              Handle payroll, financial workflows, and compliance with accuracy,
              transparency, and control.
            </p>

            <div className="relative mt-6 flex flex-col items-stretch justify-center gap-2.5 sm:mt-9 sm:flex-row sm:items-center sm:justify-center sm:gap-3">
              <CTAButton
                label="Start Free Trial"
                variant="primary"
                size="feature"
                withArrow
                flipText
                className="font-semibold shadow-[0_0_32px_-8px_rgba(73,255,216,0.4)]"
              />
              <CTAButton
                label="Book a Free Demo"
                variant="secondary"
                size="feature"
                flipText
              />
            </div>
          </section>

          <div className="mt-10 grid gap-5 lg:grid-cols-8">
            {features.map((feature, index) => (
              <motion.article
                key={feature.title}
                className={`rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 ${feature.gridClass}`}
                variants={index % 2 === 0 ? leftReveal : rightReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <div
                  className={`mb-5 flex w-full items-center justify-center rounded-xl border border-white/10 bg-[#0b1613] text-xs font-medium uppercase tracking-[0.14em] text-white/45 ${feature.height}`}
                >
                  {feature.title} Placeholder
                </div>
                <h2 className="text-xl font-semibold text-white sm:text-2xl">
                  {feature.title}
                </h2>
                <p className="mt-3 leading-relaxed text-erp-text-muted">
                  {feature.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
