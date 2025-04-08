import React, { useState, useRef, useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";


function OfficeDetail() {
  const [selectedDate, setSelectedDate] = useState(1);
  const [selectedTime, setSelectedTime] = useState(3);

  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { officeImage, officeName, officeAddress, officeDescription } =
    location.state || {};

  const handleBack = () => {
    navigate(-1);
  };

  // Tạo mảng dữ liệu mẫu cho Date và Time
  const dateList = [
    { id: 1, day: "Thu", date: "23" },
    { id: 2, day: "Fri", date: "24" },
    { id: 3, day: "Sat", date: "25" },
    { id: 4, day: "Sun", date: "26" },
    { id: 5, day: "Mon", date: "27" },
    { id: 6, day: "Tue", date: "28" },
  ];

  const timeList = [1, 2, 3, 5, 8, 13, 15];

  // refs cho scroll
  const dateRefs = useRef({});
  const timeRefs = useRef({});

  useEffect(() => {
    if (dateRefs.current[selectedDate]) {
      dateRefs.current[selectedDate].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [selectedDate]);

  useEffect(() => {
    if (timeRefs.current[selectedTime]) {
      timeRefs.current[selectedTime].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [selectedTime]);

  const handleNext = () => {
    const selectedDateObj = dateList.find((item) => item.id === selectedDate);
    const selectedTimeValue = selectedTime;
  
    navigate(`/office/${id}/confirm`, {
      state: {
        officeId: id,
        officeName,
        selectedDay: selectedDateObj?.day,
        selectedDate: selectedDateObj?.date,
        selectedTime: selectedTimeValue,
      },
    });
  };

  const DateCard = ({ id, day, date, selected, onClick }) => {
    return (
      <div
        ref={(el) => (dateRefs.current[id] = el)}
        onClick={onClick}
        className={`flex-shrink-0 flex flex-col items-center justify-center w-14 h-20 cursor-pointer ${
          selected
            ? "bg-red-500/20 text-white border rounded-xl border-white/30"
            : "bg-gray-900/15 text-white/80 border rounded-xl border-white/30"
        }`}
      >
        <div className="text-sm">{day}</div>
        <div className="text-sm">{date}</div>
      </div>
    );
  };

  const TimeOption = ({ value, selected, onClick }) => {
    return (
      <div
        ref={(el) => (timeRefs.current[value] = el)}
        onClick={onClick}
        className={`flex-shrink-0 flex items-center justify-center w-14 h-10 cursor-pointer ${
          selected
            ? "bg-red-500/20 text-white border rounded-xl border-white/30"
            : "bg-gray-900/15 text-white/80 border rounded-xl border-white/30"
        }`}
      >
        <span className="text-sm">{value}</span>
      </div>
    );
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-900 to-red-600 py-8">
      <div
        className="relative w-full h-[40rem] bg-cover bg-center mb-4 flex items-center justify-center text-white text-center"
        style={{ backgroundImage: `url(${officeImage})` }}
      >
        <div className="absolute inset-0 bg-gray-300/15"></div>

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

        <div className="relative z-10 p-6 rounded-xl max-w-xl">
          <h2 className="text-3xl font-bold mb-2">{officeName}</h2>
          <p className="text-gray-200 mb-2 pb-6">{officeAddress}</p>
          <p className="text-gray-100">{officeDescription}</p>
        </div>

        {/* Scrollable Date + Time */}
        <div className="fixed bottom-2 left-0 right-0 z-20">
          <div className="w-full bg-transparent rounded-3xl p-4 backdrop-blur-sm ">
            {/* Date Scroll */}
            <div className="flex overflow-x-auto py-2 mb-6 space-x-6 flex-nowrap scroll-hidden">
              {dateList.map((item) => (
                <DateCard
                  key={item.id}
                  id={item.id}
                  day={item.day}
                  date={item.date}
                  selected={selectedDate === item.id}
                  onClick={() => setSelectedDate(item.id)}
                />
              ))}
            </div>

            {/* Time Scroll */}
            <div className="flex overflow-x-auto py-2 mb-6 space-x-6 flex-nowrap scroll-hidden">
              {timeList.map((time) => (
                <TimeOption
                  key={time}
                  value={time}
                  selected={selectedTime === time}
                  onClick={() => setSelectedTime(time)}
                />
              ))}
            </div>

            <div className="text-center text-gray-200 text-lg mb-6">
              90 Minutes
            </div>

            <button
              className="w-full bg-transparent text-white text-2xl py-3 rounded-3xl border border-white/40 shadow-lg backdrop-blur-sm hover:bg-white/10 transition duration-300"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfficeDetail;