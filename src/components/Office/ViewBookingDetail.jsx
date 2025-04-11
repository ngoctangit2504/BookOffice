import React from "react";
import { ArrowLeft, CalendarDays, Clock, Check, X, Building } from "lucide-react";

const ViewBookingDetail = ({ booking, onBack, onCancel }) => {
  const getStatusIcon = (status) => {
    switch(status) {
      case "active": return <Check className="h-5 w-5" />;
      case "pending": return <Clock className="h-5 w-5" />;
      case "cancelled": return <X className="h-5 w-5" />;
      default: return null;
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case "active": return "bg-green-500";
      case "pending": return "bg-yellow-500";
      case "cancelled": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  const handleCancel = () => {
    if (window.confirm("Are you sure you want to cancel this booking?")) {
      onCancel(booking.id);
    }
  };

  const canBeCancelled = booking.status === "active" || booking.status === "pending";

  return (
    <div className="w-full min-h-screen bg-[url('https://skepp.com/assets/Uploads/_resampled/ScaleWidthWyIxODAwIl0/IMG-2227.jpg')] backdrop-blur-sm py-8 px-4">
      <div className="flex items-center justify-between mb-16">
        <div className="flex items-center">
          <button onClick={onBack} className="mr-2 text-white font-bold">
            <ArrowLeft className="h-6 w-6" />
          </button>
        </div>

        <div className="flex items-center">
          <div className={`rounded-full px-3 py-1 text-white text-sm flex items-center space-x-1 ${getStatusColor(booking.status)}`}>
            {getStatusIcon(booking.status)}
            <span className="capitalize">{booking.status}</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-sm overflow-hidden rounded-2xl bg-gray-300/15 backdrop-blur-md border border-white/20 shadow-xl">
        <div className="h-96 p-2">
          <div className="w-full h-full overflow-hidden rounded-xl">
            <img
              src={booking.image}
              alt={booking.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="p-4 text-white">
          <h2 className="text-xl font-semibold mb-4">{booking.name}</h2>
          <p className="text-sm text-blue-100 mb-4">{booking.location}</p>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center space-x-4">
                <p className="text-white">Date </p>
                <p className="">{booking.date}</p>
              </div>
              <div className="flex items-center space-x-4">
                <p className="text-white">Room </p>
                <p className="">{booking.name}</p>
              </div>
            </div>

            <div className="space-y-2 text-left">
              <div className="flex items-center space-x-4">
                <p className="text-white">Status </p>
                <p className={`capitalize ${booking.status === "active" ? "text-green-400" : booking.status === "pending" ? "text-yellow-400" : "text-red-400"}`}>
                  {booking.status}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <p className="text-white">Time </p>
                <p className="text-white">{booking.bookingTime.split(",")[1]}</p>
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

      {canBeCancelled && (
        <div className="text-white mt-4 flex justify-center">
          <button 
            onClick={handleCancel}
            className="bg-red-500/80 hover:bg-red-600/80 px-4 py-2 rounded-full flex items-center space-x-2"
          >
            <X className="h-5 w-5" />
            <span>Cancel Booking</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ViewBookingDetail;