import React, { useRef, useState } from "react";
import OfficeItem from "../Office/OfficeItem";

function SlidingSidebar({ isOpen, onClose, children, height = "70%" }) {
  const dragRef = useRef(null);
  const sidebarRef = useRef(null);
  const [dragStartY, setDragStartY] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [translateY, setTranslateY] = useState(0);
  
  // Convert height string to numeric value for calculations
  const heightValue = parseInt(height) || 70;

  const handleTouchStart = (e) => {
    setDragging(true);
    setDragStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e) => {
    if (!dragging) return;
    
    const currentY = e.touches[0].clientY;
    const diff = currentY - dragStartY;
    
    // Only allow dragging downward
    if (diff > 0) {
      setTranslateY(diff);
    }
  };

  const handleTouchEnd = () => {
    if (!dragging) return;
    
    // If dragged more than 20% of the sidebar height, close it
    if (translateY > (window.innerHeight * heightValue / 50) * 0.2) {
      onClose();
    }
    
    setDragging(false);
    setTranslateY(0);
  };

  return (
    <div 
      ref={sidebarRef}
      className={`fixed bottom-0 left-0 right-0 bg-gray-900/50 rounded-t-3xl transition-transform duration-300 ease-in-out transform overflow-x-hidden ${
        isOpen ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ 
        height,
        transform: isOpen ? `translateY(${translateY}px)` : 'translateY(100%)',
        transition: dragging ? 'none' : 'transform 300ms ease-in-out'
      }}
    >
      <div className="flex flex-col h-full px-6 py-2 w-full overflow-x-hidden">
        {/* Draggable handle */}
        <div className="flex justify-center items-center mb-4">
          <div 
            ref={dragRef}
            className="w-16 h-1 bg-white/60 rounded-full cursor-grab active:cursor-grabbing"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          />
        </div>
        
        <div className="px-3 w-full overflow-x-auto">
            <div className="flex justify-between items-center w-full rounded-full shadow-lg">
              <p className="rounded-full whitespace-nowrap text-white py-1 px-2 my-3 mx-1">
                For you
              </p>
              <button className="rounded-full whitespace-nowrap text-white py-1 px-2 my-3 mx-1 hover:bg-gray-200/50 hover:font-semibold">
                Office
              </button>
              <button className="rounded-full whitespace-nowrap text-white py-1 px-2 my-3 mx-1 hover:bg-gray-200/50 hover:font-semibold">
                Conference
              </button>
              <button className="rounded-full whitespace-nowrap text-white py-1 px-2 my-3 mx-1 hover:bg-gray-200/50 hover:font-semibold">
                Food
              </button>
              <button className="rounded-full whitespace-nowrap text-white py-1 px-2 my-3 mx-1 hover:bg-gray-200/50 hover:font-semibold">
                Bad
              </button>
            </div>
          </div>
        
        {/* Sidebar content with overflow control */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden w-full">
          {children}
          <div className="w-full">
            <OfficeItem/>
            <OfficeItem/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlidingSidebar;