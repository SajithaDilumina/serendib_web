const WidgetCard = ({ title, subtitle, className }) => {
  return (
    <article className={`widget-card ${className}`}>
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </article>
  );
};

const Hero = () => {
  return (
    <main className="hero">
      <div className="hero__gradient" aria-hidden="true"></div>

      <div className="hero__widgets hero__widgets--left">
        <WidgetCard
          className="widget-card--tall"
          title="Schedule Widget"
          subtitle="Placeholder calendar stats"
        />
        <WidgetCard
          className="widget-card--small"
          title="Absence Widget"
          subtitle="Placeholder KPI card"
        />
      </div>

      <section className="hero__content">
        <span className="hero__badge">Exclusive ERP Solution</span>
        <h1>Streamline Your ERP Operations with Modern SaaS</h1>
        <p>
          Build a smarter workflow across finance, inventory, HR, and reporting
          with a single cloud-based ERP platform.
        </p>
        <div className="hero__actions">
          <button type="button" className="btn btn--primary">
            Let&apos;s Get Started
          </button>
          <button type="button" className="btn btn--ghost">
            Learn More
          </button>
        </div>
      </section>

      <div className="hero__widgets hero__widgets--right">
        <WidgetCard
          className="widget-card--tall"
          title="Analytics Widget"
          subtitle="Placeholder donut chart"
        />
        <WidgetCard
          className="widget-card--small"
          title="Employee Widget"
          subtitle="Placeholder team metrics"
        />
      </div>
    </main>
  );
};

export default Hero;
