import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const QRCodeGenerator = ({ url }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-md">
      <h2 className="text-lg font-semibold mb-4">Mã QR của bạn</h2>
      <QRCodeCanvas value={url} size={200} bgColor={"#ffffff"} fgColor={"#000000"} />
      <p className="mt-4 text-sm text-gray-600 break-all">{url}</p>
    </div>
  );
};

export default QRCodeGenerator;