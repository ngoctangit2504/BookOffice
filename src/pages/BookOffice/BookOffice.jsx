import React, {useState} from "react";
import { MagnifyingGlassIcon, MapPinIcon } from "@heroicons/react/24/solid";
import useWindowSize from "../../hooks/UseWindowSize";
import SlidingSidebar from "../../components/Sidebar/SlidingSidebar";
import { useSidebar } from "../../hooks/useSidebar";
import OfficeItem from "../../components/Office/OfficeItem";
import { Menu, Building, BanknoteArrowDown, FolderClock, Flag } from "lucide-react";
import BookedRoomsManager from "../../components/Office/OfficeManager"; // Import the new component
import RoomBooked from "../../components/Office/RoomBooked";
import OfficeList from "../../components/Office/OfficeList";

function BookOffice() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBookedRooms, setShowBookedRooms] = useState(false); // Add this state
  const [showRoomBookeds, setShowRoomBookeds] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Office");

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      setError("Trình duyệt không hỗ trợ lấy vị trí.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setError(null);
      },
      (err) => {
        setError("Không thể lấy vị trí: " + err.message);
      }
    );
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleOpenBookedRooms = () => {
    setShowBookedRooms(true);
    setMenuOpen(false); 
  };

  const handleOpenRoomBooked = () => {
    setShowRoomBookeds(true);
    setMenuOpen(false); 
  };

  const handleBackToMain = () => {
    setShowBookedRooms(false);
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const windowSize = useWindowSize();
  const isMobile = windowSize.width < 1024;
  const { isOpen, openSidebar, closeSidebar } = useSidebar();

  if (showBookedRooms) {
    return <BookedRoomsManager onBack={handleBackToMain} />;
  }

  if (showRoomBookeds) {
    return <RoomBooked onBack={handleBackToMain} />;
  }

  return (
    <div className="bg-[url('https://skepp.com/assets/Uploads/_resampled/ScaleWidthWyIxODAwIl0/IMG-2227.jpg')] backdrop-blur-md bg-cover bg-center h-screen w-full overflow-x-hidden">
      {isMobile ? (
        // Layout cho mobile
        <div className="bg-gray-300/30 min-h-screen w-full overflow-x-hidden relative">
          <div className="flex items-center justify-between px-6 py-10">
            <h1 className="text-5xl text-transparent text-white text-shadow">Book</h1>
            <div className="flex items-center justify-center text-white">
              <button onClick={toggleMenu}>
                <Menu className="w-8 h-8"/>
              </button>
            </div>
          </div>

          {menuOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-30 z-40" onClick={closeMenu}>
              <div 
                className="absolute right-0 top-0 h-full w-72 bg-gray-600/70 backdrop-blur-md shadow-lg z-50"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6 flex flex-col">
                  <div className="flex justify-end">
                    <button className="text-white" onClick={closeMenu}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="mt-8 flex flex-col space-y-8">
                    <button 
                      className="flex items-center text-white text-lg hover:text-blue-300 transition duration-300"
                      onClick={handleOpenBookedRooms}
                    >
                      <Building className="w-6 h-6 mr-2" />
                      Manage Bookings
                    </button>

                    <button className="flex items-center text-white text-lg hover:text-blue-300 transition duration-300">
                      <BanknoteArrowDown className="w-6 h-6 mr-2" />
                      Refund
                    </button>

                    <button 
                      className="flex items-center text-white text-lg hover:text-blue-300 transition duration-300"
                      onClick={handleOpenRoomBooked}
                    >
                      <FolderClock className="w-6 h-6 mr-2" />
                      Room booked
                    </button>

                    <button className="flex items-center text-white text-lg hover:text-blue-300 transition duration-300">
                      <Flag className="w-6 h-6 mr-2" />
                      Report
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="px-4 mb-6">
            <div className="flex items-center w-full rounded-3xl shadow-lg bg-gray-300/50 px-2">
              <MagnifyingGlassIcon className="p-1 w-12 h-12 text-white"/>
              <input
                placeholder="Where ?"
                className="w-full px-4 bg-transparent outline-none placeholder:text-white"
              />
              <button 
                className="bg-gray-400/50 rounded-full"
                onClick={handleGetLocation}     
              >
                <MapPinIcon className="w-8 h-8 p-1 text-white"/>
              </button>
            </div>
          </div>

          <div className="mx-2">
            <OfficeList/>
          </div>

          <div>
            <p className="text-2xl py-4 px-6 text-white text-shadow">
              The most recommentded
            </p>
          </div>

          <div className="px-3">
            <div className="flex justify-between items-center w-full overflow-x-auto rounded-full shadow-lg bg-gray-300/50 backdrop-blur-md px-2">
              <button 
                className="rounded-full whitespace-nowrap text-white py-1.5 px-4 my-3 mx-1 hover:bg-gray-200/50 hover:text-white hover:font-semibold text-shadow"
                onClick={openSidebar}
              >
                Office
              </button>
              <button className="rounded-full whitespace-nowrap text-white py-1.5 px-4 my-3 mx-1 hover:bg-gray-200/50 hover:text-white hover:font-semibold text-shadow">
                Conference
              </button>
              <button className="rounded-full whitespace-nowrap text-white py-1.5 px-4 my-3 mx-1 hover:bg-gray-200/50 hover:text-white hover:font-semibold text-shadow">
                Food
              </button>
              <button className="rounded-full whitespace-nowrap text-white py-1.5 px-4 my-3 mx-1 hover:bg-gray-200/50 hover:text-white hover:font-semibold text-shadow">
                Bad
              </button>
            </div>
          </div>

          {isOpen && (
               <SlidingSidebar 
               isOpen={isOpen} 
               onClose={closeSidebar}
               height="85%" 
              >
           </SlidingSidebar>
          )}
        </div>
      ) : (
        // Layout cho desktop
        <div className="flex min-h-screen w-full">
          {/* Sidebar */}
          <div className="w-64 bg-gray-700/70 backdrop-blur-md shadow-lg h-screen fixed left-0 top-0">
            <div className="p-6">
              <h1 className="text-4xl font-bold text-white mb-10">Book</h1>
              
              <div className="mt-8 flex flex-col space-y-8">
                <button 
                  className="flex items-center text-white text-lg hover:text-blue-300 transition duration-300"
                  onClick={handleOpenBookedRooms}
                >
                  <Building className="w-6 h-6 mr-2" />
                  Room Management
                </button>

                <button className="flex items-center text-white text-lg hover:text-blue-300 transition duration-300">
                  <BanknoteArrowDown className="w-6 h-6 mr-2" />
                  Refund
                </button>

                <button className="flex items-center text-white text-lg hover:text-blue-300 transition duration-300">
                  <FolderClock className="w-6 h-6 mr-2" />
                  Room booked
                </button>

                <button className="flex items-center text-white text-lg hover:text-blue-300 transition duration-300">
                  <Flag className="w-6 h-6 mr-2" />
                  Report
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="ml-64 w-full">
            {/* Top search bar */}
            <div className="p-6">
              <div className="flex items-center w-full max-w-xl rounded-3xl shadow-lg bg-gray-300/50 px-2 my-6">
                <MagnifyingGlassIcon className="p-1 w-12 h-12 text-white"/>
                <input
                  placeholder="Where ?"
                  className="w-full px-4 bg-transparent outline-none placeholder:text-white"
                />
                <button 
                  className="bg-gray-400/50 rounded-full"
                  onClick={handleGetLocation}     
                >
                  <MapPinIcon className="w-8 h-8 p-1 text-white"/>
                </button>
              </div>
            </div>

            {/* Category filter */}
            <div className="px-6">
              <div className="inline-flex items-center rounded-full shadow-lg bg-gray-300/50 backdrop-blur-md px-2">
                {["Office", "Conference", "Food", "Bad"].map((filter) => (
                  <button 
                    key={filter}
                    className={`rounded-full whitespace-nowrap py-2 px-6 my-2 mx-1 transition duration-300 text-shadow ${
                      activeFilter === filter 
                        ? "bg-gray-200/50 text-white font-semibold" 
                        : "text-white hover:bg-gray-200/50 hover:text-white hover:font-semibold"
                    }`}
                    onClick={() => handleFilterChange(filter)}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Recommended section */}
            <div className="px-6 mt-8">
              <p className="text-2xl py-4 text-white text-shadow">
                The most recommended
              </p>
            </div>

            {/* Office items grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
              <OfficeList/>
            </div>

            {/* Featured section */}
            <div className="px-6 mt-12">
              <p className="text-2xl py-4 text-white text-shadow">
                Featured Spaces
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <OfficeItem />
                <OfficeItem />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookOffice;