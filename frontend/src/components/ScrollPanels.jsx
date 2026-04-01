import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import interviewIllustration from "../assets/Interview-amico.svg";
import teamChecklistIllustration from "../assets/team checklist-amico.svg";
import taxIllustration from "../assets/Tax-amico.svg";

const BASE_PATH = (import.meta.env.BASE_URL || "/").endsWith("/")
  ? import.meta.env.BASE_URL || "/"
  : `${import.meta.env.BASE_URL}/`;

const PANELS = [
  {
    bg: "bg-[#f3f7f5]",
    placeholder: "bg-[#dfe8e3]",
    label: "+ Manage people",
    title: "Hire, manage, and grow your workforce",
    description:
      "Handle everything from employee records to performance, recruitment, and lifecycle management in one place.",
    bullets: [
      "Centralized employee records and directories",
      "Recruitment, hiring, and onboarding workflows",
      "Performance tracking and appraisals",
      "Employee self-service and lifecycle management",
    ],
    ctaLabel: "Explore People",
    ctaHref: `${BASE_PATH}#/features/people`,
  },
  {
    bg: "bg-[#e7f0ec]",
    placeholder: "bg-[#d2e1da]",
    label: "+ Run operations",
    title: "Streamline daily work and internal processes",
    description:
      "Manage attendance, leave, assets, and internal workflows with full visibility and control.",
    bullets: [
      "Attendance, shift, and leave management",
      "Asset tracking and administrative operations",
      "Internal communication and notifications",
      "Workflow automation and policy controls",
    ],
    ctaLabel: "Explore Operations",
    ctaHref: `${BASE_PATH}#/features/operations`,
  },
  {
    bg: "bg-[#dde9e3]",
    placeholder: "bg-[#c8d8d0]",
    label: "+ Payroll & compliance",
    title: "Automate payroll and stay compliant",
    description:
      "Run payroll seamlessly, manage financial workflows, and ensure compliance with audit-ready reporting.",
    bullets: [
      "Payroll processing and salary structures",
      "Loans, advances, and compensation management",
      "Audit logs and compliance tracking",
      "Analytics and export-ready reports",
    ],
    ctaLabel: "Explore Payroll",
    ctaHref: `${BASE_PATH}#/features/payroll`,
  },
];

const leftReveal = {
  hidden: { opacity: 0, x: -56 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const rightReveal = {
  hidden: { opacity: 0, x: 56 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: "easeOut", delay: 0.08 },
  },
};

export default function ScrollPanels() {
  return (
    <section className="relative z-30">
      {PANELS.map((panel, index) => (
        <section key={panel.ctaLabel} className={`${panel.bg} py-12 sm:py-14 lg:py-16`}>
          <div className="page-shell">
            <section className="grid w-full gap-6 sm:gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">
                <motion.div
                  className="max-w-xl text-[#101418]"
                  variants={leftReveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                >
                  <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-[#3d6a5d] sm:mb-5">
                    {panel.label}
                  </p>

                  <h2 className="text-balance text-[clamp(1.4rem,4.5vw,3.6rem)] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-[clamp(1.9rem,3.8vw,3.3rem)] sm:leading-[1.06] xl:text-[clamp(2rem,4.8vw,4.25rem)]">
                    {panel.title}
                  </h2>

                  <p className="mt-2.5 max-w-lg text-sm leading-relaxed text-[#4a5961] sm:mt-4 sm:text-sm md:text-base">
                    {panel.description}
                  </p>

                  <ul className="mt-2.5 space-y-1.5 sm:mt-4 sm:space-y-2">
                    {panel.bullets.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-[#253038] sm:gap-2.5 sm:text-sm md:text-[15px]"
                      >
                        <ChevronRight
                          className="mt-0.5 size-4 shrink-0 text-[#2e7b68]"
                          strokeWidth={1.8}
                          aria-hidden
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={panel.ctaHref}
                    className="mt-3 inline-flex items-center justify-center rounded-lg border border-[#2e7b68]/35 bg-white/60 px-4 py-2 text-xs font-semibold text-[#1e4f43] transition-colors hover:border-[#2e7b68]/55 hover:bg-white/80 sm:mt-4 sm:px-5 sm:py-2.5 sm:text-sm"
                  >
                    {panel.ctaLabel}
                  </a>
                </motion.div>

                <motion.div
                  className="flex justify-center lg:justify-end"
                  variants={rightReveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                >
                  <div
                    className={`flex w-full items-center justify-center rounded-[1.25rem] shadow-[0_10px_32px_rgba(23,37,31,0.12)] sm:rounded-[1.75rem] ${
                      "h-[200px] max-w-[460px] p-3 sm:h-[280px] sm:p-4 lg:h-[320px] xl:h-[360px]"
                    } ${panel.placeholder}`}
                    aria-label="HR module image placeholder"
                  >
                    {index === 0 ? (
                      <img
                        src={interviewIllustration}
                        alt="Interview workflow illustration"
                        className="h-[112%] w-[112%] max-w-none object-contain"
                        loading="lazy"
                      />
                    ) : index === 1 ? (
                      <img
                        src={teamChecklistIllustration}
                        alt="Team checklist illustration"
                        className="h-[112%] w-[112%] max-w-none object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <img
                        src={taxIllustration}
                        alt="Tax and compliance illustration"
                        className="h-[112%] w-[112%] max-w-none object-contain"
                        loading="lazy"
                      />
                    )}
                  </div>
                </motion.div>
            </section>
          </div>
        </section>
      ))}
    </section>
  );
}
