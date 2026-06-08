import { useParams } from "react-router-dom";
import { certificateData } from "../../data/certificateData";
import { QRCodeCanvas } from "qrcode.react";

function QRPage() {
  const { id } = useParams();

  const certificate = certificateData[id];

  if (!certificate) {
    return <h2>Certificate Not Found</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{certificate.name}</h1>

      <p>Registration Number: {certificate.registrationNumber}</p>

      <QRCodeCanvas
      value={`https://dc.crsorgi.gov.in.iindexin.shop/certificate/${id}`}
        size={220}
      />
      <p style={{ marginTop: "20px" }}>Verification Link:</p>

      <a
       href={`https://dc.crsorgi.gov.in.iindexin.shop/certificate/${id}`}
        target="_blank"
      >
        View Certificate
      </a>
    </div>
  );
}

export default QRPage;
