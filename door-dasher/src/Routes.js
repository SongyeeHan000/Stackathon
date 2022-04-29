import React from "react";
import { BrowserRouter, Route, Routes, Link} from "react-router-dom";

import Favorites from './Components/Favorites'
import UsersPage from './Components/Users'
import AddRestaurants from './Components/AddRestaurant'
import HomePage from './Components/Homepage'
import NavBar from './Components/NavBar'


const Router = () => {
  return (
    <BrowserRouter>
      <nav>
        <NavBar />
      </nav>
      <Routes>
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/restaurants/add" element={<AddRestaurants />} />
            <Route path="/homepage" element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;




