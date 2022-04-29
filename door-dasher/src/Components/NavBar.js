import React from "react"
import {Link} from "react-router-dom"




const Navbar = () => (
    <div id="nav-container">
        <nav>
            <Link to="/home">
            <h1>Food Diary</h1></Link>
    
            <Link to="/homepage">Home</Link>
            <Link to="/favorites">My Favorites</Link>
        </nav>
    </div>

  
  );

  export default Navbar