import { motion, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import testimonialsData from "../data/testimonials.json";

const AUTO_SCROLL_PX_PER_MS = 0.03;
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

function avatarUrl(name) {
  return `https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(name)}`;
}

export default function TestimonialsSection() {
  const trackRef = useRef(null);
  const x = useMotionValue(0);
  const [halfWidth, setHalfWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const loopItems = [...testimonialsData, ...testimonialsData];

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      const nextHalfWidth = trackRef.current.scrollWidth / 2;
      setHalfWidth(nextHalfWidth);
      if (nextHalfWidth > 0 && x.get() === 0) {
        x.set(-nextHalfWidth);
      }
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [x]);

  useEffect(() => {
    if (!halfWidth) return undefined;
    let rafId = 0;
    let lastTime = performance.now();

    const frame = (now) => {
      const delta = now - lastTime;
      lastTime = now;

      if (!isDragging) {
        let next = x.get() + delta * AUTO_SCROLL_PX_PER_MS;
        if (next >= 0) next -= halfWidth;
        if (next < -halfWidth) next += halfWidth;
        x.set(next);
      }

      rafId = window.requestAnimationFrame(frame);
    };

    rafId = window.requestAnimationFrame(frame);
    return () => window.cancelAnimationFrame(rafId);
  }, [halfWidth, isDragging, x]);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    if (!halfWidth) {
      setIsDragging(false);
      return;
    }

    let next = x.get();
    while (next >= 0) next -= halfWidth;
    while (next < -halfWidth) next += halfWidth;
    x.set(next);
    setIsDragging(false);
  };

  return (
    <section
      id="testimonials"
      className="relative z-45 w-full min-w-0 max-w-full overflow-x-hidden overflow-y-visible bg-[#03110e] py-16 sm:py-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(45,212,191,0.22),rgba(3,17,14,0.96)_58%)]" />

      <div className="page-shell relative min-w-0 max-w-full">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          variants={leftReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-teal-300">
            + Trusted teams
          </p>
          <h2 className="text-balance text-[clamp(1.65rem,4.2vw,4.2rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-white sm:text-[clamp(2rem,4.8vw,4.2rem)] sm:leading-[1.08]">
            Loved by growing teams
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:mt-5 sm:text-base md:text-lg">
            Teams use Serendib ERP to simplify daily operations, improve
            compliance, and scale confidently.
          </p>
        </motion.div>

        <motion.div
          className="mt-14 min-w-0 max-w-full overflow-x-hidden overflow-y-visible py-6"
          aria-label="Customer testimonials"
          variants={rightReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            ref={trackRef}
            className="flex w-max max-w-none gap-5 pb-6"
            style={{ x }}
            drag="x"
            dragConstraints={{ left: -halfWidth, right: 0 }}
            dragElastic={0.06}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            {loopItems.map((item, index) => (
              <article
                key={`${item.id}-${index}`}
                className="min-w-[300px] max-w-[300px] rounded-2xl border border-teal-200/15 bg-white/5 p-5 shadow-[0_12px_30px_-18px_rgba(0,0,0,0.85)] backdrop-blur-sm sm:min-w-[340px] sm:max-w-[340px]"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={avatarUrl(item.name)}
                    alt={`${item.name} avatar`}
                    className="size-10 rounded-full border border-white/20 bg-white/10 object-cover"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-300">
                      {item.role} - {item.company}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-200">
                  {item.quote}
                </p>
              </article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
