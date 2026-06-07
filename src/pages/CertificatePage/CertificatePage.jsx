import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CertificateCard from "../../components/CertificateCard/CertificateCard";

import { useParams } from "react-router-dom";
import { certificateData } from "../../data/certificateData";

import "./CertificatePage.css";

function CertificatePage() {
  const { id } = useParams();

  const data = certificateData[id];

  if (!data) {
    return (
      <>
        <Header />
        <div className="certificate-page-bg">
          <div className="certificate-not-found">
            <p>Certificate Not Found</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      {/* Gray page background — card floats on top of this */}
      <div className="certificate-page-bg">
        <CertificateCard data={data} />
      </div>

      <Footer />
    </>
  );
}

export default CertificatePage;