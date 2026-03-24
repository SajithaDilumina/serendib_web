export default function PricingForm() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.35)] sm:p-7">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-[2rem]">
        Get your custom ERP quote
      </h2>

      <form className="mt-6 space-y-4">
        <div className="grid gap-3 sm:grid-cols-2">
          <input
            type="text"
            placeholder="First Name*"
            className="rounded-md border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-500 focus:border-erp-accent-muted"
          />
          <input
            type="text"
            placeholder="Last Name*"
            className="rounded-md border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-500 focus:border-erp-accent-muted"
          />
          <input
            type="email"
            placeholder="Business Email*"
            className="rounded-md border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-500 focus:border-erp-accent-muted"
          />
          <input
            type="tel"
            placeholder="Phone Number*"
            className="rounded-md border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-500 focus:border-erp-accent-muted"
          />
          <input
            type="text"
            placeholder="Job Title*"
            className="rounded-md border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-500 focus:border-erp-accent-muted"
          />
          <input
            type="text"
            placeholder="Company*"
            className="rounded-md border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-500 focus:border-erp-accent-muted"
          />
        </div>

        <textarea
          placeholder="How did you hear about us?"
          rows={3}
          className="w-full resize-none rounded-md border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-500 focus:border-erp-accent-muted"
        />

        <p className="text-xs leading-relaxed text-slate-500">
          By submitting this form, you agree to be contacted by our team about
          ERP pricing and implementation options.
        </p>

        <button
          type="button"
          className="inline-flex rounded-full bg-[#0f766e] px-7 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0d6660]"
        >
          Get Started
        </button>
      </form>
    </section>
  );
}
