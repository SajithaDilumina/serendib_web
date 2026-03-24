import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

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
    <section className="relative h-full min-h-0 overflow-hidden">
      <div className="page-shell flex h-full min-h-0 flex-col justify-center gap-12 pb-16 pt-8 sm:gap-14 sm:pb-24 sm:pt-12 lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-16 lg:gap-y-0 lg:pb-20 lg:pt-0 xl:gap-x-24">
        <motion.div
          className="max-w-xl text-center lg:max-w-none lg:text-left"
          variants={leftReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="mb-8 inline-flex items-center text-xs font-medium uppercase tracking-[0.2em] text-erp-accent">
            + Unified finance &amp; operations
          </p>

          <h1 className="text-balance text-[clamp(3rem,9vw,5.75rem)] leading-[1.05] tracking-[-0.035em] text-white">
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

          <p className="mx-auto mt-8 max-w-md text-pretty text-base font-normal leading-[1.75] text-erp-text-muted lg:mx-0 lg:max-w-lg lg:text-[17px]">
            One ERP for finance, inventory, HR, and projects—fewer tools, clearer
            data, and room to grow.
          </p>

          <div className="mt-12 flex flex-col items-stretch gap-3 sm:mx-auto sm:max-w-md sm:flex-row sm:items-center sm:justify-center lg:mx-0 lg:max-w-none lg:justify-start">
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-erp-accent px-8 py-3.5 text-[15px] font-semibold text-erp-accent-foreground shadow-[0_0_32px_-8px_rgba(73,255,216,0.35)] transition-opacity hover:opacity-90"
            >
              Create Account
              <ArrowRight className="size-[18px]" strokeWidth={2.2} aria-hidden />
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-transparent px-8 py-3.5 text-[15px] font-medium text-white transition-colors hover:border-white/35 hover:bg-white/[0.04]"
            >
              Contact Sales
            </button>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center lg:justify-end"
          variants={rightReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div
            className="flex w-full max-w-md flex-col items-center justify-center rounded-2xl border border-white/12 bg-white/[0.06] p-10 shadow-[0_24px_64px_-16px_rgba(0,0,0,0.55)] backdrop-blur-sm lg:max-w-lg lg:min-h-[min(420px,52vh)]"
            aria-label="Product preview placeholder"
          >
            <p className="text-sm font-medium text-white/50">Dashboard preview</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
