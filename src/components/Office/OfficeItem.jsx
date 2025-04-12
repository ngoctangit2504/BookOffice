import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRoomContractReadOnly } from '../../utils/contractRoom.js';

function OfficeItem({ roomId }) {
  const navigate = useNavigate();
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Default image if room doesn't have one
  const defaultImage = 'https://project-orion-production.s3.amazonaws.com/uploads/content/14892/MA16_StanDark_Open_QG-1.jpg';

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        setLoading(true);
        const contract = await getRoomContractReadOnly();
        const roomData = await contract.getRoomById(roomId);
  
        if (!roomData || !roomData.name) {
          console.warn(`Không có dữ liệu phòng trả về cho roomId: ${roomId}`);
          setRoom(null);
          return;
        }
  
        // Convert from contract format to our format
        setRoom({
          roomId: roomData.roomId.toString(),
          name: roomData.name,
          location: roomData.location,
          roomLength: roomData.roomLength.toString(),
          pricePerHour: roomData.pricePerHour.toString(),
          roomType: roomData.roomType,
          isAvailable: roomData.isAvailable,
          seatsInitialized: roomData.seatsInitialized,
          imageUrl: roomData.imageUrl

        });
      } catch (err) {
        console.error("Error fetching room data:", err);
        setError("Failed to load room data");
      } finally {
        setLoading(false);
      }
    };
  
    if (roomId) {
      fetchRoomData();
    }
  }, [roomId]);

  const handleClick = () => {
    if (room) {
      navigate(`/office/${room.roomId}`, {
        state: {
          roomId: room.roomId,
          name: room.name,
          location: room.location,
          roomType: room.roomType,
          roomLength: room.roomLength,
          pricePerHour: room.pricePerHour,
          isAvailable: room.isAvailable,
          imageUrl: room.imageUrl
        },
      });
    }
  };

  if (loading) return <div className="w-full h-24 animate-pulse bg-gray-700 rounded-3xl"></div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;
  if (!room) return null;

  return (
    <div className='mb-2 w-full'>
      <div
        className='grid grid-cols-4 h-24 border rounded-2xl bg-gray-600/30 backdrop-blur-md w-full cursor-pointer'
        onClick={handleClick}
      >
        <div className='col-span-1 flex items-center justify-center'>
          <img
            className='p-2 rounded-3xl h-20 w-full object-cover'
            src={room.imageUrl}
            alt={room.name}
          />
        </div>
        <div className='col-span-3 flex flex-col justify-center overflow-hidden pl-2 pr-4'>
          <h1 className='text-white text-xl font-semibold truncate'>{room.name}</h1>
          <p className='text-gray-300 truncate'>{room.location.split(',')[0]}</p>
          <div className="flex justify-between">
            <span className="text-gray-300 text-sm">{room.roomType}</span>
            <span className={`text-sm ${room.isAvailable ? 'text-green-400' : 'text-red-400'}`}>
              {room.isAvailable ? 'Available' : 'Unavailable'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfficeItem;