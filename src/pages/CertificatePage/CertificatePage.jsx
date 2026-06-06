import Header from "../../components/Header/Header";
import CertificateCard from "../../components/CertificateCard/CertificateCard";
import Footer from "../../components/Footer/Footer";

import { useParams } from "react-router-dom";
import { certificateData } from "../../data/certificateData";

function CertificatePage() {
  const { id } = useParams();

  const data = certificateData[id];

  if (!data) {
    return (
      <>
        <Header />
        <h2 style={{ textAlign: "center", marginTop: "40px" }}>
          Certificate Not Found
        </h2>
      </>
    );
  }

  return (
    <>
      <Header />
      <CertificateCard data={data} />
      <Footer />
    </>
  );
}

export default CertificatePage;
