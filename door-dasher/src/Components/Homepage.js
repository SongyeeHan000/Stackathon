import { MapContainer, TileLayer, Popup, Marker, useMap } from "react-leaflet"
import {users} from "../fakeData"
import { Link } from "react-router-dom"
import {useState, useEffect} from 'react'


function Markers( {data} ) {
    const map = useMap();
    return (
      data.length > 0 &&
      data.map((friend) => {
        const recentRestaurant = friend.favorites[0]
        return (
          <Marker
            eventHandlers={{
              click: () => {
                map.setView(
                  [
                    recentRestaurant.x,
                    recentRestaurant.y
                  ],
                  14
                );
                map.flyTo([recentRestaurant.x, recentRestaurant.y], 14, {
                  animate: true,
                  duration: 2 // in seconds
                })
              }
            }}
            key={friend.name}
            position={{
              lat: friend.favorites[0].x,
              lng: friend.favorites[0].y,
            }}
          >
            <Popup>
              <span><strong>{friend.name}</strong></span>
              <br></br>
              <span>{friend.favorites[0].name}</span>
            </Popup>
          </Marker>
        );
      })
    );
  }

export default function HomePage() {
    const [friends, setFriends] = useState([])
      
    useEffect(() => {
        setFriends([...users])
    }, [])
    return (
        <div className ="users-page"> 
          <h1 id="main-page-header">Main Page</h1>
          <div className="main-page">
                <div className="child">
                    <h1>Friends</h1>
                    <ul>
                        {friends.map((friend) => {
                            return (
                                <h3 key={friend.name}>{friend.name}</h3>
                            )
                        })}
                    </ul>
                </div>
    
                <div id="map" className="child">
                        <MapContainer center={[40.735308, -73.994594]} zoom={12} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                        <Markers data={friends}/>
                        </MapContainer>
                </div>
          </div>
        </div>
    )   
  }

