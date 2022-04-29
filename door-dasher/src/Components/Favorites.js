import React from "react";
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import {useState, useEffect} from 'react'
import { collection, getDocs } from "firebase/firestore";
import db from '../firebase'
// import {useHistory} from 'react-router-dom'
import history from "../history";


function Favorites(props) {
    const [restaurants, setRestaurants] = useState([])
    const map = useMap();

    useEffect(() => {
        const fetchRestaurants = async () => {
            const restaurantsDB = await getDocs(collection(db, "restaurants"))
            const fetchedRestaurants = []
            restaurantsDB.forEach((restaurant) => {
                fetchedRestaurants.push(restaurant.data())
            })
            setRestaurants(fetchedRestaurants)
        }
        fetchRestaurants()
    })

    function addRestaurant() {
        history.push("/restaurants/add")
        // let history = useHistory()
        // history.push({
        //     pathname: "/restaurants/add"})
    }

    function handleClick() {
        console.log("hello")
    }
    
    return (
    <div className="favorites-page">
      <h1 id="favorites-header">Favorites</h1>
        <div className="favorites">
            <div className="restaurants">
                <h1>Lists of restaurants</h1>
                <ul>
                    {restaurants.map((restaurant) => {
                    return (
                        <p key={restaurant.name}>{restaurant.name}</p>
                    )
                    })}
                </ul>
                <button id="add-places" type="button" onClick={addRestaurant}>Add Places</button>
            </div>
        
            <div id="map">
                <MapContainer center={[40.730610, -73.935242]} zoom={10} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {restaurants.map((restaurant) => {
                    return (
                        <Marker key={restaurant.name} position={[restaurant.x,restaurant.y]} eventHandlers={{
                            click: () => {
                              map.setView(
                                [
                                  restaurant.x,
                                  restaurant.y
                                ],
                                14
                              );
                            }
                          }}>
                            <Popup>{restaurant.name}</Popup>
                        </Marker>
                    )
                })}

                </MapContainer>
            </div>
        </div>
          
    </div>
      
  );
}

export default Favorites



