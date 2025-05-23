import React, { useState } from "react";
import { Building, ArrowLeft, CalendarClock, Check, Clock, FolderClock } from "lucide-react";
import ReviewDetail from "./ReviewDetail";

const RoomBooked = ({ onBack }) => {
  // Sample data for booked rooms
  const [bookedRooms, setBookedRooms] = useState([
    {
      id: 1,
      name: "Stanford Office",
      location: "123 Electric Avenue Eco City, EC 54321",
      image: "https://ora.stanford.edu/sites/g/files/sbiybj21621/files/styles/breakpoint_2xl_2x/public/media/image/img_7242_1500x1000_0.jpeg?itok=Z1qumBQs",
      status: "using", 
      bookingTime: "Today, 14:00 - 16:00",
      date: "20 Apr 2025"
    },
    {
      id: 2,
      name: "Singapor Office",
      location: "22 Nassim Road Orchard, EC 255",
      image: "https://assets.aboutamazon.com/dims4/default/b8ce663/2147483647/strip/false/crop/2560x1709+0+0/resize/1486x992!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2Fb6%2Fef%2Fb4c3011543caabee29fd48f0ca0e%2Fa-1.jpg",
      status: "completed",
      bookingTime: "Tomorrow, 09:00 - 11:00",
      date: "21 Apr 2025"
    }
  ]);

  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedBooking, setSelectedBooking] = useState(null);

  const filteredRooms = filterStatus === "all" 
    ? bookedRooms 
    : bookedRooms.filter(room => room.status === filterStatus);

  const getStatusColor = (status) => {
    switch(status) {
      case "using": return "bg-green-500";
      case "completed": return "bg-yellow-500";
      default: return "bg-gray-500";
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case "using": return <Check className="w-4 h-4" />;
      case "completed": return <Check className="w-4 h-4" />;
      default: return null;
    }
  };

  const handleViewDetails = (booking) => {
    setSelectedBooking(booking);
  };

  const handleBackFromDetails = () => {
    setSelectedBooking(null);
  };

  if (selectedBooking) {
    return (
      <ReviewDetail 
        booking={selectedBooking} 
        onBack={handleBackFromDetails} 
      />
    );
  }

  return (
    <div className="bg-[url('https://skepp.com/assets/Uploads/_resampled/ScaleWidthWyIxODAwIl0/IMG-2227.jpg')] backdrop-blur-md min-h-screen w-full">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-8">
        <div className="flex items-center">
          <button className="mr-4" onClick={onBack}>
            <ArrowLeft className="h-6 w-6 text-white" />
          </button>
          <h1 className="text-3xl font-semibold text-white flex items-center">
            <FolderClock className="w-6 h-6 mr-2" />
            Room Booked
          </h1>
        </div>
      </div>

      {/* Filters */}
      <div className="px-4 mb-6">
        <div className="flex space-x-2 overflow-x-auto rounded-full bg-gray-300/60 backdrop-blur-md p-1">
          <button 
            className={`rounded-full whitespace-nowrap py-2 px-4 ${filterStatus === 'all' ? 'bg-gray-400 text-white font-medium' : 'text-white'}`}
            onClick={() => setFilterStatus('all')}
          >
            All
          </button>
          <button 
            className={`rounded-full whitespace-nowrap py-2 px-4 ${filterStatus === 'using' ? 'bg-gray-400 text-white font-medium' : 'text-white'}`}
            onClick={() => setFilterStatus('using')}
          >
            Using
          </button>
          <button 
            className={`rounded-full whitespace-nowrap py-2 px-4 ${filterStatus === 'completed' ? 'bg-gray-400 text-white font-medium' : 'text-white'}`}
            onClick={() => setFilterStatus('completed')}
          >
            Completed
          </button>
          
        </div>
      </div>

      {/* Room List */}
      <div className="px-4 pb-6 ">
        {filteredRooms.length === 0 ? (
          <div className="bg-gray-600/30 rounded-xl p-8 text-center text-white">
            <p>No rooms found with the selected filter.</p>
          </div>
        ) : (
          filteredRooms.map((room) => (
            <div key={room.id} className="bg-gray-600/30 backdrop-blur-sm rounded-xl mb-4 overflow-hidden shadow-lg">
              <div className="relative">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-2 right-2 flex items-center space-x-1 rounded-full px-3 py-1 bg-blue-800/70 text-white text-sm">
                  <CalendarClock className="w-4 h-4" />
                  <span>{room.date}</span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-white text-xl font-semibold">{room.name}</h3>
                    <p className="text-blue-100 text-sm">{room.location}</p>
                  </div>
                  <div className={`rounded-full px-3 py-1 text-white text-sm flex items-center space-x-1 ${getStatusColor(room.status)}`}>
                    {getStatusIcon(room.status)}
                    <span className="capitalize">{room.status}</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center text-white">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>{room.bookingTime}</span>
                  </div>
                  <button 
                    className="rounded-full bg-white/10 hover:bg-white/20 px-4 py-1 text-white text-sm"
                    onClick={() => handleViewDetails(room)}
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RoomBooked;