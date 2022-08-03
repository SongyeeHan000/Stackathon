import React from "react"
import {Link} from "react-router-dom"




const Navbar = () => (
    <div id="nav-container">
        <nav>
            <Link to="/home"><img src="https://png.pngtree.com/element_our/png_detail/20180930/food-icon-design-vector-png_120564.jpg"></img>
            </Link>
    
            <Link to="/home">Home</Link>
            <Link to="/favorites">My Favorites</Link>
        </nav>
    </div>

  
  );

  export default Navbar