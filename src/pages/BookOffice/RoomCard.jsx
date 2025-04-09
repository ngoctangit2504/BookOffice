import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CalendarDays, ArrowLeft } from "lucide-react";

function RoomCard() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get booking data from location.state
  const {
    officeId,
    officeName,
    officeImage,
    officeAddress,
    selectedDay,
    selectedDate,
    currentMonth,
    currentYear,
    selectedTime,
    selectedSeats,
    totalPoints,
  } = location.state || {};

  const handleBack = () => {
    navigate(-1);
  };

  const imageUrl = officeImage || "/api/placeholder/400/300";

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-red-600 py-8 px-4">
      <div className="flex items-center justify-between mb-16">
        <div className="flex items-center">
          <button onClick={handleBack} className="mr-2 text-blue-200 font-bold">
            <ArrowLeft className="h-6 w-6 " />
          </button>
        </div>
      </div>

      <div className="text-blue-100 text-sm mb-8 mx-4 justify-center text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-blue-200">
        <p>Using HTML CSS (SCSS/Tailwind), and JavaScript</p>
        <p>(React JS if applicable). The task requires</p>
        <p>ensuring responsiveness.</p>
      </div>

      <div className="mx-auto max-w-sm overflow-hidden rounded-2xl bg-gradient-to-br from-blue-400/30 to-red-400/30 backdrop-blur-md border border-white/20 shadow-xl">
        <div className="h-96 p-2">
          <div className="w-full h-full overflow-hidden rounded-xl">
            <img
              src={imageUrl}
              alt={officeName || "Office Space"}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="p-4 text-white">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center space-x-4">
                <p className="bg-gradient-to-r from-red-600 to-transparent bg-clip-text text-transparent text-shadow">Date </p>
                <p className=" text-shadow font-medium">
                  {currentMonth} {selectedDate},{currentYear}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <p className="bg-gradient-to-r from-red-600 to-transparent bg-clip-text text-transparent text-shadow">Seat </p>
                <p className=" text-shadow font-medium">
                  {selectedSeats && selectedSeats.length > 0
                    ? selectedSeats.join(", ")
                    : "3,4"}
                </p>
              </div>
            </div>

            <div className="space-y-2 text-left">
              <div className="flex items-center space-x-4">
                <p className="bg-gradient-to-r from-red-600 to-transparent bg-clip-text text-transparent text-shadow">Point </p>
                <p className=" text-shadow font-medium">
                  + {totalPoints || 100} point
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <p className="bg-gradient-to-r from-red-600 to-transparent bg-clip-text text-transparent text-shadow">Time </p>
                <p className=" text-shadow font-medium">
                  {selectedTime || "6 PM"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center py-6">
          <div className="flex space-x-1">
            <div className="h-2 w-2 bg-white rounded-full"></div>
            <div className="h-2 w-6 bg-white/50 rounded-full"></div>
            <div className="h-2 w-2 bg-white/50 rounded-full"></div>
          </div>
        </div>
    </div>
  );
}

export default RoomCard;
