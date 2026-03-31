import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";

const features = [
  {
    title: "Time & Attendance",
    description:
      "Track employee attendance with real-time logs, manage shifts efficiently, and handle public holidays and alternative day-offs while aligning with your organization's labor policies.",
    height: "h-[180px] sm:h-[210px]",
    gridClass: "lg:col-span-4",
  },
  {
    title: "Leave Management",
    description:
      "Simplify leave requests and approvals with clear workflows, track balances effortlessly, and configure policies that match your company's needs.",
    height: "h-[180px] sm:h-[210px]",
    gridClass: "lg:col-span-4",
  },
  {
    title: "Asset & Admin Operations",
    description:
      "Manage company assets with full visibility, from assignments to movement history. Keep administrative operations organized with structured records and tracking.",
    height: "h-[200px] sm:h-[240px]",
    gridClass: "lg:col-span-5",
  },
  {
    title: "Communication & Notifications",
    description:
      "Enhance internal communication with built-in tools and automated notifications, including system alerts, verification emails, and user access updates.",
    height: "h-[200px] sm:h-[240px]",
    gridClass: "lg:col-span-3",
  },
  {
    title: "Workflow & Controls",
    description:
      "Automate operational processes with customizable workflows, enforce policies, and maintain full visibility over day-to-day business activities.",
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

export default function OperationsFeatures() {
  return (
    <div className="min-h-screen bg-[#020b09]">
      <Navbar />
      <main className="pb-16 pt-[calc(var(--navbar-height)+2rem)] sm:pb-20">
        <div className="page-shell">
          <section className="relative mt-7 overflow-hidden rounded-3xl px-6 py-10 text-center sm:px-10 sm:py-14">
            <p className="relative mb-5 text-xs font-medium uppercase tracking-[0.18em] text-erp-accent">
              ⚙️ Run Operations
            </p>
            <h1 className="relative text-balance text-[clamp(2.4rem,5.6vw,4.6rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-white">
              Streamline daily work and internal processes
            </h1>
            <p className="relative mx-auto mt-6 max-w-3xl text-base leading-relaxed text-erp-text-muted sm:text-lg">
              Keep your business running smoothly with tools to manage attendance,
              workflows, assets, and internal communication.
            </p>

            <div className="relative mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-erp-accent px-7 py-3.5 text-[15px] font-semibold text-erp-accent-foreground shadow-[0_0_32px_-8px_rgba(73,255,216,0.4)] transition-opacity hover:opacity-90"
              >
                Start Free Trial
                <ArrowRight className="size-4" strokeWidth={2.2} aria-hidden />
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-lg border border-white/25 bg-transparent px-7 py-3.5 text-[15px] font-medium text-white transition-colors hover:border-white/40 hover:bg-white/4"
              >
                Book a Free Demo
              </button>
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
