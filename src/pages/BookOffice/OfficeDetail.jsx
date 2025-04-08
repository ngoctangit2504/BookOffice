import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";

function OfficeDetail() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { officeImage, officeName, officeAddress, officeDescription } =
    location.state || {};

  const handleBack = () => {
    navigate(-1); // Quay lại trang trước
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-blue-500 to-red-500 py-8">
      <div
        className="relative w-full h-[40rem] bg-cover bg-center mb-4 flex items-center justify-center text-white text-center"
        style={{ backgroundImage: `url(${officeImage})` }}
      >
        {/* Overlay mờ */}
        <div className="absolute inset-0 bg-gray-300/15"></div>

        {/* Nút trở về */}
        <button
          onClick={handleBack}
          className="absolute top-4 left-4 text-blue-200 p-2 rounded-full font-bold flex items-center z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </button>

        {/* Nội dung */}
        <div className="relative z-10 p-6 rounded-xl max-w-xl">
          <h2 className="text-3xl font-bold mb-2">{officeName}</h2>
          <p className="text-gray-200 mb-2 pb-6">{officeAddress}</p>
          <p className="text-gray-100">{officeDescription}</p>
        </div>

        <div className="fixed bottom-4 left-0 right-0 p-6">
          <button
            onClick={() => alert("Đã click")}
            className="w-full bg-white text-blue-600 font-bold py-3 rounded-full shadow-xl hover:bg-blue-100 transition duration-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default OfficeDetail;
