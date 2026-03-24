import { LayoutGrid } from "lucide-react";

const navLinks = [
  { label: "Company", href: "#" },
  { label: "Features", href: "#" },
  { label: "Resource", href: "#" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 h-[var(--navbar-height)] bg-[#020b09]">
      <div className="page-shell relative flex h-full items-center justify-between gap-4">
        <a href="/" className="flex min-w-0 items-center gap-2.5">
          <span
            className="flex size-8 shrink-0 items-center justify-center rounded-md bg-erp-accent text-erp-accent-foreground shadow-[0_0_24px_-4px_rgba(73,255,216,0.45)]"
            aria-hidden
          >
            <LayoutGrid className="size-[18px]" strokeWidth={2.2} />
          </span>
          <span className="truncate text-[17px] font-semibold tracking-tight text-white">
            Serendib ERP
          </span>
        </a>

        <nav
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-9 lg:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[15px] font-normal text-white/90 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="rounded-lg px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:text-white"
          >
            Sign In
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-erp-accent-foreground transition-opacity hover:opacity-90 sm:px-5"
          >
            Create Account
            <span aria-hidden className="text-base leading-none">
              →
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
