import { LayoutGrid, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Company", href: "#" },
  { label: "Features", href: "#" },
  { label: "Resource", href: "#" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 h-(--navbar-height) bg-[#020b09]">
        <div className="page-shell relative flex h-full min-w-0 items-center justify-between gap-2 sm:gap-4">
          <a href="/" className="flex min-w-0 flex-1 items-center gap-2 sm:gap-2.5">
            <span
              className="flex size-8 shrink-0 items-center justify-center rounded-md bg-erp-accent text-erp-accent-foreground shadow-[0_0_24px_-4px_rgba(73,255,216,0.45)]"
              aria-hidden
            >
              <LayoutGrid className="size-[18px]" strokeWidth={2.2} />
            </span>
            <span className="truncate text-[15px] font-semibold tracking-tight text-white sm:text-[17px]">
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

          <div className="hidden min-w-0 shrink items-center justify-end gap-3 lg:flex">
            <button
              type="button"
              className="shrink-0 rounded-lg px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:text-white"
            >
              Sign In
            </button>
            <button
              type="button"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-erp-accent-foreground transition-opacity hover:opacity-90"
            >
              Create Account
              <span aria-hidden className="text-base leading-none">
                →
              </span>
            </button>
          </div>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-lg border border-white/15 p-2 text-white/90 transition-colors hover:border-white/30 hover:text-white lg:hidden"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-49 bg-black/45 transition-opacity duration-200 lg:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeMobileMenu}
        aria-hidden
      />

      <aside
        className={`fixed right-0 top-(--navbar-height) z-50 h-[calc(100svh-var(--navbar-height))] w-[min(88vw,360px)] border-l border-white/10 bg-[#03110e] p-6 shadow-[-20px_0_60px_-30px_rgba(0,0,0,0.8)] transition-transform duration-250 lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile menu"
      >
        <nav className="flex flex-col gap-2" aria-label="Mobile primary">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMobileMenu}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/90 transition-colors hover:bg-white/6 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mt-6 border-t border-white/10 pt-6">
          <button
            type="button"
            className="w-full rounded-lg border border-white/20 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/35 hover:bg-white/4"
          >
            Sign In
          </button>
          <button
            type="button"
            className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-erp-accent-foreground transition-opacity hover:opacity-90"
          >
            Create Account
            <span aria-hidden className="text-base leading-none">
              →
            </span>
          </button>
        </div>
      </aside>
    </>
  );
}
