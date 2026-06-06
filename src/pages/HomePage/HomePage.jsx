import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        padding: "40px",
        textAlign: "center",
      }}
    >
      <h1>Scanner Portal</h1>

      <div
        style={{
          marginTop: "40px",
          padding: "30px",
          background: "#fff",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
        }}
      >
        <h2>Certificate Verification</h2>

        <button
          onClick={() => navigate("/certificates")}
        >
          View Certificates
        </button>
      </div>
    </div>
  );
}

export default HomePage;
