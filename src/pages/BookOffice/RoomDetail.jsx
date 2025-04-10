import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Armchair, CalendarDays, HandCoins, Dot } from "lucide-react";
import useWindowSize from "../../hooks/UseWindowSize";


function RoomDetail() {
  const windowSize = useWindowSize();
  const isMobile = windowSize.width < 1024;
  const currentMonth = new Date().toLocaleString("default", { month: "long" });
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    purpose: "",
  });

  // Get booking data from location.state
  const {
    officeId,
    officeName,
    officeImage,
    officeAddress,
    officeDescription,
    selectedDay,
    selectedDate,
    selectedTime,
  } = location.state || {};

  // State to track selected seats
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Toggle seat selection
  const toggleSeatSelection = (seatId) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((id) => id !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  // Function to get seat color class based on state
  const getSeatColor = (seatId, isReserved) => {
    if (isReserved) return "text-red-600";
    if (selectedSeats.includes(seatId)) return "text-green-300";
    return "text-white";
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleApprove = () => {
    if (selectedSeats.length > 0) {
      setShowForm(true); // mở form trước
    } else {
      alert("Please select at least one seat before proceeding");
    }
  };

  const handleFormSubmit = () => {
    const { name, phone, email, purpose } = formData;
    if (!name || !phone || !email || !purpose) {
      alert("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    navigate(`/office/${officeId}/confirm/card`, {
      state: {
        officeId,
        officeName,
        officeImage,
        officeAddress,
        officeDescription,
        selectedDay,
        selectedDate,
        currentMonth,
        currentYear,
        selectedTime,
        selectedSeats,
        totalPoints: selectedSeats.length * 50,
        userInfo: formData,
      },
    });
  };

  return (
    <div>
    {isMobile ? (
    
    <div className="w-full min-h-screen bg-gray-600 py-8">
      <div className="relative w-full h-[40rem] bg-cover bg-center mb-4 text-white text-center">
        <div className="absolute inset-0 bg-gray-800/50 z-0 pointer-events-none border-b-4 border-white/15" />

        <button
          className="absolute top-4 left-4 text-white p-2 rounded-full font-bold flex items-center z-20"
          onClick={handleBack}
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

        {/* Nội dung bên trong (ghế + available) */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full pt-12">
          <div className="grid grid-rows-5 gap-y-8">
            <div className="grid grid-cols-6 gap-x-2">
              <div onClick={() => toggleSeatSelection("A1")}><Armchair className={`h-8 w-8 cursor-pointer ${getSeatColor("A1")}`}/></div>
              <div onClick={() => toggleSeatSelection("A2")}><Armchair className={`h-8 w-8 cursor-pointer ${getSeatColor("A2")}`}/></div>
              <div onClick={() => toggleSeatSelection("A3")}><Armchair className={`h-8 w-8 cursor-pointer ${getSeatColor("A3")}`}/></div>
              <div onClick={() => toggleSeatSelection("A4")}><Armchair className={`h-8 w-8 cursor-pointer ${getSeatColor("A4")}`}/></div>
              <div onClick={() => toggleSeatSelection("A5")}><Armchair className={`h-8 w-8 cursor-pointer ${getSeatColor("A5")}`}/></div>
              <div onClick={() => toggleSeatSelection("A6")}><Armchair className={`h-8 w-8 cursor-pointer ${getSeatColor("A6")}`}/></div>
            </div>

            <div className="grid grid-cols-6 gap-x-2">
              <div onClick={() => toggleSeatSelection("B1")}><Armchair className={`h-8 w-8 cursor-pointer ${getSeatColor("B1")}`}/></div>
              <div onClick={() => toggleSeatSelection("B2")}><Armchair className={`h-8 w-8 cursor-pointer ${getSeatColor("B2")}`}/></div>
              <div onClick={() => toggleSeatSelection("B3")}><Armchair className={`h-8 w-8 cursor-pointer ${getSeatColor("B3")}`}/></div>
              <div onClick={() => toggleSeatSelection("B4")}><Armchair className={`h-8 w-8 cursor-pointer ${getSeatColor("B4")}`}/></div>
              <div onClick={() => toggleSeatSelection("B5")}><Armchair className={`h-8 w-8 cursor-pointer ${getSeatColor("B5")}`}/></div>
              <div onClick={() => toggleSeatSelection("B6")}><Armchair className={`h-8 w-8 cursor-pointer ${getSeatColor("B6")}`}/></div>
            </div>

            <div className="grid grid-cols-6 gap-x-2">
              <div className="text-xl font-semibold text-white">Door</div>
              <div className="col-span-3"></div>
              <div><Armchair className="h-8 w-8 text-red-600" /></div>
              <div><Armchair className="h-8 w-8 text-red-600" /></div>
            </div>

            <div className="grid grid-cols-6 gap-x-2">
              <div onClick={() => toggleSeatSelection("D1")}><Armchair className={`h-8 w-8 cursor-pointer ${getSeatColor("D1")}`}/></div>
              <div onClick={() => toggleSeatSelection("D2")}><Armchair className={`h-8 w-8 cursor-pointer ${getSeatColor("D2")}`}/></div>
              <div onClick={() => toggleSeatSelection("D3")}><Armchair className={`h-8 w-8 cursor-pointer ${getSeatColor("D3")}`}/></div>
              <div onClick={() => toggleSeatSelection("D4")}><Armchair className={`h-8 w-8 cursor-pointer ${getSeatColor("D4")}`}/></div>
              <div><Armchair className="h-8 w-8 text-red-600" /></div>
              <div><Armchair className="h-8 w-8 text-red-600" /></div>
            </div>

            <div className="grid grid-cols-6 gap-x-2">
              <div onClick={() => toggleSeatSelection("E1")}><Armchair className={`h-8 w-8 cursor-pointer ${getSeatColor("E1")}`}/>
              </div><div onClick={() => toggleSeatSelection("E2")}><Armchair className={`h-8 w-8 cursor-pointer ${getSeatColor("E2")}`}/>
              </div><div onClick={() => toggleSeatSelection("E3")}><Armchair className={`h-8 w-8 cursor-pointer ${getSeatColor("E3")}`}/>
              </div><div onClick={() => toggleSeatSelection("E4")}><Armchair className={`h-8 w-8 cursor-pointer ${getSeatColor("E4")}`}/>
              </div><div><Armchair className="h-8 w-8 text-red-600" /></div>
              <div><Armchair className="h-8 w-8 text-red-600" /></div>
            </div>

          </div>

          <div className="mt-8 grid grid-cols-9 gap-x-3">
            <div className="col-span-3 flex justify-center items-center">
              <div className="flex items-center">
                <Dot className="h-16 w-16 flex-shrink-0" />
                <span className="-ml-4">
                  Available
                </span>
              </div>
            </div>
            <div className="col-span-3 flex justify-center items-center">
              <div className="flex items-center">
                <Dot className="h-16 w-16 flex-shrink-0 text-red-600" />
                <span className="-ml-4">
                  Reserved
                </span>
              </div>
            </div>
            <div className="col-span-3 flex justify-center items-center">
              <div className="flex items-center">
                <Dot className="h-16 w-16 flex-shrink-0 text-green-300" />
                <span className="-ml-4">
                  Selected
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4 pl-6 backdrop-blur-md relative">
        <button
          onClick={handleApprove}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-b from-red-900 to-black text-white pr-3 pl-2 py-2 rounded-l-full hover:bg-blue-800 shadow shadow-white/50 h-24"
        >
          <span className="border-4 border-blue-300 bg-red-950 rounded-full h-20 w-20 flex items-center justify-center text-xs">
            Approve
          </span>
        </button>

        <div className="flex items-center gap-2 mt-4 mb-6">
          <CalendarDays className="text-white w-8 h-8 mx-4" />
          <p className="text-white text-lg">
            {currentMonth} {selectedDate}, {currentYear} - {selectedTime}
          </p>
        </div>

        <div className="flex items-center gap-2 my-6">
          <Armchair className="text-white w-8 h-8 mx-4" />
          <p className="text-white text-lg">
            Right Section - Seat{" "}
            {selectedSeats.length > 0 ? selectedSeats.sort().join(", ") : ""}
          </p>
        </div>

        <div className="flex items-center gap-2 mt-6">
          <HandCoins className="text-white w-8 h-8 mx-4" />
          <p className="text-white text-lg">
            + {selectedSeats.length * 50} point
          </p>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-2">
          <div className="bg-white/15 rounded-xl shadow-xl p-6 w-full max-w-md">
            <div className="flex items-center gap-2 mb-4">
              <button
                onClick={() => setShowForm(false)}
                className="px-4 py-2 text-white rounded hover:bg-gray-500"
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
              <h2 className="text-xl font-semibold text-white">
                Confirm to complete
              </h2>
            </div>
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full border p-2 mb-3 rounded"
            />
            <input
              type="text"
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full border p-2 mb-3 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full border p-2 mb-3 rounded"
            />
            <select
              value={formData.purpose}
              onChange={(e) =>
                setFormData({ ...formData, purpose: e.target.value })
              }
              className=" border p-2 mb-4 rounded"
            >
              <option value="" className="bg-gray-600/15">Purpose </option>
              <option value="Làm việc cá nhân" >Work</option>
              <option value="Cuộc họp" >Meeting</option>
              <option value="Học nhóm">Study group</option>
              <option value="Khác">Other</option>
            </select>

            <div className="flex justify-between">
              <button
                onClick={handleFormSubmit}
                className="px-4 py-2 bg-gray-600/60 text-white rounded-2xl"
              >
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    ) : (
      <div className="flex min-h-screen bg-gray-500">
  {/* Left panel with room preview and booking details */}
  <div className="w-1/3 bg-gray-300/50 p-8 flex flex-col">
    <button
      className="text-white mb-6 p-2 flex items-center font-bold w-fit"
      onClick={handleBack}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 mr-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
        />
      </svg>
    </button>

    {/* Room image would go here if available */}
    <div className="h-64 bg-gray-800 rounded-lg mb-6 flex items-center justify-center">
      {officeImage ? (
        <img 
          src={officeImage} 
          alt={officeName} 
          className="w-full h-full object-cover rounded-lg"
        />
      ) : (
        <span className="text-gray-500">Room Preview</span>
      )}
    </div>

    <h1 className="text-white text-2xl font-bold mb-4">{officeName || "Conference Room"}</h1>
    
    <div className="text-gray-300 mb-4">
      {officeAddress && <p className="mb-2">{officeAddress}</p>}
      {officeDescription && <p className="text-sm">{officeDescription}</p>}
    </div>

    <div className="mt-auto space-y-4 text-white">
      <div className="flex items-center gap-3">
        <CalendarDays className="text-white w-6 h-6" />
        <p>
          {currentMonth} {selectedDate}, {currentYear} - {selectedTime}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <Armchair className="text-white w-6 h-6" />
        <p>
          Right Section - Seat{" "}
          {selectedSeats.length > 0 ? selectedSeats.sort().join(", ") : "None selected"}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <HandCoins className="text-white w-6 h-6" />
        <p>+ {selectedSeats.length * 50} points</p>
      </div>
    </div>

    <button
      onClick={handleApprove}
      disabled={selectedSeats.length === 0}
      className={`mt-8 py-3 px-6 rounded-lg font-semibold ${
        selectedSeats.length === 0
          ? "bg-gray-600 text-gray-400 cursor-not-allowed"
          : "bg-gradient-to-r from-red-800 to-red-900 text-white hover:from-red-700 hover:to-red-800"
      }`}
    >
      {selectedSeats.length === 0 ? "Select seats to continue" : "Approve Selection"}
    </button>
  </div>

  {/* Right panel with seat selection */}
  <div className="w-2/3 p-8 flex flex-col">
    <div className="bg-gray-300/50 backdrop-blur-md  rounded-lg p-8 flex-1 flex flex-col items-center justify-center">
      <h2 className="text-white text-xl font-semibold mb-8">Select Your Seats</h2>
      
      <div className="grid grid-rows-5 gap-y-12 mb-12">
        <div className="grid grid-cols-6 gap-x-8">
          <div onClick={() => toggleSeatSelection("A1")}><Armchair className={`h-12 w-12 cursor-pointer ${getSeatColor("A1")}`}/></div>
          <div onClick={() => toggleSeatSelection("A2")}><Armchair className={`h-12 w-12 cursor-pointer ${getSeatColor("A2")}`}/></div>
          <div onClick={() => toggleSeatSelection("A3")}><Armchair className={`h-12 w-12 cursor-pointer ${getSeatColor("A3")}`}/></div>
          <div onClick={() => toggleSeatSelection("A4")}><Armchair className={`h-12 w-12 cursor-pointer ${getSeatColor("A4")}`}/></div>
          <div onClick={() => toggleSeatSelection("A5")}><Armchair className={`h-12 w-12 cursor-pointer ${getSeatColor("A5")}`}/></div>
          <div onClick={() => toggleSeatSelection("A6")}><Armchair className={`h-12 w-12 cursor-pointer ${getSeatColor("A6")}`}/></div>
        </div>

        <div className="grid grid-cols-6 gap-x-8">
          <div onClick={() => toggleSeatSelection("B1")}><Armchair className={`h-12 w-12 cursor-pointer ${getSeatColor("B1")}`}/></div>
          <div onClick={() => toggleSeatSelection("B2")}><Armchair className={`h-12 w-12 cursor-pointer ${getSeatColor("B2")}`}/></div>
          <div onClick={() => toggleSeatSelection("B3")}><Armchair className={`h-12 w-12 cursor-pointer ${getSeatColor("B3")}`}/></div>
          <div onClick={() => toggleSeatSelection("B4")}><Armchair className={`h-12 w-12 cursor-pointer ${getSeatColor("B4")}`}/></div>
          <div onClick={() => toggleSeatSelection("B5")}><Armchair className={`h-12 w-12 cursor-pointer ${getSeatColor("B5")}`}/></div>
          <div onClick={() => toggleSeatSelection("B6")}><Armchair className={`h-12 w-12 cursor-pointer ${getSeatColor("B6")}`}/></div>
        </div>

        <div className="grid grid-cols-6 gap-x-8">
          <div className="text-xl font-semibold text-white flex items-center">Door</div>
          <div className="col-span-3"></div>
          <div><Armchair className="h-12 w-12 text-red-600" /></div>
          <div><Armchair className="h-12 w-12 text-red-600" /></div>
        </div>

        <div className="grid grid-cols-6 gap-x-8">
          <div onClick={() => toggleSeatSelection("D1")}><Armchair className={`h-12 w-12 cursor-pointer ${getSeatColor("D1")}`}/></div>
          <div onClick={() => toggleSeatSelection("D2")}><Armchair className={`h-12 w-12 cursor-pointer ${getSeatColor("D2")}`}/></div>
          <div onClick={() => toggleSeatSelection("D3")}><Armchair className={`h-12 w-12 cursor-pointer ${getSeatColor("D3")}`}/></div>
          <div onClick={() => toggleSeatSelection("D4")}><Armchair className={`h-12 w-12 cursor-pointer ${getSeatColor("D4")}`}/></div>
          <div><Armchair className="h-12 w-12 text-red-600" /></div>
          <div><Armchair className="h-12 w-12 text-red-600" /></div>
        </div>

        <div className="grid grid-cols-6 gap-x-8">
          <div onClick={() => toggleSeatSelection("E1")}><Armchair className={`h-12 w-12 cursor-pointer ${getSeatColor("E1")}`}/></div>
          <div onClick={() => toggleSeatSelection("E2")}><Armchair className={`h-12 w-12 cursor-pointer ${getSeatColor("E2")}`}/></div>
          <div onClick={() => toggleSeatSelection("E3")}><Armchair className={`h-12 w-12 cursor-pointer ${getSeatColor("E3")}`}/></div>
          <div onClick={() => toggleSeatSelection("E4")}><Armchair className={`h-12 w-12 cursor-pointer ${getSeatColor("E4")}`}/></div>
          <div><Armchair className="h-12 w-12 text-red-600" /></div>
          <div><Armchair className="h-12 w-12 text-red-600" /></div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8 mt-6">
        <div className="flex items-center justify-center">
          <Dot className="h-16 w-16 text-white" />
          <span className="text-white">Available</span>
        </div>
        <div className="flex items-center justify-center">
          <Dot className="h-16 w-16 text-red-600" />
          <span className="text-white">Reserved</span>
        </div>
        <div className="flex items-center justify-center">
          <Dot className="h-16 w-16 text-green-300" />
          <span className="text-white">Selected</span>
        </div>
      </div>
    </div>
  </div>

  {/* Modal for booking form */}
  {showForm && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="bg-gray-300/50 rounded-xl shadow-xl p-8 w-full max-w-xl">
        <div className="flex items-center justify-between mb-6">
        
          <h2 className="text-2xl font-semibold text-white">Complete Your Booking</h2>
          <button
            onClick={() => setShowForm(false)}
            className="p-2 rounded-full text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-white mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full border border-gray-300 p-3 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-1">Phone Number</label>
            <input
              type="text"
              placeholder="Your phone number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full border border-gray-300 p-3 rounded-lg"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-white mb-1">Email Address</label>
          <input
            type="email"
            placeholder="Your email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full border border-gray-300 p-3 rounded-lg"
          />
        </div>

        <div className="mb-8">
          <label className="block text-sm font-medium text-white mb-1">Purpose of Visit</label>
          <select
            value={formData.purpose}
            onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
            className="w-full border border-gray-300 p-3 rounded-lg"
          >
            <option value="">Select a purpose...</option>
            <option value="Làm việc cá nhân">Work</option>
            <option value="Cuộc họp">Meeting</option>
            <option value="Học nhóm">Study group</option>
            <option value="Khác">Other</option>
          </select>
        </div>

        <div className="flex gap-4 justify-end">
          <button
            onClick={handleFormSubmit}
            className="px-6 py-3 bg-gradient-to-r from-red-800 to-red-900 text-white rounded-lg font-medium hover:from-red-700 hover:to-red-800"
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  )}
</div>
    )}

    </div>
  );
}

export default RoomDetail;
