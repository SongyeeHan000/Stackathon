import React from "react";
import { MapContainer, TileLayer, Popup, Marker, useMap } from 'react-leaflet';
import {useState, useEffect} from 'react'
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import db from '../firebase'
import { Link } from "react-router-dom";
import {restaurantList} from "../fakeData"


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
// function MapHelper({ loc }) {
//   const map = useMap()

//   if (loc && loc.length) {
//     map.flyTo([loc[0], loc[1]], 14, {
//       animate: true,
//       duration: 1 // in seconds
//     })
//   }
// }


// function Favorites(props) {
//     const [restaurants, setRestaurants] = useState([])
//     const [data, setData] = useState([])
//     const [loc, setLoc] = useState([])

    

//     useEffect(() => {
//         const fetchRestaurants = async () => {
//             const restaurantsDB = await getDocs(collection(db, "restaurants"))
//             const fetchedRestaurants = []
//             restaurantsDB.forEach((restaurant) => {
//                 fetchedRestaurants.push(restaurant.data())
//             })
//              setRestaurants(fetchedRestaurants)
//         }
//         fetchRestaurants()
//     })

//     function createId(str) {
//       const splitStr = str.split(" ").join("")
//       return splitStr.replace(splitStr[0], splitStr[0].toLowerCase())
//     }

//     function addRestaurant() {
//         history.push("/restaurants/add")
//     }
//     async function handleDelete(event) {
//         const name = event.target.getAttribute("value")
//         const docId = createId(name)
//         await deleteDoc(doc(db, "restaurants", docId))
//     }
//     function handleClick(event, restaurant) {
//       console.log("hello")
//       setLoc([restaurant.x, restaurant.y])
//     }
        
    
//     return (
//     <div className="favorites-page">
//       <h1 id="favorites-header">Favorites</h1>
//         <div className="favorites">
//             <div className="child">
//                 <h1>Lists of Restaurants</h1>
//                 <ul>
//                     {restaurants.map((restaurant) => {
//                     return (
//                         <div className="restaurantLists">
//                             <button type="button" value={restaurant.name} onClick={handleDelete} >X</button>
//                             <p onClick={(event)=> handleClick(event, restaurant)}>{restaurant.name}</p>
//                         </div>
//                     )
//                     })}
//                 </ul>
//                 <button id="add-places" type="button" onClick={addRestaurant}>Add Places</button>
//             </div>
        
//             <div id="map" className="child">
//                 <MapContainer center={[40.730610, -73.935242]} zoom={10} scrollWheelZoom={false}>
//                 <TileLayer
//                     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 />
//                 <Markers data={restaurants}/>
//                 <MapHelper loc={loc}/>

//                 {/* {restaurantList.map((restaurant) => {
//                     return (
                        
//                         // <Marker key={restaurant.name} position={[restaurant.x,restaurant.y]} >
//                         //     <Popup>{restaurant.name}</Popup>
//                         // </Marker>
//                     )
//                 })} */}
//                 </MapContainer>
//             </div>
//         </div>

//         <Link to="/homepage" className="BackLink">Back</Link>
      
//     </div>
      
//   );
// }

// export default Favorites



//fakeData//
function Markers( {data} ) {
  const map = useMap();
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
              map.flyTo([restaurant.x, restaurant.y], 14, {
                animate: true,
                duration: 2 // in seconds
              })
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

function MapHelper({ loc }) {
  const map = useMap()

  if (loc && loc.length) {
    map.flyTo([loc[0], loc[1]], 16, {
      animate: true,
      duration: 1 // in seconds
    })
  }
}

function Favorites(props) {
  const [loc, setLoc] = useState([])
  const [display, setDisplay] = useState([""])
  const [restaurants, setRestaurants] = useState([])

  function createId(str) {
    const splitStr = str.split(" ").join("")
    return splitStr.replace(splitStr[0], splitStr[0].toLowerCase())
  }
  useEffect(() => {
    // const list = async () => {
    //   setRestaurant(restaurantList)
    // }
    // return list
    setRestaurants([...restaurantList])
  }, [])

  // }
  // async function handleDelete(event) {
  //     const name = event.target.getAttribute("value")
  //     const docId = createId(name)
  //     await deleteDoc(doc(db, "restaurants", docId))
  // }
  function handleDelete(event) {
    const name = event.target.value
    for (let i = 0; i < restaurants.length; i++) {
      if (restaurants[i].name === name) {
        restaurants.splice(i,1)
      }
    }
    setRestaurants([...restaurants])
  }

  function handleClick(event, restaurant) {
    setLoc([restaurant.x, restaurant.y])
    const review = document.getElementById(restaurant.name)
    if (review.style.display === "none") {
      review.style.display = "block";
    } else {
      review.style.display = "none";
    }
  }

  
  return (
  <div className="favorites-page">
    <h1 id="favorites-header">Favorites</h1>
      <div className="favorites">
          <div className="child">
              <h1>Lists of Restaurants</h1>
              <ul>
                  {restaurants.map((restaurant) => {
                  return (
                      <div className="restaurantLists" key={restaurant.name}>
                          <button type="button" value={restaurant.name} onClick={handleDelete}>X</button>
                          <p className="restaurant" key={restaurant.name} onClick={(event)=> handleClick(event, restaurant)}>{restaurant.name}</p>
                          <p className="reviews" id ={restaurant.name} style={{display:"none"}}>{restaurant.review}</p>
                      </div>
                  )
                  })}
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
                <Markers data={restaurantList}/>
                <MapHelper loc={loc}/>
              </MapContainer>
          </div>
      </div>

      <Link to="/homepage" className="BackLink">Back</Link>
    
  </div>
    
);
}

export default Favorites