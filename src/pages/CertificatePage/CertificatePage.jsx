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

  // Show spinner for 1.5 seconds then reveal certificate
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
          {/* Spinning arc around the logo */}
          <div className="cert-spinner-ring" />
          <img
            src={registrarLogo}
            alt="Registrar General India"
            className="cert-spinner-logo"
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