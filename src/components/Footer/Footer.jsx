import "./Footer.css";

import logoDatagov from "../../assets/images/logo-datagov.svg";
import logoIndiagov from "../../assets/images/logo-indiagov.jpg";
import logoPmindia from "../../assets/images/logo-pmindia.jpeg";
import logoMakeinindia from "../../assets/images/logo-makeinindia.png";
import logoDigitalindia from "../../assets/images/logo-digitalindia.png";
import logoMygov from "../../assets/images/logo-mygov.jpeg";

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

      {/* ── Logo grid — 2 columns ─────────────────── */}
      <div className="footer-logo-grid">

        <div className="footer-logo-tile">
          <img src={logoDatagov} alt="data.gov.in" className="footer-logo-img" />
        </div>

        <div className="footer-logo-tile">
          <img src={logoIndiagov} alt="india.gov.in" className="footer-logo-img" />
        </div>

        <div className="footer-logo-tile footer-logo-tile--dark">
          <img src={logoPmindia} alt="PM India" className="footer-logo-img" />
        </div>

        <div className="footer-logo-tile">
          <img src={logoMakeinindia} alt="Make in India" className="footer-logo-img" />
        </div>

        <div className="footer-logo-tile">
          <img src={logoDigitalindia} alt="Digital India" className="footer-logo-img" />
        </div>

        <div className="footer-logo-tile">
          <img src={logoMygov} alt="myGov" className="footer-logo-img" />
        </div>

      </div>

      {/* ── Policy links ──────────────────────────── */}
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

      {/* ── Secondary links ───────────────────────── */}
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

      {/* ── Meta info ─────────────────────────────── */}
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