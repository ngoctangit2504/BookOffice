import React, { useState, useRef, useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import useWindowSize from "../../hooks/UseWindowSize";
import { ArrowBigRightDash } from "lucide-react";

function OfficeDetail() {
  const windowSize = useWindowSize();
  const isMobile = windowSize.width < 1024;

  const [selectedDate, setSelectedDate] = useState(1);
  const [selectedTime, setSelectedTime] = useState("3 PM");
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // Get office data from location.state, with defaults
  const { officeImage, officeName, officeAddress, officeDescription } =
    location.state || {
      officeImage: "",
      officeName: "",
      officeAddress: "",
      officeDescription: "",
    };

  const handleBack = () => {
    navigate(-1);
  };

  // Sample data for dates and times
  const dateList = [
    { id: 1, day: "Thu", date: "23" },
    { id: 2, day: "Fri", date: "24" },
    { id: 3, day: "Sat", date: "25" },
    { id: 4, day: "Sun", date: "26" },
    { id: 5, day: "Mon", date: "27" },
    { id: 6, day: "Tue", date: "28" },
  ];

  const timeList = ["7 AM", "9 AM", "11 AM", "1 PM", "3 PM", "5 PM", "7 PM"];

  // Refs for scrolling
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

    navigate(`/office/${id}/confirm`, {
      state: {
        officeId: id,
        officeName,
        officeImage,
        officeAddress,
        officeDescription,
        selectedDay: selectedDateObj?.day,
        selectedDate: selectedDateObj?.date,
        selectedTime: selectedTime,
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

  const handleViewOfficeDetail = () => {
    navigate(`/office/${id}/detail`, {
      state: {
        officeId: id,
        officeName,
        officeImage,
        officeAddress,
        officeDescription,
        selectedDateObj: dateList.find((item) => item.id === selectedDate),
        selectedTime: selectedTime,
      }
    });
  };

  // Mobile Layout
  const MobileLayout = () => (
    <div className="w-full min-h-screen bg-[url('https://skepp.com/assets/Uploads/_resampled/ScaleWidthWyIxODAwIl0/IMG-2227.jpg')] backdrop-blur-md py-8">
      <div
        className="relative w-full h-[40rem] bg-cover bg-center mb-4 flex items-center justify-center text-white text-center"
        style={{ backgroundImage: `url(${officeImage})` }}
      >
        <div className="absolute inset-0 bg-gray-300/15"></div>

        <button
          onClick={handleBack}
          className="absolute top-4 left-4 text-white p-2 rounded-full font-bold flex items-center z-10"
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
          <p className="text-white mb-2 pb-6">{officeAddress}</p>
          <p className="text-white">{officeDescription}</p>

          <button 
            onClick={handleViewOfficeDetail}
            className="mt-8 flex flex-row items-center mx-auto border-full rounded-full p-2 shadow-[0_4px_10px_rgba(255,255,255,0.5)] hover:bg-gray-600/50"
          >
            <ArrowBigRightDash className="mr-2"/>
            View Office
          </button>
        </div>
      </div>

      {/* Scrollable Date + Time */}
      <div className="fixed bottom-2 left-0 right-0 z-20">
        <div className="w-full bg-transparent rounded-3xl p-4 backdrop-blur-sm">
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

          <div className="text-center text-white text-lg mb-6">
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
  );

  // Desktop Layout
  const DesktopLayout = () => (
    <div className="flex min-h-screen bg-[url('https://skepp.com/assets/Uploads/_resampled/ScaleWidthWyIxODAwIl0/IMG-2227.jpg')] bg-cover">
      {/* Left Side - Office Image & Details */}
      <div className="w-7/12 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${officeImage})` }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
          
          <button
            onClick={handleBack}
            className="absolute top-8 left-8 text-white p-2 rounded-full font-bold flex items-center z-10 hover:bg-white/10 transition"
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
            <span className="ml-2">Back</span>
          </button>
          
          <div className="absolute bottom-12 left-12 right-12 text-white z-10">
            <h1 className="text-5xl font-bold mb-4">{officeName}</h1>
            <p className="text-xl mb-3">{officeAddress}</p>
            <p className="text-lg mb-8 max-w-xl">{officeDescription}</p>
            
            <button 
              onClick={handleViewOfficeDetail}
              className="flex items-center space-x-2 bg-transparent border border-white/50 rounded-full px-6 py-3 hover:bg-white/10 transition"
            >
              <ArrowBigRightDash size={22} />
              <span>View Office Details</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Right Side - Booking */}
      <div className="w-5/12 flex flex-col justify-center items-center backdrop-blur-md p-12">
        <div className="w-full max-w-xl bg-gray-800/40 rounded-3xl p-10 backdrop-blur-md border border-white/10 shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Book This Space</h2>
          
          {/* Select Date Section */}
          <div className="mb-12">
            <h3 className="text-white text-xl mb-4">Select Date</h3>
            <div className="grid grid-cols-6 gap-4">
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
          </div>
          
          {/* Select Time Section */}
          <div className="mb-12">
            <h3 className="text-white text-xl mb-4">Select Time</h3>
            <div className="grid grid-cols-7 gap-4">
              {timeList.map((time) => (
                <TimeOption
                  key={time}
                  value={time}
                  selected={selectedTime === time}
                  onClick={() => setSelectedTime(time)}
                />
              ))}
            </div>
          </div>
          
          <div className="text-center text-white text-lg mb-8">
            Duration: 90 Minutes
          </div>
          
          <button
            className="w-full bg-red-500/30 text-white text-xl py-4 rounded-xl border border-white/20 shadow-lg hover:bg-red-500/40 transition duration-300"
            onClick={handleNext}
          >
            Continue to Booking
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {isMobile ? <MobileLayout /> : <DesktopLayout />}
    </div>
  );
}

export default OfficeDetail;