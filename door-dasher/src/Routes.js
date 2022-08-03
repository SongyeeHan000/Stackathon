import React from "react";
import { BrowserRouter, Route, Routes, Link} from "react-router-dom";

import Favorites from './Components/Favorites'
// import UsersPage from './Components/Users'
import AddRestaurants from './Components/AddRestaurant'
import HomePage from './Components/Homepage'
import NavBar from './Components/NavBar'
import history from "./history";
import Friend from "./Components/Friend"


const Router = () => {
  return (
    <BrowserRouter>
      <nav>
        <NavBar />
      </nav>
      <Routes history={history}>
            <Route path="/favorites" element={<Favorites />} />
            {/* <Route path="/users" element={<UsersPage />} /> */}
            <Route path="/restaurants/add" element={<AddRestaurants />} />
            <Route path="/home" element={<HomePage/>} />
            {/* <Route path="/friend/id" element={<Friend />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;




