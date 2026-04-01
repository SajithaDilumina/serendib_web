import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import salaryImg from "../assets/salary_img.png";
import progressImg from "../assets/progress_img.png";
import attendanceImg from "../assets/atendance_img.png";
import CTAButton from "./CTAButton";

const leftReveal = {
  hidden: { opacity: 0, x: -64 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const rightReveal = {
  hidden: { opacity: 0, x: 64 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: "easeOut", delay: 0.08 },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-var(--navbar-height))] w-full min-w-0 overflow-hidden">
      <div className="page-shell flex min-h-[calc(100svh-var(--navbar-height))] min-w-0 flex-col justify-center gap-8 pb-12 pt-6 sm:gap-14 sm:pb-24 sm:pt-12 lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-16 lg:gap-y-0 lg:pb-20 lg:pt-0 xl:gap-x-24">
        <motion.div
          className="max-w-xl min-w-0 w-full text-center lg:max-w-none lg:text-left"
          variants={leftReveal}
          initial="visible"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <p className="mb-5 flex flex-wrap items-center justify-center text-[10px] font-medium uppercase tracking-[0.2em] text-erp-accent sm:mb-8 sm:inline-flex sm:text-xs lg:justify-start">
            + Unified finance &amp; operations
          </p>

          <h1 className="text-balance text-[clamp(2.2rem,6.8vw,5.75rem)] leading-[1.05] tracking-[-0.035em] text-white sm:text-[clamp(3rem,9vw,5.75rem)]">
            <span className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 lg:justify-start">
              <span>Manage</span>
              <ArrowRight
                className="size-[1em] shrink-0 text-erp-accent sm:size-[0.95em]"
                strokeWidth={2}
                aria-hidden
              />
            </span>
            <span className="mt-2 block">Your Business</span>
          </h1>

          <p className="mx-auto mt-5 max-w-md text-pretty text-sm font-normal leading-relaxed text-erp-text-muted sm:mt-8 sm:text-base sm:leading-[1.75] lg:mx-0 lg:max-w-lg lg:text-[17px]">
            One ERP for finance, inventory, HR, and projects—fewer tools, clearer
            data, and room to grow.
          </p>

          <div className="mt-8 flex flex-row items-center justify-center gap-2 sm:mx-auto sm:mt-12 sm:max-w-md sm:gap-3 lg:mx-0 lg:max-w-none lg:justify-start">
            <CTAButton
              label="Start Free Trial"
              variant="primary"
              withArrow
              flipText
              fullOnMobile
              className="font-semibold transition-opacity"
            />
            <CTAButton
              label="Contact Sales"
              variant="secondarySoft"
              flipText
              fullOnMobile
            />
          </div>
        </motion.div>

        <motion.div
          className="hidden min-w-0 w-full justify-center sm:flex lg:justify-end"
          variants={rightReveal}
          initial="visible"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div
            className="relative h-[320px] w-full min-w-0 max-w-[500px] lg:h-[390px]"
            aria-label="Payroll dashboard widget preview"
          >
            <motion.img
              src={salaryImg}
              alt="Payroll summary widget"
              className="absolute left-1/2 top-1/2 w-[78%] max-w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-4xl border border-slate-200/70 shadow-[0_28px_60px_-26px_rgba(0,0,0,0.85)]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.4, ease: "easeOut", delay: 0.12 }}
              viewport={{ once: true, amount: 0.35 }}
              loading="lazy"
            />
            <motion.img
              src={progressImg}
              alt="Progress stat widget"
              className="absolute right-[4%] top-[12%] w-[33%] max-w-[150px] rounded-3xl border border-slate-200/70 shadow-[0_16px_34px_-18px_rgba(0,0,0,0.75)]"
              initial={{ opacity: 0, x: 36 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.24 }}
              viewport={{ once: true, amount: 0.35 }}
              loading="lazy"
            />
            <motion.img
              src={attendanceImg}
              alt="Attendance widget"
              className="absolute bottom-[12%] left-[3%] w-[38%] max-w-[170px] rounded-3xl border border-slate-200/70 shadow-[0_16px_34px_-18px_rgba(0,0,0,0.75)]"
              initial={{ opacity: 0, x: -36 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.24 }}
              viewport={{ once: true, amount: 0.35 }}
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
