import React from "react";
import { MapContainer, TileLayer, Popup, Marker, useMap } from 'react-leaflet';
import {useState, useEffect} from 'react'
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import db from '../firebase'
import { Link } from "react-router-dom";
import axios from 'axios'
import {useParams} from "react-router"

// function Markers( {data} ) {
//     const map = useMap();
//     return (
//       data.length > 0 &&
//       data.map((restaurant) => {
//         return (
//           <Marker
//             eventHandlers={{
//               click: () => {
//                 map.setView(
//                   [
//                     restaurant.x,
//                     restaurant.y
//                   ],
//                   14
//                 );
//                 map.flyTo([restaurant.x, restaurant.y], 14, {
//                   animate: true,
//                   duration: 2 // in seconds
//                 })
//               }
//             }}
//             key={restaurant.name}
//             position={{
//               lat: restaurant.x,
//               lng: restaurant.y
//             }}
//           >
//             <Popup>
//               <span>{restaurant.name}</span>
//             </Popup>
//           </Marker>
//         );
//       })
//     );
//   }
  
//   function MapHelper({ loc }) {
//     const map = useMap()
  
//     if (loc && loc.length) {
//       map.flyTo([loc[0], loc[1]], 16, {
//         animate: true,
//         duration: 1 // in seconds
//       })
//     }
//   }
  
function Friend(props) {
    const {id} = useParams();
    const [data,setData] = useState("")
    // const [loc, setLoc] = useState([])
    // const [display, setDisplay] = useState([""])
    // const [restaurants, setRestaurants] = useState([])
    
    const url = `http://localhost:3000/friend/${id}`;

    // // const fetchFriend = () => {
    // //     axios.get(`${url}`)
    // // }
    // // console.log()
    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        })
    }, [])
    console.log("data", data)
    
    return (
    <div className="favorites-page">
      <h1 id="favorites-header">Favorites</h1>
        <div className="favorites">
            <div className="child">
                <h1>Lists of Restaurants</h1>
                <ul>
                    {/* {restaurants.map((restaurant) => {
                    return (
                        <div className="restaurantLists" key={restaurant.name}>
                            <button type="button" value={restaurant.name} onClick={handleDelete}>X</button>
                            <p className="restaurant" key={restaurant.name} onClick={(event)=> handleClick(event, restaurant)}>{restaurant.name}</p>
                            <p className="reviews" id ={restaurant.name} style={{display:"none"}}>{restaurant.review}</p>
                        </div>
                    )
                    })} */}
                </ul>
                <div id="add-restaurant">
                  <Link to="/restaurants/add" id="add-place-button">Add Restaurant</Link>
                </div>
            </div>
        
            <div id="map" className="child">
                <MapContainer center={[40.735308, -73.994594]} zoom={12} scrollWheelZoom={false}>
                  <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  {/* <Markers data={restaurantList}/>
                  <MapHelper loc={loc}/> */}
                </MapContainer>
            </div>
        </div>
  
        <Link to="/homepage" className="BackLink">Back</Link>
      
    </div>
      
  );
  }
  
  export default Friend