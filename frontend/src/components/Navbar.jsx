const Navbar = () => {
  const navItems = ["About", "Features", "Pricing", "Blog"];

  return (
    <header className="navbar">
      <div className="brand">
        <span className="brand__icon" aria-hidden="true">
          ||
        </span>
        <span className="brand__text">SaasCo</span>
      </div>

      <nav className="navbar__menu" aria-label="Main navigation">
        {navItems.map((item) => (
          <a key={item} href="#" className="navbar__link">
            {item}
          </a>
        ))}
      </nav>

      <button className="contact-btn" type="button">
        Contact Us
      </button>
    </header>
  );
};

export default Navbar;
