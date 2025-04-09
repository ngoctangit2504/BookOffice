import React from 'react';
import BookOffice from '../pages/BookOffice/BookOffice.jsx';
import OfficeDetail from '../pages/BookOffice/OfficeDetail.jsx';
import RoomDetail from "../pages/BookOffice/RoomDetail.jsx";
import RoomCard from "../pages/BookOffice/RoomCard.jsx"

const routes = [
    { path: "/", element: <BookOffice/> },
    { path: "/office/:id", element: <OfficeDetail/> },
    { path: "/office/:id/confirm", element: <RoomDetail /> },
    { path: "/office/:id/confirm/card", element: <RoomCard /> },
  ];

export default routes;