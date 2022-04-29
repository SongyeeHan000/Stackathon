import React from "react";
import { MapContainer, TileLayer, Popup, Marker, useMap } from 'react-leaflet';
import {useState, useEffect} from 'react'
import { collection, getDocs } from "firebase/firestore";
import db from '../firebase'
// import {useHistory} from 'react-router-dom'
import history from "../history";


const abikoCurry = {
    name: "Abiko Curry",
    x: 40.753355024966176,
    y: -73.98675836884865
}
const unionSquareCafe = {
    name: "Union Square Cafe",
    x: 40.737900247762695,
    y: -73.98776941328308
}
const namiNori = {
    name: "Nami Nori",
    x: 40.73516875725115,
    y: -74.00036506711312
}
const restaurantList = [abikoCurry, unionSquareCafe, namiNori]


function Markers( {data} ) {
    const map = useMap();
    console.log(data)
    return (
      data.length > 0 &&
      data.map((restaurant) => {
        return (
          <Marker
            eventHandlers={{
              click: () => {
                map.setView(
                  [
                    restaurant.x,
                    restaurant.y
                  ],
                  14
                );
              }
            }}
            key={restaurant.name}
            position={{
              lat: restaurant.x,
              lng: restaurant.y
            }}
          >
            <Popup>
              <span>{restaurant.name}</span>
            </Popup>
          </Marker>
        );
      })
    );
  }

function Favorites(props) {
    // const [restaurants, setRestaurants] = useState([])
    // const [data, setData] = useState([])
    

    // useEffect(() => {
    //     const fetchRestaurants = async () => {
    //         const restaurantsDB = await getDocs(collection(db, "restaurants"))
    //         const fetchedRestaurants = []
    //         restaurantsDB.forEach((restaurant) => {
    //             fetchedRestaurants.push(restaurant.data())
    //         })
    //          setRestaurants(fetchedRestaurants)
    //     }
    //     fetchRestaurants()
    // })

    // useEffect(() => {
    //     fetch("https://api-adresse.data.gouv.fr/search/?q=paris&type=street")
    //       .then((response) => response.json())
    //       .then((response) => {
    //         setData(response.features);
    //       });
    //   }, []);

    function addRestaurant() {
        history.push("/restaurants/add")
        // let history = useHistory()
        // history.push({
        //     pathname: "/restaurants/add"})
    }
    
    
    return (
    <div className="favorites-page">
      <h1 id="favorites-header">Favorites</h1>
        <div className="favorites">
            <div className="child">
                <h1>Lists of restaurants</h1>
                <ul>
                    {restaurantList.map((restaurant) => {
                    return (
                        <div className="restaurantLists">
                            <button type="button">X</button>
                            <p key={restaurant.name}>{restaurant.name}</p>
                        </div>
                       
                    )
                    })}
                </ul>
                <button id="add-places" type="button" onClick={addRestaurant}>Add Places</button>
            </div>
        
            <div id="map" className="child">
                <MapContainer center={[40.730610, -73.935242]} zoom={10} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Markers data={restaurantList}/>
                {/* {restaurantList.map((restaurant) => {
                    return (
                        
                        // <Marker key={restaurant.name} position={[restaurant.x,restaurant.y]} >
                        //     <Popup>{restaurant.name}</Popup>
                        // </Marker>
                    )
                })} */}
                </MapContainer>
            </div>
        </div>
          
    </div>
      
  );
}

export default Favorites



