import React from "react";
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
// import {faker} from '@faker-js/faker'
// import {connect} from 'react-redux'

const dominiqueAnsel = {
    name: "Dominique Ansel Bakery",
    notes: "Best cronuts. Cronut King.",
    position: [40.725185,-74.002998]
}
const omakaseByKorami = {
    name: "Omakase by Korami",
    notes: "Best omakase place ever. 18 pieces for $85. Amazing mackeral and specials.",
    position: [40.764519328998226, -73.9892952998557]
}
const abikoCurry = {
    name: "Abiko Curry",
    notes: "Thick curry, but also can adjust spicy levels.",
    position: [40.747526510073996, -73.98622681699115]
}
const lists = [dominiqueAnsel, omakaseByKorami, abikoCurry]


function Favorites(props) {

  return (
    <div className="favorites-page">
      <h1 id="favorites-header">Favorites</h1>
        <div className="favorites">
            <div className="restaurants">
                <h1>Lists of restaurants</h1>
                <ul>
                    {lists.map((place) => {
                    return (
                        <p key={place.name}>{place.name}</p>
                    )
                    })}
                </ul>
                <button id="add-places" type="button">Add Places</button>
            </div>
        
            <div id="map">
                <MapContainer center={[40.730610, -73.935242]} zoom={10} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {lists.map((place) => {
                    return (
                        <Marker key={place.name} position={place.position}>
                            <Popup>{place.name}</Popup>
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

// const mapState = state => {
//     return {
//       places: lists
//     }
//   }
  
// export default connect (mapState)(App)

