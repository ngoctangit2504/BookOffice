import React from 'react';

import BookOffice from '../pages/BookOffice/BookOffice.jsx';
import OfficeDetail from '../pages/BookOffice/OfficeDetail.jsx';

const routes = [
    { path: "/", element: <BookOffice/> },
    { path: "/office/:id", element: <OfficeDetail/> },
  ];

export default routes;