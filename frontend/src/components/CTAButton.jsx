import { ArrowRight } from "lucide-react";

function cx(...parts) {
  return parts.filter(Boolean).join(" ");
}

const VARIANT_STYLES = {
  primary:
    "bg-erp-accent text-erp-accent-foreground shadow-[0_0_32px_-8px_rgba(73,255,216,0.35)] hover:opacity-90",
  secondary:
    "border border-white/25 bg-transparent text-white hover:border-white/40 hover:bg-white/4",
  secondarySoft:
    "border border-white/20 bg-transparent text-white hover:border-white/35 hover:bg-white/4",
};

const SIZE_STYLES = {
  compactResponsive:
    "px-3 py-2.5 text-xs sm:px-8 sm:py-3.5 sm:text-[15px]",
  feature:
    "px-5 py-3 text-sm sm:px-7 sm:py-3.5 sm:text-[15px]",
};

export default function CTAButton({
  label,
  variant = "primary",
  size = "compactResponsive",
  withArrow = false,
  flipText = false,
  fullOnMobile = false,
  className = "",
  type = "button",
  ...props
}) {
  return (
    <button
      type={type}
      className={cx(
        "inline-flex items-center justify-center rounded-lg font-medium transition-colors",
        VARIANT_STYLES[variant],
        SIZE_STYLES[size],
        fullOnMobile && "flex-1 sm:flex-none",
        withArrow && "gap-1.5 sm:gap-2",
        flipText && "group",
        className,
      )}
      {...props}
    >
      {flipText ? (
        <span className="relative h-[1.2em] overflow-hidden">
          <span className="block transition-transform duration-450 ease-out group-hover:-translate-y-full">
            {label}
          </span>
          <span className="absolute left-0 top-full block transition-transform duration-450 ease-out group-hover:-translate-y-full">
            {label}
          </span>
        </span>
      ) : (
        label
      )}
      {withArrow ? (
        <ArrowRight className="size-3.5 shrink-0 sm:size-[18px]" strokeWidth={2.2} aria-hidden />
      ) : null}
    </button>
  );
}
