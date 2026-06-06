import "./Footer.css";

function Footer() {
  const policyLinks = [
    "Website Policy",
    "Mobile App Privacy Policy",
    "Terms & Conditions",
    "Accessibility Statement",
    "Web Information Manager",
  ];

  const secondaryLinks = [
    "Feedback",
    "Sitemap",
    "Contact Us",
    "Vacancies",
    "Product & Services",
    "Pricing",
    "Cancellation Policy",
    "Grievance Management Policy",
  ];

  return (
    <footer className="gov-footer">

      {/* ── data.gov.in ───────────────────────────────── */}
      <div className="footer-datagov">
        <div className="datagov-logo">
          <span className="datagov-text">data.gov</span>
          <span className="datagov-badge">in</span>
        </div>
        <p className="datagov-sub">Open Government Data (OGD) Platform India</p>
      </div>

      {/* ── Row: india.gov.in  +  PM INDIA ───────────── */}
      <div className="footer-row-2">
        <div className="footer-tile tile-india">
          <p className="india-tagline">The national portal of India</p>
          <p className="india-brand">
            <span className="india-blue">ind</span>
            <span className="india-dot-one">1</span>
            <span className="india-green">a</span>
            <span className="india-plain">.gov.in</span>
          </p>
        </div>

        <div className="footer-tile tile-pm">
          <span className="pm-emblem">⚖️</span>
          <span className="pm-flag">🇮🇳</span>
          <span className="pm-text">PM INDIA</span>
        </div>
      </div>

      {/* ── MAKE IN INDIA ─────────────────────────────── */}
      <div className="footer-tile-full tile-makein">
        <span className="makein-lion">🦁</span>
        <span className="makein-text">MAKE IN INDIA</span>
      </div>

      {/* ── Digital India ─────────────────────────────── */}
      <div className="footer-tile-full tile-digital">
        {/* Tricolor swirl icon */}
        <div className="digital-icon">
          <div className="digital-swirl" />
          <span className="digital-i">i</span>
        </div>
        <div className="digital-text-block">
          <span className="digital-brand">Digital India</span>
          <span className="digital-sub">Power To Empower</span>
        </div>
      </div>

      {/* ── myGov ─────────────────────────────────────── */}
      <div className="footer-tile-full tile-mygov">
        <span className="mygov-emblem">⚖️</span>
        <div className="mygov-text-block">
          <div className="mygov-brand">
            <span className="mygov-my">my</span>
            <span className="mygov-gov">GOV</span>
          </div>
          <span className="mygov-hindi">मेरी सरकार</span>
        </div>
      </div>

      {/* ── Policy links ──────────────────────────────── */}
      <div className="footer-links-block">
        {policyLinks.map((link, i) => (
          <span key={link} className="footer-link-item">
            <a href="#" className="footer-link" onClick={(e) => e.preventDefault()}>
              {link}
            </a>
            {i < policyLinks.length - 1 && (
              <span className="footer-pipe">|</span>
            )}
          </span>
        ))}
      </div>

      {/* ── Secondary links ───────────────────────────── */}
      <div className="footer-links-block">
        {secondaryLinks.map((link, i) => (
          <span key={link} className="footer-link-item">
            <a href="#" className="footer-link" onClick={(e) => e.preventDefault()}>
              {link}
            </a>
            {i < secondaryLinks.length - 1 && (
              <span className="footer-pipe">|</span>
            )}
          </span>
        ))}
      </div>

      {/* ── Meta info ─────────────────────────────────── */}
      <p className="footer-meta">Last Updated: 30-01-2024 12:16:17</p>

      <p className="footer-meta">
        Website Developed &amp; Maintained by Office of the Registrar General &amp; Census Commissioner, India
      </p>

      <p className="footer-copyright">
        © 2024 - The Registrar General &amp; Census Commissioner, India
      </p>
    </footer>
  );
}

export default Footer;