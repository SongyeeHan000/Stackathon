import React, {useEffect, useState} from "react"
import { setDoc, doc} from "firebase/firestore"
import history from "../history"
import { MapContainer, TileLayer, Popup, Marker, useMap, useLeaflet} from 'react-leaflet';
import db from '../firebase'
import { users } from "../fakeData";

// import "leaflet/dist/leaflet.css";
// import "leaflet-geosearch/dist/geosearch.css";
// import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";




// function LeafletgeoSearch() {
//   const map = useMap();
//   useEffect(() => {
//     const provider = new OpenStreetMapProvider();

//     const searchControl = new GeoSearchControl({
//       provider
//     });

//     map.addControl(searchControl);

//     return () => map.removeControl(searchControl);
//   }, []);

//   return null;
// }

export default function AddRestaurant() {
    let [name, setName] = useState('')
    let [x, setX] = useState('')
    let [y, setY] = useState('')
    let [review, setReview] = useState('')

  function createId(str) {
    const splitStr = str.split(" ").join("")
    return splitStr.replace(splitStr[0], splitStr[0].toLowerCase())
  }

  const handleSubmit = async(e) => {
    try{

      e.preventDefault()
      const docRef = await setDoc(doc(db, "restaurants", createId(name)), {
        name,
        x,
        y
      });
      history.push('/favorites')
      
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }

  return (
    <div id="add-restaurant-page">
        <div className="add-restaurant">
        <h1>Add Restaurant</h1>
        <div>
          <form id="add-form">
            <label htmlFor="name">Restaurant Name:</label>
            <input name="name" value={name} onChange={event => setName(event.target.value)} />
            <br></br>
            <label htmlFor="x">X-coordinate:</label>
            <input name="x" value={x} onChange={event => setX(event.target.value)} />
            <br></br>
            <label htmlFor="y">Y-coordinate:</label>
            <input name="y" value={y} onChange={event => setY(event.target.value)}/>
            <br></br>
            <label htmlFor="review">Review:</label>
            <input name="review" value={review} onChange={event => setReview(event.target.value)}/>
            <div className="below-item">
              <button className="add-product" type="submit" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </form>
          <div id="map" className="child">
                <MapContainer center={[40.735308, -73.994594]} zoom={12} scrollWheelZoom={false}>
                  <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                     {/* <LeafletgeoSearch /> */}
                </MapContainer>
          </div>
        </div>
       
      </div>
    </div>
  )
}

