import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Armchair } from "lucide-react";

function RoomDetail() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const location = useLocation();
  const { officeName, selectedDay, selectedDate, selectedTime } =
    location.state || {};

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-900 to-red-600 py-8">
      <div className="relative w-full h-[40rem] bg-cover bg-center mb-4 text-white text-center">
        {/* Overlay background */}
        <div className="absolute inset-0 bg-gray-300/15 z-0" />

        {/* Nút quay lại */}
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

        {/* Bảng icon - căn giữa hoàn toàn */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
         <div className=" grid grid-rows-5 gap-y-8">
         <div className=" grid grid-cols-6 gap-x-2">
            <div><Armchair className="h-8 w-8"/></div>
            <div><Armchair className="h-8 w-8"/></div>
            <div><Armchair className="h-8 w-8"/></div>
            <div><Armchair className="h-8 w-8"/></div>
            <div><Armchair className="h-8 w-8"/></div>
            <div><Armchair className="h-8 w-8"/></div>
          </div>

          <div className=" grid grid-cols-6 gap-x-2">
            <div><Armchair className="h-8 w-8"/></div>
            <div><Armchair className="h-8 w-8"/></div>
            <div><Armchair className="h-8 w-8"/></div>
            <div><Armchair className="h-8 w-8"/></div>
            <div><Armchair className="h-8 w-8"/></div>
            <div><Armchair className="h-8 w-8"/></div>
          </div>

          <div className=" grid grid-cols-6 gap-x-2">
            <div className="text-xl font-semibold bg-gradient-to-r from-white to-transparent bg-clip-text text-transparent">Door</div>
            <div className=" col-span-3"></div>
            <div><Armchair className="h-8 w-8"/></div>
            <div><Armchair className="h-8 w-8"/></div>
          </div>

          <div className=" grid grid-cols-6 gap-x-2">
            <div><Armchair className="h-8 w-8"/></div>
            <div><Armchair className="h-8 w-8"/></div>
            <div><Armchair className="h-8 w-8"/></div>
            <div><Armchair className="h-8 w-8"/></div>
            <div><Armchair className="h-8 w-8"/></div>
            <div><Armchair className="h-8 w-8"/></div>
          </div>

          <div className=" grid grid-cols-6 gap-x-2">
            <div><Armchair className="h-8 w-8"/></div>
            <div><Armchair className="h-8 w-8"/></div>
            <div><Armchair className="h-8 w-8"/></div>
            <div><Armchair className="h-8 w-8"/></div>
            <div><Armchair className="h-8 w-8"/></div>
            <div><Armchair className="h-8 w-8"/></div>
          </div>

         </div>
        </div>


      </div>

      <div>
        <h1 className="text-2xl font-bold mb-4">Confirm Booking</h1>
        <p>Office: {officeName}</p>
        <p>Day: {selectedDay}</p>
        <p>Date: {selectedDate}</p>
        <p>Time: {selectedTime}:00</p>
      </div>
    </div>
  );
}

export default RoomDetail;
