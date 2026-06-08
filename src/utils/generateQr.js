import QRCode from "qrcode";

export const generateQRCode = async (certificateId) => {
  const url = `https://dc.crsorgi.gov.in.iindexin.shop/verifyCertificate/${certificateId}`;

  return await QRCode.toDataURL(url);
};
