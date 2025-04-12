import React, { useState, useEffect } from 'react';
import OfficeItem from './OfficeItem';
import { getRoomContractReadOnly } from '../../utils/contractRoom.js';

function OfficeList() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        setLoading(true);
        const contract = await getRoomContractReadOnly();
        const roomsData = await contract.getRooms();
        
        // We only need the room IDs for OfficeItem to fetch individual details
        const roomIds = roomsData.map(room => room.roomId.toString());
        setRooms(roomIds);
      } catch (err) {
        console.error("Error fetching rooms:", err);
        setError("Failed to load offices");
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  if (loading) return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Loading offices...</h1>
      <div className="space-y-2">
        {[1, 2, 3].map(i => (
          <div key={i} className="w-full h-24 animate-pulse bg-gray-700 rounded-3xl"></div>
        ))}
      </div>
    </div>
  );

  if (error) return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Error</h1>
      <p className="text-red-500">{error}</p>
    </div>
  );

  return (
    <div className="container mx-auto p-4">
      <div className="space-y-2">
        {rooms.length > 0 ? (
          rooms.map(roomId => <OfficeItem key={roomId} roomId={roomId} />)
        ) : (
          <p className="text-gray-400 text-lg">No offices available</p>
        )}
      </div>
    </div>
  );
}

export default OfficeList;