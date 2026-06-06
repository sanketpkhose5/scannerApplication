import QRCode from "qrcode";

export const generateQRCode = async (certificateId) => {
  const url = `http://localhost:5173/certificate/${certificateId}`;

  return await QRCode.toDataURL(url);
};