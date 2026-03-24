import footerData from "../data/footer.json";

export default function Footer() {
  const { brand, linkGroups, legalLinks, copyright } = footerData;

  return (
    <footer className="relative z-45 bg-[#f5f6f7] py-14 text-slate-700 sm:py-16">
      <div className="page-shell">
        <div className="grid gap-10 border-b border-slate-300/70 pb-10 sm:grid-cols-[1.15fr_1fr_1fr] sm:pb-12">
          <div className="max-w-sm">
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              {brand.name}
            </h2>
            <div className="mt-5 space-y-1 text-sm leading-relaxed text-slate-600">
              {brand.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <p className="mt-5 text-sm text-slate-700">{brand.email}</p>

            <div className="mt-7 flex items-center gap-3 text-slate-700">
              <a
                href="#"
                aria-label="LinkedIn"
                className="inline-flex size-7 items-center justify-center rounded-full border border-slate-300 text-[11px] font-semibold uppercase hover:border-slate-500 hover:text-slate-900"
              >
                in
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="inline-flex size-7 items-center justify-center rounded-full border border-slate-300 text-[11px] font-semibold uppercase hover:border-slate-500 hover:text-slate-900"
              >
                ig
              </a>
              <a
                href="#"
                aria-label="Dribbble"
                className="inline-flex size-7 items-center justify-center rounded-full border border-slate-300 text-[11px] font-semibold uppercase hover:border-slate-500 hover:text-slate-900"
              >
                dr
              </a>
            </div>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-800">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={`${group.title}-${link.label}`}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-600 transition-colors hover:text-slate-900"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>{copyright}</p>
          <div className="flex items-center gap-5">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-slate-700"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
