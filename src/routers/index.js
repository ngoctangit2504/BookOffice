import React from 'react';

import BookOffice from '../pages/BookOffice/BookOffice.jsx';
import OfficeDetail from '../pages/BookOffice/OfficeDetail.jsx';
import RoomDetail from "../pages/BookOffice/RoomDetail.jsx";

const routes = [
    { path: "/", element: <BookOffice/> },
    { path: "/office/:id", element: <OfficeDetail/> },
    { path: "/office/:id/confirm", element: <RoomDetail /> }, // 👈 route mới
  ];

export default routes;