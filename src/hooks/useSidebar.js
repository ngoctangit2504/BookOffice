import { useState, useEffect } from "react";

export function useSidebar(initialState = false) {
  const [isOpen, setIsOpen] = useState(initialState);

  const openSidebar = () => setIsOpen(true);
  const closeSidebar = () => setIsOpen(false);
  const toggleSidebar = () => setIsOpen(prev => !prev);

  // Close sidebar on back button press
  useEffect(() => {
    const handlePopState = () => {
      if (isOpen) {
        closeSidebar();
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [isOpen]);

  return {
    isOpen,
    openSidebar,
    closeSidebar,
    toggleSidebar
  };
}