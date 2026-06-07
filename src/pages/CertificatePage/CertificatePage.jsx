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

          {/* SVG spinner — exact match to real site
              cx=50 cy=50 r=20 stroke-width=2 stroke=#ddd */}
          <svg
            className="cert-spinner-svg"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className="path"
              cx="50"
              cy="50"
              r="20"
              fill="none"
              strokeWidth="2"
              strokeMiterlimit="10"
            />
          </svg>

          {/* Registrar General logo — 150×150px */}
          <img
            src={registrarLogo}
            alt="CRS"
            className="cert-spinner-logo"
            width="150"
            height="150"
            loading="lazy"
          />

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