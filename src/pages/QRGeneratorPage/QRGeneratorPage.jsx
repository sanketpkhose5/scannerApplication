import { useEffect, useState } from "react";
import { generateQRCode } from "../../utils/generateQr";

function QRGeneratorPage() {
  const [qr, setQr] = useState("");

  useEffect(() => {
    generateQRCode("B20259903470049005")
      .then(setQr);
  }, []);

  return (
    <div>
      <h2>Certificate QR</h2>

      {qr && (
        <img src={qr} alt="qr" />
      )}
    </div>
  );
}

export default QRGeneratorPage;
