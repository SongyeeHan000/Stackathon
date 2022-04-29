import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";

import Favorites from './Components/Favorites'
import Users from './Components/Users'


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/users" element={<Users />} />

      </Routes>
    </BrowserRouter>
  );
};

export default Router;
