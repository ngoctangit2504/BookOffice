import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function OfficeItem() {
  const navigate = useNavigate();

  const officeId = 123;
  const officeImage = 'https://project-orion-production.s3.amazonaws.com/uploads/content/14892/MA16_StanDark_Open_QG-1.jpg';
  const officeName = 'Stanford Office';
  const officeAddress = '123 Electric Avenue Eco City, EC 54321';
  const officeDescription = 'Using HTML, CSS (SCSS/Tailwind), and JavaScript (React JS if applicable). The task requires ensuring responsiveness, performance optimization, cross-browser compatibility, and may involve using modern libraries or frameworks.';

  const handleClick = () => {
    // Navigate to /office/:id and pass state
    navigate(`/office/${officeId}`, {
      state: {
        officeImage,
        officeName,
        officeAddress,
        officeDescription,
      },
    });
  };

  return (
    <div className='mb-2 w-full'>
      <div
        className='grid grid-cols-4 h-24 border rounded-3xl bg-gradient-to-b from-blue-300 to-gray-600 w-full cursor-pointer'
        onClick={handleClick}
      >
        <div className='col-span-1 flex items-center justify-center'>
          <img
            className='p-2 rounded-3xl h-20 w-full object-cover'
            src={officeImage}
            alt={officeName}
          />
        </div>
        <div className='col-span-3 flex flex-col justify-center overflow-hidden pl-2 pr-4'>
          <h1 className='text-white text-xl font-semibold truncate'>{officeName}</h1>
          <p className='text-gray-300 truncate'>{officeAddress.split(',')[0]}</p>
        </div>
      </div>
    </div>
  );
}

export default OfficeItem;