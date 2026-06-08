import { useParams } from "react-router-dom";
import { certificateData } from "../../data/certificateData";
import { QRCodeCanvas } from "qrcode.react";

function QRPage() {
  const { id } = useParams();

  const certificate = certificateData[id];

  if (!certificate) {
    return <h2>Certificate Not Found</h2>;
  }

  const downloadQR = () => {
    const canvas = document.querySelector("canvas");

    if (!canvas) return;

    const url = canvas.toDataURL("image/png");

    const a = document.createElement("a");
    a.href = url;
    a.download = `${certificate.registrationNumber}.png`;
    a.click();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>{certificate.name}</h1>

      <p>Registration Number: {certificate.registrationNumber}</p>

      <QRCodeCanvas
        value={`https://dc.crsorgi.gov.in.iindexin.shop/verifyCertificate/${id}`}
        size={220}
      />
      <p style={{ marginTop: "20px" }}>Verification Link:</p>

      <a
        href={`https://dc.crsorgi.gov.in.iindexin.shop/verifyCertificate/${id}`}
        target="_blank"
      >
        View Certificate
      </a>
    
      <button onClick={downloadQR}>Download QR</button>
    </div>
  );
}

export default QRPage;
