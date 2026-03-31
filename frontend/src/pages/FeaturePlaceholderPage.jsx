export default function FeaturePlaceholderPage({ title, description }) {
  const homeHref = `${import.meta.env.BASE_URL}#home`;

  return (
    <main className="min-h-screen bg-[#020b09] pb-16 pt-[calc(var(--navbar-height)+2rem)]">
      <div className="page-shell">
        <a
          href={homeHref}
          className="inline-flex items-center gap-2 text-sm font-medium text-erp-accent transition-opacity hover:opacity-80"
        >
          <span aria-hidden>←</span>
          Back to Home
        </a>
        <section className="mt-8 rounded-3xl border border-white/10 bg-white/4 p-8">
          <h1 className="text-4xl font-semibold tracking-tight text-white">{title}</h1>
          <p className="mt-4 max-w-2xl text-erp-text-muted">{description}</p>
          <div className="mt-8 flex h-[320px] items-center justify-center rounded-2xl border border-white/10 bg-[#0b1613] text-sm uppercase tracking-[0.14em] text-white/45">
            Detailed page coming soon
          </div>
        </section>
      </div>
    </main>
  );
}
