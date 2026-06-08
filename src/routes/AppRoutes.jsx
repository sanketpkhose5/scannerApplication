import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";
import CertificatesPage from "../pages/CertificatesPage/CertificatesPage";
import QRPage from "../pages/QRPage/QRPage";
import CertificatePage from "../pages/CertificatePage/CertificatePage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route
        path="/certificates"
        element={<CertificatesPage />}
      />

      <Route
        path="/qr/:id"
        element={<QRPage />}
      />

      <Route
        path="/verifyCertificate/:id"
        element={<CertificatePage />}
      />
    </Routes>
  );
}

export default AppRoutes;