import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CertificateCard from "../../components/CertificateCard/CertificateCard";

import { useParams } from "react-router-dom";
import { certificateData } from "../../data/certificateData";

function CertificatePage() {
  const { id } = useParams();
  const data = certificateData[id];

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