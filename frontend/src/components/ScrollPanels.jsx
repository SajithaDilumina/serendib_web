import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const STACK_GAP_PX = 38;
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
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" } },
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
  const [scrollY, setScrollY] = useState(0);
  const [vh, setVh] = useState(800);

  useEffect(() => {
    const onResize = () => setVh(window.innerHeight);
    const onScroll = () => setScrollY(window.scrollY);
    onResize();
    onScroll();
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /** Panels settle with a stepped gap (0px, 28px, 56px). */
  const slideTransform = (index) => {
    const t = Math.min(1, Math.max(0, (scrollY - index * vh) / vh));
    const stopOffset = index * STACK_GAP_PX;
    return `translateY(calc(${(1 - t) * 100}% + ${stopOffset}px - ${stackOffset}px))`;
  };

  /** After three viewports of scroll, whole stack moves up together */
  const stackOffset = scrollY > 3 * vh ? scrollY - 3 * vh : 0;

  return (
    <>
      {PANELS.map((panel, i) => (
        <div
          key={i}
          className="pointer-events-none fixed left-0 right-0 overflow-hidden"
          style={{
            top: "var(--navbar-height)",
            height: "calc(100vh - var(--navbar-height))",
            zIndex: 20 + i * 10,
          }}
        >
          <div
            className={`pointer-events-auto h-full w-full rounded-t-3xl ${panel.bg}`}
            style={{
              transform: slideTransform(i),
            }}
          >
            <div className="page-shell flex h-full items-center py-12 sm:py-16">
              <section className="grid w-full gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
                <motion.div
                  className="max-w-xl text-[#101418]"
                  variants={leftReveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <p className="mb-5 text-xs font-medium uppercase tracking-[0.18em] text-[#3d6a5d]">
                    {panel.label}
                  </p>

                  <h2 className="text-balance text-[clamp(2rem,4.8vw,4.25rem)] font-semibold leading-[1.06] tracking-[-0.03em]">
                    {panel.title}
                  </h2>

                  <p className="mt-6 max-w-lg text-base leading-relaxed text-[#4a5961]">
                    {panel.description}
                  </p>

                  <ul className="mt-7 space-y-3">
                    {panel.bullets.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-[15px] text-[#253038]"
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
                    className="mt-8 inline-flex items-center justify-center rounded-lg border border-[#2e7b68]/35 bg-white/60 px-5 py-2.5 text-sm font-semibold text-[#1e4f43] transition-colors hover:border-[#2e7b68]/55 hover:bg-white/80"
                  >
                    {panel.ctaLabel}
                  </a>
                </motion.div>

                <motion.div
                  className="flex justify-center lg:justify-end"
                  variants={rightReveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div
                    className={`flex h-[320px] w-full max-w-[420px] items-center justify-center rounded-[1.75rem] ${panel.placeholder} p-8 shadow-[0_10px_32px_rgba(23,37,31,0.12)]`}
                    aria-label="HR module image placeholder"
                  >
                    <div className="flex h-full w-full items-center justify-center rounded-2xl border border-white/60 bg-white/55 text-sm font-medium tracking-wide text-[#526068]">
                      Image Placeholder
                    </div>
                  </div>
                </motion.div>
              </section>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
