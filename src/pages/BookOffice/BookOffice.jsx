import React, {useState} from "react";
import { MagnifyingGlassIcon, MapPinIcon } from "@heroicons/react/24/solid";
import useWindowSize from "../../hooks/UseWindowSize";
import SlidingSidebar from "../../components/Sidebar/SlidingSidebar";
import { useSidebar } from "../../hooks/useSidebar";
import OfficeItem from "../../components/Office/OfficeItem";
import { Menu, Building, BanknoteArrowDown, FolderClock, Flag } from "lucide-react";
import BookedRoomsManager from "../../pages/BookOffice/OfficeManager"; // Import the new component

function BookOffice() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBookedRooms, setShowBookedRooms] = useState(false); // Add this state

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

  // Add this handler for opening the booked rooms screen
  const handleOpenBookedRooms = () => {
    setShowBookedRooms(true);
    setMenuOpen(false); // Close the menu when navigating
  };

  // Add this handler for going back to the main screen
  const handleBackToMain = () => {
    setShowBookedRooms(false);
  };

  const windowSize = useWindowSize();
  const isMobile = windowSize.width < 1024;
  const { isOpen, openSidebar, closeSidebar } = useSidebar();

  // Show BookedRoomsManager if showBookedRooms is true
  if (showBookedRooms) {
    return <BookedRoomsManager onBack={handleBackToMain} />;
  }

  return (
    <div className="bg-[url('https://media.aedas.com/project/Aedas%20SGO%20(1%20Thumbnail).jpg?s5D5nDTW_9DsfyQi70DA4Sxjffxr7zSp')] bg-cover bg-center h-screen w-full overflow-x-hidden">
      {isMobile ? (
        // Layout cho mobile
        <div className="bg-gray-300/50 min-h-screen w-full overflow-x-hidden relative">
          <div className="flex items-center justify-between px-6 py-10">
            <h1 className="text-5xl text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-500">Book</h1>
            <div className="flex items-center justify-center text-white">
              <button onClick={toggleMenu}>
                <Menu className="w-8 h-8"/>
              </button>
            </div>
          </div>

          {/* Menu Sidebar */}
          {menuOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-30 z-40" onClick={closeMenu}>
              <div 
                className="absolute right-0 top-0 h-full w-72 bg-gray-600/70 shadow-lg z-50"
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
                  <div className="mt-8 flex flex-col space-y-6">
                    {/* Update this button to call the handler */}
                    <button 
                      className="flex items-center text-white text-lg hover:text-blue-300 transition duration-300"
                      onClick={handleOpenBookedRooms}
                    >
                      <Building className="w-5 h-5 mr-2" />
                      Quản lý phòng
                    </button>

                    <button className="flex items-center text-white text-lg hover:text-blue-300 transition duration-300">
                      <BanknoteArrowDown className="w-5 h-5 mr-2" />
                      Hoàn tiền
                    </button>

                    <button className="flex items-center text-white text-lg hover:text-blue-300 transition duration-300">
                      <FolderClock className="w-5 h-5 mr-2" />
                      Phòng đã đặt
                    </button>

                    <button className="flex items-center text-white text-lg hover:text-blue-300 transition duration-300">
                      <Flag className="w-5 h-5 mr-2" />
                      Báo cáo
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
            <OfficeItem/>
            <OfficeItem/>
          </div>

          <div>
            <p className="text-2xl py-4 px-6 bg-gradient-to-b from-white to-blue-500 text-transparent bg-clip-text">
              The most recommentded
            </p>
          </div>

          {/* Fixed horizontal scrolling issue in buttons container */}
          <div className="px-3">
            <div className="flex justify-between items-center w-full overflow-x-auto rounded-full shadow-lg bg-gray-300/50 px-2">
              <button 
                className="rounded-full whitespace-nowrap text-white py-1.5 px-4 my-3 mx-1 hover:bg-gray-200/50 hover:text-white hover:font-semibold"
                onClick={openSidebar}
              >
                Office
              </button>
              <button className="rounded-full whitespace-nowrap text-white py-1.5 px-4 my-3 mx-1 hover:bg-gray-200/50 hover:text-white hover:font-semibold">
                Conference
              </button>
              <button className="rounded-full whitespace-nowrap text-white py-1.5 px-4 my-3 mx-1 hover:bg-gray-200/50 hover:text-white hover:font-semibold">
                Food
              </button>
              <button className="rounded-full whitespace-nowrap text-white py-1.5 px-4 my-3 mx-1 hover:bg-gray-200/50 hover:text-white hover:font-semibold">
                Bad
              </button>
            </div>
          </div>

          {/* Sliding sidebar component */}
          <SlidingSidebar 
            isOpen={isOpen} 
            onClose={closeSidebar}
            height="85%"
          />
        </div>
      ) : (
        // Layout cho desktop
        <div className="w-full overflow-x-hidden">
          <h1>Desktop Layout</h1>
          <p>Nội dung desktop...</p>
        </div>
      )}
    </div>
  );
}

export default BookOffice;