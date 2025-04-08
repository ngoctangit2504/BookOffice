import React, { useEffect } from "react";
import routes from "../src/routers/index";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import AppCss from "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/"></Link>
            </li>
          </ul>
        </nav>
        <Routes>
          {routes.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;