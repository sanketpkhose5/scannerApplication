import { certificateData } from "../../data/certificateData";
import { useNavigate } from "react-router-dom";

function CertificatesPage() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Available Certificates</h1>

      {Object.entries(certificateData).map(([id, certificate]) => (
        <div
          key={id}
          style={{
            padding: "15px",
            marginBottom: "15px",
            border: "1px solid #ddd",
            cursor: "pointer",
          }}
          onClick={() =>
            navigate(`/qr/${id}`)
          }
        >
          {certificate.name}
        </div>
      ))}
    </div>
  );
}

export default CertificatesPage;
