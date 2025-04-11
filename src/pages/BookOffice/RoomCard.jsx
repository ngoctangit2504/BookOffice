import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CalendarDays, ArrowLeft } from "lucide-react";
import { Check, Clock } from "lucide-react";
import useWindowSize from "../../hooks/UseWindowSize.js";

import QRCode from '../../components/QrCode/QRCode';


function RoomCard() {
  const windowSize = useWindowSize();
  const isMobile = windowSize.width < 1024;
  const currentUrl = window.location.href;
  console.log(currentUrl);

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

  const handleClick = () => {
    navigate('/'); 
  };

  const imageUrl = officeImage || "/api/placeholder/400/300";

  return (
    <div className="w-full min-h-screen bg-[url('https://skepp.com/assets/Uploads/_resampled/ScaleWidthWyIxODAwIl0/IMG-2227.jpg')] backdrop-blur-sm py-8 px-4">
     
      <div className="flex items-center justify-between mb-16">
        <div className="flex items-center">
          <button onClick={handleBack} className="mr-2 text-white font-bold">
            <ArrowLeft className="h-6 w-6 " />
          </button>
        </div>

        <div className="flex items-center">
          <button onClick={handleClick} className="text-white font-bold">
            <Check />
          </button>
        </div>
      </div>

      <div className="text-white text-sm mb-8 mx-4 justify-center text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-blue-200">
        <p>Using HTML CSS (SCSS/Tailwind), and JavaScript</p>
        <p>(React JS if applicable). The task requires</p>
        <p>ensuring responsiveness.</p>
      </div>

      <div className="mx-auto max-w-sm overflow-hidden rounded-2xl bg-gray-300/15 backdrop-blur-md border border-white/20 shadow-xl">
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
                <p className="text-white ">Date </p>
                <p className="">
                  {currentMonth} {selectedDate},{currentYear}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <p className="text-white">Seat </p>
                <p className="">
                  {selectedSeats && selectedSeats.length > 0
                    ? selectedSeats.join(", ")
                    : "3,4"}
                </p>
              </div>
            </div>

            <div className="space-y-2 text-left">
              <div className="flex items-center space-x-4">
                <p className="text-white">Point </p>
                <p className="">
                  + {totalPoints || 100} point
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <p className="text-white">Time </p>
                <p className="text-white">
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

        <div className="text-white">
          <button className="bg-gray-600/20 p-2 rounded-full flex flex-row">
            <Clock/> Pending ...
          </button>
        </div>

    </div>
  );
}

export default RoomCard;
