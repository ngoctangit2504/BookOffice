import React from "react";
import { MagnifyingGlassIcon, MapPinIcon } from "@heroicons/react/24/solid";
import useWindowSize from "../../hooks/UseWindowSize";
import SlidingSidebar from "../../components/Sidebar/SlidingSidebar";
import { useSidebar } from "../../hooks/useSidebar";
import OfficeItem from "../../components/Office/OfficeItem";

function BookOffice() {
  const windowSize = useWindowSize();
  const isMobile = windowSize.width < 1024;
  const { isOpen, openSidebar, closeSidebar } = useSidebar();

  return (
    <div className="bg-[url('https://media.aedas.com/project/Aedas%20SGO%20(1%20Thumbnail).jpg?s5D5nDTW_9DsfyQi70DA4Sxjffxr7zSp')] bg-cover bg-center h-screen w-full overflow-x-hidden">
      {isMobile ? (
        // Layout cho mobile
        <div className="bg-gray-300/50 min-h-screen w-full overflow-x-hidden">
          <div>
            <h1 className="text-5xl py-10 px-6 bg-gradient-to-b from-white to-blue-500 text-transparent bg-clip-text">
              Book
            </h1>
          </div>

          <div className="px-4 mb-6">
            <div className="flex items-center w-full rounded-3xl shadow-lg bg-gray-300/50 px-2">
              <MagnifyingGlassIcon className="p-1 w-12 h-12 text-white" />
              <input
                placeholder="Where ?"
                className="w-full px-4 bg-transparent outline-none placeholder:text-white"
              />
              <button className="bg-gray-400/50 rounded-full">
                <MapPinIcon className="w-8 h-8 p-1 text-white" />
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