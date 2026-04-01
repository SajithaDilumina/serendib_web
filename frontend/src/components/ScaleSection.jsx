import { motion } from "framer-motion";
import scaleImage from "../assets/scale_image.png";
import CTAButton from "./CTAButton";

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
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.18em] text-erp-accent sm:mb-6 sm:text-xs">
            + Built to grow with your team
          </p>
          <h2 className="text-balance text-[clamp(1.75rem,4.5vw,4.9rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-white sm:text-[clamp(2.2rem,5.3vw,4.9rem)] sm:leading-[1.05]">
            Scale Your Business Effortlessly
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-pretty text-sm leading-relaxed text-erp-text-muted sm:mt-7 sm:text-base md:text-lg">
            Our ERP platform is designed to manage all HR processes end-to-end,
            so you can scale from 10 to 1,000+ employees seamlessly.
          </p>

          <div className="mt-7 flex w-full flex-row items-center justify-center gap-2 sm:mt-10 sm:gap-3">
            <motion.div
              className="w-full sm:w-auto"
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.08 }}
              viewport={{ once: true, amount: 0.45 }}
            >
              <CTAButton
                label="Start Free Trial"
                variant="primary"
                withArrow
                flipText
                fullOnMobile
                className="font-semibold"
              />
            </motion.div>
            <motion.div
              className="w-full sm:w-auto"
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.16 }}
              viewport={{ once: true, amount: 0.45 }}
            >
              <CTAButton
                label="Book a Free Demo"
                variant="secondary"
                flipText
                fullOnMobile
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="relative mt-16"
          variants={placeholderVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.28 }}
        >
          <div
            className="pointer-events-none absolute left-8 right-8 top-0 h-8 -translate-y-1/2 bg-linear-to-r from-transparent via-erp-accent/45 to-transparent blur-lg sm:left-14 sm:right-14"
            aria-hidden
          />
          <div className="relative h-[320px] overflow-hidden rounded-3xl sm:h-[460px] lg:h-[620px]">
            <img
              src={scaleImage}
              alt="ERP dashboard preview"
              className="h-full w-full object-contain object-center"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
