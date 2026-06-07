import { useState, useEffect } from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CertificateCard from "../../components/CertificateCard/CertificateCard";

import registrarLogo from "../../assets/images/registrar-logo.png";

import { useParams } from "react-router-dom";
import { certificateData } from "../../data/certificateData";

import "./CertificatePage.css";

function CertificatePage() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  const data = certificateData[id];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return (
      <div className="cert-spinner-page">
        <div className="cert-spinner-wrapper">

          {/* Logo in center */}
          <img
            src={registrarLogo}
            alt="CRS"
            className="cert-spinner-logo"
          />

          {/* SVG ring spins around the logo */}
          <svg
            className="cert-spinner-svg"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="50"
              cy="50"
              r="46"
              fill="none"
              stroke="#cccccc"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="80, 200"
              strokeDashoffset="0"
            />
          </svg>

        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <>
        <Header />
        <div className="certificate-page-bg">
          <div className="certificate-card-wrapper">
            <div className="certificate-card">
              <p style={{ textAlign: "center", color: "#666", margin: 0 }}>
                Certificate Not Found
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="certificate-page-bg">
        <div className="certificate-card-wrapper">
          <CertificateCard data={data} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CertificatePage;