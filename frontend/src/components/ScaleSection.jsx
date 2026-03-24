import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const textBlockVariants = {
  hidden: { opacity: 0, x: -64 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const placeholderVariants = {
  hidden: { opacity: 0, x: 64, scale: 0.985 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.1 },
  },
};

export default function ScaleSection() {
  return (
    <section
      id="scale"
      className="relative z-45 bg-[#020b09] pb-14 pt-[calc(var(--navbar-height)+2rem)] sm:pb-20 sm:pt-[calc(var(--navbar-height)+2.5rem)]"
    >
      <div className="page-shell">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          variants={textBlockVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.18em] text-erp-accent">
            + Built to grow with your team
          </p>
          <h2 className="text-balance text-[clamp(2.2rem,5.3vw,4.9rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-white">
            Scale Your Business Effortlessly
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-pretty text-base leading-relaxed text-erp-text-muted sm:text-lg">
            Our ERP platform is designed to manage all HR processes end-to-end,
            so you can scale from 10 to 1,000+ employees seamlessly.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <motion.button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-erp-accent px-7 py-3.5 text-[15px] font-semibold text-erp-accent-foreground transition-opacity hover:opacity-90"
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.08 }}
              viewport={{ once: true, amount: 0.45 }}
            >
              Start Free Trial
              <ArrowRight className="size-4" strokeWidth={2.2} aria-hidden />
            </motion.button>
            <motion.button
              type="button"
              className="inline-flex items-center justify-center rounded-lg border border-white/25 bg-transparent px-7 py-3.5 text-[15px] font-medium text-white transition-colors hover:border-white/40 hover:bg-white/4"
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.16 }}
              viewport={{ once: true, amount: 0.45 }}
            >
              Book a Free Demo
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          className="relative mt-16 rounded-4xl border border-white/10 bg-white/4 p-6 shadow-[0_18px_70px_-20px_rgba(0,0,0,0.75)] sm:p-8"
          variants={placeholderVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.28 }}
        >
          <div
            className="pointer-events-none absolute left-6 right-6 top-0 h-9 -translate-y-1/2 bg-gradient-to-r from-transparent via-erp-accent/50 to-transparent blur-xl sm:left-8 sm:right-8"
            aria-hidden
          />
          <div className="relative flex h-[260px] items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-[#0b1613] text-sm font-medium uppercase tracking-[0.14em] text-white/45 sm:h-[360px] lg:h-[480px]">
            Large Visual Placeholder
          </div>
        </motion.div>
      </div>
    </section>
  );
}
